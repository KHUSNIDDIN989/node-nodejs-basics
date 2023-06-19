import fs from 'fs';
import { resolve } from 'path';

const copy = async () => {
	const source = resolve('src', 'fs', 'files');
	const destination = resolve('src', 'fs', 'files-copy');

	fs.access(source, err => {
		if (err) {
			throw new Error('FS operation failed');
		}
	});

	fs.access(destination, err => {
		if (err) {
			fs.cp(source, destination, { recursive: true }, err => {
				if (err) console.log(err);
			});
		} else {
			throw new Error('FS operation failed');
		}
	});
};

await copy();
