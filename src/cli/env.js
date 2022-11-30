const parseEnv = () => {
	for (const key of Object.keys(process.env)) {
		if (key.includes('RSS_', 0)) {
			console.log(`${key}=${process.env[key]}`)
		}
	}
};

parseEnv();