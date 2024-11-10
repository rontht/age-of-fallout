let song;
let isSongStarted = false;  
let songDuration = 0;  

function playMusic(){
    if (!isSongStarted) {
        song.setVolume(0.2);
        songDuration = song.duration();
        song.loop();
        isSongStarted = true;
    } else if(song.currentTime() >= songDuration){
        song.stop(); 
        isSongStarted = false;
    }
}