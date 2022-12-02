import {
	writeFile
} from 'node:fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';
const create = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const filename = getPath('fresh.txt', 'files');
	const content = 'I am fresh and young';

	try {
		await writeFile(filename, content, {
			flag: 'wx'
		});
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error('FS operation failed')
		}
		console.error(err);
	}
};

await create();
