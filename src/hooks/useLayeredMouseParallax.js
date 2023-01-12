import useAnimationFrame from './useAnimationFrame';
import useMousePosition from './useMousePosition';
import NumberRange from '../utils/NumberRange';
import mapRange from '../utils/mapRange';

const useLayeredMouseParallaxAnimation = ({ refs, limitX, limitY, ease }) => {
  const mousePosition = useMousePosition();
  const animation = () => {
    const { x, y } = mousePosition;

    const posX = mapRange(
      new NumberRange(0, window.innerWidth),
      new NumberRange(-limitX, limitX)
    )(x);
    const posY = mapRange(
      new NumberRange(0, window.innerHeight),
      new NumberRange(-limitY, limitY)
    )(y);

    refs.current.forEach((ref, index) => {
      const currentX = parseFloat(ref.style.getPropertyValue('--x')) || 0;
      const currentY = parseFloat(ref.style.getPropertyValue('--y')) || 0;

      const newX = currentX + (posX / (index + 1) - currentX) * ease;
      const newY = currentY + (posY / (index + 1) - currentY) * ease;

      ref.style.setProperty('--x', newX);
      ref.style.setProperty('--y', newY);
    });
  };

  useAnimationFrame(animation, [mousePosition]);
};

export default useLayeredMouseParallaxAnimation;
