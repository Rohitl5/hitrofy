console.log("welcome to hitrofy");
console.log("umeed h gana pasand aayega ");

// initialize the variables 
let songIndex =0;
let audioElement =new Audio('songs/song_7.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let songItems= Array.from(document.getElementsByClassName ('songitem'));
let songItemPlay= document.getElementById('songItemPlay');

let songs=[
    { songName: "Dheera Dheera" , filePath: "songs/song_1.mp3" ,    coverPath:"covers/song_kgf1.png" },
    { songName: "janani" ,       filePath: "songs/song_2.mp3" ,     coverPath:"covers/song_kgf1.png" },
    { songName: "Etthara Jenda" , filePath: "songs/song_3.mp3" , coverPath:"covers/song_kgf1.png" },
    { songName: "Komma Uyyala" , filePath: "songs/song_4.mp3" , coverPath:"covers/song_kgf1.png" },
    { songName: "namo namo" ,    filePath: "songs/song_5.mp3" , coverPath:"covers/song_kgf1.png" },
    { songName: "jodha akbar" , filePath: "songs/song_6.mp3" , coverPath:"covers/song_kgf1.png" },
    { songName: "behti hawa" ,  filePath: "songs/song_7.mp3" , coverPath:"covers/song_kgf1.png" }
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML= songs[i].songName;
    
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
     
        document.getElementById('masterPlay').src=('pause2.0.png');
        document.getElementById('gifi').style.opacity=1;
        document.getElementById('beatgif').style.opacity=1;
    }
    else{
        audioElement.pause();
        document.getElementById('masterPlay').src=('play3.png');
        document.getElementById('gifi').style.opacity=0;
        document.getElementById('beatgif').style.opacity=0;
    }
})

// listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
 
})

myProgressBar.addEventListener('change',()=>{

        audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

//const makeAllPlays= ()=>{
  //  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    //    element.classList.remove('alpha');


    //})
//}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

element.addEventListener('click',(e)=>{
   // makeAllPlays();
    index=parseInt(e.target.id);
  
    //e.target.classList.add('alpha');
    audioElement.src='songs/song_'+index+'.mp3';
    //audioElement.currentTime=0;
    audioElement.play();

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
     
        document.getElementById('masterPlay').src=('pause2.0.png');
        document.getElementById('gifi').style.opacity=1;
        document.getElementById('beatgif').style.opacity=1;
    }
    else{
        audioElement.pause();
        document.getElementById('masterPlay').src=('play3.png');
        document.getElementById('gifi').style.opacity=0;
        document.getElementById('beatgif').style.opacity=0;
    }
   let teach=parseInt(index)-1;
   document.getElementById('namaiva').innerHTML=songs[teach].songName;
  


 
})


})