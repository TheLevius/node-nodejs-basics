import {
	readFile
} from 'fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const read = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const filePath = getPath('fileToRead.txt', 'files');

	try {
		const data = await readFile(filePath, {
			encoding: 'utf8'
		});
		console.log(data);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}
};

await read();