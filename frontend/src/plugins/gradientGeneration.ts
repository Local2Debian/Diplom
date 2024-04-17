export default function createGradientColors(colorArray: number[][], numDivisions: number) {
  const gradientColors = [];
  for (let i = 0; i < colorArray.length - 1; i++) {
    const startColor = colorArray[i];
    const endColor = colorArray[i + 1];
    for (let j = 0; j < numDivisions; j++) {
      const r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * (j / numDivisions));
      const g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * (j / numDivisions));
      const b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * (j / numDivisions));
      gradientColors.push(`rgb(${r}, ${g}, ${b})`);
    }
  }
  return gradientColors;
}
