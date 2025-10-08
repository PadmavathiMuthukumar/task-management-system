const express = require('express');
const router = express.Router();
const Task = require('./src/db/task_module');
const User = require('./src/db/user_module');

// Basic route
router.get('/', (req, res) => {
    res.send('Task Management API is running');
});

module.exports = router;