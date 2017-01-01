// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueNVD3 from '../dist/vue-nvd3.common'
// import '../dist/vue-nvd3.css'
import VueNVD3 from 'components'
import VueRouter from 'vue-router'
import BarChartExample from './examples/BarChart.vue'
import BubbleChartExample from './examples/BubbleChart.vue'
import HBarChartExample from './examples/HBarChart.vue'
import LineBarChartExample from './examples/LineBarChart.vue'
import LineChartExample from './examples/LineChart.vue'
import PieChartExample from './examples/PieChart.vue'
import StackedAreaChartExample from './examples/StackedAreaChart.vue'

Vue.use(VueNVD3)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'BarChart', path: '/examples/bar-chart', component: BarChartExample},
    {name: 'BubbleChart', path: '/examples/bubble-chart', component: BubbleChartExample},
    {name: 'HBarChart', path: '/examples/hbar-chart', component: HBarChartExample},
    {name: 'LineBarChart', path: '/examples/line-bar-chart', component: LineBarChartExample},
    {name: 'LineChart', path: '/examples/line-chart', component: LineChartExample},
    {name: 'PieChart', path: '/examples/pie-chart', component: PieChartExample},
    {name: 'StackedAreaChart', path: '/examples/stacked-area-chart', component: StackedAreaChartExample}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
