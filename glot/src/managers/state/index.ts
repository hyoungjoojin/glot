import { Context } from './context';

export interface State {
  name: string;
  context: Context;
  onEnter?: () => void;
  onUpdate?: () => void;
}