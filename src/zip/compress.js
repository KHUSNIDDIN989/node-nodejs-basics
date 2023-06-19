import fs from 'fs';
import { resolve } from 'path';
import zlib from 'zlib';

const compress = async () => {
	const soursePath = resolve('src', 'zip', 'files', 'fileToCompress.txt');
	const destPath = resolve('src', 'zip', 'files', 'archive.gz');

	fs.createReadStream(soursePath)
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream(destPath))
		.on('finish', () =>
			fs.unlink(soursePath, err => {
				if (err) console.log(err);
			})
		);
};

await compress();
