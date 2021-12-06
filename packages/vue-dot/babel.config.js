const presets = [];

// For dev environment
if(!process.env.LIB_MODE){
	presets.push('@vue/cli-plugin-babel/preset');
}

module.exports = {
	presets
};