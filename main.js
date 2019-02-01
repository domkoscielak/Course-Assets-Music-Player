// Array of tracks
var tracks = document.querySelectorAll('.grid-list__item');

//definiuję audioplayer - <audio> o id="audioPlayer"
var audioPlayer = document.getElementById('audioPlayer');

//PlayPause Button
var playPauseBtn = document.getElementById('playPause');

var isPlaying = false;

// Dla kazdego elementu tablicy dodaj eventListener
tracks.forEach(function(element){

    // Dodaj event listener do danego track'u
    element.addEventListener('click',function(event){
        var trackFile = event.currentTarget.getAttribute('data-trackfile');
        var trackName = event.currentTarget.getAttribute('data-trackname');
        console.log(trackName);

        document.getElementById('showTrackName').innerText = trackName;

        audioPlayer.setAttribute('src','./audio-files/'+trackFile);
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.classList.add('control-btn--pause');
    })
})

// Dodaj Event Listener do playPauseBtn

playPauseBtn.addEventListener('click',function(){
    if(isPlaying){
        //jezeli gra, to robie pause()
        audioPlayer.pause();
        isPlaying = false;
    }else{
        //jezeli nie gra to robie play()
        audioPlayer.play();
        isPlaying = true;
    }

    playPauseBtn.classList.toggle('control-btn--pause');

})

