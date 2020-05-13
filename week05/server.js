// 用来启动一个模拟服务器
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req);
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
});

server.listen(7070);