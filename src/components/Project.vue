<template>
  <div>
    <div class="project preview" v-if="preview">
      <ProjectPreviewHeader
        :name="name"
        :date="date"
        :type="type"
        :link="link"
        :buttontext="buttontext"
      />
      <div class="projectbody">
        <ProjectImage alt :src="previewImage" preview></ProjectImage>
        <p class="project-preview-desc">{{previewDescription}}</p>
      </div>
      <router-link class="contentlink projectpreviewlink" :to="filelocation">{{$t("read_more")}}</router-link>
    </div>
    <div class="project" v-else>
      <ProjectHeader :description="previewDescription" :name="name" :date="date" :type="type" :link="link" :buttontext="buttontext"></ProjectHeader>
      <div class="projectbody">
        <slot></slot>
      </div>
      <div class="projectfooter">
        <span>pennanen was here</span>
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
    },
    previewDescription: {
      type: String
    },
    previewImage: {},
    filelocation: {
      type: String,
      default: 'test'
    }
  },
  computed: {
    time() {
      return this.$root.$children[0].$options.methods.parseDate(this.date)
    }
  }
}
</script>

<style scoped>

.project:not(.preview) {
  padding: 1em calc(6vw + 0.5em); 
      max-width: 800px;
}

.projectbody {
  background-color: var(--bg-1)
}

.projectbody p {
  line-height: 1.6;
}

.projectbody > * {
  padding: 0;
}

.projectfooter {
  background-color: rgba(0, 0, 0, 0.1);
  margin: 2.2em 0;
  font-style: italic;
  display: flex;
  border-radius: 3em;
  flex: 1 1 auto;
  justify-content: center;
  padding: 0.6em 0em !important;
  align-items: center;
  margin-bottom: 5em;
}

.projectpreviewlink {
  background: none;
  text-shadow: none;
  color: var(--link-color-2);
  font-weight: 400;
}

.projectpreviewlink:hover {
  color: var(--link-hover-2);
}
</style>