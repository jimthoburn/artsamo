
/*
<style>
  .error .message,
  .loading .message {
    display: block !important;
  }
  .error .message {
    color: red;
  }
</style>

<h1>Events for the City of Santa Monica in Palisades Park</h1>
<p role="status" class="message" style="display: none;"></p>
<ol id="event-list"></ol>
*/

let template = `
  <li>
    <details>
      <summary>
        <div class="summary">
          <h2><abbr aria-label="{{ weekday }}">{{ weekdayAbbreviation }}</abbr><br /><abbr aria-label="{{ month }}">{{ monthAbbreviation }}</abbr> {{ day }}</h2>
          <p>{{ title }}</p>
          <p>{{ time }}</p>
          <p>{{ location }}</p>
        </div>
        <div class="mask-behind-details"></div>
      </summary>
      <div class="details">
        <h3>{{ title }}</h3>
        <h4>{{ weekday }}, {{ month }} {{ day }}, {{ year }}</h4>
        <p>{{ time }}</p>
        <p>{{ description }}</p>

        <dl>
          <dt>Location</dt>
          <dd>{{ location }}</dd>
          <dd>{{ address }}</dd>
          <dt>Categories</dt>
          <dd>{{ categories }}</dd>
          <dt>Ages</dt>
          <dd>{{ ages }}</dd>
          <dt>Contact<dt>
          <dd>Santa Monica Cultural Affairs</dd>
          <dd><a href="mailto:culture@smgov.net">culture@smgov.net</a></dd>
          <dd>310-458-8350</dd>
        </dl>

        <p class="action"><a href="{{ url }}">Event details on {{ url_domain }}</a></p>
      </div>
    </details>
  </li>
`;

(function() {

  // Example requests for the City of Santa Monica events API

  // Everything
  // https://data.smgov.net/resource/tu9m-76aw.json

  // Only locations and calendars
  // https://data.smgov.net/resource/tu9m-76aw.json?$select=calendar,location&$order=calendar,location&$group=calendar,location

  // showLoadingMessage()

  fetch('https://data.smgov.net/resource/tu9m-76aw.json?contact_email=culture@smgov.net')
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {

      fetch('https://data.smgov.net/resource/tu9m-76aw.json?contact_email=naomi.okuyama@smgov.net')
        .then(function(response) {
          return response.json()
        })
        .then(function(myJson2) {
          addItems(myJson.concat(myJson2))
          // hideLoadingMessage()
        })
        .catch(function(error) {
          console.error(error)
          // showErrorMessage()
        })

      // hideLoadingMessage()
    })
    .catch(function(error) {
      console.error(error)
      // showErrorMessage()
    })

  function addItems(data) {
    let list     = document.getElementById('event-list')
    // let template = document.getElementById('event-template')
    if (data && list && template) {
      data.sort(function(a, b) {
        let aDate = new Date(a.start_date)
        let bDate = new Date(b.start_date)
        // a is less than b by some ordering criterion
        if (aDate < bDate) {
          return -1;
        }
        // a is greater than b by the ordering criterion
        if (aDate > bDate) {
          return 1;
        }
        // a must be equal to b
        return 0;
      })
      for (let index = 0; index < data.length; index++) {
        createItem(data[index], list, template)
      }
    }
  }

  function paddedZeros(number) {
    return (number < 10) ? `0${number}` : number
  }

  // KUDOS: https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
  function getFormattedTime(date) {
    let hours   = date.getHours()
    let minutes = date.getMinutes()
    let ampm    = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = (hours == 0) ? 12 : hours; // the hour '0' should be '12'
    return `${hours}:${paddedZeros(minutes)} ${ampm}`
  }

  function createItem(itemData, list, template) {

    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let startDate = new Date(`${itemData.start_date}-07:00`)
    let endDate   = new Date(`${itemData.end_date}-07:00`)

    let startTime = getFormattedTime(startDate)
    let endTime   = getFormattedTime(endDate)

    let weekday     = daysOfTheWeek[startDate.getDay()]
    let month       = monthNames[startDate.getMonth()]

    let weekdayAbbreviation = weekday.substring(0, 3)
    let monthAbbreviation   = month.substring(0, 3)

    let year        = startDate.getFullYear();
    let day         = startDate.getDate();
    let title       = itemData.title
    let time        = (startDate.getHours() == 0) ? `All day` : (endTime) ? `${startTime} to ${endTime}` : startTime
    let location    = itemData.location
    let address     = itemData.address_address
    // let city        = itemData.address_city
    // let state       = itemData.address_state
    // let zip         = itemData.address_zip
    let description = itemData.description
    let categories  = itemData.event_types
    let ages        = itemData.age_groups
    let url         = itemData.signup_url
    let url_domain  = url.split("/")[2]

    let html = template
      .replace(/\{\{ weekday \}\}/g,     weekday)
      .replace(/\{\{ month \}\}/g,       month)
      .replace(/\{\{ year \}\}/g,        year)
      .replace(/\{\{ weekdayAbbreviation \}\}/g, weekdayAbbreviation)
      .replace(/\{\{ monthAbbreviation \}\}/g,   monthAbbreviation)
      .replace(/\{\{ day \}\}/g,         day)
      .replace(/\{\{ time \}\}/g,        time)
      .replace(/\{\{ title \}\}/g,       title)
      .replace(/\{\{ description \}\}/g, description)
      .replace(/\{\{ location \}\}/g,    location)
      .replace(/\{\{ address \}\}/g,    address)
      .replace(/\{\{ categories \}\}/g,  categories)
      .replace(/\{\{ ages \}\}/g,        ages)
      .replace(/\{\{ url \}\}/g,         url)
      .replace(/\{\{ url_domain \}\}/g,  url_domain)
    list.insertAdjacentHTML('beforeend', html)
  }
  function showLoadingMessage() {
    document.body.classList.add('loading');
    document.querySelector('.message').textContent = 'Loading data…'
  }
  function showErrorMessage() {
    document.body.classList.add('error');
    document.querySelector('.message').textContent = 'An error occurred while loading the data.'
  }
  function hideLoadingMessage() {
    document.body.classList.remove('loading');
    document.querySelector('.message').textContent = 'The data has finished loading.'
  }
})();

