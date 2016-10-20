import AuthFormHtml from './auth-form.html';
import AuthFormController from './auth-form.controller';

const authForm = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: '&'
  },
  template: AuthFormHtml,
  controller: AuthFormController
};

export default authForm;