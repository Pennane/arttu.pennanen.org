<template>
  <div>
    <header>
      <h1>All Projects</h1>
      <p class="lead">Even the oldest and the ugliest</p>
    </header>

    <section v-if="projects" class="projects">
      <ProjectLink
        v-for="project in projects"
        :key="'link-' + project.name['en']"
        :project="project"
      />
    </section>
  </div>
</template>

<script lang="ts">
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

import Vue from "vue";
import data from "~/assets/data/allprojects.json";

export default Vue.extend({
  computed: {
    projects(): Project[] {
      return data;
    }
  },
  head() {
    return {
      title: "Old Projects | Arttu Pennanen",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 3.4em;
}
</style>
