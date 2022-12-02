import {
	createReadStream,
	createWriteStream
} from 'node:fs';
import {
	createGunzip
} from 'node:zlib';
import {
	pipeline
} from 'node:stream';
import {
	promisify
} from 'node:util';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const decompress = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const pipe = promisify(pipeline);

	const source = createReadStream(getPath('archive.gz', 'files'));
	const gunzip = createGunzip();
	const destination = createWriteStream(getPath('fileToCompress.txt', 'files'));

	await pipe(source, gunzip, destination);
};

await decompress();