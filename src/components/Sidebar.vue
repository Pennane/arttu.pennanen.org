
 <template>
  <div class="sidebar">
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
    pageFooter: Footer,
  },
  methods: {
    toggleSidebar(state) {
      let sidebar = document.querySelector('.sidebar')
      if (typeof state === 'undefined') {
        sidebar.classList.toggle('closed')
      } else {
        sidebar.classList.toggle('closed', state)
      }
    },
    
    onResize(event) {
      if (event.target.innerWidth <= 700) {
        this.toggleSidebar(true)
      } else {
        this.toggleSidebar(false)
      }
    }
  },
  watch:{
    $route (to, from){
        if (window.innerWidth <= 700) {
          this.toggleSidebar(true)
        }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    if (window.innerWidth <= 700) {
      this.toggleSidebar(true)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  
}
</script>