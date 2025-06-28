// src/types/index.ts (اسم الملف المقترح)

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  quote: string;
  skills: string[];
  graduationProject: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  students: string[];
  supervisor: string;
  type: 'web' | 'mobile' | 'desktop' | 'research';
  image: string;
  links?: {
    demo?: string;
    github?: string;
    presentation?: string;
  };
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  type: 'academic' | 'activity' | 'achievement' | 'graduation';
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  category: 'workshop' | 'fieldtrip' | 'ceremony' | 'project' | 'social';
}

export interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
  achievements: string[];
  badge: string;
  // تم إضافة هذه الخاصية لتحديد نوع القائد المستخدم في دالة getLeaderIcon
  type: 'team_lead' | 'innovator' | 'motivator' | 'collaborator' | 'high_achiever';
}