var workTime = [
  {time: "time-9", work: ""},
  {time: "time-10", work: ""},
  {time: "time-11", work: ""},
  {time: "time-12", work: ""},
  {time: "time-13", work: ""},
  {time: "time-14", work: ""},
  {time: "time-15", work: ""},
  {time: "time-16", work: ""},
  {time: "time-17", work: ""},
];

var timeSet = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var timeSet3 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeSet2 = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

var textInputValue;
var currentDate, currentTime, timeValueEl;

currentDate = setInterval(function(){
  $("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss, dddd"));
}, 1000);


$("tr").on("click", ".content", function(){
  var input  = $("<input class='pValue' type='text' style='width: 100%;'>")
  $(this).children().replaceWith($(input));
  input.trigger("focus")
});
$("tr").on("blur", ".input", function(){
  textInputValue = $(this).val();
  var blank = $("<p class='pValue'>");
  $(this).replaceWith(blank);
});

$("tr").on("click", ".saveBtn", function(){
  $(this).parent().parent().find("pValue").text(textInputValue)
  var timeValue = $(this)
    .parent()
    .parent()
    .children()
    .attr("class")
    .replace("hourofDay", "");
  timeValueEl = timeValue;
  findArray(timeValueEl);
  setLS();
  
});



function findArray (time, ) {
  if (workTime === null || workTime === undefined){
    return;
  } else {
    for (var i=0; i < workTime.length; i++)
      if (workTime[i]["time"] === time) {
        workTime[i]["work"] =  textInputValue; 
      }
  }
}

function setLS(){
  localStorage.setItem("workTime", JSON.stringify(workTime))
}


function getLS(){
  if (localStorage.getItem("workTime") === null || undefined) {
    return;
  } else {
    workTime = JSON.parse(localStorage.getItem("workTime"))
  }
}
function workSchedule(){
  if (workTime === null) {
    return;
  } else if (workTime === undefined){
    return;
  } else {
    for (var i=0; i<workTime.length; i++){
      var hour = workTime[i]['time'];
      var hourCheck = "." + hour;
      var work = workTime[i]["work"];
      selector = $(hourCheck).find(".pValue");
      selector.text(work)
    }
  }
}

function checkTime(){
  if (workTime===null) {
    return;
  } else if (workTime === undefined) {
    return;
  } else {
    for (var i=0; i<workTime.length; i++) {
      if (afterTime(timeSet2[i]) === true){
        selector = ".hour-" + timeSet[i];
        $(selector).css({"background-color": "grey"})
      
      } else if (afterTime(timeSet2[i])===false){
        selector = ".hour-" + timeSet[i];
        $(selector).css({"background-color": "green"})
      }
      // }else {
      //   selector = ".hour-" + timeSet[i];
      //   $(selector).css({"background-color": "red"})
      // }
    } for (var i=0; i<workTime.length; i++){
      if (currentTimeHour === timeSet3[i]) {
        selector = ".hour-"+timeSet[i];
        $(selector).css({"background-color": "yellow"});
      }
    }
  } 
}
currentTimeHour = moment().format("H");

function afterTime(time) {
  return moment().isAfter(moment(time, "hh:mm A"));
}

function withinTime(time) {
  return moment().suubtract(moment(time, "hh:mm A"));
}

getLS();
workSchedule();
checkTime();

setInterval(function () {
  checkTime();
}, 500000);
