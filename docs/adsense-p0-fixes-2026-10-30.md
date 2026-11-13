# AdSense P0 수정 기록 (2026-10-30)

근거: 4개 읽기 전용 감사(정책·콘텐츠·기술·신뢰) 결과. 계정 상태는 다른 세션 기록상 "심사 중"이므로 재신청·광고 활성화는 하지 않는다. 아래는 로컬 적용 사항이며 커밋·배포 전이다.

## 결정과 적용

| 항목 | 결정 | 위치 |
| --- | --- | --- |
| 퍼센트 계산기 각주 | 단위 변환기 문구("소수 10자리")가 복사돼 있었음. 실제 표시는 소수 둘째 자리(`toFixed(2)`, `maximumFractionDigits: 2`). 키 `unitAccuracyNote` → `percentageRoundingNote`로 변경하고 10개 언어 문구를 "소수 둘째 자리 반올림 + 가격·회계 전 확인"으로 교체 | `locales/*.ts`, `copy.ts`, `types_locales.ts`, `percentage-calculator.tsx` |
| 도구 소제목 `whatIs` | "무엇인가?" 틀이 "Règle en ligne"·"What Is My IP"에서 비문이 됨. 9개 언어를 "도구 소개: {0}"형(`About this tool: {0}`, `À propos de l'outil : {0}`, `{0}について` 등)으로 변경. ko는 기존 중립 문구 유지 | `locales/*.ts`, `copy.ts` |
| 번역 오류 | fr `allTools` "Tous les outils"; ko 단위 변환기 안내의 'From' → '변환 값'(UI 라벨과 일치); ar QR의 "الاتصالات" → "جهات الاتصال"; dummytext 참고 라벨 "Declaration text…"를 10개 언어로 번역(`referenceLabels`) | `locales/fr·ko·ar.ts`, `functional-content.ts` |
| 배경 제거 문구 | 홈 카드 예시 "온라인 쇼핑몰 상품 사진" 삭제(마스크 최대 변 384px). 첫 예시를 "단순한 배경의 사물"류로 교체. 용량 표기 10 MB → 10 MiB(상수 `MAX_BACKGROUND_IMAGE_BYTES = 10 * 1024 * 1024`와 일치) | `locales/*.ts`(backgroundremover), `background-remover.tsx`, `functional-content.ts` |
| 개인정보 GA4 문구 | GA4(`G-GT4QQFGPTX`)가 운영 중이므로 "If configured" 제거. 광고 동의 장치가 없는 상태에서 "광고 동의와 별개" 문장은 삭제 | `analytics/copy.ts` |
| 개인정보 데이터 흐름 | 신규 섹션 추가: 배경 제거(Hugging Face 모델, jsDelivr ONNX 런타임, 브라우저 Cache API), 내 IP 확인(서버가 IPinfo로 공인 IP 전송, 서버가 IP를 못 보면 브라우저가 ipify 직접 호출). 코드로 확인함 | `features/privacy/flows.ts`, `privacy/page.tsx` |
| 개인정보 최종 업데이트 | 2026-10-30으로 10개 언어 갱신 | `privacy/page.tsx` |

## 검증

- `npm run check` 통과, `npm test` 53개 통과, `npm run build` 성공.
- 로컬 운영 서버에서 확인: 개인정보 신규 섹션과 날짜, fr 소제목·"Tous les outils", 퍼센트 각주, 홈의 배경 제거 예시, ko '변환 값', ar 문구, de 참고 라벨.
- 자동 스캔 외 언어별 사람 검수는 하지 않았다(번역은 AI 작성).

## 이번에 하지 않은 것

- 언어 전환 404: 다른 세션의 미커밋 수정(`locale-switcher.tsx`, `locale-navigation.ts`)이 대상이라 건드리지 않음.
- P1(얇은 도구 보강, 화면용 도구 4개의 보강 또는 사이트맵 제외, 카테고리 허브 문구)과 P2(CMP, Open-Meteo 키, IPinfo 토큰·`?ip=` 제한, 면책 위치)와 P3(`headers()` 정적 렌더링).
- 운영자 이름: `NEXT_PUBLIC_SITE_OPERATOR`는 사용자가 값을 제공해야 한다.

## 열린 확인

- 번역 검수자 확보 여부(미확인).
- 운영 배포 후 같은 항목을 운영 URL에서 재확인.

## 후속 (2026-11-14)

- P1 적용과 배포 기록은 `docs/adsense-p1-2026-11-14.md`.
