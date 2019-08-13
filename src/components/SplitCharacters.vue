
 <template>
  <span v-if="animate">
    <span v-for="(char, index) of text" :key="index">
      <span
        v-if="char === ' '"
        :class="['char', 'char'+index, 'inlineletter' , 'animated']"
        :style="{ animationDelay: (0.15 * (index + 1) + 's')}"
      >{{ char }}</span>
      <span
        v-else
        :class="['char', 'char'+index, 'animated']"
        :style="{ animationDelay: (0.15 * (index + 1) + 's')}"
      >{{ char }}</span>
    </span>
  </span>
  <span v-else>
    <span v-for="(char, index) of text" :key="index">
      <span v-if="char === ' '" :class="['char', 'char'+index, 'inlineletter']">{{ char }}</span>
      <span v-else :class="['char', 'char'+index]">{{ char }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'SplitCharacters',
  components: {},
  props: {
    text: {
      type: String,
      required: true
    },
    animate: {
      type: Boolean
    }
  }
}
</script>

<style>
.char {
  display: inline-block;
  transition: transform 0.5s ease-in;
  color: #3f61d0;
  color: var(--split-color1);
}

.char.animated {
  animation: bgc linear 12s infinite;
}

.inlineletter {
  display: inline;
}

@keyframes bgc {
  50% {
    color: #4c62a9;
    color: var(--split-color2);
  }
}
</style>