
const { exec } = require('child_process');

const http = require("http");  
const fs = require("fs"); 
const path = require("path"); 


function getExtension(filePath){
    return path.extname(filePath) ;
}


const PORT = 3007;
const server = http.createServer(

    (req, res) => {
        // __dirname is only available in common js module 
    const filePath = path.join(__dirname , req.url === "/" ? "index.html" : `${req.url}` ) ;


        console.log(filePath) ;

        const extName = getExtension(filePath);

        const mimeTypes = {
            '.html': "text/html",
            '.css': "text/css",
            '.js': "text/javascript",
            '.png': "text/png",
            '.py': "text/py",
            '.cpp': "text/cpp",
        }

        const ContentType = mimeTypes[extName] || "application/octet-stream";

        fs.access(filePath, fs.constants.F_OK, (err) => {

            if (err) {

                fs.readFile('./sorry.html', (err, fileContent) => {

                    if (err) {
                        res.writeHead(500, { "Content-Type": 'text/html' });
                        res.end("<h1> Internal Server Error : file not found </h1>");
                    } else {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(fileContent, "utf-8");
                    }

                })

            } else {

                fs.readFile(filePath, (err, fileContent) => {

                    if (err) {

                        res.writeHead(500, { "Content-Type": '.text/html' });
                        res.end("<h1> Internal Server Error : reading to the file failed <h1>");

                    } else {

                        res.writeHead(200, { "Content-Type": ContentType });
                        res.end(fileContent, 'utf-8');

                    }

                })


            }

        })








    }

);



server.listen(PORT, () => {
    console.log(`Server started or listening at port : ${PORT}`);
    const defaultURL = `http://localhost:${PORT}/index.html`;

    exec(`google-chrome "${defaultURL}"`);

    console.log(`open : ${defaultURL}`) ;

})


