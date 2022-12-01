import {
	spawn
} from 'node:child_process';

const spawnChildProcess = async (args = []) => {
	const childProcess = spawn('node', ['./files/script.js', ...args]);

	process.stdin.on('data', (msg) => {
		childProcess.stdin.write(msg)
	})

	childProcess.stdout.on('data', (data) => {
		console.log(data.toString());
	})

};

spawnChildProcess();