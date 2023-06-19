import fs from 'fs';
import { resolve } from 'path';
import zlib from 'zlib';

const decompress = async () => {
	const soursePath = resolve('src', 'zip', 'files', 'fileToCompress.txt');
	const destPath = resolve('src', 'zip', 'files', 'archive.gz');

	fs.writeFile(soursePath, '', err => {
		if (err) console.log(err);
	});

	fs.createReadStream(destPath)
		.pipe(zlib.createUnzip())
		.pipe(fs.createWriteStream(soursePath))
		.on('finish', () =>
			fs.unlink(destPath, err => {
				if (err) console.log(err);
			})
		);
};

await decompress();
