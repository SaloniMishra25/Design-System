// src/components/Spinner/Spinner.stories.tsx
import React from "react";
import Spinner from "./Spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
  args: {
    size: "sm",
    color: "primary",
  },
};

export const MediumGray: Story = {
  args: {
    size: "md",
    color: "gray",
  },
};

export const LargeSuccess: Story = {
  args: {
    size: "lg",
    color: "success",
  },
};

export const LargeDanger: Story = {
  args: {
    size: "lg",
    color: "danger",
  },
};
