import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
      description: "Button variant",
      defaultValue: "primary",
    },
    onClick: {
      action: "clicked",
      description: "Button click handler",
    },
    children: {
      control: "text",
      description: "Button text",
    },
  },
};

const onClick = () => {
  window.alert("Clicked!");
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    onClick: onClick,
    children: "Click me!",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    onClick: onClick,
    children: "Click me!",
  },
};
