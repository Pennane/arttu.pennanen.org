<i18n>
{
  "en": {
    "sub_header": "Content of /sub"
  },
  "fi": {
    "sub_header": "Sivun /sub sisältö"
  }
}
</i18n>
<template>
  <div class="sub">
    <h1>{{$t("sub_header")}}</h1>
    <ul v-if="links" class="linkcontainer">
      <li v-for="link in links" :key="'link-'+link">
        <a class="sublink" :href="'/sub/'+link">
          <span class="name">{{ link }}</span>
          <span class="destination">
            <span class="line">{{' – '}}</span>
            <span class="origin">{{windowOrigin}}</span>
            <span class="destinationlink">{{'/sub/' +link+'/'}}</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sub-page',
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.line {
  margin: 0 0.3em;
}

.name {
  color: var(--link-color);
}

.destination {
  color: var(--font-1);
  opacity: 0.8;
  font-size: 0.77em;
  display: inline-block;
}

@media screen and (max-width: 700px) {
  .origin {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .linkcontainer {
    padding-left: 20px;
  }
}
</style>
