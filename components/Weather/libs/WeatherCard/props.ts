import cityData from 'definitions/cityData';
import { AnimationControls } from 'framer-motion';

export default interface Props {
  data: cityData;
  custom?: number;
  controls?: AnimationControls | boolean;
  classes?: string | undefined;
  onClick?: (i: number) => void;
}
