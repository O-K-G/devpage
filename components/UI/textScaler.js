// Scales the text according to it's position on screen.

const textScaler = (textPosition, textScaleY) => {
  if (textPosition >= 50 || textPosition <= 0) {
    // Rules for below 0% or above 50% (not above 100% so changes won't start at the last moment of scrolling).
    return (textScaleY = `0`);
  } else if (textPosition < 50 && textPosition >= 45) {
    // Rules for between 50% and 45%.
    // Between 45% and 5% the text size should not change, so the user can actually read it in the middle of the screen.
    return (textScaleY = (10 - textPosition / 10) / 5);
  } else if (textPosition < 5 && textPosition > 0) {
    // Rules for between 5% and 0%.
    return (textScaleY = textPosition / 10 / 4);
  }
};

export default textScaler;
