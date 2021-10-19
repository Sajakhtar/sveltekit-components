export function slide(node, isOpen) {
  // console.log(node, isOpen);

  // Initialize
  let initialHeight = node.offsetHeight;
  node.style.height = isOpen ? 'auto' : 0;
  node.style.overflow = 'hidden';

  //
  return {
    update: (isOpen) => {
      // console.log(isOpen);
      node.style.height = isOpen ? 'auto' : 0;
    }
  };
}
