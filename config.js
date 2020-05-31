const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'onZ8nSNdRSStNG__m83rEQ',
		APISecret : 'RlZVkFr1EklSEzmVpI8024GNSAFXY4C1ZxRv'
	},
	production:{	
		APIKey : 'onZ8nSNdRSStNG__m83rEQ',
		APISecret : 'RlZVkFr1EklSEzmVpI8024GNSAFXY4C1ZxRv'
	}
};

module.exports = config[env]
