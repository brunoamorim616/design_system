import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    size: "md",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    size: "md",
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomChild: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>,
  },
};
