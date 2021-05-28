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
var saveBtnEl = $(".saveBtn");

currentDate = setInterval(function(){
  $("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss, dddd"));
}, 1000);

$("tr").on("click", ".saveBtn", function(){

});