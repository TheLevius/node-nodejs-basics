import {
	cp
} from 'node:fs/promises';

const copy = async () => {

	const src = './files';
	const dest = './files_copy';

	try {
		await cp(src, dest, {
			recursive: true,
			errorOnExist: true,
			force: false
		});
	} catch (err) {
		if (err.code === 'ERR_FS_CP_EEXIST') {
			throw new Error('FS operation failed');
		}
		console.error(err);
	}

};

copy();