const musicList=[new Audio('Music/aot my war.mp3'),new Audio('Music/aot_op01.mp3'),new Audio('Music/aot_op02.mp3'),new Audio('Music/channa mereya.mp3'),new Audio('Music/raat bhar.mp3'),new Audio('Music/love you zindagi.mp3'),new Audio('Music/Ek dil Padmavat.mp3'),new Audio('Music/Teri Mitti.mp3')]
let musicIndex=0
function seekUpdate(){
musicList[musicIndex].addEventListener('timeupdate',function (){
progress=parseInt((musicList[musicIndex].currentTime/musicList[musicIndex].duration)*100)
document.getElementById("progressBar").value=progress
})
}
function listenPlayPause(){
musicList[musicIndex].addEventListener('play',()=>{
document.getElementById("play-btn").src="icons/circle-pause-solid.svg"
document.getElementById("sound-wave").style.opacity="1"
})
musicList[musicIndex].addEventListener('pause',()=>{
document.getElementById("play-btn").src="icons/circle-play-solid.svg"
document.getElementById("sound-wave").style.opacity="0"
})
}
function playMusic(index){
if(index==0){
document.getElementById("previous-btn").style.visibility="hidden"
}
else if(index==musicList.length-1){
document.getElementById("next-btn").style.visibility="hidden"
}
else{
document.getElementById("previous-btn").style.visibility="visible"
document.getElementById("next-btn").style.visibility="visible"
}
if(musicIndex!=index){
musicList[musicIndex].pause()
musicList[musicIndex].currentTime=0
}
listenPlayPause()
musicList[index].play()
musicIndex=index
document.title=`Playing: ${document.getElementById(`music${musicIndex+1}`).innerHTML} - MusicalTouch`
}
document.getElementById("music1").addEventListener('click',function (){
playMusic(0)
seekUpdate()
listenPlayPause()
})
document.getElementById("music2").addEventListener('click',function (){
playMusic(1)
seekUpdate()
listenPlayPause()
})
document.getElementById("music3").addEventListener('click',function (){
playMusic(2)
seekUpdate()
listenPlayPause()
})
document.getElementById("music4").addEventListener('click',function (){
playMusic(3)
seekUpdate()
listenPlayPause()
})
document.getElementById("music5").addEventListener('click',function (){
playMusic(4)
seekUpdate()
listenPlayPause()
})
document.getElementById("music6").addEventListener('click',function (){
playMusic(5)
seekUpdate()
listenPlayPause()
})
document.getElementById("music7").addEventListener('click',function (){
playMusic(6)
seekUpdate()
listenPlayPause()
})
document.getElementById("music8").addEventListener('click',function (){
document.getElementById("next-btn").style.visibility="hidden"
playMusic(7)
seekUpdate()
listenPlayPause()
})
document.getElementById("previous-btn").addEventListener('click',function (){
if(musicList==0&&musicList[0].paused){
musicList[0].play()
seekUpdate()
listenPlayPause()
}
if(musicIndex==0){
document.getElementById("previous-btn").style.visibility="hidden"
}
else{
musicList[musicIndex].pause()
listenPlayPause()
musicList[musicIndex].currentTime=0
musicIndex-=1
if(musicIndex==0){
document.getElementById("previous-btn").style.visibility="hidden"
}
else if(musicIndex<7){
document.getElementById("next-btn").style.visibility="visible"
}
musicList[musicIndex].play()
document.title=`Playing: ${document.getElementById(`music${musicIndex+1}`).innerHTML} - MusicalTouch`
seekUpdate()
listenPlayPause()
}
})
document.getElementById("play-btn").addEventListener('click',function (){
if(musicIndex==0&&musicList[0].paused){
musicList[0].play()
document.getElementById("previous-btn").style.visibility="hidden"
document.title=`Playing: ${document.getElementById(`music${musicIndex+1}`).innerHTML} - MusicalTouch`
seekUpdate()
listenPlayPause()
}
else if(!musicList[musicIndex].paused){
musicList[musicIndex].pause()
listenPlayPause()
}
else{
musicList[musicIndex].play()
listenPlayPause()
}
})
document.getElementById("next-btn").addEventListener('click',function (){
if(musicIndex==0&&musicList[0].paused&&musicList[0].currentTime==0){
musicList[0].play()
document.getElementById("previous-btn").style.visibility="hidden"
document.title=`Playing: ${document.getElementById("music1").innerHTML} - MusicalTouch`
seekUpdate()
listenPlayPause()
}
else if(musicIndex<7){
musicList[musicIndex].pause()
musicList[musicIndex].currentTime=0
musicIndex+=1
musicList[musicIndex].play()
document.title=`Playing: ${document.getElementById(`music${musicIndex+1}`).innerHTML} - MusicalTouch`
seekUpdate()
listenPlayPause()
}
if(musicIndex!=0){
document.getElementById("previous-btn").style.visibility="visible"
seekUpdate()
}
})
document.getElementById("progressBar").addEventListener('change',function (){
musicList[musicIndex].currentTime=document.getElementById("progressBar").value*musicList[musicIndex].duration/100
})