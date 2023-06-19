import fs from 'fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const calculateHash = async () => {
	const filePath = resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

	fs.readFile(filePath, (err, data) => {
		if (err) throw new Error(err);
		console.log(createHash('sha256').update(data.toString()).digest('hex'));
	});
};

await calculateHash();
