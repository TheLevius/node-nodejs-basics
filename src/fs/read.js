import {
	readFile
} from 'fs/promises';

const read = async () => {

	const filePath = './files/fileToRead.txt'

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