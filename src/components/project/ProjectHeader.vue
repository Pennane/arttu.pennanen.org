<template>
  <div class="projectheader">
    <div class="upper">
      <h2>{{name}}</h2>

      <FindHereButton :link="link" :text="buttontext" />
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
    },
    description: {
      type: String,
      required: true
    }
  },
  components: {
    FindHereButton
  },
  metaInfo() {
    return {
      meta:[
        { title: this.name },
        { vmid: 'description', name: 'description', content: this.description},
        { vmid: 'og:description', property: "og:description", content: this.description},
        { vmid: 'twitter:description', name: "twitter:description", content: this.description}
      ]
    }
      
  },
}
</script>

<style scoped>
.projectheader {
  margin: 3em 0;
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
}

.divider-bullet {
  margin: 0 0.25em 0 0.35em;
  font-weight: 100;
}

.date {
  margin-top: 0.1em;
}

@media screen and (max-width: 700px) {
  .projectheader .upper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
