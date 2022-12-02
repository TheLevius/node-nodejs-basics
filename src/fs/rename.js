import {
	existsSync
} from 'fs';
import {
	rename as mv,
} from 'fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const rename = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const oldPath = getPath('wrongFilename.txt', 'files');
	const newPath = getPath('properFilename.md', 'files');

	if (existsSync(newPath)) {
		throw new Error('FS operation failed')
	}

	try {
		await mv(oldPath, newPath)
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err)
	}
};

await rename();