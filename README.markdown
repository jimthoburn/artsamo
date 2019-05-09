# Santa Monica Cultural Affairs (ArtSaMo)

This is a beta website for Cultural Affairs at the City of Santa Monica.

https://beta-artsamo.digitalservice.la

The official website is located at:

https://www.santamonica.gov/arts/

* [How to make changes](#how-to-make-changes)
* [How to add an image](#how-to-add-an-image)
* [How to see a preview of your changes](#how-to-see-a-preview-of-your-changes)
* [How to develop locally](#how-to-develop-locally)
* [Handy guides](#handy-guides)

## How to make changes

The website is published with [GitHub Pages](https://pages.github.com) and the files are generated with [Jekyll](https://jekyllrb.com).

As you make changes and commit/push them to GitHub, the [website](https://beta-artsamo.digitalservice.la) will automatically update.

For example, if you [edit the _About_ page](https://github.com/jimthoburn/artsamo/edit/master/about.md) on GitHub, and then press the “Commit changes” button–you should see your changes on the [_About_ page](https://beta-artsamo.digitalservice.la/about/) of the website within a few minutes.

## How to add an image

*The easist way to add an image is to use [Siteleaf](https://www.siteleaf.com). If you make a change in Siteleaf, it will appear on the [staging website](#how-to-see-a-preview-of-your-changes). (Jim has a Siteleaf account and can send you an invite.)*

![uploads](https://user-images.githubusercontent.com/926616/57423334-757c7780-71c8-11e9-838e-9513baa0d9fe.png)

*Here are more details, if you want to add an image using GitHub instead…*

If you want to add an image (or any file) to the website, you can upload it to one of the folders on GitHub.

The [uploads folder](https://github.com/jimthoburn/artsamo/tree/master/_uploads) might be a good choice, if you’re unsure where to put a file.

Once you’ve chosen a folder, follow these steps:

1. Press the `Upload files` button

2. Use the uploader to upload your files

3. Press the `Commit changes` button

It’s best to use lowercase letters and dashes instead of spaces for your filename. For example: `dahn-gim.jpg`.

Once your file has been uploaded it be available at a web address that corresponds to the folder and filename that you chose. For example:

```
/uploads/dahn-gim.jpg
```

To use this on the website, you can create an image with [markdown](https://guides.github.com/features/mastering-markdown/):

```
![Dahn Gim](/uploads/dahn-gim.jpg)
```

## How to see a preview of your changes

If you’d like to see how your changes will look on the website before making them public, you can work in the [staging branch](https://github.com/jimthoburn/artsamo/tree/staging)–a copy of the website files, that’s published at https://staging-artsamo.digitalservice.la

![staging](https://user-images.githubusercontent.com/926616/47131296-bcb61180-d252-11e8-90e0-56a2e7552163.png)

You can make edits in the staging branch and commit them just as you would normally. They’ll automatically appear on the staging website within a few minutes.

Once you’re happy with how your changes look on the staging website, you can copy them over to the [public website](https://beta-artsamo.digitalservice.la) (the `master` branch) using a pull request. Here are the steps:

1. Press the “new pull request” button.

https://github.com/jimthoburn/artsamo/pull/new/staging

![1-new-pull-request-button](https://user-images.githubusercontent.com/926616/47131298-bde73e80-d252-11e8-8cd6-f64703af5c2b.png)

2. Write a title for your pull request (this is optional).

3. Press the “create pull request” button.

4. And then, press the “merge pull request” button.

5. And lastly, press the “confirm merge” button.

![3-merge-pull-request](https://user-images.githubusercontent.com/926616/47131302-c0499880-d252-11e8-9393-75dcfcd49650.png)

## How to develop locally

If you want to see a preview of your changes while you work, you can [run a Jekyll server](https://jekyllrb.com) on your local machine. [Installing Ruby and Jekyll](https://jekyllrb.com/docs/installation/) is a good place to start.

After you have Jekyll installed, you can clone this project with [Git](https://git-scm.com) or [GitHub Desktop](https://desktop.github.com)…

```
git clone https://github.com/jimthoburn/artsamo.git
```

And then start running the Jekyll application like this...

```
jekyll serve
```

## Handy guides

* [Markdown](https://guides.github.com/features/mastering-markdown/)
* [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
* [YAML Checker](http://www.yamllint.com)
* [Liquid](https://shopify.github.io/liquid/)
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Jekyll](https://jekyllrb.com/docs/home/)
* [GitHub Pages](https://pages.github.com)
* [Siteleaf](https://www.siteleaf.com)

