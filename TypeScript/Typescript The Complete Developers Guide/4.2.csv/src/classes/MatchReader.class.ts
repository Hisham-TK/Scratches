import { MatchData } from "./interfaces/MatchData.interface";
import { dateStringToDate } from "./../util";
import { MatchResult } from "./enums/MatchResult.enum";

interface IMatchReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(private reader: IMatchReader) {
    this.load();
  }

  private load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
