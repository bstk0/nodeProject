const http = require('http');

const servidor = http.createServer(function (req, resp){

    let html = '';    
    if (req.url == '/') {
        html = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
    `;
    } else if (req.url == '/livros') {
        html = `
        <html>
            <head>
                <meta charset="utf-8"></meta>
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>
    `;
    }

    // outros else ifs ...

    resp.end(html);    
});

servidor.listen(3000);




