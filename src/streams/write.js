import fs from 'fs';
import { resolve } from 'path';
const write = async () => {
	const filePath = resolve('src', 'streams', 'files', 'fileToWrite.txt');

	const stream = fs.createWriteStream(filePath);
	process.stdin.on('data', chunk => {
		stream.write(chunk);
	});
};

await write();
