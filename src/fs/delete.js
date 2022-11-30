import * as url from 'url'
import {
	unlink
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const remove = async () => {
	const fileToRemove = url.fileURLToPath(new URL('./files/fileToRemove.txt',
		import.meta.url))
	try {
		if (!existsSync(fileToRemove)) {
			throw new Error('FS operation failed');
		}
		await unlink(fileToRemove)

	} catch (err) {
		console.error(err)
	}
};

await remove();