const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get('/home', (req, res) => {
    res.end('Welcome to the home page!');
}); 

app.post('/submit', (req, res) => {
    res.end('Form submitted!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});x