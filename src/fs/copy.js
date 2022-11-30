import * as url from 'url';
import {
	cp
} from 'node:fs/promises';
import {
	existsSync
} from 'node:fs';
import {
	stat
} from 'fs/promises';

const copy = async () => {

	const srcUrl = url.fileURLToPath(new URL('./files',
		import.meta.url))
	const distUrl = url.fileURLToPath(new URL('./files_copy',
		import.meta.url))

	try {
		const st = await stat(srcUrl)

		if (!existsSync(srcUrl) || existsSync(distUrl)) {
			throw new Error('FS operation failed');
		}

		await cp(srcUrl, distUrl, {
			recursive: true
		})

	} catch (err) {

		console.error(err)

	}

};

copy();