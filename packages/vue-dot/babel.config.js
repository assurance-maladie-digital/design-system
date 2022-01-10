const plugins = [];
//  instrumenting cod
if(!process.env.LIB_MODE){
	plugins.push([
		'babel-plugin-istanbul', {
			extension: [
				'.ts',
				'.js',
				'.vue'
			]
		}
	]);
}
module.exports = {
	// For dev environment
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins
};