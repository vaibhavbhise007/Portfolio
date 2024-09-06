var typed = new Typed(".mtext", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});
    



ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});