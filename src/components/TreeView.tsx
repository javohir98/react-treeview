import { TreeViewContext, TreeViewProvider } from "context/TreeViewContext";
import React, { useContext, useEffect } from "react";
import { TreeViewProps } from "types/TreeViewTypes";
import TreeNodeItem from "./TreeNodeItem";

const TreeView: React.FC<TreeViewProps> = ({ data, onChange }) => {
  const { selectedNodes } = useContext(TreeViewContext)!;

  useEffect(() => {
    onChange(Array.from(selectedNodes));
  }, [selectedNodes, onChange]);

  return (
    <div>
      {data.map((node) => (
        <TreeNodeItem key={node.id} node={node} />
      ))}
    </div>
  );
};

const TreeViewWithProvider: React.FC<TreeViewProps> = (props) => (
  <TreeViewProvider>
    <TreeView {...props} />
  </TreeViewProvider>
);

export default TreeViewWithProvider;
