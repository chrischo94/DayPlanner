var workTime = [
  {time: "time-9", work: ""},
  {time: "time-10", work:""},
  {time: "time-11", work:""},
  {time: "time-12", work:""},
  {time: "time-13", work:""},
  {time: "time-14", work:""},
  {time: "time-15", work:""},
  {time: "time-16", work:""},
  {time: "time-17", work:""},
];

var timeSet = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var timeSet2 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeSet3 = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

var textInputValue;
var currentDate, currentTime;

currentDate = setInterval(function(){
  $("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss, dddd"));
}, 1000);


$("tr").on("click", ".content", function(){
  var input  = $("<input class='p-content' type='text' style='width: 100%;'>")
  $(this).children().replaceWith(input);
  input.trigger("focus")
});
$("tr").on("blur", ".input", function(){
  textInputValue = $(this).val();
  var blank = $("<p class='p-content'>");
  $(this).replaceWith(blank);
});

$("tr").on("click", ".saveBtn", function(){
  var 
});

function findArray (time) {
  if (workTime === null || workTime === undefined){
    return;
  } else {
    for (var i=0; i < workTime.length; i++)
      if (workTime[i]["time"] === time) {
        workTime[i]["work"] =  textInputValue; 
      }
  }
}