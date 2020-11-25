module.exports = {
	presets: ['@babel/preset-env'],
	env: {
		test: {
			// Reduce unit test boot time
			presets: [
				['@babel/preset-env', {
					targets: {
						node: 'current'
					}
				}]
			]
		}
	}
};
