/// <reference types="../jquery/@types/jquery" />

$(".openNav").click(function(){
     $("#left-side").animate({ width:'250px'},50)
    $("#content").animate({marginLeft :'250px'},50)
 })
 
 $(".close-btn").click(function(){
     $("#left-side").animate({ width:'0px'},50)
    $("#content").animate({marginLeft :'0px'},50)
 })
 
 
 

 $('.item h3').on('click', function(e){
     $('.item div').slideUp(1000)
$(e.target).next().slideDown(1000)
})


window.onload = function() {
   
     countDownToTime("10 october 2021 9:56:00");
   }
 
   function countDownToTime(countTo) {
   
         let futureDate = new Date(countTo);
     futureDate = (futureDate.getTime()/1000);
 
     let now = new Date();
     now = (now.getTime()/1000);
 
     timeDifference = (futureDate- now);
         
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
 
 
     $(".days").html(`${days} D`);
     $(".hours").html(`${hours} h`);
     $(".minutes").html(`${ mins } m`);
     $('.seconds').html(`${ secs} s`)
 
   
     setInterval(function() {  countDownToTime(countTo); }, 1000);
   }