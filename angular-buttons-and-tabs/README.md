## Angular - Buttons and Tabs

We're going to use Angular to replicate the functionality of some common web components. You are likely able to do this without Angular (even without jQuery, perhaps) but this will start to help you familiarize yourself with how the framework operates and how it wants you to think about code.

### Details

Build two components - a loading button and a tab interface.

The button should, upon being clicked, become disabled and have its text changed to "loading..." for four seconds. After that period is up, it should return to its original state. (Example: `output.gif`)

The tabbed interface should present several tab headers that, upon being clicked, reveal the corresponding tab content in a viewable area and hide any other tab content. (Example: `tabs.gif`)

### Normal Mode

Add the necessary directives in `test.html`, and fill out the code for the `TabController` and `ButtonController` in the `buttonController.js` and `tabController.js` files.

You'll need to use the following directives:

* `ng-controller`
* `ng-click`
* `ng-disabled`
* `ng-bind`
* `ng-show`

You'll also need to use the `$timeout` service inside the `ButtonController` code.

Information and examples for all of these are available in the [Angular API documentation](https://docs.angularjs.org/api).