import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TreeNode, TreeViewContextProps } from "types/TreeViewTypes";

export const TreeViewContext = createContext<TreeViewContextProps | undefined>(
  undefined
);

export const TreeViewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set());
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNode = (id: string) => {
    setSelectedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleNodeWithChildren = (node: TreeNode) => {
    setSelectedNodes((prev) => {
      const newSet = new Set(prev);
      const toggleRecursive = (node: TreeNode, selected: boolean) => {
        if (selected) {
          newSet.add(node.id);
        } else {
          newSet.delete(node.id);
        }
        node.children?.forEach((child) => toggleRecursive(child, selected));
      };

      const isSelected = newSet.has(node.id);
      toggleRecursive(node, !isSelected);
      return newSet;
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selected = params.get("selected");

    if (selected) {
      setSelectedNodes(new Set(selected.split(",")));
    }
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (selectedNodes.size > 0) {
      params.set("selected", Array.from(selectedNodes).join(","));
    } else {
      params.delete("selected");
    }

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true }
    );
  }, [selectedNodes, location.search, navigate]);

  return (
    <TreeViewContext.Provider
      value={{ selectedNodes, toggleNode, toggleNodeWithChildren }}
    >
      {children}
    </TreeViewContext.Provider>
  );
};
