var openLetter = gsap.timeline({ paused: true });

openLetter
  .to(".opened-envelope", {
    duration: 1,
    ease: "back",
    rotateX: 180,
    transformOrigin: "top",
    zIndex: 0
  })
  .set(".opened-envelope", { cssRule: { marginTop: "-10px" } })
  .to(".letter", {
    duration: 1,
    ease: "back",
    translateY: -200
  })
  .set(".letter", { zIndex: 99 })
  .to(".letter", {
    duration: 0.7,
    ease: "back",
    translateY: 0,
    scale: 1.7
  });

$(".envelope-wrapper").click(() => {
  $.post("getmsg.php", function(data){                                          
    $('#letterTxt').html(data);
  });
  event.stopPropagation();
  openLetter.play();
  
});



$(".close-icon").click(() => {
  event.stopPropagation();
  openLetter.reverse();
  
});

