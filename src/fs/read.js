import * as url from 'url'
import {
	readFile
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const read = async () => {

	const fileUrl = url.fileURLToPath(new URL('./files/fileToRead.txt',
		import.meta.url))

	try {

		if (!existsSync(fileUrl)) {
			throw new Error('FS operation failed');
		}

		const data = await readFile(fileUrl, {
			encoding: 'utf8'
		});
		console.log(data)

	} catch (err) {

		console.error(err);

	}
};

await read();