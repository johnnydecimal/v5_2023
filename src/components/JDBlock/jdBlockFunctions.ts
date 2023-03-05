export interface JDLine {
  text: string;
  classes?: string;
}
export interface Options {
  classListForEveryLine?: string;
}

interface TextAsArrayOfStrings extends Array<string> {}

export const textToArrayOfStrings = (text: string): TextAsArrayOfStrings => {
  let textAsArrayOfStrings = text
    .split("\n")
    .filter((jdLine) => jdLine.trim() !== "");

  return textAsArrayOfStrings;
};

export const constructArrayToRender = (
  textAsArrayOfStrings: TextAsArrayOfStrings,
  classArray: string[],
  options?: Options
): Array<JDLine> => {
  const arrayToRender: Array<JDLine> = [];

  textAsArrayOfStrings.forEach((line, i) => {
    arrayToRender.push({
      text: line,
      classes: classArray[i] || "",
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
