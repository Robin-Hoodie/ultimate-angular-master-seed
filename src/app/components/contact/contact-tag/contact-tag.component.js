var contactTag = {
  bindings: {
    tag: '<',
    onChange: '&'
  },
  controller: 'ContactTagController',
  templateUrl: './contact-tag.html'
};

angular
  .module('components.contact')
  .component('contactTag', contactTag);