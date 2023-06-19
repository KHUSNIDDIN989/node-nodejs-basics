import fs from 'fs';
import { resolve } from 'path';

const list = async () => {
	const path = resolve('src', 'fs', 'files');
	fs.readdir(path, (err, data) => {
		if (err) throw new Error('FS operation failed');
		data.forEach(item => console.log(item));
	});
};

await list();
