
    var song = document.getElementById("song");
    var pro = document.getElementById("prog");
    var sp = document.getElementById("me");
      
   song.onloadedmetadata = function(){
     pro.value = song.currentTime;
    pro.max = song.duration;
   }
    if(song.play){
      setInterval(()=>{
        pro.value = song.currentTime;
      },10);
    }
    function fun(){
      song.play();
      document.getElementById("me").style.display = "block";
      document.getElementById("just").style.display = "none";
    }
    function fu(){
      song.pause()
      document.getElementById("me").style.display = "none";
      document.getElementById("just").style.display = "block";
      
    }
    function ex(){
      document.getElementById("nav").style.display = "block";
      song.pause();
      pro.value = 0;
      song.currentTime = 0;
      document.getElementById("div1").style.display = "none";
      document.getElementById("sec").style.display = "block";
    }
    pro.onchange = function(){
      song.play();
      song.currentTime = pro.value;
      document.getElementById("me").style.display ="block";
      document.getElementById("just").style.display ="none";
    
    }
    {
      document.getElementById("me").style.display ="none";
    }
    var menu = document.getElementById("menu");
    function show(){
      menu.style.display = "block";
      document.getElementById("sec").style.display = "none";
    }
    function hide(){
      document.getElementById("sec").style.display = "block";
      menu.style.display = "none";
      document.getElementById("div1").style.disply = "none";
    }
    function ff(){
      document.getElementById("div1").style.display = "block";
      menu.style.display = "none";
      document.getElementById("nav").style.display = "none";
      document.getElementById("me").style.display ="none";
      document.getElementById("just").style.display ="block";
      
    }
    
