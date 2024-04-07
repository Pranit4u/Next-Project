export type QuestionInterface = {
  id: number;
  question: string;
  options: OptionInterface[];
};

type OptionInterface = {
  text: string;
  correct: boolean;
}

export type LifeInterface = {
  [key: string]: LifelineInterface;
}

type LifelineInterface = {
  life1: boolean;
  life2: boolean;
  life3: boolean;
  life4: boolean;
}

export type ScoresInterface = {
  [key: string]: ScoreInterface;
}

export type ScoreInterface = {
  score: number;
  analytics: AnalyticsInterface;
  correct: number;
  wrong: number;
  skipped: number;
}

type AnalyticsInterface = {
  [key: number]: boolean;
}