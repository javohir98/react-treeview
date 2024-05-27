import { render, screen } from "@testing-library/react";
import TreeView from "components/TreeView";
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

describe("TreeView Component", () => {
  it("renders the tree structure correctly", () => {
    render(
      <Router>
        <TreeView data={data} onChange={() => {}} />
      </Router>
    );

    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Node 2")).toBeInTheDocument();
    expect(screen.queryByText("Child 1.1")).not.toBeInTheDocument();
  });

  it.todo("expands and collapses nodes");

  it.todo("selects and deselects nodes");

  it.todo("selects and deselects all child nodes when parent is toggled");
});
