// Card.stories.js
import Card from '../components/Card.vue';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card Title',
  description: 'This is a sample description for the card component. It provides brief information.',
  image: 'https://via.placeholder.com/300',
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  title: 'Card with Long Description',
  description: 'This card contains a longer description to demonstrate how it looks with more text. The card should adapt its size to accommodate the content.',
  image: 'https://via.placeholder.com/300',
};
