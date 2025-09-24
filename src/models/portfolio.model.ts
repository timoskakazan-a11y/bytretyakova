
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
}

export interface DesignerProfile {
  name: string;
  title: string;
  bio: string[];
  photoUrl: string;
  email: string;
  phone: string;
  socials: { name: string; url: string }[];
}
