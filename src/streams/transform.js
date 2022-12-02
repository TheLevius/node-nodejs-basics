import {
	pipeline,
	Transform
} from 'node:stream';

const transform = async () => {

	const reverser = new Transform({
		transform(chunk, enc, cb) {
			const chunkStringified = chunk.toString().trim();
			const reversedData = chunkStringified.split('').reverse().join('');
			cb(null, reversedData + '\n')
		}
	});

	pipeline(
		process.stdin,
		reverser,
		process.stdout,
		(err) => {
			console.error(`Error: ${err}`);
		}
	);
};

await transform();