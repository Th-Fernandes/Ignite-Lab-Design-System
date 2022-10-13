import {Meta, StoryObj } from "@storybook/react";
import {Checkbox, CheckboxProps} from "./CheckBox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  children: "hello storybook",
  args: {
    children: 'entrar',  
  },
  argTypes: {

  }

} as Meta<CheckboxProps>;

export const Default:StoryObj<CheckboxProps> = {};
