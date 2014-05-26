CoutUpCircle
============

jQuery Plugin that counting up

# How to use

The number in the HTML-Elemnt have to stay alone without any unit. Appear the CoutUpCircle Plugin with the following JavaScript Code:
```javascript
$('element').CountUpCircle();
```

## You have following options:
```javascript
$('#count-box').CountUpCircle({
  duration: 2000 /* Integer - Unit: Millisecounds; How long to Count; Default value: 5000  */,
  opacity_anim: true /* Boolean; Raise the Opacity of the element from 0 to 100%; Default: false */
  step_divider: 1 /* setp forward in bigger steps, for example for bigger numbers like >1000 */
});
```

# Examples
This is a simple example, which is available in the demo folder.

```html
<div class="wrapper">
  <div id="count-box">19</div> 
</div>
```
```javascript
$('#count-box').CountUpCircle({
  duration: 2000,
  opacity_anim: true,
  step_divider: 1
});
```

## Big number example

```html
<div class="wrapper">
  <div id="count-box">819757</div> 
</div>
```
```javascript
$('#count-box').CountUpCircle({
  duration: 4000,
  opacity_anim: false,
  step_divider: 3000
});
```
