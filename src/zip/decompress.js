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

const decompress = async () => {
	const pipe = promisify(pipeline);

	const source = createReadStream('./files/archive.gz');
	const gunzip = createGunzip();
	const destination = createWriteStream('./files/fileToCompress.txt');

	await pipe(source, gunzip, destination)
};

await decompress();