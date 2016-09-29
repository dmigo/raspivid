'use strict'
const omx = require('omxcontrol')

console.log('start')
omx.start('/home/pi/Downloads/dog.mp4')
console.log('hi there!')
setTimeout(()=>{
	omx.quit()
	console.log('close')	
	}, 2000)
