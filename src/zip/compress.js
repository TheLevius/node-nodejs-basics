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

const compress = async () => {
	const pipe = promisify(pipeline);

	const source = createReadStream('./files/fileToCompress.txt');
	const gzip = createGzip();
	const destination = createWriteStream('./files/archive.gz');

	await pipe(
		source,
		gzip,
		destination
	)
};

await compress();