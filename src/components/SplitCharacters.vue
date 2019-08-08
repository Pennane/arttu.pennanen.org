
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
        :class="['char', 'char'+char]"
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
  color: #334ce5;
  animation: bgc ease 12s infinite;
}


.inlineletter {
  display: inline;
}

@keyframes bgc {
  50% {
    color: #2f84e0;
  }
}

@media screen and (max-width: 900px) { 
  .char5 {
  display:block
}

.char {
      font-size: calc(0.45em + 4.2vw);
}


}
</style>