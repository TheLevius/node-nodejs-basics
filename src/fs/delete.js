import {
	rm
} from 'fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const remove = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const fileToRemove = getPath('fileToRemove.txt', 'files');

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