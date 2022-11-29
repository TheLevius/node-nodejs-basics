import {
	writeFile
} from 'node:fs/promises';
import {
	existsSync
} from 'node:fs';
import * as url from 'url';

const create = async () => {

	const __dirname = url.fileURLToPath(new URL('./files/',
		import.meta.url));

	const absolutePathFilename = __dirname + 'fresh.txt'

	try {

		if (existsSync(absolutePathFilename)) {
			throw new Error('FS operation failed');
		}

		await writeFile(absolutePathFilename, 'I am fresh and young');

	} catch (err) {

		console.error(err);

	}
};

await create();