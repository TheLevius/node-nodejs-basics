import {
	createReadStream
} from 'node:fs';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const read = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const filename = getPath('fileToRead.txt', 'files');

	const readStream = createReadStream(filename);
	readStream.on('data', (chunk) => {
		const data = chunk.toString()
		process.stdout.write(data)
	})

};

await read();
