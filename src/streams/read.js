import fs from 'fs';
import { resolve } from 'path';
const read = async () => {
	const filePath = resolve('src', 'streams', 'files', 'fileToRead.txt');

	const stream = fs.createReadStream(filePath);
	stream.on('error', error => console.log(error));
	stream.on('data', chunk => process.stdout.write(chunk));
};

await read();
