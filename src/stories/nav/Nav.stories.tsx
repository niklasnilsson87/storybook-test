import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Nav from './Nav'

export default {
  title: 'Example/Nav',
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const NavBar = Template.bind({});
NavBar.args = {};
