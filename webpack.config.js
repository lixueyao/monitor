var path = require('path')

module.exports = {
	devtool: 'eval-source-map', //文件压缩后，可通过配置这个可以找到报错的位置
	// bundle入口
	entry: {
		index:'./public/src/js/index.js'
	}, // 在index 檔案後的 .js 副檔名是可選的
	// bundle输出
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '[name].js'  // 入口那不变，这里如果写成[name].js，最后输出的文件为main.js
	},
	node: {
		fs: 'empty',
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
        ]
    }
}
