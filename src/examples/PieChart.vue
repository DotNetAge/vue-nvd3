<template>
  <div>
    <h2>Pie chart</h2>
    <div class="uk-grid uk-margin-bottom">
      <div class="uk-width-1-2">
        <vn-pie :model="pages"
                :height="400"
                text-field="name"
                value-field="views"
                :show-tooltip-percent="true"
                :show-legend="true"></vn-pie>
      </div>
      <div class="uk-width-1-2">
        <vn-pie :model="pages"
                :height="400"
                :donut="true"
                text-field="name"
                value-field="views"
                :show-tooltip-percent="true"
                :show-legend="false"></vn-pie>
      </div>
    </div>

    <div class="uk-width-medium-1-1">
      <ul class="uk-tab" data-uk-tab="{connect:'#tab-content'}">
        <li class="uk-active" aria-expanded="true"><a href="#">HTML</a></li>
        <li aria-expanded="false" class=""><a href="#">Data</a></li>
      </ul>
      <ul id="tab-content" class="uk-switcher uk-margin">
        <li class="uk-active">
          <pre><code>&lt;div class="uk-width-1-2"&gt;
&lt;vn-pie :model="pages"
  :height="400"
  text-field="name"
  value-field="views"
  :show-tooltip-percent="true"
  :show-legend="true"&gt;&lt;/vn-pie&gt;
&lt;/div&gt;
&lt;div class="uk-width-1-2"&gt;
&lt;vn-pie :model="pages"
  :height="400"
  :donut="true"
  text-field="name"
  value-field="views"
  :show-tooltip-percent="true"
  :show-legend="false"&gt;&lt;/vn-pie&gt;
&lt;/div&gt;</code></pre>
        </li>
        <li>
          <pre><code>{{pages}}</code></pre>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Faker from 'Faker'
  import _ from 'lodash'
  import d3 from 'd3'

  export default {
    data () {
      return {
        pages: [
          {
            name: '首页',
            views: Faker.random.number(1000000),
            stay: Faker.random.number(100),
            ratio: Faker.random.number(100) / 100
          }, {
            name: '产品详情',
            views: Faker.random.number(1000000),
            stay: Faker.random.number(100),
            ratio: Faker.random.number(100) / 100
          }, {
            name: '搜索结果',
            views: Faker.random.number(1000000),
            stay: Faker.random.number(100),
            ratio: Faker.random.number(100) / 100
          }, {
            name: '产品列表',
            views: Faker.random.number(1000000),
            stay: Faker.random.number(100),
            ratio: Faker.random.number(100) / 100
          }, {
            name: '购物车',
            views: Faker.random.number(1000000),
            stay: Faker.random.number(100),
            ratio: Faker.random.number(100) / 100
          }
        ],
        refers: []
      }
    }
  }
</script>
