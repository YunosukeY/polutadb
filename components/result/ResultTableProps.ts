import { Singing } from '../../data/singings';

export default interface ResultTableProps {
  table: Singing[];
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
}
