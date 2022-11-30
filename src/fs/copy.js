import {
	cp
} from 'node:fs/promises';
import {
	existsSync
} from 'node:fs';

const copy = async () => {

	const srcPath = './files';
	const distPath = './files_copy';

	try {

		if (!existsSync(srcPath) || existsSync(distPath)) {
			throw new Error('FS operation failed');
		}

		await cp(srcPath, distPath, {
			recursive: true
		})

	} catch (err) {

		console.error(err)

	}

};

copy();