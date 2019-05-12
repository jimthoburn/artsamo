# How to add an event page

1. Open the [\_events](https://github.com/jimthoburn/artsamo/tree/master/_events) folder.

2. Press the `create new file` button: https://github.com/jimthoburn/artsamo/new/master/_events

3. Name the file with the name of the event. It’s best to use lowercase letters and dashes instead of spaces for your filename. And you can use _.markdown_ as a file extension. For example:
```
the-name-of-your-event.markdown
```

4. Copy and paste this text into your new event file, and then change it to your liking:
```markdown
---
title: A title for this event

# A single line of text that will appear below the event title on the events page
description: A description for this event

# URL for the image.
# Example A: /uploads/art-in-the-parks.jpg
# Example B: https://www.santamonica.gov/art-in-the-parks.jpg
image: /uploads/the-image-name.jpg

# Title for the image that will appear in the caption
image_title: The title for this image

# Description for the image, to make the image accessible and findable on the web
image_description: A description for this image

# Person’s name that will appear in the caption
image_credit: Javier Guillen

# The last date of this event, in the format YYYY-MM-DD.
# This is used to order the list of events so that later events come last.
end_date: 2021-07-27

# To hide this event, change the following line to “featured: false”
featured: true
---

This is the first paragraph of text.

## And here’s an example of a second-level heading

To see more examples, try opening some of the other event pages, or read the markdown guide:
https://guides.github.com/features/mastering-markdown/
```

*You can also copy one of the other [event pages](https://github.com/jimthoburn/artsamo/tree/master/_events) or the [starter template](https://github.com/jimthoburn/artsamo/tree/master/_events/_starter-template.markdown) to use as a starting point.*

5. Press the `Commit changes` button

Your new event should appear on the [featured events page](https://beta-artsamo.digitalservice.la/events/) within a few minutes.

<img width="1528" alt="events folder" src="https://user-images.githubusercontent.com/926616/57564006-0fbff500-735a-11e9-8ddc-0da85b154644.png">

<img width="1528" alt="new event form" src="https://user-images.githubusercontent.com/926616/57563985-d2f3fe00-7359-11e9-8d09-957d3daf588f.png">

<img width="1528" alt="commit" src="https://user-images.githubusercontent.com/926616/57564007-0fbff500-735a-11e9-913f-db9a480d1a44.png">


