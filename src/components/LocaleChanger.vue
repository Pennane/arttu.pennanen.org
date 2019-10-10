<template>
  <div class="locale-changer">
    <input
      v-for="(lang, i) in langs"
      :key="`Lang${i}`"
      type="button"
      :value="lang"
      @click="setLocale(lang)"
      :class="{active: lang === currentLocale}"
    />
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      langs: ['fi', 'en']
    }
  },
  methods: {
    setLocale: function(locale) {
      this.$root.$i18n.locale = locale
      localStorage.locale = locale
      this.$store.commit('setLocale', locale)
    }
  },
  computed: {
    currentLocale: function() {
      return this.$root.$i18n.locale
    }
  }
}
</script>

<style scoped>
.locale-changer {
  padding: 0 1.4em;
}
</style>

<style scoped>
.locale-changer {
  display: flex;
  flex-wrap: wrap;
}

input {
  border: none;
  background-color: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2em;
  margin: 0.15em;
  color: var(--font-2)
}

input.active {
  font-weight: 400;
  cursor: default;
}
</style>