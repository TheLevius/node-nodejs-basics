const parseEnv = () => {
	const result = Object.entries(process.env)
		.reduce((acc, [key, value]) => {
			if (key.includes('RSS_', 0)) {
				acc.push(`${key}=${value}`);
			}
			return acc;
		}, [])
		.join('; ');

	console.log(result);
};

parseEnv();
