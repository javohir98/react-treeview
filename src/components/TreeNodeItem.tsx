import { TreeViewContext } from "context";
import { useContext, useState } from "react";
import { TreeNode } from "types/TreeViewTypes";

const TreeNodeItem: React.FC<{ node: TreeNode }> = ({ node }) => {
  const { selectedNodes, toggleNodeWithChildren } =
    useContext(TreeViewContext)!;
  const [expanded, setExpanded] = useState(false);

  const isChecked = selectedNodes.has(node.id);
  const isIndeterminate = node.children
    ? node.children.some((child) => selectedNodes.has(child.id)) &&
      node.children.some((child) => !selectedNodes.has(child.id))
    : false;

  return (
    <div className="ml-4">
      <div className="flex items-center">
        {node.children && (
          <button onClick={() => setExpanded(!expanded)} className="mr-2">
            {expanded ? "-" : "+"}
          </button>
        )}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleNodeWithChildren(node)}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate;
          }}
          className="mr-2"
        />
        {node.label}
      </div>
      {expanded && node.children && (
        <div className="ml-4">
          {node.children.map((child) => (
            <TreeNodeItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeItem;
