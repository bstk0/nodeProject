module.exports = (app) => {
    app.get('/',function (req, resp) {
        resp.send(`
            <html>
            <head>
                <meta charset="utf-8"></meta>
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
        `
        );
    });
    
    app.get('/livros',function (req, resp) {
        resp.send(`
            <html>
            <head>
                <meta charset="utf-8"></meta>
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
            </html>
        `
        );
    });
    
};

