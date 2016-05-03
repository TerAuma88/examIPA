export var year = [
  {value: "h28s", label: "平成28年春"},
  {value: "h27a", label: "平成27年秋"},
  {value: "h27s", label: "平成27年春"},
  {value: "h26a", label: "平成26年秋"},
];
export function getYearLabel(value) {
  return getLabel(year, value);
}

export var category = [
  {value: "AP", label: "応用情報技術者"},
  {value: "ST", label: "ITストラテジスト"},
  {value: "SA", label: "システムアーキテクト"},
  {value: "PM", label: "プロジェクトマネージャ"},
  {value: "NW", label: "ネットワークスペシャリスト"},
  {value: "DB", label: "データベーススペシャリスト"},
  {value: "ES", label: "エンベデッドシステムスペシャリスト"},
  {value: "SC", label: "情報セキュリティスペシャリスト"},
  {value: "SM", label: "ITサービスマネージャ"},
  {value: "AU", label: "システム監査技術者"},
];

export var hour = [
  {value: "AM1", label: "午前Ⅰ"},
  {value: "AM2", label: "午前Ⅱ"},
  {value: "PM1", label: "午後Ⅰ"},
  {value: "PM2", label: "午後Ⅱ"},
];
export function getHourLabel(value) {
  return getLabel(hour, value);
}

export var num = [
  {value: "10", label: "10"},
  {value: "25", label: "25"},
];

function getLabel(array, value) {
  var result;
  for (var i = 0; i < array.length; i++) {
    if (array[i].value == value) {
      return array[i].label;
    }
  }
  return result;
}
