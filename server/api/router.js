const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/portal', require('./portal'));
router.use('/message', require('./message'));

module.exports = router;
