// == Interfaces ==============================================================
interface JDLine {
  text: string;
  classes?: string;
  options?: Options;
}
export interface Options {
  classListForEveryLine?: string;
  ignoreLine?: IgnoreLines;
}
interface IgnoreLines {
  [key: number]: boolean;
}
interface TextAsArrayOfStrings extends Array<string> {}

/**
 * == textToArrayOfStrings ====================================================
 */
const textToArrayOfStrings = (text: string): TextAsArrayOfStrings => {
  let textAsArrayOfStrings = text
    .split("\n")
    .filter((jdLine) => jdLine.trim() !== "");

  return textAsArrayOfStrings;
};

/**
 * == constructArrayToRender ==================================================
 *
 *
 */
const constructArrayToRender = (
  textAsArrayOfStrings: TextAsArrayOfStrings,
  classArray: string[],
  options?: Options
): Array<JDLine> => {
  const arrayToRender: Array<JDLine> = [];

  textAsArrayOfStrings.forEach((line, i) => {
    arrayToRender.push({
      text: line,
      classes: classArray[i] || "", // prevents undefined later; harmless
      options: options, // each line just gets a copy of options
    });
  });

  if (options) {
    if (options.classListForEveryLine) {
      arrayToRender.forEach((line) => {
        line.classes = line.classes + " " + options.classListForEveryLine;
      });
    }
  }

  return arrayToRender;
};

/**
 * == processTextForJD ========================================================
 *
 * We have `arrayToRender` which contains objects with a text property. Now we
 * parse those values and look for JD-like strings. If we find them, we change
 * the text value to be HTML that will render in a JD style.
 *
 * In <JDBlock /> the text value is rendered as raw HTML.
 */
const processTextForJD = (arrayToRender: JDLine[]): JDLine[] => {
  // We start with an array of JDLine...

  // Create a new array by mapping over each item in the input array
  const returnArray = arrayToRender.map((line, i) => {
    console.log("🆚 jdBlockFunctions.ts/line:", line);
    // If item.options.ignoreLine[n] matches map.index, return item as is
    if (line.options?.ignoreLine && line.options.ignoreLine[i]) {
      return line;
    } else {
      return {
        text: "not ignored",
      };
    }
  });

  // Otherwise do some processing on item.text and return a new item

  // ...and we return a potentially updated array of JDLine.
  return returnArray;
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
  options?: Options
): Array<JDLine> => {
  const textAsArrayOfStrings = textToArrayOfStrings(text);

  const array1 = constructArrayToRender(
    textAsArrayOfStrings,
    classArray,
    options
  );

  const array2 = processTextForJD(array1);

  return array2;
};
