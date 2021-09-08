const express = require("express");
const server = express();

server.get('/', (request, response) => {
    return response.send('Hi!')
});

server.listen(3000, () => console.log('server running... '));