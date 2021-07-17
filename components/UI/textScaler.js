// Scales the text according to it's position on screen.
// If you "return textPosition / <some value(s)>" to match the scale() range between 0-1,
// The text will change it's scale according to the user's scroll.
// However, that behavior doesn't always *feel* smooth and *may* be annoying to the user.
// It gives the feeling of "semi-automatic" and being stuck in-between\incomplete at times.

const textScaler = (textPosition, textScaleY) => {
  const maxTextScale = 1; // For the CSS scale().
  const minTextScale = 0; // For the CSS scale().
  const maxDisplayPosition = 50; // Pixels percentage of position on screen (100 is the element's top), according to the viewport.
  const minDisplayPosition = 20; // Pixels percentage of position on screen (100 is the element's top), according to the viewport.

  if (textPosition > maxDisplayPosition || textPosition <= minDisplayPosition) {
    return (textScaleY.current = minTextScale);
  } else if (textPosition <= maxDisplayPosition) {
    return (textScaleY.current = maxTextScale);
  }
};

export default textScaler;
