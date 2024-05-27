export interface TreeNode {
  label: string;
  id: string;
  children?: TreeNode[];
}

export interface TreeViewProps {
  data: TreeNode[];
  onChange: (selectedNodes: string[]) => void;
  renderLabel?: (node: TreeNode) => React.ReactNode;
}

export interface TreeViewContextProps {
  selectedNodes: Set<string>;
  toggleNode: (id: string) => void;
  toggleNodeWithChildren: (node: TreeNode) => void;
}
