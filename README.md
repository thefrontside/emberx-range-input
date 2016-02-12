# emberx-range-input

[![Build Status](https://travis-ci.org/thefrontside/emberx-slider.svg)](https://travis-ci.org/thefrontside/emberx-range-input)
[![Ember Observer Score](http://emberobserver.com/badges/emberx-range-input.svg)](http://emberobserver.com/addons/emberx-range-input)
[![npm version](https://badge.fury.io/js/emberx-range-input.svg)](https://badge.fury.io/js/emberx-range-input)
[![Ember Badge](https://embadge.io/b/2.svg)](https://embadge.io/badges/2)

A Slider component based on the native html5 range input.

The component itself takes on a number value between two bounds, that
proceeds in discrete step values. So, for example, to indicate a
percentage of saturation in an image, where the smallest change in
saturation is 1%, you might specify your slider control like:

```handlebars
{{x-range-input min=0 max=100 step=1 value=saturationPercentage action=(action "updateSaturation")}}
```

In this example we would need to implement an `updateSaturation` action that
sets the value of `saturationPercentage`. That might look something like this:


```js
actions: {
  updateSaturation(value) {
    this.set('saturationPercentage', value);
  }
}
```
The `action` sends two arguments with it. The first is the value and the
second is the component itself as an optional argument.


### Default Values

While `min`, `max`, and `step` can take on any numeric values, the
default use-case is optimized for representing percentages stepped by
1%. There fore the proceeding example could have been written simply
as:

```handlebars
{{x-range-input value=saturationPercentage action=(action "updateSaturation")}}
```

### Classic "binding style" with the `mut` helper

```handlebars
{{x-range-input value=(mut saturationPercentage)}}
```

## EmberX

emberx-range-input is part of the "missing components of ember" collectively
known as emberx:

* [emberx-select](https://github.com/thefrontside/emberx-select)
* [emberx-file-input](https://github.com/thefrontside/emberx-file-input)

## Installation

ember install emberx-range-input

## Running Tests

* `ember test`
* `ember test --server`


## Code of Conduct
Please note that this project is released with a Contributor Code of
Conduct. By participating in this project you agree to abide by its
terms, which can be found in the `CODE_OF_CONDUCT.md` file in this
repository.
