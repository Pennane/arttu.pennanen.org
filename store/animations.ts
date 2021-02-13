interface State {
  indexAnimationDisplayed: boolean;
}

export const state = (): State => ({
  indexAnimationDisplayed: false
});

export const mutations = {
  set(state: State) {
    state.indexAnimationDisplayed = true;
  }
};
