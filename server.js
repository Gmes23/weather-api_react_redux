const express =  require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(_dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resove(_dirname, 'index.html'))
});

app.listen(port);
console.log("server started");