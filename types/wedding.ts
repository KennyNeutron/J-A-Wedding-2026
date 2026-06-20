export interface StoryMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface BibleVerse {
  reference: string;
  text: string;
}

export interface EntourageSection {
  title: string;
  names: string[];
}
