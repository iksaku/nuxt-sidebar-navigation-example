export default function(context) {
  // Commit sidebar toggle and set it to false
  context.store.commit("sidebar/toggle", false);
}
