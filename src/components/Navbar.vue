
 <template>
  <nav class="navbar">
    <navlink to="/" title="Home" :local="true" :main="true"></navlink>
    <navlink to="/contact" title="Contact" :local="true" :main="true"></navlink>

    <div class="navdivide"></div>
    <div class="navitem head">
      <span>Projects</span>
    </div>

    <navlink to="/typechase" title="Typechase" :local="true"></navlink>
    <navlink to="/peigombot" title="Peigom bot" :local="true"></navlink>
    <navlink to="/spotifyfavorites" title="Spotify Favorites" :local="true"></navlink>

    <div class="navitem head">
      <span>Catch me</span>
    </div>
    <navlink to="https://github.com/Pennane" title="Github" :icon="['fab', 'github']"></navlink>

    <navlink to="https://twitter.com/arttupennane" title="Twitter" :icon="['fab', 'twitter']"></navlink>
  </nav>
</template>

<script>
import Navlink from '@/components/Navlink'

export default {
  name: 'Navbar',
  components: {
    navlink: Navlink
  }
}
</script>