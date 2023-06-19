import fs from 'fs';
import { resolve } from 'path';

const create = async () => {
	const path = resolve('src', 'fs', 'files', 'fresh.txt');
	const content = 'I am fresh and young';

	fs.readFile(path, err => {
		if (err) {
			fs.writeFile(path, content, err => {
				if (err) console.log(err);
			});
		} else {
			throw new Error('FS operation failed');
		}
	});
};

await create();
