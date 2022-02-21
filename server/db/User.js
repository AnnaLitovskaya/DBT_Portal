/* eslint no-param-reassign: 'off' */
/* eslint no-console: 'off' */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { DataTypes } = require('sequelize');
const db = require('./index');

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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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

// Gets user from token
User.byToken = async (token) => {
  try {
    const { userId } = await jwt.verify(token, process.env.JWT);
    let user = await User.findOne({
      where: {
        id: userId,
      },
    });
    user = user.dataValues;
    if (user) return user;
    return 'JsonWebTokenError';
  } catch (ex) {
    console.log(ex.name);
    return ex.name;
  }
};

// Returns token on login
User.authenticate = async ({ email, password }) => {
  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) return 'email not found';
  user = user.dataValues;
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ userId: user.id }, process.env.JWT);
  }
  return 'invalid password';
};

module.exports = User;
