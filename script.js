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

// var elem1 = document.querySelector("#elem1")
// var more = document.querySelector("#more")

// elem1.addEventListener("mouseenter",function(){
//     console.log("Entered");
//     more.style.opacity = 0.8
// })
// elem1.addEventListener("mouseleave",function(){
//     console.log("Left");
//     more.style.opacity = 0

// })


var element = document.querySelectorAll('.element')

element.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to("#more",{
            opacity:1,
            transform: `translate(-50%,-50%) scale(1)`

        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to("#more",{
            opacity:0,
            transform:` translate(-50%,-50%) scale(0)`


        })
    })
    
})


var page2Elements = document.querySelector(".page2-elements")

var rect = page2Elements.getBoundingClientRect()

var elemX = rect.x
var elemY = rect.y


page2Elements.addEventListener("mousemove",function(dets){
    gsap.to("#more",{
        x:dets.x-elemX,
        y:dets.y-elemY
    })

    // console.log(dets.y);
})


