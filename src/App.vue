<template>
  <div id="app">
    <nav class="uk-navbar">
      <div class="uk-container uk-container-center">
        <a href="" class="uk-navbar-brand">Vue Nvd3 Example</a>
        <ul class="uk-navbar-nav">
          <li><a href="https://github.com/DotNetAge/vue-nvd3" target="_blank">Github</a></li>
          <li><a href="https://www.npmjs.com/package/vue-nvd3">NPM</a></li>
        </ul>
        <div class="uk-navbar-flip">
          <ul class="uk-navbar-nav">
            <li><a href="https://github.com/DotNetAge/vue-nvd3/issues" target="_blank">Issues</a></li>
            <li><a href="http://www.cnblogs.com/ray-liang" target="_blank">My Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="uk-margin-large-top uk-container uk-container-center">
      <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-medium-1-1">
          <div class="uk-grid">
            <div class="uk-width-medium-1-4">
              <ul class="uk-tab uk-tab-left uk-width-medium-1-1"
                  data-uk-tab="">
                <li class="uk-active">
                  <router-link :to="{name:'BarChart'}">Bar chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'BubbleChart'}">Bubble chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'HBarChart'}">Multi-bar horizontal chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'LineChart'}">Line chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'LineBarChart'}">Line-Bar combo chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'PieChart'}">Pie chart</router-link>
                </li>
                <li>
                  <router-link :to="{name:'StackedAreaChart'}">Stacked area chart</router-link>
                </li>
              </ul>
            </div>
            <div class="uk-width-medium-3-4">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'uikit/dist/css/uikit.css'
  import 'uikit/dist/css/uikit.almost-flat.css'
  import 'uikit'
  export default {
    name: 'app',
    mounted () {
      this.$router.push({name:'BarChart'})
    }
  }
</script>
