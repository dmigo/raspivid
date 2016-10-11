'use strict'
const omx = require('omxcontrol')
const app = require('express')()

const videoDirectory = `/home/pi/Downloads/`
const play = (video, timeout) =>{
	console.log(`start video ${video}`)
	omx.start(`${videoDirectory + video}`)
	setTimeout(()=>{
		omx.quit()
		console.log(`close video ${video}`)
		}, timeout)
}

app.get('/dog',  (req, res) => {
  play(`dog.mp4`, 2000)
  res.status(200).send('OK')
});

app.listen(3000, () => {
  console.log('Raspivid is listening on port 3000!');
})