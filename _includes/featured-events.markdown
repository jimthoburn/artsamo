<ol class="featured-events">

{% assign data_collection = site.collections | where: "label", "events" | first %}
{% assign data_list = data_collection.docs %}
{% assign data_list = data_list | sort: "end_date" %}

{% for event in data_list %}

<li>
  <a href="{{ event.url }}">
    <span class="image">
      <img src="{{ event.image }}" height="300" alt="" />
    </span><br />
    <span class="text">
      <strong>{{ event.title }}</strong><br />
      {{ event.description }}
    </span>
  </a>
</li>

{% endfor %}

</ol>

{% comment %}
<ul class="featured-events">
  <!--
  <li>
    <a href="/airport-artwalk/">
      <img src="https://static-artsamo.digitalservice.la/uploads/art-walk.jpg" height="300" alt="" /><br />
      <strong>Santa Monica Airport Artwalk 2019</strong><br />
      Saturday, March 23 from 12-5pm. Rain or shine! Free admission
    </a>
  </li>
  -->
  <li>
    <a href="/indigenous-now/">
      <span class="image">
        <img src="https://static-artsamo.digitalservice.la/uploads/2018_Tongva_Park_Jason_Abraham-(4-of-52).jpg" height="300" alt="" />
      </span><br />
      <span class="text">
        <strong>Indigenous Now</strong><br />
        Saturday, May 11 from 12 – 4 p.m., Free admission
      </span>
    </a>
  </li>
  <li>
    <a href="/meet-me-at-reed/">
      <span class="image">
        <img src="https://static-artsamo.digitalservice.la/uploads/2018_5_19_2018_Meet_Me_At_Reed_Taiko_Festival_Javier_Guillen (195 of 281).jpg" height="300" alt="" />
      </span><br />
      <span class="text">
        <strong>Meet Me at Reed</strong><br />
        Saturdays: June 15 to July 27, 2019, Free admission
      </span>
    </a>
  </li>
  <li>
    <a href="/art-in-the-parks/">
      <span class="image">
        <img src="https://static-artsamo.digitalservice.la/uploads/2018_7_21_18_Meet_Me_At_Reed_Santa_Monica_Symphony_Javier_Guillen (135 of 144).jpg" height="300" alt="" />
      </span><br />
      <span class="text">
        <strong>Art in the Parks</strong><br />
        Free Outdoor Performances to Look Forward to This Summer
      </span>
    </a>
  </li>
</ul>
{% endcomment %}
