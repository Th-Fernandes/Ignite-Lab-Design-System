import {Meta, StoryObj } from "@storybook/react";
import {Button, ButtonProps} from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  children: "hello storybook",
  args: {
    children: 'entrar',  
  },
  argTypes: {

  }

} as Meta<ButtonProps>;

export const Default:StoryObj<ButtonProps> = {};
