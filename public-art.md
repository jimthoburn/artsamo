---
title: Public Art, Santa Monica
---

<figure>
  <img
    src="/assets/images/go-see-art.jpg"
    height="300"
    alt="Wheels by Anne Marie Karlsen"
  />
  <figcaption><em>Wheels</em> by Anne Marie Karlsen</figcaption>
</figure>

Public Art
==========

<nav class="action" markdown="1">
<!--
*   [Percent for Art Commissions](#map)
-->
*   [Map / Archive](#map)
*   [Leadership](/about/#public-art-committee)
*   [Maintenance](/about/#maintenance)
*   [Ordinances](/about/#ordinances)
</nav>

## Art makes the day better

We're dedicated to integrating as much art as possible into our community’s daily life. We encourage you to notice it as you go about your day, and invite you to seek it out in areas you don't normally visit. Press a marker on [the map below](#map) to get a peek at the public artworks in Santa Monica. Or visit the [Public Art Archive](http://www.publicartarchive.org/santamonica).


<small>Map / Archive</small>
==========

<div class="map" id="map"><iframe width="300" height="150" style="border-width: 0; width: 100%; height: calc(100vh - calc(var(--vertical-rhythm) * 2));" src="https://www.publicartarchive.org/paa_map/50303"></iframe></div>


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
      title: "Public art in Santa Monica",
      url: "/uploads/weather-field-tongva.jpg",
      caption: "<em>Weather Field No. 1</em> by Inigo Mañglano-Ovalle. Tongva Park, 2013."
    }
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


