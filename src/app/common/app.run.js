export default ($transitions, cfpLoadingBar) => {
  $transitions.onStart({}, cfpLoadingBar.start);
  $transitions.onSuccess({}, cfpLoadingBar.complete);
}