---
title: Santa Monica Cultural Affairs
---

<figure>
  <img height="300" style="opacity: 1;" />
  <img src="/assets/images/logotype/artsamo.svg" height="300" alt="ArtSaMo" />
  <figcaption></figcaption>
</figure>




<h2>Welcome to ArtSaMo</h2>

We are a community like no other. And the thread that binds the soul of our community is art. Poetry, music, painting, acting. Some of us create it. Some of us simply appreciate it. But we all need it. The soul needs art to breathe. And ArtSaMo connects the soul to art.

<p class="go-see-art">
  <a href="#events">
    <span>
      <span class="image"><img src="/uploads/go-see-art-1.jpg" height="100" alt="" /></span>
      <span class="text">Go</span>
    </span>
    <span>
      <span class="image"><img src="/uploads/go-see-art-2.jpg" height="100" alt="" /></span>
      <span class="text">See</span>
    </span>
    <span>
      <span class="image"><img src="/uploads/go-see-art-3.jpg" height="100" alt="" /></span>
      <span class="text">Art</span>
    </span>
  </a>
</p>

Events
======

<!--
Find more events in the [Santa Monica Cultural Affairs Calendar](/events/#calendar)
-->

{% include featured-events.md %}

<p class="action" markdown="1" style="margin-top: 1.5em; margin-bottom: 4.5em; max-width: none; grid-column: 1/-1; justify-self: center;">
[See more events](/events/#calendar)
</p>


Venues
======

{% include venues.md %}
    
    
Public Art
==========

<script></script>

<figure>
  <img
    src="/uploads/weather-field-tongva.jpg"
    height="300"
    alt="Weather Field No. 1 by Inigo Mañglano-Ovalle Tongva Park, 2013."
  />
  <figcaption>
    <p>
      <em>Weather Field No. 1</em> by Inigo Mañglano-Ovalle, Tongva Park, 2013.
    </p>
  </figcaption>
</figure>

<p class="action" markdown="1" style="margin-top: 1.5em; margin-bottom: 4.5em; max-width: none; grid-column: 1/-1; justify-self: center;">
[See more public art](/public-art/)
</p>



Opportunities for Artists
--------------------

### Upcoming Deadlines

1.   [Choreographer Residency](https://www.smgov.net/uploadedFiles/Portals/Culture/Public_Art_Program/2019ACBH_Choreo_Res_Call.pdf)<br />
    _March 27, 2019_
1.   [Prequalified Artist Roster](https://artist.callforentry.org/festivals_unique_info.php?ID=6001)<br />
    _March 29, 2019_

<script>

(function() {

  const images = [
    {
      title: "Public art in Santa Monica",
      url: "/assets/images/artsamo.jpg",
      caption: "<em>Cradle</em> by Ball-Nogues Studio"
    },
    {
      title: "Public art in Santa Monica",
      url: "/assets/images/go-see-art.jpg",
      caption: "<em>Wheels</em> by Anne Marie Karlsen"
    },
    {
      title: "Musicians at the COAST event",
      url: "/uploads/coast-band.jpg",
      caption: `<em>Superbroke</em> at <a href="https://www.santamonica.com/event/coast/">COAST</a> / Photo by Jason Abraham`
    },
    {
      title: "Musicians at the COAST event",
      url: "/uploads/2017_Coast_Superbroke_photoby_Jason_Abraham.jpg",
      caption: `<em>Superbroke</em> at <a href="https://www.santamonica.com/event/coast/">COAST</a> / Photo by Jason Abraham`
    },
    {
      title: "Rainbow Face at the COAST event",
      url: "/uploads/2017_Coast_RainbowFace_by_Beck+Col_photoby_Jason_Abraham (3).jpg",
      caption: `<em>Rainbow Face</em> by Beck+Col at <a href="https://www.santamonica.com/event/coast/">COAST</a> / Photo by Jason Abraham`
    },
    {
      title: "Dia De Los Muertos",
      url: "/uploads/Dia De Los Muertos-059.jpg",
      caption: `Dia De Los Muertos`
    },
    {
      title: "Dia De Los Muertos",
      url: "/uploads/Dia De Los Muertos-035.jpg",
      caption: `Dia De Los Muertos`
    },
    {
      title: "Dia De Los Muertos",
      url: "/uploads/Dia De Los Muertos-063.jpg",
      caption: `Dia De Los Muertos`
    },
    {
      title: "Dia De Los Muertos",
      url: "/uploads/Dia De Los Muertos-066.jpg",
      caption: `Dia De Los Muertos`
    }
    
    /*
    {
      title: "Las Colibrí performing at Coast",
      url: "/uploads/coast-las-colibri.jpg",
      caption: `Las Colibrí performing at <a href="https://www.santamonica.com/event/coast/">COAST</a> / Photo by Jason Abraham`
    },
    {
      title: "Musicians at the COAST event",
      url: "/uploads/Nick Mancini 4Tet at Fireside.jpg",
      caption: `Nick Mancini 4Tet at Fireside, Miles Memorial Playhouse`
    }
    */
  ]

  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#1527820
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumbers = [];

  function getUniqueRandomNumber() {
    let unique;
  
    do {
      unique = getRandomInt(0, images.length - 1);
    } while (randomNumbers.includes(unique) && randomNumbers.length < images.length);

    if (!randomNumbers.includes(unique)) {
      randomNumbers.push(unique);
    }
  
    return unique;
  }

  (function() {
    const image = images[getUniqueRandomNumber()];
  
    document.querySelector("figure img").setAttribute("src", image.url);
    document.querySelector("figure img").setAttribute("alt", image.title);
  
    const photoCredit = document.querySelector("figcaption");
    if (photoCredit) {
      photoCredit.innerHTML = image.caption;
    }
  })();

  (function() {
    const image = images[getUniqueRandomNumber()];
    document.querySelector(".go-see-art a > span:nth-of-type(1) img").setAttribute("src", image.url);
  })();

  (function() {
    const image = images[getUniqueRandomNumber()];
    document.querySelector(".go-see-art a > span:nth-of-type(2) img").setAttribute("src", image.url);
  })();

  (function() {
    const image = images[getUniqueRandomNumber()];
    document.querySelector(".go-see-art a > span:nth-of-type(3) img").setAttribute("src", image.url);
  })();

})();

</script>
