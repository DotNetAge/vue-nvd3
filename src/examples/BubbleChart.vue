<template>
  <div>
    <h2>Bubble chart</h2>
    <div class="uk-margin-bottom">
      <vn-bubble :model="series"
                 x-format=".02f"
                 y-format=".02f">
      </vn-bubble>
    </div>

    <div class="uk-width-medium-1-1">
      <ul class="uk-tab" data-uk-tab="{connect:'#tab-content'}">
        <li class="uk-active" aria-expanded="true"><a href="#">HTML</a></li>
        <li aria-expanded="false" class=""><a href="#">Data</a></li>
      </ul>
      <ul id="tab-content" class="uk-switcher uk-margin">
        <li class="uk-active">
          <pre><code>&lt;vn-bubble :model="series"
  x-format=".02f"
  y-format=".02f"&gt;
      &lt;/vn-bubble&gt;</code></pre>
        </li>
        <li>
          <pre><code>{{series}}</code></pre>
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
        series: this.randomData(4, 40)
      }
    },
    methods: {
      randomData(groups, points) { //# groups,# points per group
        const shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square']
        const random = d3.random.normal()

        return _.map(_.range(groups), i => {
          return {
            key: 'Group ' + i,
            values: _.map(_.range(points),j=>{
                return {
                  x: random(),
                  y: random(),
                  size: Math.random(),   //Configure the size of each scatter point
                  shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
                }
            })
          }
        })
      }
    }
  }
</script>
