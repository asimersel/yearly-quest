export enum GoalCategory {
  health = 'Health',
  personalDev = 'PersonalDev',
  financial = 'Financial',
  career = 'Career',
}

export enum CadenceOptions {
  daily = 'Daily',
  weekdays = 'Weekdays',
  threeTimesPerWeek = 'ThreeTimesPerWeek',
  weekly = 'Weekly',
  biweekly = 'Biweekly',
  montly = 'Montly',
}

export interface IGoal {
  id: string;
  category: GoalCategory;
  title: string;
  cadence: CadenceOptions;
  minOrMax: string;
  current: number;
}
