let index = 0;
carousel();

function carousel() {
    let i;
    // takes the class slideiamge and adds and change image at regular interval
    let x = document.querySelectorAll('.slideImages');    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;

    if (index > x.length) {
        index = 1
    }
    x[index - 1].style.display = "block";
    setTimeout(carousel, 3000)

}