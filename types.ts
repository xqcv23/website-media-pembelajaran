export enum ViewState {
  HOME = 'HOME',
  HARDWARE = 'HARDWARE',
  SOFTWARE = 'SOFTWARE',
  BRAINWARE = 'BRAINWARE',
  QUIZ = 'QUIZ'
}

export interface TopicItemExample {
  name: string;
  desc: string;
  icon: string; // Emoji or icon name
  image?: string; // URL to the image
}

export interface TopicItem {
  label: string;
  desc: string;
  icon: string;
  examples?: TopicItemExample[]; // Added optional examples array
}

export interface TopicContent {
  id: string;
  title: string;
  description: string;
  image: string;
  details: {
    subtitle: string;
    text: string;
    items: TopicItem[];
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}