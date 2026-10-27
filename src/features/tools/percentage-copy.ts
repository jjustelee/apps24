import type { Locale } from "@/lib/site";

type PercentageCopy = {
  inputs: string;
  mode: string;
  formula: string;
  descriptions: Record<"value" | "increase" | "decrease" | "discount", string>;
};

export const PERCENTAGE_COPY: Record<Locale, PercentageCopy> = {
  en: { inputs: "Input values", mode: "Current mode", formula: "Formula", descriptions: { value: "Calculate a percentage of a value.", increase: "Calculate the percentage increase from the original value.", decrease: "Calculate the percentage decrease from the original value.", discount: "Calculate the price remaining after a discount." } },
  ko: { inputs: "입력값", mode: "현재 모드", formula: "계산식", descriptions: { value: "기준값에서 특정 퍼센트가 얼마인지 계산합니다.", increase: "원래 값에서 증가한 비율을 계산합니다.", decrease: "원래 값에서 감소한 비율을 계산합니다.", discount: "할인 후 남는 최종 가격을 계산합니다." } },
  fr: { inputs: "Valeurs à saisir", mode: "Mode actuel", formula: "Formule", descriptions: { value: "Calculez un pourcentage d’une valeur.", increase: "Calculez la hausse en pourcentage par rapport à la valeur initiale.", decrease: "Calculez la baisse en pourcentage par rapport à la valeur initiale.", discount: "Calculez le prix restant après une remise." } },
  de: { inputs: "Eingabewerte", mode: "Aktueller Modus", formula: "Formel", descriptions: { value: "Berechnen Sie einen Prozentsatz eines Werts.", increase: "Berechnen Sie die prozentuale Zunahme gegenüber dem Ausgangswert.", decrease: "Berechnen Sie die prozentuale Abnahme gegenüber dem Ausgangswert.", discount: "Berechnen Sie den verbleibenden Preis nach einem Rabatt." } },
  es: { inputs: "Valores de entrada", mode: "Modo actual", formula: "Fórmula", descriptions: { value: "Calcula un porcentaje de un valor.", increase: "Calcula el aumento porcentual respecto al valor original.", decrease: "Calcula la disminución porcentual respecto al valor original.", discount: "Calcula el precio restante después de un descuento." } },
  pt: { inputs: "Valores de entrada", mode: "Modo atual", formula: "Fórmula", descriptions: { value: "Calcule uma porcentagem de um valor.", increase: "Calcule o aumento percentual em relação ao valor original.", decrease: "Calcule a redução percentual em relação ao valor original.", discount: "Calcule o preço restante após um desconto." } },
  ja: { inputs: "入力値", mode: "現在のモード", formula: "計算式", descriptions: { value: "基準値に対する割合の値を計算します。", increase: "元の値からの増加率を計算します。", decrease: "元の値からの減少率を計算します。", discount: "割引後に残る価格を計算します。" } },
  zh: { inputs: "输入值", mode: "当前模式", formula: "计算公式", descriptions: { value: "计算某个数值的指定百分比。", increase: "计算相对于原值的增长百分比。", decrease: "计算相对于原值的下降百分比。", discount: "计算折扣后的最终价格。" } },
  "zh-TW": { inputs: "輸入值", mode: "目前模式", formula: "計算公式", descriptions: { value: "計算某個數值的指定百分比。", increase: "計算相對於原值的成長百分比。", decrease: "計算相對於原值的下降百分比。", discount: "計算折扣後的最終價格。" } },
  ar: { inputs: "قيم الإدخال", mode: "الوضع الحالي", formula: "الصيغة", descriptions: { value: "احسب نسبة مئوية من قيمة.", increase: "احسب نسبة الزيادة مقارنة بالقيمة الأصلية.", decrease: "احسب نسبة الانخفاض مقارنة بالقيمة الأصلية.", discount: "احسب السعر المتبقي بعد الخصم." } },
};
