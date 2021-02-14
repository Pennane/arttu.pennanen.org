<template>
  <div>
    <header>
      <h1>All Projects</h1>
      <p class="lead">Even the oldest and the ugliest</p>
    </header>

    <section v-if="projects" class="projects">
      <SequentialEntrance storeTarget="allProjects">
        <ProjectLink
          v-for="project in projects"
          :key="'link-' + project.name['en']"
          :project="project"
        />
      </SequentialEntrance>
    </section>
  </div>
</template>

<script lang="ts">
import { Project } from "../types/index";

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
