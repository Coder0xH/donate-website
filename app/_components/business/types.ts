import { IconType } from 'react-icons';

export interface StatCardProps {
  icon: IconType;
  title: string;
  value: string;
  color?: string;
  details?: {
    title: string;
    items: {
      date: string;
      amount: string;
      description: string;
      status: string;
    }[];
  };
  modalContent?: React.ReactNode;
}
