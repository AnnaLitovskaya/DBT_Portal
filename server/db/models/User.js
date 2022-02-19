/* eslint no-param-reassign: 'off' */
/* eslint no-console: 'off' */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { DataTypes } = require('sequelize');
const { db } = require('../index');

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(['Therapist', 'Client', 'Admin']),
    defaultValue: 'Client',
    allowNull: false,
  },
});

User.addHook('beforeCreate', async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

User.byToken = async (token) => {
  try {
    const { userId } = await jwt.verify(token, process.env.JWT);
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (user) return user;
    return 'JsonWebTokenError';
  } catch (ex) {
    console.log(ex.name);
    return ex.name;
  }
};

User.authenticate = async ({ email, password }) => {
  if (!email) return 'email required';
  if (!password) return 'password required';

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) return 'email not found';
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ userId: user.id }, process.env.JWT);
  }
  return 'invalid password';
};

module.exports = User;
