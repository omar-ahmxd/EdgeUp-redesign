// Add new type for enquirer role
export type EnquirerRole = 'individual' | 'institution' | 'partner';

// Update FormSubmission interface
export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  institution: string;
  submittedAt: string;
  isRead: boolean;
  role: EnquirerRole;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
  notes?: string;
  followUpDate?: string;
  assignedTo?: string;
}

// Content Management Types
export interface ContentBlock {
  id: string;
  type: 'hero' | 'features' | 'testimonials' | 'partners' | 'team' | 'custom' | 'cta';
  title: string;
  subtitle: string;
  content?: string;
  items?: any[];
  settings?: any;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  blocks: ContentBlock[];
  isPublished: boolean;
  lastUpdated: string;
}

export interface MediaItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  size: number;
  uploadedAt: string;
}

export interface SiteSettings {
  siteName: string;
  logo: string;
  favicon: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
    };
  };
  seoDefaults: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  institution: string;
  quote: string;
  avatar: string;
}