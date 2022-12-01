import {
	Worker
} from 'node:worker_threads';
import {
	cpus
} from 'node:os';

const performCalculations = async () => {
	const cores = cpus();
	let num = 10;

	const workers = cores.map(() => {
		return new Promise((res, rej) => {
			const worker = new Worker('./worker', {
				workerData: num++
			})
			worker.on('message', (msg) => res(msg))
			worker.on('error', (msg) => rej(msg))
		})
	})

	const calcResults = await Promise.allSettled(workers)

	const parsedResults = calcResults.map(({
		status,
		value
	}) => status === 'fulfilled' ? {
		status: 'resolved',
		data: value.fbNum
	} : {
		status: 'error',
		data: null
	})
	console.log(parsedResults)
};

await performCalculations();