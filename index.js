class AddFileWebpackPlugin {
	constructor(options) {
		this.options = options;
	}

	apply(compiler) {
		const { paths } = this.options;
		compiler.hooks.compilation.tap('AddFileWebpackPlugin', (compilation) => {
			compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap('AddFileWebpackPlugin', (htmlPluginData) => {
				for (var i = paths.length - 1; i >= 0; i--) {
					if(paths[i].type === 'js') {
						htmlPluginData.assets.js.unshift(paths[i].url);
					} else if(paths[i].type === 'css') {
						htmlPluginData.assets.js.unshift(paths[i].url);
					}
				}
			})
		})
	}
}

module.exports = AddFileWebpackPlugin;
