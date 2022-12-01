import {
	existsSync
} from 'fs';
import {
	rename as mv,
} from 'fs/promises';

const rename = async () => {

	const oldPath = './files/wrongFilename.txt';
	const newPath = './files/properFilename.md';

	if (existsSync(newPath)) {
		throw new Error('FS operation failed')
	}

	try {
		await mv(oldPath, newPath)
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err)
	}
};

await rename();