import LineChart from './LineChart'
import LineBarChart from './LineBarChart'
import PieChart from './PieChart'
import HGBarChart from './HBarChart'
import BarChart from './BarChart'
import BubbleChart from './BubbleChart'
import StackedAreaChart from './StackedAreaChart'
import 'nvd3/build/nv.d3.css'

export default (Vue, options) => {
  Vue.component('vn-line', LineChart)
  Vue.component('vn-line-bar', LineBarChart)
  Vue.component('vn-pie', PieChart)
  Vue.component('vn-hbar', HGBarChart)
  Vue.component('vn-bar', BarChart)
  Vue.component('vn-bubble', BubbleChart)
  Vue.component('vn-stacked-area',StackedAreaChart)
}
