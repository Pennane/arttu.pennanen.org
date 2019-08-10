
 <template>
  <router-link v-if="local" :to="to" :class="['navitem', main ? 'main' : null, noicon]">
    <font-awesome-icon v-if="icon" :icon="[...icon]"></font-awesome-icon>
    <span>{{ title }}</span>
  </router-link>
  <a v-else :href="to" :class="['navitem',  main ? 'main' : null, noicon]">
    <font-awesome-icon v-if="icon" :icon="[...icon]"></font-awesome-icon>
    <span>{{ title }}</span>
  </a>
</template>

<script>
export default {
  name: 'Navlink',
  components: {},
  props: {
    to: String,
    title: String,
    icon: Array,
    local: Boolean,
    main: Boolean
  },
  computed: {
    noicon: function() {
      if (this.icon) return 'has-icon'
      else return 'no-icon'
    }
  }
}
</script>