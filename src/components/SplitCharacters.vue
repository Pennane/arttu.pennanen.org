
 <template>
  <span>
    <span v-for="(char, index) of text">
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

  .char {
  display: inline-block;
  transition: transform 0.5s ease-in;
  color: #3f61d0;
  color: var(--split-color1);
  animation: bgc linear 12s infinite;
}

.inlineletter {
  display: inline;
}

@keyframes bgc {
  50% {
    color: #4c62a9;
    color: var(--split-color2)
  }
}
</style>