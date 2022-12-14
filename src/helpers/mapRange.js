const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
  const inputRange = inputUpper - inputLower;
  const outputRange = outputUpper - outputLower;
  return (input) =>
    ((input - inputLower) / inputRange) * outputRange + outputLower;
};

export default mapRange;
