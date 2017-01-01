import d3 from 'd3'
import nv from 'nvd3'
import BaseChartMixin from './BaseChartMixin'

/**
 * 垂直多列分组柱状图
 */
export default {
  name: 'HBarChart',
  mixins: [BaseChartMixin],
  props: {
    textField: {type: String, default: 'label'},
    valueField: {type: String, default: 'value'},
    yFormat: {type: [Function, String]},
    height: {type: Number, default: 350},
    showControls: {type: Boolean, default: true},
    colors: {type: Array, default: () => ['#82DFD6', '#ddd']}
  },
  mounted () {
    nv.addGraph(() => {
      const textField = this.textField
      const valField = this.valueField
      const chart = nv.models.multiBarHorizontalChart()
        .x(function (d) {
          return d[textField]
        })
        .y(function (d) {
          return d[valField]
        })
        .controlLabels({
          'grouped': '分组',
          'stacked': '堆叠'
        })
        .color(this.colors)
        .showValues(true)           //Show bar value next to each bar.
      //.tooltips(true)             //Show tooltips on hover.
      //.transitionDuration(350)
      //.showControls(true)       //Allow user to switch between "Grouped" and "Stacked" mode.

      if (this.height) {
        chart.height(this.height)
      }

      if (this.yFormat) {
        if (typeof(this.yFormat) === 'string') {
          chart.yAxis.tickFormat(d3.format(this.yFormat))
        } else {
          chart.yAxis.tickFormat(this.yFormat)
        }
      }

      this.redraw(chart)
      this.chartRef = chart
      nv.utils.windowResize(chart.update);
      return chart
    })
  }
}
