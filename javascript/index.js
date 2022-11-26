function updateTime() {
  //Oslo
  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");

    let osloTime = moment().tz("Europe/Oslo");

    osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
  }

  //Buenos Aires
  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
    let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");

    let buenosAiresTime = moment().tz("America/Buenos_Aires");

    buenosAiresDateElement.innerHTML = moment().format("MMMM Do YYYY");
    buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )}<small> ${cityTime.format("A")}</small></div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
