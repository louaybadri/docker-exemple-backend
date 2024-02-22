const express = require('express');
const app = express();
const port = 3000;

//enable cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello, server is working!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});