function distanceFromHqInBlocks(pickup) {
  const hq = 42; // Scuber headquarters is at 42nd Street
  return Math.abs(hq - pickup); // Calculate the distance in blocks
}
function distanceFromHqInFeet(pickup) {
  {
    const block = 264; // There are 264 feet in a block
    return distanceFromHqInBlocks(pickup) * block; // Calculate the distance in feet
  }
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // Calculate the distance in feet between two blocks
}
function calculatesFarePrice(start, destination) {
  {
    const distance = distanceTravelledInFeet(start, destination); // Calculate the distance in feet between two blocks
    if (distance <= 400) {
      return 0; // The first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Charges 2 cents per foot when total feet travelled is between 400 and 2000
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for a distance between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // No rides over 2500 feet
    }
  }
}
