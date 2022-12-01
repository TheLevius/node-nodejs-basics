import {
	writeFile
} from 'node:fs/promises';

const create = async () => {

	const dirPath = './files/';
	const filePathName = dirPath + 'fresh.txt';
	const content = 'I am fresh and young';

	try {
		await writeFile(filePathName, content, {
			flag: 'wx'
		});
	} catch (err) {
		if (err.code === 'EEXIST') {
			throw new Error('FS operation failed')
		}
		console.error(err);
	}
};

await create();