import { Dispatch, SetStateAction } from "react";

type TabId = "details" | "description" | "history";

type Tab = {
  id: TabId;
  label: string;
};

const tabs: Tab[] = [
  { id: "details", label: "Details" },
  { id: "description", label: "Description" },
  { id: "history", label: "History" },
];

type Params = {
  setActiveTab: Dispatch<SetStateAction<TabId>>;
  activeTab: TabId;
};

const TabPagination = ({ activeTab, setActiveTab }: Params) => {
  return (
    <div className="flex border-b border-black/5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`cursor-pointer w-1/3 px-4 py-2 rounded-t-md transition-colors duration-200
              ${activeTab === tab.id ? "border-b-1 p4 border-medium " : "p3 hover:text-medium"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabPagination;
