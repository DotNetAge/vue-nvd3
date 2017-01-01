# vue-nvd3

The NVD3 chart library for Vue. 

> This library is just in beta version. It's only using in my project i will add the tests and examples in the future versions.


## Install

```
$ npm install vue-nvd3
```

[Live Demo](https://dotnetage.github.io/vue-nvd3)

## Components in this library

Tag | Component 
----|----------
`<vn-bar>`| `BarChart`
`<vn-bubble>`| `BubbleChart`
`<vn-hgrouped-bar>`| `HBarChart`
`<vn-line-bar>`| `LineBarChart`
`<vn-line>`| `LineChart`
`<vn-pie>`| `PieChart`
`<vn-stacked-area>`| `StackedAreaChart`

## Dependencies
  
- vue: "^2.1.0"
- nvd3: "^1.8.5",
- d3: "^3.5.17"

## How to use

```js
import Vue from 'Vue'
import VueNVD3 from 'vue-nvd3'
Vue.use(VueNVD3)
```

## References

### `<vn-bar>` - `BarChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `'300px'` | The chart height
`textField`| `String`| `'label'` | Specify which field should be show as axis label text of the data model
`valueField`| `String` | `'value'` |  Specify which field should be use as axis values of the data model
`staggerLabels`| `Boolean`| `true` | -
`tooltips`| `Boolean`| `false`| Whether show the tooltips when mouse on the bars
`showValues`| `Boolean`| `true` | Identity whether show the values on the chart
`colors`| `Array`| `['#82DFD6', '#ddd']` | The bar colors
    
    
    
### `<vn-bubble>` - `BubbleChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`xFormat` | `Function`, `String` | `undefined` |
`yFormat` | `Function` `String` | `undefined` |
`showDistX` | `Boolean` | `true` |
`showDistY` | `Boolean` | `true` |
`colors` | `Array` | `['#82DFD6', '#ddd']` |

### `<vn-hgrouped-bar>` - `HBarChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`textField`| `String`| `'label'` | Specify which field should be show as axis label text of the data model
`valueField`| `String` | `'value'` |  Specify which field should be use as axis values of the data model
`height` | `Number`| `null` |
`yFormat` | `Function`,`String` | `undefined`  | 
`showControls` | `Boolean` | `true` |
`colors` | `Array` | `['#82DFD6', '#ddd']` |


### `<vn-line-bar>` - `LineBarChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`xFormat` | `Function`, `String` | `undefined` |
`y1Format` | `Function`, `String` | `undefined` |
`y2Format` | `Function`, `String` | `undefined` |
`colors`| `Array` | `['#82DFD6', '#ddd']` | 

### `<vn-line>` - `LineChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`xFormat` | `Function`, `String` | `undefined` |
`yFormat`| `Function`, `String`| `undefined`  |
`colors` | `Array` | `['#82DFD6', '#ddd']`|
   
### `<vn-pie>` - `PieChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`showLabels` | `Boolean` | `true` |
`margin` | `Object` | `{top: 30, right: 20, bottom: 20, left: 20}`,
`width` | `Number` | `null` |
`height` | `Number` |`null`|
`showTooltipPercent` | `Boolean` | `false` |
`showLegend`| `Boolean` | `true` |
`legendPosition` | `String` | `'top'` | 
`labelThreshold` | `Number`| `0.05` |
`labelType` | `String` | `'percent'` |
`donut` | `Boolean` | `false` | 
`donutRatio`| `Number` | `0.35` |
`textField`| `String`| `'label'` | Specify which field should be show as axis label text of the data model
`valueField`| `String` | `'value'` |  Specify which field should be use as axis values of the data model
`colors` | `Array` | `['#82DFD6', '#ddd']` | 

### `<vn-stacked-area>` - `StackedAreaChart`

attribute | type | default | description
----------|------|---------|------------
`model`| `Array` | `[]` | The data to show on the chart
`height` | `String` | `300px` | The chart height
`xFormat` | `Function`, `String` |`undefined` | 
`yFormat` | `Function`, `String` |`undefined` |
`rightAlignYAxis` | `Boolean` | `true` |
`showControls` | `Boolean` | `true` |
`clipEdge` | `Boolean` | `true` |
`colors` | `Array` | `['#82DFD6', '#ddd']`|
