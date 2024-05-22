import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    console.log(req.url);
    // console.log(`Request for ${req.url}`);
    if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlFile);
    } 
    
    else if (req.url?.endsWith('.js')) {
        const jsFile = fs.readFileSync(`./public${req.url}`, 'utf-8');
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(jsFile);
    } else if (req.url?.endsWith('.css')) {
        const cssFile = fs.readFileSync(`./public${req.url}`, 'utf-8');
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(cssFile);
    // } else {
    //     // Si la ruta no es reconocida, enviar un 404
    //     throw new Error('File not found');
    }
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});
