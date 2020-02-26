import { MatchResult } from "./classes/enums/MatchResult.enum";
import { CsvFileReader } from "./classes/CsvFileReader.class";
import { MatchReader } from "./classes/MatchReader.class";
import { Analyze } from "./classes/Analyze.class";
import { WinAnalyze } from "./classes/analyzers/WinAnalyze.class";
import { ConsoleReport } from "./classes/reportTargets/ConsoleReport.class";

const csvFileReader = new CsvFileReader([".", "football.csv"]);
const matchReader = new MatchReader(csvFileReader);
const analyze = new Analyze(new WinAnalyze("Man United"), new ConsoleReport());
analyze.buildAndPrintReport(matchReader.matches);
