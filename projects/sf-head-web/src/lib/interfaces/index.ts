import { Document } from "mongodb";

export interface InputOutput extends Document {
  name: string;
  amount: number;
  ratePerMinute: number;
}

export interface Item extends Document {
  name: string;
  inputs: InputOutput[];
  outputs: InputOutput[];
}
