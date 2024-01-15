import { CadenceOptions, GoalCategory, IGoal } from '../models/Goal';

export const testGoals: IGoal[] = [
  {
    id: '1',
    category: GoalCategory.health,
    title: 'Run 10k',
    cadence: CadenceOptions.biweekly,
    minOrMax: 'max',
    current: 3,
  },
  {
    id: '2',
    category: GoalCategory.health,
    title: 'Soccer Game',
    cadence: CadenceOptions.biweekly,
    minOrMax: 'max',
    current: 5,
  },
  {
    id: '3',
    category: GoalCategory.career,
    title: 'Courses',
    cadence: CadenceOptions.biweekly,
    minOrMax: 'min',
    current: 2,
  },
];
