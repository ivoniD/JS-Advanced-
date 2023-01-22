function pie(arr, start, end) {
  const IndexOfStart = arr.indexOf(start);
  const IndefOfEnd = arr.indexOf(end);
  return arr.slice(IndexOfStart, IndefOfEnd + 1);
}
