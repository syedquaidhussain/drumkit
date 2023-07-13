
// document.querySelector("button").addEventListener("click",handle);
// function handle()
// {
//     alert("hello i got clicked ");


// }

// document.querySelector("button").addEventListener("click",function()
// {   

   for(var i=0; i<document.querySelectorAll(".drum").length ;i++)
   {

 

    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
    //  var audio=new Audio(" ./sounds/tom-1.mp3");
    //  audio.play();
    var aman=this.innerHTML;

     makesound(aman);
     buttonAnimation(aman);
    
    });
    
   }


   document.addEventListener("keydown",function(event)
   {
     makesound(event.key);
     buttonAnimation(event.key);
   });


   function makesound(key)

   {

    if(key=='w')
    {
        var crash=new Audio(" ./sounds/crash.mp3");
        crash.play();
    }

     if(key== 'a')
    {
        var kick=new Audio(" ./sounds/kick-bass.mp3");
        kick.play();
    }
     
      if(key== 's')
    {
        var snare =new Audio(" ./sounds/snare.mp3");
        snare.play();
    }
    
    
    if(key== 'd')
    {
        var tom1=new Audio(" ./sounds/tom-1.mp3");
        tom1.play();
    }

     if(key== 'j')
    {
        var tom2=new Audio(" ./sounds/tom-2.mp3");
        tom2.play()
    }

     if(key== 'k')
    {
        var tom3=new Audio(" ./sounds/tom-3.mp3");
        tom3.play();
    }
    if(key=='l')
    {
        var tom4=new Audio(" ./sounds/tom-4.mp3");
        tom4.play();
    }

    }  
        
   
    function buttonAnimation(currkey)
    {
        var  currbuttton=document.querySelector( '.'+currkey);
        currbuttton.classList.add("pressed");


        setTimeout(function()
        {
            currbuttton.classList.remove("pressed");
        },100)
    }
   






