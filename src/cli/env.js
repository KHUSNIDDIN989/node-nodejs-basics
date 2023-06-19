const parseEnv = () => {
	const envObj = process.env;

	Object.keys(envObj)
		.filter(item => item.startsWith('RSS_'))
		.forEach(key => console.log(`${key}=${envObj[key]};`));
};

parseEnv();
