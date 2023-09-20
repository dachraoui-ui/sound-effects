const sounds = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];
sounds.forEach((sound)=>{
   const btn = document.createElement("button");//for each sound(audio) we create an btn element
   btn.classList.add("btn");//we add a class for each btn we have been created
   btn.innerText = sound;//add the text
   btn.addEventListener("click",()=>{
      stopsongs();//we call the function stopsongs() to stop the audio when we click on another btn
      document.getElementById(sound).play();//when we click on the btn we play the audio
   }) 
   document.getElementById('buttons').
   appendChild(btn);//we add the btn to the div with id buttons
})
function stopsongs(){
   sounds.forEach((sound)=>{
      const song = document.getElementById(sound);
      song.pause();//we pause the audio
      song.currentTime = 0;//we set the current time to 0
})};