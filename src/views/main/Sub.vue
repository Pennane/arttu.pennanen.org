<template>
  <div class="sub">
    <h1>Contents of /sub </h1>
    <ul v-if="links" class="linkcontainer">
      <li v-for="link in links" :key="'link-'+link">
        <a :href="'/sub/'+link">
          <span class="name">{{ link }}</span>
          <span class="destination">{{' – ' + windowOrigin + '/sub/' +link+'/' }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      links: false
    }
  },
  created() {
    this.getLinks()
  },
  computed: {
    windowOrigin() {
      return window.location.origin
    }
  },
  methods: {
    getLinks() {
      let _compthis = this
      this.$root.$children[0].$options.methods
        .loadJSON('https://arttu.pennanen.org/directory.php')
        .then(function(l) {
          _compthis.links = l
        })
    }
  }
}
</script>


<style scoped>
.linkcontainer {
  display: flex;
  flex-direction: column;
  line-height: 1.6;
}



a {
  text-decoration: none;
}

.name {
  color: var(--link-color);
}

.destination {
  color: var(--font-1);
  opacity: 0.8;
  font-size: 0.77em;
}
</style>
