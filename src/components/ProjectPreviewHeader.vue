<template>
  <div class="projectheader preview">
    <div class="upper">
      <h2>{{name}}</h2>
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
  name: 'ProjectHeader',
  props: {
    link: {
      type: String,
      required: true
    },
    buttontext: {
      type: String
    },
    name: {
      type: String,
      default: 'Unknown Project'
    },
    type: {
      type: String
    },
    date: {
      type: String
    }
  },
  components: {
    FindHereButton
  }
}
</script>

<style scoped>
.projectheader {
  margin: 0.5em 0;
  margin-bottom: 1.3em;
  max-width: 630px;
  clear: both;
}

.projectheader .upper h2 {
  margin: 0;
}

.projectheader .upper {
  display: flex;
  align-items: center;
  align-self: baseline;
  margin-bottom: 0.8em;
}

.projectheader .lower {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .content {
    margin-left: 33px;
  }

  .projectheader .upper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
