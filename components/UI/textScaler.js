// Scales the text according to it's position on screen.

const textScaler = (textPosition, textScaleY) => {
  
  if (textPosition >= 60 || textPosition <= 0) {
    // Rules for below 0% or above 60% (not above 100% so changes won't start at the last moment of scrolling).
    return textScaleY.current = `0`;
  } else if (textPosition < 60 && textPosition >= 50) {
    // Rules for between 60% and 50%.
    // The "1 -" is there to get the difference, as values start from above 100 and below 0 when scrolling.
    // "/ 100" is for scaling down the values to a scale of 0-1.
    return textScaleY.current = 1 - textPosition / 100;
  } else if (textPosition < 50 && textPosition > 0) {
    // Rules for between 50% and 0%.
    if (textPosition / 100 > 0.075) {
      return textScaleY.current = `1`;
    } else {
      return textScaleY.current = textPosition / 100;
    }
  }
}

export default textScaler;
