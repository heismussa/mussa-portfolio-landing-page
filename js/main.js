



// ================================
// REGISTER GSAP
// ================================


gsap.registerPlugin(ScrollTrigger);






// ================================
// LENIS SMOOTH SCROLL
// ================================


const lenis = new Lenis({

    duration:1.2,

    smoothWheel:true,

});



function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}


requestAnimationFrame(raf);





// Connect Lenis with GSAP


lenis.on(
    "scroll",
    ScrollTrigger.update
);



gsap.ticker.add(
    (time)=>{

        lenis.raf(time * 1000);

    }
);



gsap.ticker.lagSmoothing(0);









// ================================
// HERO ANIMATION
// ================================



const heroTimeline = gsap.timeline();



heroTimeline.from(

".hero-tag",

{

    y:40,

    opacity:0,

    duration:.8,

    ease:"power3.out"

}


);



heroTimeline.from(

".hero h1",

{

    y:80,

    opacity:0,

    duration:1,

    ease:"power4.out"

},

"-=.4"


);



heroTimeline.from(

".hero p",

{

    y:40,

    opacity:0,

    duration:.8

},

"-=.6"


);



heroTimeline.from(

".hero-buttons",

{

    y:30,

    opacity:0,

    duration:.7

},

"-=.5"


);



heroTimeline.from(

".hero-image",

{

    scale:.8,

    opacity:0,

    duration:1.2,

    ease:"power3.out"

},

"-=1"


);









// ================================
// SCROLL REVEAL ANIMATION
// ================================



gsap.utils.toArray(".reveal")
.forEach(element=>{


    gsap.from(

        element,

        {

            scrollTrigger:{

                trigger:element,

                start:"top 85%",


            },


            y:70,

            opacity:0,

            duration:1,

            ease:"power3.out"


        }

    );


});









// ================================
// PROJECT CARD ANIMATION
// ================================



gsap.utils.toArray(".project-card")
.forEach((card,index)=>{


    gsap.from(

        card,

        {


            scrollTrigger:{

                trigger:".projects-grid",

                start:"top 80%"

            },


            y:80,

            opacity:0,

            delay:index*.15,

            duration:1,


            ease:"power4.out"


        }


    );


});









// ================================
// SKILL FLOATING EFFECT
// ================================


gsap.utils.toArray(".floating-skill")
.forEach((skill,index)=>{


    gsap.to(

        skill,

        {

            y:-30,

            duration:2.5 + index*.3,

            repeat:-1,

            yoyo:true,

            ease:"sine.inOut",

        }


    );



});









// ================================
// PARALLAX HERO IMAGE
// ================================



gsap.to(

".hero-image",

{


    y:-80,


    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        scrub:true

    }


}

);









// ================================
// NAVBAR EFFECT
// ================================



const navbar =
document.querySelector(".navbar");



window.addEventListener(
"scroll",

()=>{


if(window.scrollY > 80){


    navbar.style.background =
    "rgba(5,5,5,.85)";


}

else{


    navbar.style.background =
    "rgba(5,5,5,.45)";


}



}

);









// ================================
// MAGNETIC BUTTON EFFECT
// ================================


const buttons =
document.querySelectorAll(
".primary-btn, .nav-btn"
);



buttons.forEach(button=>{


button.addEventListener(
"mousemove",

(e)=>{


const rect =
button.getBoundingClientRect();


const x =
e.clientX - rect.left - rect.width/2;


const y =
e.clientY - rect.top - rect.height/2;



gsap.to(

button,

{

x:x*.15,

y:y*.15,

duration:.3,

ease:"power2.out"

}

);



}

);





button.addEventListener(
"mouseleave",

()=>{


gsap.to(

button,

{

x:0,

y:0,

duration:.5,

ease:"elastic.out(1,.3)"

}

);


}

);



});









// ================================
// CURSOR GLOW EFFECT
// ================================



const cursorGlow =
document.createElement("div");



cursorGlow.className =
"cursor-glow";



document.body.appendChild(cursorGlow);



document.addEventListener(

"mousemove",

(e)=>{


gsap.to(

cursorGlow,

{

x:e.clientX,

y:e.clientY,

duration:.5,

ease:"power3"

}

);



}


);