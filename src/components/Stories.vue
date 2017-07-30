<template>
  <div class="h100">
    <h2>Our Stories</h2>
    <hr>
    <article>
      <li>1. Story #1</li>
      <li>2. Story #2</li>
      <li>3. Story #3</li>
      <li>4. Story #4</li>
      <li>5. Story #5</li>
    </article>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

export default {
  name: 'Stories'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

hr {
  opacity: 0.5;
}

article {
  text-align: center;
  margin-top: 20px; 
}

article li {
  margin-top: 20px; 
  font-size: larger;
}

article li:hover {
  text-decoration: underline;
  cursor: pointer;
}

</style>
