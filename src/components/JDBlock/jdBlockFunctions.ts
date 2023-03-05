// == Interfaces ==============================================================
export interface JDLine {
  text: string;
  classes?: string;
}
export interface Options {
  classListForEveryLine?: string;
}
interface TextAsArrayOfStrings extends Array<string> {}

/**
 * == textToArrayOfStrings ====================================================
 */
export const textToArrayOfStrings = (text: string): TextAsArrayOfStrings => {
  let textAsArrayOfStrings = text
    .split("\n")
    .filter((jdLine) => jdLine.trim() !== "");

  return textAsArrayOfStrings;
};

/**
 * == constructArrayToRender ==================================================
 */
export const constructArrayToRender = (
  textAsArrayOfStrings: TextAsArrayOfStrings,
  classArray: string[],
  options?: Options
): Array<JDLine> => {
  const arrayToRender: Array<JDLine> = [];

  textAsArrayOfStrings.forEach((line, i) => {
    arrayToRender.push({
      text: line,
      classes: classArray[i] || "", // prevents undefined later; harmless
    });
  });

  if (options) {
    console.log("🆚 jdBlockFunctions.ts/options:", options);
    if (options.classListForEveryLine) {
      arrayToRender.forEach((line) => {
        line.classes = line.classes + " " + options.classListForEveryLine;
      });
    }
  }

  return arrayToRender;
};

/**
 * == processJDBlock ==========================================================
 *
 * Back in JDBlock.astro we only want to import/call one function. It's this
 * one, which then handles everything else.
 */
export const processJDBlock = (
  text: string,
  classArray: string[],
  options: Options
): Array<JDLine> => {};
