const parseArgs = () => {
	const args = process.argv.slice(2);
	const definedArgs = [];
	for (let i = 0; i < args.length; i += 2) {
		definedArgs.push(`${args[i].replace(/^--|^-/, '')} is ${args[i+1]}`);
	}

	console.log(definedArgs.join(', '));
};

parseArgs();
