// Button.stories.js
import Button from '../components/Button.vue';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};
