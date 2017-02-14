// Variable for what will be modified with local storage value
var bodyElem = document.querySelector('body');

// Variable from where the local storage value will come
var lessonProgressForm = document.getElementById('lessonProgress');

// Test whether the storage object has already been populated (i.e., the page was previously accessed)
if(!localStorage.getItem('lessonProgress')) {
  populateStorage();
} else {
  setProgress();
}


function populateStorage() {
  localStorage.setItem('lessonProgress', document.getElementById('lessonProgress').value);
  setProgress();
}

// Values can be retrieved from storage using Storage.getItem()
function setProgress() {
  var currentProgress = localStorage.getItem('lessonProgress');

  document.getElementById('lessonProgress').value = currentProgress;

  bodyElem.className = currentProgress;
}

lessonProgressForm.onchange = populateStorage;
