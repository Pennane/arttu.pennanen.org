<template>
  <div>
    <div class="project" v-if="preview">
      <ProjectPreviewHeader
        :name="name"
        :date="date"
        :type="type"
        :link="link"
        :buttontext="buttontext"
      />
      <div class="projectbody">
        <slot></slot>
      </div>
    </div>
    <div class="project" v-else>
      <ProjectHeader :name="name" :date="date" :type="type" :link="link" :buttontext="buttontext"></ProjectHeader>
      <div class="projectbody">
        <slot></slot>
      </div>
      <div class="projectfooter">
        <span>teknologiat käytetty jne</span>
        <span>vanilla js</span>
        <span>hatunnostot</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue'
import ProjectImage from '@/components/ProjectImage.vue'
import ProjectPreviewHeader from '@/components/ProjectPreviewHeader.vue'

export default {
  name: 'project',
  components: {
    ProjectHeader,
    ProjectPreviewHeader,
    ProjectImage
  },
  props: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    type: {
      type: String
    },
    link: {
      type: String
    },
    buttontext: {
      type: String
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    time() {
      return this.$root.$children[0].$options.methods.parseDate(this.date)
    }
  }
}
</script>
