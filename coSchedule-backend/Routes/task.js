const express = require('express');
const { getalltask, createtask } = require('../handlers/task');


const postRoutes = express.Router()

postRoutes.get('/gettask',getalltask);
postRoutes.post('/createtask',createtask);


module.exports = {postRoutes}