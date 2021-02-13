<template>
  <a
    class="project-link"
    :href="
      project.custom_url ? project.url : 'https://pennanen.dev/' + project.url
    "
  >
    <div class="project">
      <img
        class="project--image"
        :src="
          project.icon
            ? project.icon
            : require('~/assets/images/placeholder.png')
        "
        :alt="project.name[lang]"
        height="50"
        width="50"
      />
      <div class="project--main">
        <span class="project--main--name">{{ project.name[lang] }}</span>
        <span class="project--main--description" v-if="project.description"
          >{{ project.description[lang] }}
        </span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Project {
  directory: string;
  url: string;
  custom_url?: boolean;
  name: {
    en: string;
    fi: string;
  };
  description?: {
    en: string;
    fi: string;
  };
  icon?: string;
  date: number;
}

export default Vue.extend({
  data() {
    return {
      lang: "en"
    };
  },
  props: {
    project: Object as PropType<Project>
  }
});
</script>

<style scoped lang="scss">
.project-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.15em;
  margin-bottom: 0.25em;
  display: block;

  &:active {
    border-color: var(--border-color);
    border-radius: 6px;
  }

  .project {
    display: flex;
    padding: 0.4em 0.7em;
    &--image {
      height: 50px;
      width: 50px;
      border-radius: 4px;
      // border: 1px solid var(--light-border-color);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.04);
      margin-right: 0.7em;
      flex: 0 0 auto;
    }

    &--main {
      flex: 1 1 auto;
      padding-right: 1em;
    }

    &--main--name {
      color: var(--link-color);
      font-weight: 500;
      display: block;
    }

    &--main--description {
      color: var(--secondary-text-color);
    }
  }
}
</style>
