export interface JDLine {
  text: string;
  classes?: string;
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
  classArray: string[]
): Array<JDLine> => {
  const arrayToRender: Array<JDLine> = [];

  textAsArrayOfStrings.forEach((line, i) => {
    arrayToRender.push({
      text: line,
      classes: classArray[i],
    });
  });

  return arrayToRender;
};
