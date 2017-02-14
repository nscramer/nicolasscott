// Values can be retrieved from storage using Storage.getItem()



function setProgressBarWidth () {
  var currentProgress = localStorage.getItem('lessonProgress');
  
  if(currentProgress == "s0") {
    document.querySelector('.progressBarProgress').style.width = "0%";
  } else if (currentProgress == "s1") {
    document.querySelector('.progressBarProgress').style.width = "16.666666666%";
  } else if (currentProgress == "s2") {
    document.querySelector('.progressBarProgress').style.width = "33.333333333%";
  } else if (currentProgress == "s3") {
    document.querySelector('.progressBarProgress').style.width = "50%";
  } else if (currentProgress == "s4") {
    document.querySelector('.progressBarProgress').style.width = "66.666666666%";
  } else if (currentProgress == "s5") {
    document.querySelector('.progressBarProgress').style.width = "83.333333333%";
  } else if (currentProgress == "s6") {
    document.querySelector('.progressBarProgress').style.width = "100%";
  } else {
    document.querySelector('.progressBarProgress').style.width = "0%";
  }
}

window.onload = setProgressBarWidth;
