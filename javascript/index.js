function updateTime() {
  //Oslo
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");

  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");

  //Buenos Aires
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");

  let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosAiresDateElement.innerHTML = moment().format("MMMM Do YYYY");
  buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
