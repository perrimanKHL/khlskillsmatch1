import { User, Skill, SkillListing, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Cooking & Baking', icon: 'ChefHat', color: 'bg-orange-500', skillCount: 89 },
  { id: '2', name: 'Home Maintenance', icon: 'Wrench', color: 'bg-blue-500', skillCount: 67 },
  { id: '3', name: 'Financial Planning', icon: 'DollarSign', color: 'bg-green-500', skillCount: 45 },
  { id: '4', name: 'Gardening', icon: 'Flower', color: 'bg-emerald-500', skillCount: 78 },
  { id: '5', name: 'Technology & AI', icon: 'Laptop', color: 'bg-purple-500', skillCount: 156 },
  { id: '6', name: 'Arts & Crafts', icon: 'Palette', color: 'bg-pink-500', skillCount: 92 },
  { id: '7', name: 'Health & Wellness', icon: 'Heart', color: 'bg-red-500', skillCount: 56 },
  { id: '8', name: 'Language Learning', icon: 'MessageCircle', color: 'bg-indigo-500', skillCount: 123 },
  { id: '9', name: 'Sustainable Science', icon: 'Leaf', color: 'bg-teal-500', skillCount: 34 },
  { id: '10', name: 'Policy & Advocacy', icon: 'Scale', color: 'bg-amber-500', skillCount: 28 },
  { id: '11', name: 'Legal Support', icon: 'FileText', color: 'bg-slate-500', skillCount: 41 },
  { id: '12', name: 'Professional Development', icon: 'Briefcase', color: 'bg-cyan-500', skillCount: 63 },
];

export const users: User[] = [
  {
    id: '1',
    name: 'Rojin Ahmed',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    location: 'North London',
    rating: 4.9,
    reviewCount: 32,
    bio: 'Kurdish chef passionate about sharing traditional Kurdish cuisine and modern cooking techniques with our community.',
    skills: [],
    joinedDate: '2023-01-15'
  },
  {
    id: '2',
    name: 'Kawa Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    location: 'East London',
    rating: 4.8,
    reviewCount: 28,
    bio: 'Experienced handyman helping Kurdish families with home repairs and maintenance across London.',
    skills: [],
    joinedDate: '2023-02-20'
  },
  {
    id: '3',
    name: 'Shilan Omar',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    location: 'West London',
    rating: 4.9,
    reviewCount: 24,
    bio: 'Financial advisor dedicated to helping Kurdish community members achieve financial independence in the UK.',
    skills: [],
    joinedDate: '2023-03-10'
  },
  {
    id: '4',
    name: 'Aram Mahmud',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    location: 'South London',
    rating: 4.7,
    reviewCount: 19,
    bio: 'Software engineer passionate about teaching AI and technology skills to Kurdish youth and adults.',
    skills: [],
    joinedDate: '2023-04-05'
  },
  {
    id: '5',
    name: 'Berivan Salih',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    location: 'North London',
    rating: 4.8,
    reviewCount: 31,
    bio: 'Environmental scientist sharing sustainable living practices and climate science with Kurdish families.',
    skills: [],
    joinedDate: '2023-01-28'
  },
  {
    id: '6',
    name: 'Diyar Rashid',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    location: 'Central London',
    rating: 4.6,
    reviewCount: 22,
    bio: 'Kurdish artist and craft instructor helping preserve our cultural arts while teaching modern techniques.',
    skills: [],
    joinedDate: '2023-02-14'
  },
  {
    id: '7',
    name: 'Lavin Kareem',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    location: 'West London',
    rating: 4.9,
    reviewCount: 18,
    bio: 'Human rights lawyer providing legal guidance and advocacy training for Kurdish community members.',
    skills: [],
    joinedDate: '2023-03-22'
  },
  {
    id: '8',
    name: 'Zhyan Ali',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    location: 'East London',
    rating: 4.8,
    reviewCount: 26,
    bio: 'Policy researcher helping Kurdish community members navigate UK systems and advocate for their rights.',
    skills: [],
    joinedDate: '2023-02-08'
  }
];

