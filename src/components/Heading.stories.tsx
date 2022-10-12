import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomChild: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>,
  },
};
