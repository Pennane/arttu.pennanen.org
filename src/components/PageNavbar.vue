
 <template>
  <nav class="navbar">
    <NavItem to="/" title="Home" :local="true" :main="true" />
    <NavItem to="/contact" title="Contact" :local="true" :main="true" />

    <div class="navdivide" />

    <NavItem head headtext="Projects" />
    <NavItem to="/typechase" title="Typechase" :local="true" />
    <NavItem to="/peigombot" title="Peigom bot" :local="true" />
    <NavItem to="/spotifyfavorites" title="Spotify Favorites" :local="true" />

    <NavItem head headtext="Catch me" />
    <NavItem to="https://github.com/Pennane" title="Github" :icon="['fab', 'github']" />
    <NavItem to="https://twitter.com/arttupennane" title="Twitter" :icon="['fab', 'twitter']" />
  </nav>
</template>

<script>
import NavItem from '@/components/PageNavbarNavitem'

export default {
  name: 'PageNavbar',
  components: {
    NavItem
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

@media screen and (max-height: 600px) {
  .navbar {
    overflow: auto;
  }
}
</style>