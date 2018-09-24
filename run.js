#!/usr/bin/env node

const path = require('path')

process.argv = [
	'node',
	'statsd',
	path.join(__dirname, 'config.js')
]

require('statsd/stats.js')
