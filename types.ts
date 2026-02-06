
export enum Category {
  STARTER = 'Starters',
  MAIN = 'Main Courses',
  DESSERT = 'Desserts',
  DRINK = 'Beverages'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tags: string[];
}

export interface Reservation {
  name: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
