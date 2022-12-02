import {
	createReadStream,
	createWriteStream
} from 'node:fs';
import {
	createGzip
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

const compress = async () => {

	const getPath = defineAbsPath(
		import.meta.url);

	const source = createReadStream(getPath('fileToCompress.txt', 'files'));
	const gzip = createGzip();
	const destination = createWriteStream(getPath('archive.gz', 'files'));

	const pipe = promisify(pipeline);

	await pipe(
		source,
		gzip,
		destination
	);
};

await compress();