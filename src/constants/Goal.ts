import { CadenceOptions, GoalCategory, IGoal } from '../models/Goal';

export let testGoals: IGoal[] = [
  {
    id: '1',
    category: 'health' as GoalCategory,
    title: 'Run 10k',
    cadence: 'biweekly' as CadenceOptions,
    minOrMax: 'max',
    current: 3,
  },
  {
    id: '2',
    category: 'health' as GoalCategory,
    title: 'Soccer Game',
    cadence: 'biweekly' as CadenceOptions,
    minOrMax: 'max',
    current: 5,
  },
  {
    id: '3',
    category: 'career' as GoalCategory,
    title: 'Courses',
    cadence: 'threeTimesPerWeek' as CadenceOptions,
    minOrMax: 'min',
    current: 2,
  },
];
