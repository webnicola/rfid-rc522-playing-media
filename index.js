const rc522 = require("rc522");
const omx   = require('omxdirector');

console.log('Ready!!!');

rc522(function(rfidSerialNumber){
  console.log(rfidSerialNumber);
  // Find tags id
  if(rfidSerialNumber === 'f9aadf2b'){
   !omx.isPlaying() && omx.play('test.wav');
  } else if(rfidSerialNumber === '61fede2b') {
    !omx.isPlaying() && omx.play('test2.wav');
  }
});
