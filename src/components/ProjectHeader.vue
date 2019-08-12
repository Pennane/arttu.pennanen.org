<template>
  <div class="projectheader">
    <div class="upper">
      <h2>{{name}}</h2>

      <findherebutton :link="link" :text="buttontext" />
    </div>
    <div v-if="true" class="lower">
      <span class="type">{{type}}</span>
      <span class="date">{{date}}</span>
    </div>
  </div>
</template>

<script>
import FindHereButton from '@/components/FindHereButton'

export default {
  name: 'projectheader',
  props: ['link', 'buttontext', 'name', 'desc', 'type', 'date'],
  components: {
    findherebutton: FindHereButton
  }
}
</script>