export const skillListings: SkillListing[] = [
  {
    id: '1',
    user: users[0],
    skill: {
      id: '1',
      name: 'Traditional Kurdish Cooking',
      category: 'Cooking & Baking',
      description: 'Learn to cook authentic Kurdish dishes like dolma, kebab, and traditional breads',
      level: 'beginner',
      duration: '3 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-15',
    location: 'North London',
    availability: ['Weekends', 'Evenings'],
    tags: ['kurdish cuisine', 'traditional cooking', 'cultural heritage']
  },
  {
    id: '2',
    user: users[1],
    skill: {
      id: '2',
      name: 'Basic Home Repairs',
      category: 'Home Maintenance',
      description: 'Essential home maintenance skills every Kurdish family should know - plumbing, electrical basics',
      level: 'beginner',
      duration: '2.5 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-20',
    location: 'East London',
    availability: ['Weekends'],
    tags: ['home repair', 'DIY', 'maintenance']
  },
  {
    id: '3',
    user: users[2],
    skill: {
      id: '3',
      name: 'UK Financial Planning',
      category: 'Financial Planning',
      description: 'Navigate UK banking, taxes, and financial planning as a Kurdish resident',
      level: 'beginner',
      duration: '2 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-18',
    location: 'West London',
    availability: ['Weekdays', 'Evenings'],
    tags: ['UK finance', 'banking', 'tax planning']
  },
  {
    id: '4',
    user: users[3],
    skill: {
      id: '4',
      name: 'AI & Machine Learning Basics',
      category: 'Technology & AI',
      description: 'Introduction to artificial intelligence and machine learning for Kurdish community members',
      level: 'beginner',
      duration: '3 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-22',
    location: 'South London',
    availability: ['Evenings', 'Weekends'],
    tags: ['AI', 'machine learning', 'technology']
  },
  {
    id: '5',
    user: users[4],
    skill: {
      id: '5',
      name: 'Climate Science & Sustainability',
      category: 'Sustainable Science',
      description: 'Understanding climate change and sustainable practices for Kurdish families in London',
      level: 'beginner',
      duration: '2.5 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-25',
    location: 'North London',
    availability: ['Weekends', 'Mornings'],
    tags: ['climate science', 'sustainability', 'environment']
  },
  {
    id: '6',
    user: users[5],
    skill: {
      id: '6',
      name: 'Kurdish Traditional Arts',
      category: 'Arts & Crafts',
      description: 'Learn traditional Kurdish handicrafts, embroidery, and artistic techniques',
      level: 'beginner',
      duration: '2.5 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-28',
    location: 'Central London',
    availability: ['Weekends', 'Afternoons'],
    tags: ['kurdish arts', 'traditional crafts', 'cultural heritage']
  },
  {
    id: '7',
    user: users[6],
    skill: {
      id: '7',
      name: 'UK Legal Rights & Immigration',
      category: 'Legal Support',
      description: 'Understanding your legal rights as a Kurdish resident in the UK, immigration guidance',
      level: 'beginner',
      duration: '2 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-01-30',
    location: 'West London',
    availability: ['Weekdays', 'Evenings'],
    tags: ['legal rights', 'immigration', 'UK law']
  },
  {
    id: '8',
    user: users[7],
    skill: {
      id: '8',
      name: 'Community Advocacy & Policy',
      category: 'Policy & Advocacy',
      description: 'Learn how to advocate for Kurdish community needs and engage with local policy makers',
      level: 'intermediate',
      duration: '3 hours',
      isOffering: true,
      isLearning: false
    },
    type: 'offering',
    createdAt: '2024-02-01',
    location: 'East London',
    availability: ['Weekends', 'Afternoons'],
    tags: ['advocacy', 'policy', 'community organizing']
  }
];
