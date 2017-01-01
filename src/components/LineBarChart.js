import d3 from 'd3'
import nv from 'nvd3'
import BaseChartMixin from './BaseChartMixin'

export default {
  name: 'LineBarChart',
  mixins: [BaseChartMixin],
  props: {
    xFormat: {type: [Function, String]},
    x2Format: {type: [Function, String]},
    y1Format: {type: [Function, String]},
    y2Format: {type: [Function, String]},
    colors: {type: Array, default: () => ['#82DFD6', '#ddd']}
  },
  mounted () {
    nv.addGraph(() => {
      const chart = nv.models.linePlusBarChart()
        .margin({left: 80, bottom: 50, right: 80, top: 30})
        .color(this.colors)

      if (this.xFormat) {
        if (typeof(this.xFormat) === 'string') {
          chart.xAxis.tickFormat(d3.format(this.xFormat))
        } else {
          chart.xAxis.tickFormat(this.xFormat)
        }
      }

      if (this.x2Format) {
        if (typeof(this.x2Format) === 'string') {
          chart.x2Axis.tickFormat(d3.format(this.x2Format))
        } else {
          chart.x2Axis.tickFormat(this.x2Format)
        }
      }

      if (this.y1Format) {
        if (typeof(this.y1Format) === 'string') {
          chart.y1Axis.tickFormat(d3.format(this.y1Format))
        } else {
          chart.y1Axis.tickFormat(this.y1Format)
        }
      }

      if (this.y2Format) {
        if (typeof(this.y2Format) === 'string') {
          chart.y2Axis.tickFormat(d3.format(this.y2Format))
        } else {
          chart.y2Axis.tickFormat(this.y2Format)
        }
      }

      chart.bars.forceY([0])

      d3.select(this.$refs.chart)
        .style('height', this.height)
        .datum(this.model)
        .transition()
        .duration(500)
        .call(chart)

      nv.utils.windowResize(chart.update);
      return chart
    })
  }
}
