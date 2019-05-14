# How to feature an opportunity

Featured opportunities appear on the [home page](https://beta-artsamo.digitalservice.la/) and on the [opportunities page](https://beta-artsamo.digitalservice.la/opportunities/).

1. Open the [featured-opportunities.markdown](https://github.com/CityofSantaMonica/artsamo/blob/master/_includes/featured-opportunities.markdown) file.

2. Press the “edit” button.

3. Make any changes you’d like to make.

4. Press the “commit changes” button.

To add a new opportunity, you can copy and past this starter template into the file:

```html
<tr>
  <th scope="row">
    <a href="/for-artists/#acbh-choreographer-residency">
      ACBH Choreographer Residency
    </a>
  </th>
  <td>March, 2020</td>
</tr>
```

You can place the template inside of one of the tables:

```html
<table>
<thead>
<tr>
  <th scope="col">Description</th>
  <th scope="col">Deadline</th>
</tr>
</thead>
<tbody>

(Paste your starter template here)

</tbody>
</table>
```

The past & future opportunities are included in the file, but hidden
inside an _HTML comment_. To reuse one of these, you can remove the _HTML comment_ tags
that are around it. Here’s what they look like:

```html
<!--

(Something hidden)

-->
```
