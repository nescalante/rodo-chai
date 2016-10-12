'use strict';

module.exports = rodoChai;

function rodoChai(chai, utils) {
  function getMessages(action, nonNegatedSuffix, obj, arg) {
    const verbPhrase = 'have ';
    // eslint-disable-next-line no-param-reassign
    nonNegatedSuffix = nonNegatedSuffix || '';

    if (nonNegatedSuffix.substring(nonNegatedSuffix.length - 1) === ' ') {
      // eslint-disable-next-line no-param-reassign
      nonNegatedSuffix += obj.invokedCount;
    }

    if (action.substring(action.length - 1) === ' ') {
      // eslint-disable-next-line no-param-reassign
      action += arg;
    }

    return {
      affirmative() {
        return `expected endpoint to ${verbPhrase}${action}${nonNegatedSuffix}`;
      },
      negative() {
        return `expected endpoint to not ${verbPhrase}${action}`;
      },
    };
  }

  function rodoProperty(name, action, nonNegatedSuffix) {
    utils.addProperty(chai.Assertion.prototype, name, function addProperty() {
      /* eslint-disable no-underscore-dangle */
      const messages = getMessages(action, nonNegatedSuffix, this._obj);
      this.assert(this._obj[name], messages.affirmative, messages.negative);
      /* eslint-enable no-underscore-dangle */
    });
  }

  function rodoPropertyAsBooleanMethod(name, action, nonNegatedSuffix) {
    utils.addMethod(chai.Assertion.prototype, name, function addMethod(arg) {
      /* eslint-disable no-underscore-dangle */
      const messages = getMessages(action, nonNegatedSuffix, this._obj, arg);
      this.assert(this._obj[name] === arg, messages.affirmative, messages.negative);
      /* eslint-enable no-underscore-dangle */
    });
  }

  rodoProperty('invoked', 'been invoked', ' at least once, but it was never invoked');
  rodoPropertyAsBooleanMethod('invokedCount', 'been invoked exactly ', ', but it was invoked ');
  rodoProperty('invokedOnce', 'been invoked exactly once', ', but it was invoked ');
  rodoProperty('invokedTwice', 'been invoked exactly twice', ', but it was invoked ');
  rodoProperty('invokedThrice', 'been invoked exactly thrice', ', but it was invoked ');
}
