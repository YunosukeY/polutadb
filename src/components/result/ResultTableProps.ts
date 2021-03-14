import { Singing } from '../../data/interfaces';

export default interface ResultTableProps {
  table: Singing[];
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
}
