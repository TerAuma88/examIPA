export var implemented = [
  {category: "PM", year: "h27s", hour: "AM2"},
  {category: "ST", year: "h27a", hour: "AM2"},
];

export function isImplemented(params) {
  for (var i = 0; i < implemented.length; i++) {
    if (implemented[i].category == params.category && implemented[i].year == params.year && implemented[i].hour == params.hour) {
      return true;
    }
  }
  return false;
}