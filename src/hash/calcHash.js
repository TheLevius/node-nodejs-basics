import {
	createHash
} from 'node:crypto'
import {
	readFile
} from 'node:fs/promises';

const calculateHash = async () => {

	const data = await readFile('./files/fileToCalculateHashFor.txt', {
		encoding: 'utf8'
	});
	const hashSum = createHash('sha256');
	hashSum.update(data);
	const hex = hashSum.digest('hex');

	console.log(hex);

};

await calculateHash();