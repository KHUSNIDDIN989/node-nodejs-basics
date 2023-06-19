import fs from 'fs';
import { resolve } from 'path';

const remove = async () => {
	const path = resolve('src', 'fs', 'files', 'fileToRemove.txt');
    
	const callback = e => {
		if (e) throw new Error('FS operation failed');
	};
	fs.unlink(path, callback);
};

await remove();
