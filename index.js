window.addEventListener("scroll", fadeIn);


function fadeIn() {

    let paragraph = document.getElementById("fade");


    if(window.pageYOffset >= 20) {
      paragraph.classList.add('fade');

    }
    else {
      paragraph.classList.remove('fade');


    }


}
