<ol class="featured-events">

{% assign data_collection = site.collections | where: "label", "events" | first %}
{% assign data_list = data_collection.docs %}
{% assign data_list = data_list | sort: "end_date" %}

{% for event in data_list %}
  {% if event.featured == true %}
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
  {% endif %}
{% endfor %}

</ol>
