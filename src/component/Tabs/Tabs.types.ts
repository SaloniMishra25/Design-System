// src/components/Tabs/Tabs.types.ts
export type TabItem = {
    label: string;
    value: string;
  };
  
  export interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (value: string) => void;
  }
  