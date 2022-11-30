import {
	readdir
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const list = async () => {

	const listPath = './files';

	try {

		if (!existsSync(listPath)) {
			throw new Error('FS operation failed');
		}

		const files = await readdir(listPath);
		files.forEach((file) => console.log(file))

	} catch (err) {

		console.error(err);

	}
};

await list();