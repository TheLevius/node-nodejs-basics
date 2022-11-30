import * as url from 'url'
import {
	rename as rm
} from 'fs/promises';
import {
	existsSync
} from 'node:fs';

const rename = async () => {
	const oldName = url.fileURLToPath(new URL('./files/wrongFilename.txt',
		import.meta.url))
	const newName = url.fileURLToPath(new URL('./files/properFilename.md',
		import.meta.url))
	try {
		if (!existsSync(oldName) || existsSync(newName)) {
			throw new Error('FS operation failed');
		}
		await rm(oldName, newName)
	} catch (err) {
		console.error(err)
	}
};

await rename();