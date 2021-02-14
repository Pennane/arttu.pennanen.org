<template>
  <div>
    <header>
      <h1>Personal projects</h1>
    </header>

    <section v-if="projects" class="projects">
      <SequentialEntrance :storeTarget="animationStoreTarget">
        <ProjectLink
          v-for="project in projects"
          :key="'link-' + project.name['en']"
          :project="project"
        />
      </SequentialEntrance>

      <p class="old-projects">
        <nuxt-link to="/all" title="every project">
          Searching for something that has been here before? Try here</nuxt-link
        >.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Project } from "../types/index";
import Vue from "vue";
import data from "~/assets/data/projects.json";

export default Vue.extend({
  data() {
    return {
      animationStoreTarget: "projects"
    };
  },
  computed: {
    projects(): Project[] {
      return data;
    }
  },
  head() {
    return {
      title: "Projects | Arttu Pennanen",
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
.old-projects {
  margin-top: 2.5em;
  color: var(--secondary-text-color);
  text-align: center;
}
</style>
