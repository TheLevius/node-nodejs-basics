import * as url from 'url'
import {
	readdir
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const list = async () => {
	const listUrl = url.fileURLToPath(new URL('./files',
		import.meta.url))

	try {

		if (!existsSync(listUrl)) {
			throw new Error('FS operation failed');
		}

		const files = await readdir(listUrl);
		files.forEach((file) => console.log(file))

	} catch (err) {

		console.error(err);

	}
};

await list();