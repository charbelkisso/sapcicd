// require express and create app
const app = require('express')();

// configure port
const port = process.env.PORT || 3000;

// default route
app.get('/', (req, res) => res.send('testing SAP CICD service'))


// start the server
app.listen(port, console.log(`application is listening on port ${port}`));