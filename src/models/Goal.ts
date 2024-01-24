export enum GoalCategory {
  health = 'Health',
  personalDev = 'Personal Development',
  financial = 'Financial',
  career = 'Career',
}

export enum CadenceOptions {
  daily = 'Daily',
  weekdays = 'Weekdays',
  threeTimesPerWeek = 'Three Times Per Week',
  weekly = 'Weekly',
  biweekly = 'Biweekly',
  montly = 'Montly',
}

export enum GoalAdjustmentOptions {
  min = 'Minimize The Occurance',
  max = 'Maximize The Occurance',
}

export interface IGoal {
  id: string;
  category: GoalCategory;
  title: string;
  cadence: CadenceOptions;
  minOrMax: string;
  current: number;
}

export type GenericEnumPickerProps<T> = {
  enum: T;
  title: string;
  onPres: (value: string) => void;
};
