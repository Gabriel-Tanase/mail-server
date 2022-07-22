const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.get('/', (req, res) => {
    res.status(200)
    res.send({
        success: true,
        message: 'This is a simple GET on ROOT API'
    })
})

module.exports = app;