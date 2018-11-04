export function climbCat(grade, length) {
  const score = length * grade;

  if (score > 64000) {
    return "HC";
  } else if (score > 48000) {
    return "1";
  } else if (score > 32000) {
    return "2";
  } else if (score > 16000) {
    return "3";
  } else if (score > 8000) {
    return "4";
  }

  return "U";
}
