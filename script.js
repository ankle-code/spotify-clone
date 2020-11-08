

var audioPlayer = document.getElementById('audioPlayer');
var loaded = false;
var playerBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click',(e)=>{
   e.preventDefault();

   playerBtn.style.display = "inline";
   pauseBtn.style.display = "none"
   audioPlayer.pause(); 
   return false;
})

playBtn.addEventListener('click',(e)=>{
    e.preventDefault();
 
    pauseBtn.style.display = "inline";
    playBtn.style.display = "none"
    audioPlayer.play(); 
    return false;
 })


const playSong = (file) =>{
    
    //audioPlayer.removeChild();

    if(loaded == false){    

        audioPlayer.innerHTML = `
        <source src="`+file+`" type="audio/mp3"/>
        
        `
        loaded = true;
        audioPlayer.play();
    
        playerBtn.style.display = "none";
        pauseBtn.style.display = "inline"
    }
    else{
        audioPlayer.innerHTML = `
        <source src="`+file+`" type="audio/mp3"/>
        
        `
        loaded = false;
        audioPlayer.play();
    }



} 


document.querySelectorAll('.main-row-single').forEach(item => {
    item.addEventListener('click',event =>{
        
        var image = item.getAttribute('data-image');
        var artist = item.getAttribute('data-artist');
        var song = item.getAttribute('data-song');
        var file = item.getAttribute('data-file');
        
        let playerArtistComponent = document.getElementsByClassName('player-artist');
        playerArtistComponent[0].innerHTML = `
        <img src="`+image+`" />
        <h3>`+song+`<br><span>`+artist+`</span></h3>
        
        `
        
        playSong(file);
        
    })
    
    
})

// BAR PROGRESS ////////////

var timer;
var percent = 0;
var audio = document.getElementById("audioPlayer");
audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progress = document.getElementById("player-control-progress2");
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}