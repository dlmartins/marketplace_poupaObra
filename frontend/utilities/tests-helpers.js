export const getByTextIgnoreWrapper = (container, text) => {
  const matchesText = (node) => {
    return node.textContent.trim() === text;
  };

  const findTextNode = (node) => {
    if (matchesText(node)) {
      return node;
    }
    for (let child of node.childNodes) {
      const foundNode = findTextNode(child);
      if (foundNode) {
        return foundNode;
      }
    }
    return null;
  };

  return findTextNode(container);
};
