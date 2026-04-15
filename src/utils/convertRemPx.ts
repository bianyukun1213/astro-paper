type ConvMode = "rem2px" | "px2rem";
export function convertRemPx(input: string, mode?: ConvMode): string;
export function convertRemPx(input: number, mode?: ConvMode): number;
/**
 * Converts between rem and px units based on the root HTML font size and input format.
 * @param input The value to convert, either a string with units 'rem' or 'px' or a number.
 * @param mode The conversion mode, 'rem2px' to convert rem to pixels or 'px2rem' to convert pixels to rem.
 * @returns The converted value, either as a string with the appropriate unit or as a number.
 */
export function convertRemPx(
  input: string | number,
  mode: ConvMode = "rem2px"
): string | number {
  if (typeof window === "undefined") {
    throw new Error(
      '"window" is undefined. This function can only be used in a browser environment.'
    );
  }
  const returnString = typeof input === "string";
  let returnUnit: "px" | "rem" | "" = "";
  const htmlFontSize = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize
  );
  let numericValue: number;
  // 处理输入逻辑
  if (typeof input === "string") {
    if (input.endsWith("rem")) {
      numericValue = parseFloat(input.replace("rem", ""));
      mode = "rem2px";
      returnUnit = "px";
    } else if (input.endsWith("px")) {
      numericValue = parseFloat(input.replace("px", ""));
      mode = "px2rem";
      returnUnit = "rem";
    } else {
      numericValue = parseFloat(input);
    }
  } else {
    numericValue = input;
  }
  if (isNaN(numericValue)) {
    throw new Error(
      'Invalid value. Must be a number or a string ending with "rem" or "px".'
    );
  }
  let result: number;
  if (mode === "rem2px") {
    result = numericValue * htmlFontSize;
  } else {
    result = numericValue / htmlFontSize;
  }
  if (returnString) {
    return `${result}${returnUnit}`;
  } else {
    return result;
  }
}
