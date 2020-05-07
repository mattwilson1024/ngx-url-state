export interface ICharacterTag {
  id: string;
  name: string;
}

export interface ICharacter {
  id: string;
  firstName: string;
  lastName: string;
  note: string;
  tags: ICharacterTag[];
}

export interface IPaginatedResultSet<T> {
  results: T[];
  total: number;
}
