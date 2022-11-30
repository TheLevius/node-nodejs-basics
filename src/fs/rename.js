import {
	rename as mv
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const rename = async () => {

	const oldPathName = './files/wrongFilename.txt';
	const newPathName = './files/properFilename.md';

	try {
		if (!existsSync(oldPathName) || existsSync(newPathName)) {
			throw new Error('FS operation failed');
		}
		await mv(oldPathName, newPathName)
	} catch (err) {
		console.error(err)
	}
};

await rename();