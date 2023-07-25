var tl=gsap.timeline()

tl.from("#nav h1,  #nav h3, #nav i, #nav h4, #nav button",{
    delay:0.5,
    y:-30,
    stagger:0.1,
    opacity:0
})
.from("#center #saas",{
    opacity:0,
    y:40,
    duration:0.6,
     scale:1.2,
})
.from("#center>h1",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.6
})
.from("#center>p",{
    opacity:0,
    y:20,
    duration:0.3
})
.from("#page1>img",{
    scale:0.7,
    opacity:0,
    duration:0.8
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        //markers:true,
        start:"top 80%",
        //scrub:3
    }
})
tl2.from("#page2 h1",{
    y:30,
    opacity:0,
})
tl2.from("#page2 p",{
    y:30,
    opacity:0,
})
gsap.from(".elem",{
    opacity:0,
    y:100,
    delay:.5,
    // scale:0.9,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        //scrub:3
    }
})


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        //markers:true,
        start:"top 80%"
    }
})
tl3.from("#page3 h1",{
    y:30,
    opacity:0
})
.from("#page3 p",{
    y:30,
    opacity:0
})
.from("#page3 #progre-bar",{
    y:30,
    opacity:0
})
.from("#page3 #line, #page3 #line2, #page3 #line3, #page3 #line4",{
    x:-30,
    delay:.1,
    duration:1,
    opacity:0
}) 



var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 80%"
    }
})
.from("#page4 h1,#page4 .sqr-div",{
    y:40,
    opacity:0,
    delay:.2
    // scale:.5
})

var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        //markers:true,
        start:"top 80%"
    }
})
.from("#page5 h1,#page5 p,#page5 .elem2",{
    y:40,
    opacity:0,
    delay:.2
    // scale:.5
})

var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:"#page6 ",
        scroller:"body",
        //markers:true,
        start:"top 80%",
        //scrub:2
    }
})
.from("#page6",{
    y:40,
    opacity:0,
    delay:.8,
    duration:.5,
    // scale:.5
})


var main = document.querySelector("#main")
  var cursor=document.querySelector("#cursor")
var h1=document.querySelector("#center>h1")

  main.addEventListener("mousemove",function(dets){
    cursor.style.left = `${dets.x}px`
    cursor.style.top = `${dets.y}px`
  })
   
  h1.addEventListener("mouseenter",()=>{
    cursor.style.scale=2.5
    
  })

  h1.addEventListener("mouseleave",()=>{
    cursor.style.scale=1
  })