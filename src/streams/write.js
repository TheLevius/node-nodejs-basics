import {
	createWriteStream
} from 'node:fs';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const write = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const filename = getPath('fileToWrite.txt', 'files');

	const writeStream = createWriteStream(filename);
	process.stdin.on('data', (chunk) => {
		writeStream.write(chunk)
	})

};

await write();
