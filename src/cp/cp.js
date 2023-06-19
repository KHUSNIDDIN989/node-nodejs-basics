import { fork } from 'child_process';
import { resolve } from 'path';

const spawnChildProcess = async args => {
	const child = fork(resolve('src', 'cp', 'files', 'script.js'), args);
	child.on('exit', code => {
		process.stdout.write(`Closed with code ${code}`);
	});
};

spawnChildProcess(['someArgument1', 'someArgument2']);
