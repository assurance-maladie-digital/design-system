const middleware = {}

middleware['homeRedirect'] = require('../src/middleware/homeRedirect.ts')
middleware['homeRedirect'] = middleware['homeRedirect'].default || middleware['homeRedirect']

export default middleware
