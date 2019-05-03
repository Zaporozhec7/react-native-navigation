const { Navigation } = require('react-native-navigation');
const Colors = require('./Colors');

const setDefaultOptions = () => Navigation.setDefaultOptions({
  layout: {
    componentBackgroundColor: Colors.background,
    orientation: ['portrait']
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow'
  },
  bottomTab: {
    selectedIconColor: Colors.primary,
    selectedTextColor: Colors.primary,
    iconInsets: {
      top: 3,
      left: 3,
      bottom: 3,
      right: 3,
    },
  }
});

module.exports = {
  setDefaultOptions
}