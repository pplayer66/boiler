const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react', 'stage-0'],
							plugins: ['transform-runtime', 'transform-class-properties']
						}
					}
				],
				exclude: /node_modules/
			}
		]
	}
};