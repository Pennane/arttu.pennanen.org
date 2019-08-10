
 <template>
  <div :class="{'sidebar':true, 'closed':(this.startClosed === true)}">
    <div class="sidebar-toggle">
      <button id="sidebar-toggler" v-on:click="toggleSidebar()">
        <font-awesome-icon icon="chevron-left" />
      </button>
    </div>
    <navbar />
    <pageFooter />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Sidebar',
  components: {
    navbar: Navbar,
    pageFooter: Footer
  },
  computed: {
    startClosed: e => {
      if (window.innerWidth >= 700) return false
      return true
    }
  },
  methods: {
    toggleSidebar(state) {
      let sidebar = document.querySelector('.sidebar')
      if (typeof state !== 'undefined') {
        sidebar.classList.toggle('closed', state)
      } else {
        sidebar.classList.toggle('closed')
      }
      if (sidebar.classList.contains('closed')) {
        sidebar.blur()
      }
    },

    onResize(event) {
      if (window.innerWidth <= 700) {
        this.toggleSidebar(true)
      } else {
        this.toggleSidebar(false)
      }
    }
  },
  watch: {
    $route(to, from) {
      if (window.innerWidth <= 700) {
        this.toggleSidebar(true)
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>