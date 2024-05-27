import React, { useState } from "react";
import TreeView from "./components/TreeView";
import { BrowserRouter as Router } from "react-router-dom";

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
  { label: "Node 2", id: "2" },
];

const App: React.FC = () => {
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

  return (
    <Router>
      <div className="p-4">
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
