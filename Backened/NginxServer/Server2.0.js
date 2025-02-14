const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3005; 


function getExtension(filePath) {
    return path.extname(filePath).toLowerCase(); 
}


let cache = {}

let requestFile = "" ;


const supportedTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".cpp": "text/cpp",
    ".png": "text/png",
    ".py": "text/py",
};

const server = http.createServer((req, res) => {
    const filePath = req.url === "/" ? "./index.html" : `.${req.url}`;
    requestFile = filePath ;
    console.log(`Requested filePath: ${filePath}`);

    const extName = getExtension(filePath);
    const contentType = supportedTypes[extName] || "application/octet-stream"; // Default MIME type

    // Check if the file exists before reading it
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // If file doesn't exist, serve `sorry.html`
            fs.readFile("./sorry.html", (error, fileContent) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end("<h1>500 Internal Server Error</h1>");
                } else {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(fileContent, "utf-8");
                }
            });
        } else {
            // If file exists, read and serve it
            fs.readFile(filePath, (error, fileContent) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end("<h1>500 Internal Server Error</h1>");
                } else {
                    res.writeHead(200, { "Content-Type": contentType });
                    res.end(fileContent, "utf-8");
                }
            });
        }
    });
});


fs.watch(".", { recursive: true }, (eventType, filename) => {
    if (requestFile === `./${filename}`) {
        console.log(`File changed: ${filename}`);
        cache = {}; // Clear cache



    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
