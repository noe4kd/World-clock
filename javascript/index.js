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

  //Qatar
  let qatarElement = document.querySelector("#qatar");
  if (qatarElement) {
    let qatarDateElement = qatarElement.querySelector(".date");
    let qatarTimeElement = qatarElement.querySelector(".time");

    let qatarTime = moment().tz("Asia/Qatar");

    qatarDateElement.innerHTML = moment().format("MMMM Do YYYY");
    qatarTimeElement.innerHTML = qatarTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
      </div><a href="/">🧭⏪</a>`;
}
function updateCurrent() {
  let currentTimeElement = document.querySelector("#current-time");
  let currentTimeZone = moment.tz.quess();
  let currentTime = moment()
    .tz(currentTimeZone)
    .format("H:mm:ss [<small>]a[</small>]");

  currentTimeElement.innerHTML = currentTime;

  //with this under it works, but when i add the TZ it stops working
  //currentTimeElement = document.querySelector("#current-time");
  //currentTimeElement.innerHTML = moment().format("H:mm:ss [<small>]a[</small>]");

  currentDateElement = document.querySelector("#current-date");
  currentDateElement.innerHTML = moment().format("D MMM YY");
}

updateCurrent();
updateTime();
setInterval(updateCurrent, 1000);
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
