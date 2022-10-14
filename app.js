var today = new Date();
var day = today.getDay();
var dayList = ["sunday", "monday", "tuesday","wednesday", "thursday", "friday", "saturday"]
console.log("today is " + dayList[day]);
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
hour = (hour >= 12)? hour - 12 : hour;
var presence = (hour >= 12)? "PM" : "AM";

if(hour === 0 && presence === "PM"){
  if(minutes === 0 && seconds === 0){
    hour = 12;
  }else{
    hour = 12;
    presence = "PM";
  }
}
if(hour === 0 && presence === "AM"){
  if(minutes === 0 && seconds === 0){
    hour = 12;
  }else{
    hour = 12;
    presence = "AM";
  }
}
console.log("current time is " +hour + " :" + minutes + ":" + seconds + presence);

