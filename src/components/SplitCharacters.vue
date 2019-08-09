
 <template>
  <span>
    <span v-for="(char, index) of text" v-bind:key="text[char]">
      <span
        v-if="char === ' '"
        :class="['char', 'char'+index, 'inlineletter']"
        v-bind:style="{ animationDelay: (0.15 * (index + 1) + 's')}"
      >{{ char }}</span>
      <span
        v-else
        :class="['char', 'char'+index]"
        v-bind:style="{ animationDelay: (0.15 * (index + 1) + 's')}"
      >{{ char }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Navlink',
  components: {},
  props: {
    text: String
  }
}
</script>

<style>

</style>