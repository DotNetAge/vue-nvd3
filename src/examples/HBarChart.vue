<template>
  <div>
    <h2>Multi-bar horizontal chart</h2>
    <div class="uk-margin-bottom">
      <vn-hbar :model="dataModel"
               y-format=".2f"
               :height="400"></vn-hbar>
    </div>
    <div class="uk-width-medium-1-1">
      <ul class="uk-tab" data-uk-tab="{connect:'#tab-content'}">
        <li class="uk-active" aria-expanded="true"><a href="#">HTML</a></li>
        <li aria-expanded="false" class=""><a href="#">Data</a></li>
      </ul>
      <ul id="tab-content" class="uk-switcher uk-margin">
        <li class="uk-active">
          <pre><code>&lt;vn-hbar :model="dataModel"
                  y-format=".2f"
                  :height="400"&gt;
&lt;/vn-hbar&gt;</code></pre>
        </li>
        <li>
          <pre><code>{{dataModel}}</code></pre>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        dataModel: [
          {
            "key": "Series 1",
            "color": "#d67777",
            "values": [
              {
                "label": "Group A",
                "value": -1.8746444827653
              },
              {
                "label": "Group B",
                "value": -8.0961543492239
              },
              {
                "label": "Group C",
                "value": -0.57072943117674
              },
              {
                "label": "Group D",
                "value": -2.4174010336624
              },
              {
                "label": "Group E",
                "value": -0.72009071426284
              },
              {
                "label": "Group F",
                "value": -0.77154485523777
              },
              {
                "label": "Group G",
                "value": -0.90152097798131
              },
              {
                "label": "Group H",
                "value": -0.91445417330854
              },
              {
                "label": "Group I",
                "value": -0.055746319141851
              }
            ]
          },
          {
            "key": "Series 2",
            "color": "#4f99b4",
            "values": [
              {
                "label": "Group A",
                "value": 25.307646510375
              },
              {
                "label": "Group B",
                "value": 16.756779544553
              },
              {
                "label": "Group C",
                "value": 18.451534877007
              },
              {
                "label": "Group D",
                "value": 8.6142352811805
              },
              {
                "label": "Group E",
                "value": 7.8082472075876
              },
              {
                "label": "Group F",
                "value": 5.259101026956
              },
              {
                "label": "Group G",
                "value": 0.30947953487127
              },
              {
                "label": "Group H",
                "value": 0
              },
              {
                "label": "Group I",
                "value": 0
              }
            ]
          }
        ]
      }
    }
  }
</script>
