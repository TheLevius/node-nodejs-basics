import {
	rm
} from 'fs/promises';

const remove = async () => {

	const fileToRemove = './files/fileToRemove.txt';

	try {
		await rm(fileToRemove);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}
};

await remove();