export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  reviewCount: number;
  bio: string;
  skills: Skill[];
  joinedDate: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  isOffering: boolean;
  isLearning: boolean;
}

export interface SkillListing {
  id: string;
  user: User;
  skill: Skill;
  type: 'offering' | 'seeking';
  createdAt: string;
  location: string;
  availability: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  skillCount: number;
}

export interface Review {
  id: string;
  userId: string;
  skillId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
