## CSS Layout - De Stijl

### Description

"De Stijl" (Dutch for "The Style") is a rather influential art movement that began in Amsterdam in 1917. The style is famous for its abstraction of representation in a deliberate, geometric form -- often only composed of boxes with perpendicular lines and primary colors (blue, red, yellow, black, and white).

The [most prominent examples](https://www.google.com/search?site=&tbm=isch&source=hp&biw=1164&bih=619&q=piet+mondrian+famous+paintings&oq=piet+mondrian+&gs_l=img.3.0.0l10.769.2256.0.4450.14.9.0.5.5.0.157.1049.3j6.9.0.msedr...0...1ac.1.64.img..0.14.1065.m1TqL7WbcWc) from the movement today were probably those done by a painter named [Piet Mondrian](http://en.wikipedia.org/wiki/Piet_Mondrian). His most famous paintings resemble the semi-planned street grid of a city like Manhattan, or DC without all the diagonal avenues - a collection of intersecting streets running north-south and east-west that surround rectangular city blocks.

We're going to pay tribute to the design ethic in Mondrian's work by implementing a couple of flexible grid systems in CSS -- this will let us understand the box model better, and also make something cool.

### Normal Mode

Implement whatever rules are necessary in `de-stijl-normal.css` to make the content of `de-stijl-normal.html` resemble the mockup image (`de-stijl-normal.png`). 

Your page need not be pixel-perfect (since I drew this in a couple of minutes using a laptop trackpad, and am really quite terrible at art regardless), but the columns and rows should have different widths and heights based on their class names, and should resemble the page.

The content should take up the entire height and width of the browser window, without scrolling -- this means using percentage unit widths and `vh` unit heights.

Also, you should only edit the CSS file. You're free to **look at** the HTML file to figure out what the classes are, but don't change anything there, just in the stylesheet.

**When you're done:** Make a pull request to the class organization's copy of this project through GitHub. I'll be notified that you did, and I'll use that as a way to do code review.

### Hard Mode

In addition to completing normal mode, implement any rules necessary in `de-stijl-hard.css` to make the content of `de-stijl-hard.html` resemble the mockup image (`de-stijl-hard.png`).

Like in normal mode, the content should take up the entire height and width of the browser window without scrolling.

Like in normal mode, the HTML has been correctly written for you; you should only edit the CSS file.

In hard mode, there should be four equally sized columns, and four equally sized rows; some cells, however, should display as two "rows" tall, and some cells should display as two "columns" wide.