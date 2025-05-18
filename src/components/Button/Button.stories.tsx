import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

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
  args: {
    onClick: fn(),
  },
  decorators: [
    (story) => (
      <div style={{ padding: "3em", backgroundColor: "red" }}>{story()}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click me!",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "blue" }}>
        <Story />
      </div>
    ),
  ],
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Click me!",
  },
};
