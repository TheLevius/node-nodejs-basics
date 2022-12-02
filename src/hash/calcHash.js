import {
	createHash
} from 'node:crypto'
import {
	readFile
} from 'node:fs/promises';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const calculateHash = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const filename = getPath('fileToCalculateHashFor.txt', 'files');

	const data = await readFile(filename, {
		encoding: 'utf8'
	});
	const hashSum = createHash('sha256');
	hashSum.update(data);
	const hex = hashSum.digest('hex');

	console.log(hex);

};

await calculateHash();
