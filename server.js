//including express extension
const express = require('express');
const app = express();
const port = 3000;

//adding error-handling middleware to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Displaying Welcome message to be called from server via get method
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

//listen to port:3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
