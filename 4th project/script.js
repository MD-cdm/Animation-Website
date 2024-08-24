gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger: {
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end: "top -150%",
    scrub:2,
    pin:true
    }
    })


    gsap.to("#page1 h1",{
        transform:"translateX(-150%)",
        scrollTrigger: {
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end: "top -150%",
        scrub:2,
        pin:true
        }
        })
        gsap.to("#page3 h1",{
            transform:"translateX(-150%)",
            scrollTrigger: {
            trigger:"#page3",
            scroller:"body",
            markers:true,
            start:"top 0%",
            end: "top -150%",
            scrub:2,
            pin:true
            }
            })
        
    