const requestListener = function (req, res) {
    if (req.url === '/api/service2') {
        res.writeHead(200);
        res.write('Hello from second node server');
    } else {
        res.writeHead(404);
    }
    res.end()
}

module.exports = {
    requestListener
}

