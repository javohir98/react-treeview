import React, { useState } from "react";
import TreeView from "./components/TreeView";
import { BrowserRouter as Router } from "react-router-dom";

// mock data
const data = [
  {
    label: "Node 1",
    id: "1",
    children: [
      {
        label: "Child 1.1",
        id: "1.1",
        children: [
          { label: "Child 1.1.1", id: "1.1.1" },
          { label: "Child 1.1.2", id: "1.1.2" },
        ],
      },
      { label: "Child 1.2", id: "1.2" },
    ],
  },
  {
    label: "Node 2",
    id: "2",
    children: [
      {
        label: "Child 2.1",
        id: "2.1",
        children: [
          { label: "Child 2.1.1", id: "2.1.1" },
          { label: "Child 2.1.2", id: "2.1.2" },
          { label: "Child 2.1.3", id: "2.1.3" },
        ],
      },
      { label: "Child 2.2", id: "2.2" },
      {
        label: "Child 2.3",
        id: "2.3",
        children: [
          { label: "Child 2.3.1", id: "2.3.1" },
          { label: "Child 2.3.2", id: "2.3.2" },
          { label: "Child 2.3.3", id: "2.3.3" },
        ],
      },
    ],
  },
  {
    label: "Node 3",
    id: "3",
  },
];

const App: React.FC = () => {
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

  return (
    <Router>
      <div className="p-4">
        <div className="mb-4">React Treeview with Checkboxes</div>

        <TreeView
          data={data}
          onChange={setSelectedNodes}
          renderLabel={(node) => (
            <span className="text-blue-500">{node.label}</span>
          )}
        />

        <div className="mt-4">Selected Nodes: {selectedNodes.join(", ")}</div>
      </div>
    </Router>
  );
};

export default App;
