import {
	readFile
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const read = async () => {

	const filePath = './files/fileToRead.txt'

	try {

		if (!existsSync(filePath)) {
			throw new Error('FS operation failed');
		}

		const data = await readFile(filePath, {
			encoding: 'utf8'
		});
		console.log(data)

	} catch (err) {

		console.error(err);

	}
};

await read();