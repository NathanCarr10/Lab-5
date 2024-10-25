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

//modifying URL to display my first name and last name
app.get('/hello/:nathan/:carr', (req, res)=>{
    res.send("Hello "+req.params.name+" "+req.params.lname);
})

//listen to port:3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
