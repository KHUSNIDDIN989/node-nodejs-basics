import fs from 'fs';
import { resolve } from 'path';

const rename = async () => {
	const prevName = resolve('src', 'fs', 'files', 'wrongFilename.txt');
	const newName = resolve('src', 'fs', 'files', 'properFilename.md');

	const errorHandler = flag => {
		return err => {
			if (flag) {
				if (err) throw new Error('FS operation failed');
			} else {
				if (!err) throw new Error('FS operation failed');
			}
		};
	};

	fs.access(prevName, errorHandler(true));
	fs.access(newName, errorHandler(false));
	fs.rename(prevName, newName, errorHandler(true));
};

await rename();
