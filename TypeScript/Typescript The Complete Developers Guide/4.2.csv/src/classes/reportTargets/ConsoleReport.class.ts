import { OutputTarget } from "../Analyze.class";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
