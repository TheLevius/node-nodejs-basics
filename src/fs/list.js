import {
	readdir
} from 'fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const list = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const src = getPath('/', 'files');

	try {
		const files = await readdir(src);
		console.log(files);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}

};

await list();