import type { Meta, StoryObj } from "@storybook/react";
import TagBadge from "./TagBadge";

const meta: Meta<typeof TagBadge> = {
  title: "Components/TagBadge",
  component: TagBadge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TagBadge>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};
export const Neutral : Story = {
  args: {
    label: "Neutral",
    variant: "neutral",
  },
};
