let fs = require('fs');
let http = require('http');
var url = require('url');
let path = require('path');


let typeMap = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.txt': 'text/plain',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg'
};


http.createServer(function(req, res) {
  // parse url
  var request = url.parse(req.url, true);
  var action = request.pathname;
  // disallow non get requests
  if (req.method !== 'GET') {
    res.writeHead(405, {'Content-Type': 'text/plain' });
    res.end('405 Method Not Allowed');
    return;
  }
  // routes
  if (action === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Hello World \n');
    return;
  }
  // static (note not safe, use a module for anything serious)
  var filePath = path.join(__dirname, action).split('%20').join(' ');
  fs.exists(filePath, function (exists) {
    if (!exists) {
       // 404 missing files
       res.writeHead(404, {'Content-Type': 'text/plain' });
       res.end('404 Not Found');
       return;
    }
    // set the content type
    var ext = path.extname(action);
    var contentType = typeMap[ext];
    res.writeHead(200, {'Content-Type': contentType });
    // stream the file
    // fs.createReadStream(filePath, 'utf-8').pipe(res);
    var img = fs.readFileSync(filePath);
    res.end(img, 'binary');
  });
}).listen(7777, '127.0.0.1');
