

//       // box animation**//

// gsap.to ("#box1",{
//       x:1000, // titna dur jayega.
//       duration:1, //kitna der me jayega.
//       delay:1, // kitna deri karke jayega.
//       rotate:360, //360 degree ghumta huwa jayega.
//       backgroundColor: "blue", // box ka color change ho jayega.
//       borderRadius:"50%", // box gool ho jayega.
//       scale:0.5, // bada gola rotate hote  hote chota ho jayega.
//       //repeat:3, // initial se 3 baar restart hoga.
//       repeat:-1, // initial se infinite baar restart hoga.
//       yoyo:true, // initial se final tak aur final se initial taak.repeat hoga
      
// })

// gsap.to ("#box2",{
//     x:1100,
//     duration:5,
//     delay:4,
//     rotate:90,
//     backgroundColor: "purple",
// })
// gsap.to ("#box3",{
//     x:900, 
//     duration:6,
//     delay:1,
//     rotate:360,
//     backgroundColor: "green",
//     scale:0.5
// })


//           //** */ word animationn**//

// gsap.from("h1",{
//     opacity:0,
//     duration:5,
//     y:30,
//     delay:1,
//     stagger:1 // same jayse tag ko ek ek karke chalata hai.
// })        











gsap.to ("#box1",{
    x:1100,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"10%",
 
})

gsap.to ("#box2",{
    x:1100,
    duration:1.5,
    delay:2.5,
    rotate:360,
    borderRadius:"20%",
    backgroundColor: "purple",
})
gsap.to ("#box3",{
    x:1100,
    scale:0.5, 
    duration:1.5,
    delay:4,
    borderRadius:"50%",
    backgroundColor: "green",
    scale:0.5
})


 var tl = gsap.timeline()
 tl.to("#box1",{
    x:1100,
    rotate:360,
    duration:1.5,
    delay:1,
   
 })
 tl.to("#box2",{
    x:1100,
    duration:1.5,
    delay:1, 
 })
 tl.to("#box3",{
    x:1100,
    duration:1.5,
    delay:1, 
 })