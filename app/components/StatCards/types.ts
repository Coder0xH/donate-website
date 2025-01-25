export interface StatItem {
  date: string;
  amount: string;
  description: string;
  status: string;
}

export interface StatDetails {
  title: string;
  items: StatItem[];
}

export interface StatCardProps {
  icon: any;
  value: string;
  title: string;
  color: string;
  details: StatDetails;
}
