import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: "Tooltip on top",
    position: "top",
    children: <button className="px-4 py-2 bg-blue-600 text-white rounded">Hover Me</button>,
  },
};
