import {
	readdir
} from 'fs/promises';

const list = async () => {

	const src = './files';

	try {
		const files = await readdir(src);
		console.log(files);
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}

};

await list();