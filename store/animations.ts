interface AnimatedState {
  index: boolean;
  projects: any;
  allProjects: boolean;
}

export const state = (): AnimatedState => ({
  index: false,
  projects: false,
  allProjects: false
});

export const mutations = {
  index(state: AnimatedState) {
    state.index = true;
  },
  projects(state: AnimatedState) {
    state.projects = true;
  },
  allProjects(state: AnimatedState) {
    state.allProjects = true;
  }
};
