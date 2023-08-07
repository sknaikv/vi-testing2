

function loco() {


    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}

// loco();





//topview

const topview = document.querySelector(".topview");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topview.classList.add("active");
    } else {
        topview.classList.remove("active");
    }
})























function herotext() {
    var tl = gsap.timeline();

    tl.from(".hero-text", {
        x: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

}

function heroimg() {
    var tl = gsap.timeline();

    tl.from(".hero-img", {
        y: '-15',
        opacity: 0,
        duration: 1.5,
        stagger: .1,
        ease: Expo.easeInOut
    })

}

function nav() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        z: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

}

function loader() {
    var tl = gsap.timeline();

    tl.from("#loader-container", {
        z: '-15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

}





nav();
herotext();
heroimg();


setTimeout(() => {

}, 1500);


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');


    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll',revealclient);

function revealclient() {
    var revealclient = document.querySelectorAll('.reveal-client');
    for (var i = 0; i < revealclient.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = revealclient[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            revealclient[i].classList.add('active');
        } else {
            revealclient[i].classList.remove('active');
        }
    }

}








const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-links');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll('.nav-links').forEach(n =>{
    n.addEventListener('click',()=>{
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    })
})

