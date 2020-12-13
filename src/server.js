// MODULES
const http = require("http");
const fs   = require("fs");

var image_recue = '';

var server = http.createServer(function(req, res) {
    //res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(req.url)

    if(req.url === '/video'){
        if (req.method === 'GET') {
            res.end(image_recue)
        } else if (req.method === 'POST') {
            let data = ''
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', () => {
                image_recue = data; // 'Buy the milk'
            })
            res.end();
        }
    } else {
        fs.readFile(`./public${req.url}`, (err, data) => {
            if (err) {
                console.log("Probleme");
            } else {
                res.end(data);
            }
        });
    }


});

server.listen(3003,()=>{
    console.log('server start');
});

    /*
    const tab ={
        "/video":{
            "POST":()=>{
                const module = require('video');
                module.traitement()
            },
            "GET":()=>{

            }
        }
    };

    tab[req.url][req.method](    );
    //*/

