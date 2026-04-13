import type { Locale } from "@/lib/site";
import type { ToolDefinition } from "@/features/tools/types";

type ToolText = {
  title: string;
  description: string;
};

const TOOL_TEXTS: Partial<Record<Locale, Record<string, ToolText>>> = {
  en: {
    ruler: {
      title: "Online Ruler",
      description:
        "Measure screen distances with credit-card calibration and cm/inch toggles.",
    },
    wordcounter: {
      title: "Word Counter",
      description:
        "Count characters, spaces, and character positions as you type.",
    },
    countdown: {
      title: "Countdown Timer",
      description:
        "Set a timer, pause it, resume it, and keep track in fullscreen or night mode.",
    },
    digitalclock: {
      title: "Digital Clock",
      description: "Check the current time in real time with a fullscreen view.",
    },
    screenlamp: {
      title: "Screen Lights",
      description:
        "Turn the screen into a solid color light with fullscreen and custom color choices.",
    },
    qrgenerator: {
      title: "QR Generator",
      description: "Create QR codes instantly from any text or URL.",
    },
    barcodegenerator: {
      title: "Barcode Generator",
      description:
        "Create many barcode formats for labels, inventory, and packaging.",
    },
    dummytext: {
      title: "Lorem Ipsum",
      description: "Generate placeholder paragraphs with a chosen length.",
    },
  },
  ko: {
    ruler: {
      title: "온라인 자",
      description: "신용카드 보정과 cm/inch 전환으로 화면 길이를 측정합니다.",
    },
    wordcounter: {
      title: "글자 수 세기",
      description:
        "입력한 텍스트의 글자 수와 공백 포함/제외 수를 즉시 계산합니다.",
    },
    countdown: {
      title: "카운트다운 타이머",
      description:
        "시간을 설정하고 일시정지, 재개, 전체화면, 나이트 모드를 사용할 수 있습니다.",
    },
    digitalclock: {
      title: "디지털 시계",
      description: "현재 시간을 실시간으로 확인하고 전체화면으로 볼 수 있습니다.",
    },
    screenlamp: {
      title: "스크린 라이트",
      description:
        "전체화면과 사용자 색상으로 화면 전체를 단색 조명으로 바꿉니다.",
    },
    qrgenerator: {
      title: "QR 생성기",
      description: "텍스트나 URL로 QR 코드를 바로 생성합니다.",
    },
    barcodegenerator: {
      title: "바코드 생성기",
      description:
        "라벨, 재고, 포장용 여러 바코드 형식을 생성합니다.",
    },
    dummytext: {
      title: "더미 텍스트",
      description: "문단 수를 정해 자리표시자 텍스트를 생성합니다.",
    },
  },
};

export function getToolText(locale: Locale, tool: ToolDefinition): ToolText {
  return (
    TOOL_TEXTS[locale]?.[tool.id] ??
    TOOL_TEXTS.en?.[tool.id] ??
    {
      title: tool.titleKey,
      description: tool.descriptionKey,
    }
  );
}
