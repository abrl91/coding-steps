export function binarySearch(list: [], target: any) {
  let first = 0;
  let last = list.length - 1;
  let midpoint;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);

    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  throw new Error("Value not in array");
}
