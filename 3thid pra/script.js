


gsap.from ("#page1 #box",{
   scale:0,
   delay:1,
   duration:2,
   rotate:360,
})





 gsap.from ("#page2 #box",{
    scale:0,

    duration:2,
    rotate:720,
 // scrollTrigger:"#page2 #box " aupar aupar hai ye ....
  scrollTrigger:{
    trigger: "#page2 #box ",
    scroller:"body",
    markers:true,
    start:"top 60%", 
    end:"top 30%",
    scrub:2,//smooth ho jata hai.
    pin:true,
  }                          
 })









 gsap.from ("#page3 #box",{
    scale:0,

    duration:2,
    rotate:360,
 // scrollTrigger:"#page2 #box " aupar aupar hai ye ....
  scrollTrigger:{
    trigger: "#page3 #box ",
    scroller:"body",
    markers:true,
    start:"top 60%"
  }                          
 })











      // hlo gulam 
// gsap.from ("#page2 h1",{
//    opacity:0,
//    duration:2,
//    x:500,
//    scrollTrigger:{
//       trigger:"#page2 h1",
//       scroller:"body",
//       markers:true,
//       start:"top 50%",
//    }
   
  
// })
// gsap.from ("#page2 h2",{
//    opacity:0,
//    duration:2,
//    x:-500,
//    scrollTrigger:{
//       trigger:"#page2 h2",
//       scroller:"body",
//       markers:true,
//       start:"top 50%",
//    }
   
  
// })