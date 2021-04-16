import {File} from './file';

export interface Report {
  date: number;
  category: string;
  title: string;
  description: string;
  files: File[];
}
