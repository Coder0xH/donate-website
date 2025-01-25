import { IconType } from 'react-icons';

export interface StatCardProps {
  icon: IconType;
  title: string;
  value: string;
  color?: string;
  endTime?: string | null;
  details?: {
    title: string;
    items: {
      date: string;
      amount: string;
      description?: string;
      status: string;
    }[];
  };
  modalContent?: React.ReactNode;
}
