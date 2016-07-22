# SPAger

SPAger is a SPA (Single Page Application) multi paging module based on routing.
It is meant to be very light (< 1Kb!), modular, plug-and-play yet basic.

It is a standalone [Vanilla](http://vanilla-js.com/) JavaScript lib.

It is based on native browser anchors.

[View a full working example](https://vinyll.github.io/spager/)
or [a basic demo](https://vinyll.github.io/spager/demo.html)

## Example

```
<section class=page>
  <h1>Welcome home!</h1>
  <a href="#contact">See contact infos</a>
</section>
<section class=page id=contact>
  <h1>Contact me<h1>
  <a href="#">Back home</a>
</section>

<script src="js/spager.min.js"></script>
<script>spager.init()</script>
```
[See this code in action](https://vinyll.github.io/spager/demo.html)

Here we have 2 pages: _home_ and _contact_.
Pages are detected by the `class=page` attribute and the page name by the _id_ attribute.
The page change is executed based the hash in the URL.
Easy and logic!

`spager.init()` will initialize the spager.


## API

`spager.init()`: initializes the pager. It consists of hiding all pages except
the homepage.

`spager.home`: string that defines the id of the homepage. blank by default.

`spager.error404`: string that defines the page to display when the hash was
not found.

`spager.goto(pageName)`: changes the page to go to _pageName_ (string).

`spager.isCurrent(name)`: returns true if the current page matches the _name_.


## License

MIT. [View LICENSE file](https://github.com/vinyll/spager/blob/master/LICENSE.md)
for further details.
