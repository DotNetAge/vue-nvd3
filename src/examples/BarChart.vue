<template>
  <div>
    <h2>Bar chart</h2>
    <div class="uk-margin-bottom">
      <vn-bar :model="traffics"
              :x-format="formatDate"
              y-format=",f">
      </vn-bar>
    </div>

    <div class="uk-width-medium-1-1">
      <ul class="uk-tab" data-uk-tab="{connect:'#tab-content'}">
        <li class="uk-active" aria-expanded="true"><a href="#">HTML</a></li>
        <li aria-expanded="false" class=""><a href="#">Data</a></li>
      </ul>
      <ul id="tab-content" class="uk-switcher uk-margin">
        <li class="uk-active">
          <pre><code>&lt;vn-bar :model="traffics"
       :x-format="formatDate"
       y-format=",f"&gt;
&lt;/vn-bar&gt;</code></pre>
        </li>
        <li>
          <pre><code>{{traffics}}</code></pre>
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
      const gen_item = () => {
        return {
          domain: Faker.Internet.domainName(),
          visits: Faker.random.number(10000)
        }
      }

      const ranges = _.range(Faker.random.number(20))

      return {
        trafficData: _.map(ranges, gen_item)
      }
    },
    computed: {
      traffics () {
        return [
          {
            key: 'visits',
            area: true,
            values: _.map(this.trafficData, (t) => {
              return {
                label: t.domain,
                value: t.visits
              }
            })
          }
        ]
      }
    },
    methods: {
      formatDate (d){
        return d3.time.format('%x')(new Date(d))
      }
    }
  }
</script>
