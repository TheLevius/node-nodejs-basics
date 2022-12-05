import {
	spawn
} from 'node:child_process';
import {
	defineAbsPath
} from '../utils/define_abs_path.js';

const spawnChildProcess = async (args = []) => {

	const getPath = defineAbsPath(
		import.meta.url);

	const processPath = getPath('script.js', 'files');

	const childProcess = spawn('node', [processPath, ...args]);

	process.stdin.on('data', (msg) => {
		childProcess.stdin.write(msg);
	});

	childProcess.stdout.on('data', (data) => {
		console.log(data.toString());
	});

};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */ );
