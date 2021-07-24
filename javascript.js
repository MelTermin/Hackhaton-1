//Playlist pictures//

let pictureCanvas= document.getElementById("playlist-pictures");
console.log(pictureCanvas)

let divImage1=document.createElement("div");
let image1=document.createElement("img");
image1.src="../images/Maluma2.jpeg"

let image2=document.createElement("img");
image2.src="../images/Ed.jpeg"

divImage1.append(image1)
divImage1.append(image2)

let divImage2=document.createElement("div");

let image3=document.createElement("img");
image3.src="../images/Bueno-suerto.jpeg"

let image4=document.createElement("img");
image4.src="../images/Eliad.jpeg"

divImage1.append(image3)
divImage1.append(image4)

pictureCanvas.appendChild(divImage1)
pictureCanvas.appendChild(divImage2)


//Arrays//
let musicIcon="https://img.icons8.com/ios/50/000000/music--v2.png";
let artistName=["Eliad","Maluma","Ed Sheerean","Little Mix feat Stormzy",
"The Heavy","Pedro Capo"]
let songName=["Or","Felis los quatros","Shape of You","Power",
"What Makes a Good Man", "Buena Suerte"]
let iconDots="https://img.icons8.com/windows/32/000000/more.png"

let pictures=["./images/Eliad.jpeg", "./images/Maluma2.jpeg","./images/Ed.jpeg","./images/little-mix.jpeg",
"./images/Heavy.jpeg", "./images/Bueno-suerto.jpeg"]

let songArray=["./music/Or.mp3","./music/Felices.mp3","./music/Shape_Of_You.mp3","./music/Power.mp3","./music/Good_man.mp3","./music/Buena.mp3"]


//Playlist details//

let currentlySelected=0;
let playlistDetailDiv= document.getElementById("play-list-name-container");
console.log(playlistDetailDiv)
let mainDivDisplayer=document.getElementById("playlist-card")




for (let index = 0; index < 6; index++) {
    let col = document.createElement('div');
    col.className = "icon-row "
  
   

    let card = document.createElement('img');
    card.className="music-icon"
    card.src=musicIcon

  let musicNamesAndArtistDiv=document.createElement("div");
  musicNamesAndArtistDiv.className="playlist-detail";



let nameOfArtist=document.createElement("p")
nameOfArtist.className="side-bar-artist-name"

nameOfArtist.innerHTML=artistName[index]

let nameOfSong=document.createElement("p")
nameOfSong.className="side-song-name"
nameOfSong.innerHTML=songName[index]


let lineBreak=document.createElement("div")
lineBreak.className=("line-break")


col.appendChild(card);
  
musicNamesAndArtistDiv.append(nameOfArtist,nameOfSong)
col.appendChild(musicNamesAndArtistDiv)

 

playlistDetailDiv.append(col)
playlistDetailDiv.append(lineBreak)

//The playlist card part//
col.addEventListener("click", clickHandler)

function clickHandler (){


  //Spinner//
    let spinner = document.getElementsByClassName("lds-spinner hidden")[0]
    spinner.style.display = 'inline-block';
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 2000);

  //Main div//
  let mainCardDiv=document.createElement("div")
  mainCardDiv.className="card"
  
  //Button

  let closeButton=document.createElement("div")
  closeButton.innerHTML='<i class="far fa-window-close fa-2x"></i>'
  closeButton.className="close-btn"

  //Closing the card//
  closeButton.addEventListener("click",closeHandler);
  function closeHandler() {
   
      mainCardDiv.remove()
 
    
  }

 
//Picture
  let pictureOfSong=document.createElement("img")
  pictureOfSong.className="song-picture";
  pictureOfSong.src=pictures[index]

//Artist Name//
  let artistNameCard=document.createElement("p");
  artistNameCard.className="artist-name-tag"
  artistNameCard.innerHTML=artistName[index]

//Song Name//
 let songNameCard=document.createElement("p");
 songNameCard.className="song-name-tag";
 songNameCard.innerHTML=songName[index]


 //Volume up& down//

 let sliderContainer=document.createElement("div")
 sliderContainer.className="slide-container"

 let volumeDown=document.createElement("button");
 volumeDown.className="volume-btn"
 volumeDown.innerHTML='<i class="fas fa-volume-down fa-2x"></i>'


 let input=document.createElement("input");
 input.className="slider"
 input.type="range"
 input.min=0;
 input.max=100;
 input.value=50;

 let volumeUp=document.createElement("button");
 volumeUp.className="volume-down-btn"
 volumeUp.innerHTML='<i class="fas fa-volume-up fa-2x"></i>'

 sliderContainer.append( volumeDown, input,volumeUp)


 //Btn-divs
 let btnDiv=document.createElement("div")
 btnDiv.className="btn-divs"


//Play

let playBtn=document.createElement("button");
playBtn.className="play-btn"
playBtn.innerHTML='<i class="fas fa-play fa-2x"></i>'

//Pause
 let pauseBtn=document.createElement("button");
 pauseBtn.className="pause-btn"
 pauseBtn.innerHTML='<i class="fas fa-pause fa-2x"></i>'
  
 
 let songPlay=document.createElement("audio");
 songPlay.className="mySong"


 let srcSong=document.createElement("source")
 srcSong.src=songArray[index]
 srcSong.type="audio/mp3"
//  console.log(srcSong)


 //Event listeners for btn divs
btnDiv.addEventListener("click", playHandler);

function playHandler() {
  playBtn.onclick=function playHandler() {
  songPlay.play()
}

  pauseBtn.onclick=function playHandler() {
    songPlay.pause()
}
 

  
}


mainCardDiv.append(closeButton)
mainCardDiv.append(pictureOfSong)
mainCardDiv.append(artistNameCard)
mainCardDiv.append(songNameCard)
mainCardDiv.append(sliderContainer)
btnDiv.append(playBtn,pauseBtn)
mainCardDiv.append(btnDiv)
songPlay.append(srcSong)
mainCardDiv.append(songPlay)



mainDivDisplayer.append(mainCardDiv)
console.log(mainDivDisplayer)
 

}

}




