import d3 from 'd3'
import nv from 'nvd3'
import BaseChartMixin from './BaseChartMixin'

export default {
  name: 'LineChart',
  mixins: [BaseChartMixin],
  props: {
    xFormat: {type: [Function, String]},
    yFormat: {type: [Function, String]},
    colors: {type: Array, default: () => ['#82DFD6', '#ddd']}
  },
  mounted () {
    nv.addGraph(() => {
      const chart = nv.models.lineChart()
        .useInteractiveGuideline(true)
        .margin({left: 50, bottom: 30, right: 0})
        .color(this.colors)

      const xaxis = chart.xAxis.showMaxMin(false)

      if (this.xFormat) {
        if (typeof(this.xFormat) === 'string') {
          xaxis.tickFormat(d3.format(this.xFormat))
        } else {
          xaxis.tickFormat(this.xFormat)
        }
      }

      const yaxis = chart.yAxis.showMaxMin(false)
      if (this.yFormat) {
        if (typeof(this.yFormat) === 'string') {
          yaxis.tickFormat(d3.format(this.yFormat))
        } else {
          yaxis.tickFormat(this.yFormat)
        }
      }

      this.redraw(chart)
      this.chartRef = chart
      nv.utils.windowResize(chart.update);
      return chart
    })
  }
}
