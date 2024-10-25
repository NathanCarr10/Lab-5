//including express extension
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

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
    const name = "Nathan";
    const lname = "Carr";
    res.send(`Hello ${name, lname}`);
})

//creating an api movies to show movie data when going to localhost:3000/movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies:movies });
});

//creating an index.html and sending from server when going to url localhost:3000/index
app.get('/index', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

//GET is used to request data from a specified resource.
//using get method so server gets firstname and last name from index.html and 
//displays back under /name
app.get('/name', (req, res)=>{
    res.send('Hello '+ req.query.firstname + " " +req.query.lastname);
})

//POST is used to send data to a server to create/update a resource
//User enters FirstName + LastName to update server 
//Data is parsed, very secure way of sending, sending data as part of body of html request
app.post('/name', (req, res)=>{
    res.send('Hello '+ req.body.firstname + " " +req.body.lastname)
})

//listen to port:3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
