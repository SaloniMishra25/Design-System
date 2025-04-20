import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("overview");
    const tabItems = [
      { label: "Overview", value: "overview" },
      { label: "Profile", value: "profile" },
      { label: "Settings", value: "settings" },
    ];
    return (
      <div className="p-4">
        <Tabs tabs={tabItems} activeTab={active} onTabChange={setActive} />
        <p className="mt-4">Current Tab: <strong>{active}</strong></p>
      </div>
    );
  },
};
