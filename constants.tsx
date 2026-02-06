
import { MenuItem, Category } from './types';

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Burrata',
    description: 'Fresh burrata cheese with black truffle shavings, aged balsamic, and heirloom tomatoes.',
    price: 18,
    category: Category.STARTER,
    image: 'https://picsum.photos/seed/burrata/600/400',
    tags: ['Vegetarian', 'Popular']
  },
  {
    id: '2',
    name: 'Wagyu Beef Tartare',
    description: 'Hand-cut wagyu, quail egg yolk, cornichons, and toasted sourdough.',
    price: 24,
    category: Category.STARTER,
    image: 'https://picsum.photos/seed/tartare/600/400',
    tags: ['Premium']
  },
  {
    id: '3',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice, seasonal mushrooms, parmesan crisps, and truffle oil.',
    price: 28,
    category: Category.MAIN,
    image: 'https://picsum.photos/seed/risotto/600/400',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: '4',
    name: 'Pan-Seared Scallops',
    description: 'Hokkaido scallops, pea purée, pancetta dust, and lemon butter sauce.',
    price: 36,
    category: Category.MAIN,
    image: 'https://picsum.photos/seed/scallops/600/400',
    tags: ['Seafood']
  },
  {
    id: '5',
    name: 'Lavender Crème Brûlée',
    description: 'Classic custard infused with organic lavender, caramelized sugar crust.',
    price: 14,
    category: Category.DESSERT,
    image: 'https://picsum.photos/seed/creme/600/400',
    tags: ['Sweet']
  },
  {
    id: '6',
    name: 'Espresso Martini',
    description: 'Freshly brewed espresso, premium vodka, and coffee liqueur.',
    price: 16,
    category: Category.DRINK,
    image: 'https://picsum.photos/seed/martini/600/400',
    tags: ['Alcoholic']
  }
];

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Reservations', href: '#/reservations' },
  { label: 'AI Concierge', href: '#/concierge' },
  { label: 'Neural Visualizer', href: '#/visualizer' }
];
