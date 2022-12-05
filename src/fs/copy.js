import {
	cp
} from 'node:fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const copy = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const src = getPath('/', 'files');
	const dest = getPath('/', 'files_copy');

	try {
		await cp(src, dest, {
			recursive: true,
			errorOnExist: true,
			force: false
		});
	} catch (err) {
		if (err.code === 'ERR_FS_CP_EEXIST') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}

};

await copy();
