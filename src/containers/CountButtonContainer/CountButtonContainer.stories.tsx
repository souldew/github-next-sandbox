import { Meta, StoryObj } from "@storybook/react";
import { CountButtonContainer } from "./CountButtonContainer";
import { userEvent, within, expect } from "@storybook/test";

const meta: Meta<typeof CountButtonContainer> = {
  title: "Containers/CountButtonContainer",
  component: CountButtonContainer,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    await new Promise((res) => setTimeout(res, 1000));
    await userEvent.click(button);
    expect(button).toHaveTextContent("Count: 1");
    await new Promise((res) => setTimeout(res, 1000));
    await userEvent.click(button);
    expect(button).toHaveTextContent("Count: 2");
  },
};
