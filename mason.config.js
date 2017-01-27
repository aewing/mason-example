module.exports = (Mason) => {
	if(Mason.compareVersion('0.1.1') !== -1) {
		Mason.registerCommand('test', (input, conf, Mason, resolve, reject) => {
			console.info('Test!');
			resolve();
		});
	} else {
		console.info('Mason version does not support inline runners.');
	}

	return {
		plugins: ['mason.plugin.scaffold'],
		scaffold: {
			templates: {
				'class': './templates/class.js'
			}
		}
	};
};