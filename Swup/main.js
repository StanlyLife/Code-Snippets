const swup = new Swup();
const tlOne = new TimelineLite({ paused: true });

swup.on("animationInDone", function () {
  console.log("animation done");
  let art = document.querySelectorAll(".article");
  animateArticles(art[0], art[1], art[2]);
});

swup.on("pageLoaded", function () {
  console.log("loaded");
  let art = document.querySelectorAll(".article");
  animateArticles(art[0], art[1], art[2]);
});

swup.on("clickLink", function () {
  tlOne.reversed() ? tlOne.play() : tlOne.reverse();
});

function animateArticles(a, b, c) {
  //   var tlTwo = new TimelineLite({ paused: true });

  tlOne
    .to(a, 0.5, {
      //animation
      opacity: 1,
    })
    .to(
      b,
      0.5,
      {
        //animation
        opacity: 1,
      },
      "-=.5"
    )
    .fromTo(
      c,
      0.5,
      {
        //from
        opacity: 0,
        y: -1000,
      },
      {
        //to
        opacity: 1,
        y: 0,
        onComplete: function () {
          console.log("done");
        },
      },
      "-=.5"
    );

  tlOne.play();
}
