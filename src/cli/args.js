const parseArgs = () => {
	const args = process.argv.slice(2)
	const newArgs = []
	for (let i = 0; i < args.length; i += 2) {

		newArgs.push(`${args[i]} is ${args[i+1]}`)

	}
	console.log(newArgs.join(', '))
};

parseArgs();
