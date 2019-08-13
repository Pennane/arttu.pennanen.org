
 <template>
  <div :class="{'sidebar':true, 'closed':(this.startClosed === true)}">
    <div class="sidebar-toggle">
      <button id="sidebar-toggler" @click="toggleSidebar()">
        <font-awesome-icon icon="chevron-left" />
      </button>
    </div>
    <PageNavbar />
    <PageFooter />
  </div>
</template>

<script>
import PageNavbar from '@/components/PageNavbar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'PageSidebar',
  components: {
    PageNavbar,
    PageFooter
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
      console.log(sidebar)
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

<style scoped>
.sidebar {
  background-color: rgb(222, 222, 222) ´;
  background-color: var(--bg-3);
  width: 16em;
  transition: width 0.25s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

#sidebar-toggler {
  transition: transform 0.1s ease;
  background: none;
  border: none;
  outline: none;
}

.sidebar-toggle {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sidebar-toggle >>> button {
  all: unset;
  display: block;
  color: black;
  color: var(--font1);
  padding: 0.5em;
  padding-right: 0.8em;
  cursor: pointer;
}

.sidebar.closed {
  width: 33px;
  min-width: unset;
  pointer-events: none;
}

.sidebar.closed .sidebar-toggle {
  pointer-events: all;
}

.sidebar.closed footer {
  opacity: 0;
}

.sidebar.closed > .sidebar-toggle {
  justify-content: flex-start;
}

.sidebar.closed #sidebar-toggler {
  transform: rotate(180deg);
}

.sidebar.closed >>> .navbar {
  opacity: 0;
}

@media screen and (max-width: 700px) {
  .sidebar {
    position: absolute;
    min-width: unset;
    font-size: 0.95em;
    height: 100%;
  }
}
</style>