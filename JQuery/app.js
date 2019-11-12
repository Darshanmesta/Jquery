$(document).ready(function(){
  $(".fadeOut").on("click",function(){

$(".box1").fadeOut(3000,function(){
  $(".fadeOut").text("Faded away")
})

$(".fadeIn").on("click",function(){
  $(".box1").fadeIn(3000,function(){
    $(".fadeIn").text("Faded In")
  })
})

$(".fadeToggle").on("click",function(){
  $(".box1").fadeToggle(3000,function(){
    $(".fadeToggle").text("Toggled")
  })
})


$(".slideUp").on("click",function(){
  $(".box2").slideUp(2000,function(){
    $(".slideUp").text("Slided Up")
  })
})

$(".slideDown").on("click",function(){
  $(".box2").slideDown(2000,function(){
    $(".slideDown").text("Slided Down")
  })
})

$(".slideToggle").on("click",function(){
  $(".box2").slideToggle(2000,function(){
    $(".slideToggle").text("Toggle")
  })
})

$(".stop").on("click",function(){
  $(".box2").stop()
})


$(".moveLeft").on("click",function(){
  $(".box3").animate({
    left:'300',
    height:'200px',
    width:'200px',
    opacity:'0.5'

  })
})


$(".moveRight").on("click",function(){
  $(".box3").animate({
    left:'0',
    height:'2%',
    width:'5%',
    opacity:'1'
  })
})

$(".moveToggle").on("click",function(){
  $(".box3").animate({
    left:'300'
  })

  $(".box3").animate({
    top:'300'
  })

  $(".box3").animate({
   left:'0',

  })

  $(".box3").animate({
   top:'0',

  })


})









  })


})
