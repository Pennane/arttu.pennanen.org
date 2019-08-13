
 <template>
  <div v-if="head" :class="['navitem', 'head']">
    <font-awesome-icon v-if="icon" :icon="[...icon]"/>
    <span>{{headtext}}</span>
  </div>
  <div v-else>
    <router-link v-if="local" :to="to" :class="['navitem', noicon]">
      <font-awesome-icon v-if="icon" :icon="[...icon]"/>
      <span>{{ title }}</span>
    </router-link>
    <a v-else :href="to" :class="['navitem', noicon]">
      <font-awesome-icon v-if="icon" :icon="[...icon]"/>
      <span>{{ title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  components: {},
  props: {
    to: {
      type: String
    },
    title: {
      type: String
    },
    icon: {
      type: Array
    },
    local: {
      type: Boolean
    },
    head: {
      type: Boolean
    },
    headtext: {
      type: String,
      default: 'Missing'
    }
  },
  computed: {
    noicon: function() {
      if (this.icon) return 'has-icon'
      else return 'no-icon'
    }
  }
}
</script>

<style scoped>
nav.navbar {
  line-height: 1.6;
  transition: opacity 0.3s;
  overscroll-behavior: contain;
}

.navdivide {
  height: 1px;
  background-color: #60656f;
  background-color: var(--nav-divide);
  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1), rgba(0,0,0,0)); */
  box-sizing: border-box;
  margin: 0.3em 0;
}

.navitem {
  font-size: 0.98em;
  font-weight: 350;
  text-decoration: none;
  display: block;
  height: 2em;
  padding: 0.1em;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  border-left: 0.27rem solid transparent;
  padding-left: 1.3em;
  padding-right: 1em;
  white-space: nowrap;
}

.navitem >>> span {
  font-size: 1.03em;
  color: black;
  color: var(--font-1);
}

.navitem >>> i,
.navitem >>> svg {
  width: 1em !important;
  text-align: center;
  font-size: 1.3em;
  margin-right: 0.75rem;
  color: #475994;
  color: var(--font-3);
}

.navitem.head {
  cursor: initial;
  margin-top: 1.6em;
  padding-left: 1em;
  font-weight: 450;
}

.navitem:not(.head):hover {
  background-color: #3f61d0;
  background-color: var(--accent-1);
}

.navitem:not(.head):hover >>> span {
  color: #f7f7f7;
  color: var(--contrast-font1);
}

.navitem:not(.head):hover >>> i,
.navitem:not(.head):hover >>> svg {
  color: #e4e4e4;
  color: var(--contrast-font2);
}

.navitem.no-icon {
  padding-left: 1.3em;
}

.router-link-exact-active.navitem {
  background-color: #3f61d0;
  background-color: var(--accent-1);
  border-left-color: #a359ce;
  border-left-color: var(--accent-2);
}

.router-link-exact-active.navitem >>> span {
  color: #f7f7f7;
  color: var(--contrast-font1);
}

@media screen and (max-height: 600px) {
  .navbar {
    overflow: auto;
  }

  .navitem {
    font-size: 0.9em;
    padding: 1px;
    padding-left: 1.3em;
  }

  .navitem-no-icon {
    padding-left: 1em;
  }

  .navitem.head {
    margin-top: 1em;
  }
}
</style>