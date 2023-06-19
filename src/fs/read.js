import fs from 'fs';
import { resolve } from 'path';

const read = async () => {
	const path = resolve('src', 'fs', 'files', 'fileToRead.txt');
	fs.readFile(path, (err, data) => {
		if (err) throw new Error('FS operation failed');
		console.log(data.toString());
	});
};

await read();
