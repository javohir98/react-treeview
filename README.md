# React Treeview with Checkboxes

## Usage

npm test or yarn test

## Usage

Include the `TreeView` component and pass the required props:

```tsx
import React, { useState } from "react";
import TreeView from "./TreeView";
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
      <div>
        <TreeView data={data} onChange={setSelectedNodes} />
        <div>Selected Nodes: {selectedNodes.join(", ")}</div>
      </div>
    </Router>
  );
};

export default App;
```
