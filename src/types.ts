export type SpaceType = 'balcony' | 'courtyard' | 'small-bed' | 'raised-bed';

export type SunlightLevel = 'full-sun' | 'part-shade' | 'low-sun';

export type ExperienceLevel = 'beginner' | 'casual' | 'confident';

export interface NativePlant {
  id: string;
  commonName: string;
  botanicalName: string;
  type: string;
  idealFor: string[];
  sunlight: SunlightLevel[];
  waterNeeds: 'Very Low' | 'Low' | 'Moderate';
  height: string;
  flowerSeason: string;
  flowerColor: string;
  wildlife: string;
  adelaideTip: string;
  potFriendly: boolean;
}

export interface StarterKitItem {
  id: string;
  category: 'soil' | 'pots' | 'tools' | 'water';
  name: string;
  sampleSpecification: string;
  whyYouNeedIt: string;
  beginnerTip: string;
  isEssential: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  category: 'general' | 'watering' | 'sunlight' | 'soil';
  answer: string;
}
