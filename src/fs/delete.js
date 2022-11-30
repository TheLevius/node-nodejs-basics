import {
	unlink
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const remove = async () => {

	const fileToRemove = './files/fileToRemove.txt';

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