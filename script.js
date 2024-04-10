gsap.from("#page1 img",{
    width:'28%',
    top:"86%",
    duration:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -70%",
        scrub:2,
        pin:true
    }
})