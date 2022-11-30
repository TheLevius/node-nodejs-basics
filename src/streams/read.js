import {
	createReadStream
} from 'node:fs'

const read = async () => {
	const readStream = createReadStream('./files/fileToRead.txt');
	readStream.on('data', (chunk) => {
		const data = chunk.toString()
		process.stdout.write(data)
	})

};

await read();