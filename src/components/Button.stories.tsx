import {Meta, StoryObj } from "@storybook/react";
import {Button, ButtonProps} from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  children: "hello storybook",
  args: {
    children: 'entrar',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    }
  }

} as Meta<ButtonProps>;

export const Default:StoryObj<ButtonProps> = {};
