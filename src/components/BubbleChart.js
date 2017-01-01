import d3 from 'd3'
import nv from 'nvd3'
import BaseChartMixin from './BaseChartMixin'

export default {
  name: 'BubbleChart',
  mixins: [BaseChartMixin],
  props: {
    xFormat: {type: [Function, String]},
    yFormat: {type: [Function, String]},
    showDistX: {type: Boolean, default: true},
    showDistY: {type: Boolean, default: true},
    colors: {type: Array, default: () => ['#82DFD6', '#ddd']}
  },
  mounted () {
    nv.addGraph(() => {
      const chart = nv.models.scatterChart()
        .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
        .showDistY(true)
        .height(this.height)
        //.transitionDuration(350)
        .color(d3.scale.category10().range())

      //Configure how the tooltip looks.
      //chart.tooltipContent(key => '<h3>' + key + '</h3>')

      //Axis settings
      if (this.xFormat) {
        if (typeof(this.xFormat) === 'string') {
          chart.xAxis.tickFormat(d3.format(this.xFormat))
        } else {
          chart.xAxis.tickFormat(this.xFormat)
        }
      }

      if (this.yFormat) {
        if (typeof(this.yFormat) === 'string') {
          chart.yAxis.tickFormat(d3.format(this.yFormat))
        } else {
          chart.yAxis.tickFormat(this.yFormat)
        }
      }

      //We want to show shapes other than circles.
      //chart.scatter.onlyCircles(false)

      this.redraw(chart)
      this.chartRef = chart

      nv.utils.windowResize(chart.update);
      return chart
    })
  }
}
