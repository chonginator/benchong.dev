const mapRange = (
  inputRange,
  outputRange
) => {
  return (input) =>
    ((input - inputRange.min) / inputRange.range) * outputRange.range + outputRange.min;
};

export default mapRange;
