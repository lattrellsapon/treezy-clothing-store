// Bring in express
const express = require ('express');
const path = require('path');

// Init app as an express function
const app = express();

// Create enpoints or route handlers
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>');
// });

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Port, depending on the environment
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



