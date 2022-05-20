export interface ICharacter {
  id: string;
  firstName: string;
  lastName: string;
  note: string;
}

export interface IPaginatedResultSet<T> {
  results: T[];
  total: number;
}
