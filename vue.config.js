const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				// Adjust the port if your Node.js server runs on a different port
				changeOrigin: true,
				pathRewrite: { '^/api': '' },
			},
		},
	},
})
