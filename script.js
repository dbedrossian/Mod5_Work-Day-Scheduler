// Date at the top
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// WHEN I click into a timeblock, I can enter an event
// WHEN I click the save button for that timeblock, the text for that event is saved in local storage
// WHEN I refresh the page, the saved events persist


var currentTime = dayjs().hour();

function timeColor(){
  var element9 = document.getElementById("hour-9");
  if (currentTime < 9) {
  element9.classList.add("future")
  } else if (currentTime === 9) {
    element9.classList.add("present")
  } else {
    element9.classList.add("past")
  }
  var element10 = document.getElementById("hour-10");
  if (currentTime < 10) {
  element10.classList.add("future")
  } else if (currentTime === 10) {
    element10.classList.add("present")
  } else {
    element10.classList.add("past")
  }
  var element11 = document.getElementById("hour-11");
  if (currentTime < 11) {
  element11.classList.add("future")
  } else if (currentTime === 11) {
    element11.classList.add("present")
  } else {
    element11.classList.add("past")
  }
  var element12 = document.getElementById("hour-12");
  if (currentTime < 12) {
  element12.classList.add("future")
  } else if (currentTime === 12) {
    element12.classList.add("present")
  } else {
    element12.classList.add("past")
  } 
  var element13 = document.getElementById("hour-1");
  if (currentTime < 13) {
  element13.classList.add("future")
  } else if (currentTime === 13) {
    element13.classList.add("present")
  } else {
    element13.classList.add("past")
  }
  var element14 = document.getElementById("hour-2");
  if (currentTime < 14) {
  element14.classList.add("future")
  } else if (currentTime === 14) {
    element14.classList.add("present")
  } else {
    element14.classList.add("past")
  } var element15 = document.getElementById("hour-3");
  if (currentTime < 15) {
  element15.classList.add("future")
  } else if (currentTime === 15) {
    element15.classList.add("present")
  } else {
    element15.classList.add("past")
  }
  var element16 = document.getElementById("hour-4");
  if (currentTime < 16) {
  element16.classList.add("future")
  } else if (currentTime === 16) {
    element16.classList.add("present")
  } else {
    element16.classList.add("past")
  }
  var element17 = document.getElementById("hour-5");
  if (currentTime < 17) {
  element17.classList.add("future")
  } else if (currentTime === 17) {
    element17.classList.add("present")
  } else {
    element17.classList.add("past")
  }

}
timeColor()


// var save9 = document.getElementById("hour-9").getElementsByTagName('button');

// save9.addEventListener("click", function(event) {
//   event.preventDefault();
// console.log("click");

//   var email = document.getElementById("hour-9").getElementsByTagName('textarea');

//     localStorage.setItem("email", email);
//     renderLastRegistered();
//   }
// );

$('#hour-9').find('button').on('click', function(){
  var text = $('#hour-9').find('textarea').val();
  localStorage.setItem("text", text);
})

function renderLastText() {
  var lastText = localStorage.getItem("text");
  $('#hour-9').find('textarea').text(lastText);

}

function init() {
  renderLastText();
}
init();