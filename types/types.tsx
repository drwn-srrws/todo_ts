export interface IPost {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  isCompleted: boolean;
  selected: boolean;
}

export interface ІsTrashCanEmpty {
  isEmpty: boolean;
}
