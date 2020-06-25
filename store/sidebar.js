export const state = () => ({
  open: false
});

export const mutations = {
  toggle(state, open = null) {
    if (open === null) {
      open = !state.open;
    }

    state.open = open;
  }
};
