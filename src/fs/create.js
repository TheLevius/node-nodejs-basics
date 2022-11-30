import {
	writeFile
} from 'node:fs/promises';
import {
	existsSync
} from 'node:fs';

const create = async () => {

	const dirPath = './files/';

	const filePathName = dirPath + 'fresh.txt'

	try {

		if (existsSync(filePathName)) {
			throw new Error('FS operation failed');
		}

		await writeFile(filePathName, 'I am fresh and young');

	} catch (err) {

		console.error(err);

	}
};

await create();