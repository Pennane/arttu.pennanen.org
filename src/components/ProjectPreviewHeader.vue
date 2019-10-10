<template>
  <div class="projectheader preview">
    <div class="upper">
      <h2>{{name}}</h2>
    </div>
    <div v-if="true" class="lower">
      <span class="type">{{type}}</span>
      <span class="divider-bullet">•</span>
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
  max-width: 630px;
  clear: both;
}

.upper h2 {
  margin: 0;
}

.upper {
  display: flex;
  align-items: center;
  align-self: baseline;
  margin-bottom: 0.5em;
  color: var(--font-4);
}

.lower {
  display: flex;
  align-items: center;
  color: var(--font-5);
  margin-bottom: 1em;
}

.divider-bullet {
  margin: 0 0.25em 0 0.35em;
  font-weight: 100;
}

@media screen and (max-width: 700px) {
  .content {
    margin-left: 15px;
    margin-right: 15px;
  }

  .projectheader .upper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
