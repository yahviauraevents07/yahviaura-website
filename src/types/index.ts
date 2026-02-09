// Type definitions for Yahvi Aura Events

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  image: string;
  date?: string;
  location?: string;
  featured?: boolean;
}

export type EventCategory =
  | 'corporate'
  | 'experiential'
  | 'weddings'
  | 'social'
  | 'conferences'
  | 'product-launches'
  | 'exhibitions'
  | 'gala'
  | 'networking'
  | 'political';

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  elevated?: boolean;
  onClick?: () => void;
}
