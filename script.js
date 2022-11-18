$(document).ready(function () {
  
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

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
  
  
  $('#hour-9').find('button').on('click', function(){
    var text9 = $('#hour-9').find('textarea').val();
    localStorage.setItem("text-9", text9);
    }
  )
  $('#hour-10').find('button').on('click', function(){
    var text10 = $('#hour-10').find('textarea').val();
    localStorage.setItem("text-10", text10);
    }
  )
  $('#hour-11').find('button').on('click', function(){
    var text11 = $('#hour-11').find('textarea').val();
    localStorage.setItem("text-11", text11);
    }
  )
  $('#hour-12').find('button').on('click', function(){
    var text12 = $('#hour-12').find('textarea').val();
    localStorage.setItem("text-12", text12);
    }
  )
  $('#hour-1').find('button').on('click', function(){
    var text1 = $('#hour-1').find('textarea').val();
    localStorage.setItem("text-1", text1);
    }
  )
  $('#hour-2').find('button').on('click', function(){
    var text2 = $('#hour-2').find('textarea').val();
    localStorage.setItem("text-2", text2);
    }
  )
  $('#hour-3').find('button').on('click', function(){
    var text3 = $('#hour-3').find('textarea').val();
    localStorage.setItem("text-3", text3);
    }
  )
  $('#hour-4').find('button').on('click', function(){
    var text4 = $('#hour-4').find('textarea').val();
    localStorage.setItem("text-4", text4);
    }
  )
  $('#hour-5').find('button').on('click', function(){
    var text5 = $('#hour-5').find('textarea').val();
    localStorage.setItem("text-5", text5);
    }
  )
  
  
  function renderLastText() {
    var lastText9 = localStorage.getItem("text-9");
    $('#hour-9').find('textarea').text(lastText9);
  
    var lastText10 = localStorage.getItem("text-10");
    $('#hour-10').find('textarea').text(lastText10);
  
    var lastText11 = localStorage.getItem("text-11");
    $('#hour-11').find('textarea').text(lastText11);
  
    var lastText12 = localStorage.getItem("text-12");
    $('#hour-12').find('textarea').text(lastText12);
  
    var lastText1 = localStorage.getItem("text-1");
    $('#hour-1').find('textarea').text(lastText1);
  
    var lastText2 = localStorage.getItem("text-2");
    $('#hour-2').find('textarea').text(lastText2);
  
    var lastText3 = localStorage.getItem("text-3");
    $('#hour-3').find('textarea').text(lastText3);
  
    var lastText4 = localStorage.getItem("text-4");
    $('#hour-4').find('textarea').text(lastText4);
  
    var lastText5 = localStorage.getItem("text-5");
    $('#hour-5').find('textarea').text(lastText5);
  }
  
  function init() {
    renderLastText();
  }
  init();
  
});




