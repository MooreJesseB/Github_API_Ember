# Way2B1 instructions
Please see below for how to set ember up locally.

For the purposes of examining the component tree please look at the `/components` and `/templates` directory in the app dir.

Unlike react, Ember separates the markup (in this case HTMLBars, a version of Handlebars) from the JavaScript logic for the component. 
The markup is found in the `/templates` directory and the js logic in the `/components` directory. Data binding can be found anywhere there are two curly braces in an HTML element or an Ember helper (look for things like `{{foobar}}` and `{{input}}`.

The granularity of each component is really tiny. I just wanted to demonstrate a way to architect a component tree by separating 'smart' from 'dumb' components and to, potentially assist in resuability.

# githubapi

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd githubapi`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
