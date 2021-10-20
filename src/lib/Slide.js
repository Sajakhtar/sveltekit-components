export function slide(node, {isOpen, duration = 500}) {
  // console.log(node, isOpen);

  // Initialize
  let initialHeight = node.offsetHeight;
  node.style.height = isOpen ? 'auto' : 0;
  node.style.overflow = 'hidden';

  let animation = node.animate([
    { height: 0, },
    { height: `${initialHeight}px` }
  ], {
    duration,
    fill: 'both',
    direction: isOpen ? 'reverse' : 'normal',
  });
  animation.pause();

  animation.onfinish = ({ currentTime }) => {
    if(!currentTime) {
      animation.reverse();
      animation.pause();
    }

    node.dispatchEvent(new CustomEvent('animationEnd'))
  };


  return {
    // update: (isOpen) => {
    //   // console.log(isOpen);
    //   node.style.height = isOpen ? 'auto' : 0;
    // }

    update: () => {
      // console.log(animation.currentTime);
      animation.currentTime ? animation.reverse() : animation.play();
    }
  };
}
