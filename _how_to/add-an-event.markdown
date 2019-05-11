# How to add an event page

1. Open the [\_events](https://github.com/jimthoburn/artsamo/tree/master/_events) folder.

2. Press the `create new file` button: https://github.com/jimthoburn/artsamo/new/master/_events

3. Name the file with the name of the event. It’s best to use lowercase letters and dashes instead of spaces for your filename. And you can use _.markdown_ as a file extension. For example:
```
the-name-of-your-event.markdown
```

3. Copy and paste this text into your new event file, and then change it to your liking:
```
---
title: The name of your event
description: A single line of text (this will appear below the event title on the events page)
image: /path/to/your-image.jpg
image_title: The name of your image (this will appear in the caption)
image_description: A description for your image (this will be used in the _alt_ attribute, to make the image  accessible and findable on the web)
image_credit: The name of your image’s photographer (this will appear in the caption)
end_date: The date this event will be over in the format YYYY-MM-DD. For example: 2021-07-27
published: true
---

This is the first paragraph of text.

## And here’s an example of a second-level heading

To see more examples, try opening some of the other event pages, or read the markdown guide:
https://guides.github.com/features/mastering-markdown/
```

*You can also use one of the other [event pages](https://github.com/jimthoburn/artsamo/tree/master/_events) as a starting point.*

4. Press the `Commit changes` button

Your new event should appear on the [featured events page](https://beta-artsamo.digitalservice.la/events/) within a few minutes.
