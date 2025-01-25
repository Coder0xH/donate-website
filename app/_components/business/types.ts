import { IconType } from 'react-icons';

export interface StatCardProps {
  icon: IconType;
  title: string;
  value: string;
  description: string;
  modalContent?: React.ReactNode;
}
