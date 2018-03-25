import _ from 'lodash';
import Mousetrap from 'mousetrap';

export default {
  methods: {
    setKeybindSubscription(subscription) {
      _.each(subscription, (listener) => {
        Mousetrap.bind(listener.key, listener.fn);
      });
    },
    clearKeybindSubscription(subscription) {
      _.each(subscription, (listener) => {
        Mousetrap.unbind(listener.key, listener.fn);
      });
    },
  },
  watch: {
    keybind(newValue, oldValue) {
      this.clearKeybindSubscription(oldValue);
      this.setKeybindSubscription(newValue);
    },
  },
  created() {
    this.setKeybindSubscription(this.keybind);
  },
  destroyed() {
    this.clearKeybindSubscription(this.keybind);
  },
};
