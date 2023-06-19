import path from "path";
import { release, version } from "os";
import http from "http";
import { createRequire } from "node:module";

const __filename = import.meta.url;
const __dirname = path.parse(__filename).dir;

const __require = createRequire(__filename);
const createServerHttp = http.createServer;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = __require("./files/a.json");
} else {
  unknownObject = __require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
