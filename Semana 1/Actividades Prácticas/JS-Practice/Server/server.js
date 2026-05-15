const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end('Hello world in server.')
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});