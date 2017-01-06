'use strict'
const omx = require('omxcontrol')
const app = require('express')()
const exec = require('child_process').exec

const videoDirectory = `/home/pi/Downloads/`
const player = `mplayer`
const play = (video, timeout) =>{
	console.log(`start video ${video}`)
	exec(`${player} ${videoDirectory}${video}`)
}

app.get('/dog',  (req, res) => {
  play(`dog.mp4`, 2000)
  res.status(200).send('OK')
});

app.listen(3000, () => {
  console.log('Raspivid is listening on port 3000!');
})