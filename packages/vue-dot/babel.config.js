const plugins = [];
if (process.env.NODE_ENV === 'test') {
  plugins.push([
    'babel-plugin-istanbul', {
      extension: ['.ts','.js', '.vue']
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
