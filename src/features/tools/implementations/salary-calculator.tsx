"use client";

import { useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

type InputMode = "simple" | "detail";
type SeveranceMode = "excluded" | "included";

const RATES = {
  nationalPension: 0.0475,
  healthInsurance: 0.03595,
  longTermCare: 0.1314,
  employmentInsurance: 0.009,
};

// 국민연금 기준소득월액 상·하한은 2026-07-01부터 2027-06-30까지 적용됩니다.
const NATIONAL_PENSION_MIN = 410_000;
const NATIONAL_PENSION_MAX = 6_590_000;

function parseMoney(value: string) {
  return Number(value.replace(/[^\d]/g, "")) || 0;
}

function formatMoney(value: number) {
  return Math.max(0, Math.round(value)).toLocaleString("ko-KR");
}

function formatInput(value: string) {
  const amount = parseMoney(value);
  return amount ? amount.toLocaleString("ko-KR") : "";
}

function earnedIncomeDeduction(annualTaxableSalary: number) {
  if (annualTaxableSalary <= 5_000_000) return annualTaxableSalary * 0.7;
  if (annualTaxableSalary <= 15_000_000) return 3_500_000 + (annualTaxableSalary - 5_000_000) * 0.4;
  if (annualTaxableSalary <= 45_000_000) return 7_500_000 + (annualTaxableSalary - 15_000_000) * 0.15;
  if (annualTaxableSalary <= 100_000_000) return 12_000_000 + (annualTaxableSalary - 45_000_000) * 0.05;
  return Math.min(20_000_000, 14_750_000 + (annualTaxableSalary - 100_000_000) * 0.02);
}

function annualIncomeTax(taxBase: number) {
  if (taxBase <= 0) return 0;
  if (taxBase <= 14_000_000) return taxBase * 0.06;
  if (taxBase <= 50_000_000) return taxBase * 0.15 - 1_260_000;
  if (taxBase <= 88_000_000) return taxBase * 0.24 - 5_760_000;
  if (taxBase <= 150_000_000) return taxBase * 0.35 - 15_440_000;
  if (taxBase <= 300_000_000) return taxBase * 0.38 - 19_940_000;
  if (taxBase <= 500_000_000) return taxBase * 0.4 - 25_940_000;
  if (taxBase <= 1_000_000_000) return taxBase * 0.42 - 35_940_000;
  return taxBase * 0.45 - 65_940_000;
}

function monthlyChildTaxAdjustment(childCount: number) {
  if (childCount <= 0) return 0;
  if (childCount === 1) return 12_500;
  if (childCount === 2) return 29_160;
  return 29_160 + (childCount - 2) * 25_000;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SalaryCalculatorTool({ toolText }: ToolRendererProps) {
  const [mode, setMode] = useState<InputMode>("simple");
  const [annualSalary, setAnnualSalary] = useState("50000000");
  const [taxFreeMonthly, setTaxFreeMonthly] = useState("0");
  const [familyCount, setFamilyCount] = useState("1");
  const [childCount, setChildCount] = useState("0");
  const [severanceMode, setSeveranceMode] = useState<SeveranceMode>("excluded");

  const salary = parseMoney(annualSalary);
  const taxFree = mode === "detail" ? parseMoney(taxFreeMonthly) : 0;
  const families = mode === "detail" ? Math.max(1, Number(familyCount) || 1) : 1;
  const children = mode === "detail" ? Math.max(0, Number(childCount) || 0) : 0;
  const monthlyGross = salary / (mode === "detail" && severanceMode === "included" ? 13 : 12);
  const taxableMonthly = Math.max(0, monthlyGross - taxFree);
  const pensionBase = taxableMonthly > 0 ? clamp(taxableMonthly, NATIONAL_PENSION_MIN, NATIONAL_PENSION_MAX) : 0;

  const nationalPension = pensionBase * RATES.nationalPension;
  const healthInsurance = taxableMonthly * RATES.healthInsurance;
  const longTermCare = healthInsurance * RATES.longTermCare;
  const employmentInsurance = taxableMonthly * RATES.employmentInsurance;
  const annualTaxableSalary = taxableMonthly * 12;
  const socialInsuranceAnnual = (nationalPension + healthInsurance + longTermCare + employmentInsurance) * 12;
  const personalDeduction = families * 1_500_000;
  const taxBase = Math.max(
    0,
    annualTaxableSalary - earnedIncomeDeduction(annualTaxableSalary) - socialInsuranceAnnual - personalDeduction,
  );
  const incomeTax = Math.max(0, annualIncomeTax(taxBase) / 12 - monthlyChildTaxAdjustment(children));
  const localIncomeTax = incomeTax * 0.1;
  const totalDeduction =
    nationalPension + healthInsurance + longTermCare + employmentInsurance + incomeTax + localIncomeTax;
  const monthlyNet = Math.max(0, monthlyGross - totalDeduction);
  const annualNet = monthlyNet * 12;

  const deductionRows = [
    ["국민연금", nationalPension],
    ["건강보험", healthInsurance],
    ["장기요양보험", longTermCare],
    ["고용보험", employmentInsurance],
    ["소득세", incomeTax],
    ["지방소득세", localIncomeTax],
  ] as const;

  return (
    <div className="salary-calculator">
      <div className="salary-notice">
        <strong>예상 금액 안내</strong>
        <span>
          계산 결과는 2026년 기준 요율과 추정 세액으로 산출한 참고 금액입니다. 실제 지급액은 회사 급여 기준,
          비과세 항목, 수당, 추가 공제, 연말정산 결과에 따라 달라질 수 있습니다.
        </span>
      </div>

      <div className="salary-layout">
        <section className="salary-panel salary-input-panel" aria-label="연봉 입력">
          <div className="salary-panel-header">
            <span className="salary-kicker">입력</span>
            <h2>연봉 정보</h2>
            <p>기본은 연봉만 입력하는 간단입력입니다.</p>
          </div>

          <div className="salary-tabs" role="tablist" aria-label="입력 방식">
            <button
              type="button"
              role="tab"
              className={mode === "simple" ? "active" : ""}
              onClick={() => setMode("simple")}
              aria-selected={mode === "simple"}
            >
              간단입력
            </button>
            <button
              type="button"
              role="tab"
              className={mode === "detail" ? "active" : ""}
              onClick={() => setMode("detail")}
              aria-selected={mode === "detail"}
            >
              상세입력
            </button>
          </div>

          <label className="salary-field">
            <span>연봉</span>
            <div className="salary-money-input">
              <input
                inputMode="numeric"
                value={formatInput(annualSalary)}
                onChange={(event) => setAnnualSalary(event.target.value)}
                placeholder="50,000,000"
              />
              <em>원</em>
            </div>
          </label>

          {mode === "detail" ? (
            <div className="salary-detail-fields">
              <label className="salary-field">
                <span>비과세 월액</span>
                <div className="salary-money-input">
                  <input
                    inputMode="numeric"
                    value={formatInput(taxFreeMonthly)}
                    onChange={(event) => setTaxFreeMonthly(event.target.value)}
                    placeholder="200,000"
                  />
                  <em>원</em>
                </div>
              </label>

              <div className="salary-two-fields">
                <label className="salary-field">
                  <span>부양가족 수</span>
                  <input
                    className="salary-number-input"
                    type="number"
                    min="1"
                    value={familyCount}
                    onChange={(event) => setFamilyCount(event.target.value)}
                  />
                </label>
                <label className="salary-field">
                  <span>8세 이상 20세 이하 자녀 수</span>
                  <input
                    className="salary-number-input"
                    type="number"
                    min="0"
                    value={childCount}
                    onChange={(event) => setChildCount(event.target.value)}
                  />
                </label>
              </div>

              <fieldset className="salary-radio-group">
                <legend>퇴직금 기준</legend>
                <label>
                  <input
                    type="radio"
                    checked={severanceMode === "excluded"}
                    onChange={() => setSeveranceMode("excluded")}
                  />
                  퇴직금 별도
                </label>
                <label>
                  <input
                    type="radio"
                    checked={severanceMode === "included"}
                    onChange={() => setSeveranceMode("included")}
                  />
                  퇴직금 포함
                </label>
              </fieldset>
            </div>
          ) : (
            <button type="button" className="salary-detail-toggle" onClick={() => setMode("detail")}>
              더 정확한 계산을 위해 상세입력 열기
            </button>
          )}
        </section>

        <section className="salary-panel salary-result-panel" aria-label="계산 결과">
          <div className="salary-panel-header">
            <span className="salary-kicker">결과</span>
            <h2>예상 월 실수령액</h2>
          </div>

          <div className="salary-net-result">
            <span>월 예상 실수령액</span>
            <strong>₩{formatMoney(monthlyNet)}</strong>
          </div>

          <div className="salary-summary-grid">
            <div>
              <span>월 환산 급여</span>
              <strong>₩{formatMoney(monthlyGross)}</strong>
            </div>
            <div>
              <span>총 공제액</span>
              <strong>₩{formatMoney(totalDeduction)}</strong>
            </div>
            <div>
              <span>연 예상 실수령액</span>
              <strong>₩{formatMoney(annualNet)}</strong>
            </div>
          </div>

          <p className="salary-result-note">실제 급여명세서 금액과 차이가 있을 수 있습니다.</p>
        </section>
      </div>

      <section className="salary-panel salary-deduction-panel" aria-label="공제 상세">
        <div className="salary-panel-header">
          <span className="salary-kicker">공제 상세</span>
          <h2>월 예상 공제 항목</h2>
        </div>
        <div className="salary-deduction-list">
          {deductionRows.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>₩{formatMoney(value)}</strong>
            </div>
          ))}
          <div className="total">
            <span>총 공제액</span>
            <strong>₩{formatMoney(totalDeduction)}</strong>
          </div>
        </div>
      </section>

      <section className="salary-info-grid">
        <article className="salary-panel">
          <span className="salary-kicker">계산 기준</span>
          <h2>2026년 기준 예상 계산</h2>
          <ul>
            <li>국민연금: 근로자 부담 4.75%, 기준소득월액 상한·하한 적용</li>
            <li>건강보험: 직장가입자 본인부담 3.595%</li>
            <li>장기요양보험: 건강보험료의 13.14%</li>
            <li>고용보험: 근로자 부담 0.9%</li>
            <li>소득세와 지방소득세는 연봉, 가족 수, 자녀 수를 반영한 추정값입니다.</li>
          </ul>
        </article>

        <article className="salary-panel">
          <span className="salary-kicker">FAQ</span>
          <h2>{toolText?.faq?.[0]?.q ?? "실제 월급과 같나요?"}</h2>
          <p>
            {toolText?.faq?.[0]?.a ??
              "아닙니다. 회사 급여 기준, 비과세 항목, 수당, 추가 공제, 연말정산 등에 따라 실제 금액과 차이가 있을 수 있습니다."}
          </p>
        </article>
      </section>

      <section className="salary-panel salary-source-panel" aria-label="공식 계산 기준 출처">
        <div className="salary-panel-header">
          <span className="salary-kicker">공식 출처</span>
          <h2>요율과 세액 참고 기준</h2>
          <p>
            국민연금 상·하한은 2026년 7월 1일부터 2027년 6월 30일까지의 기준을 적용했습니다. 소득세는
            국세청 근로소득 간이세액표를 참고한 추정값이며 실제 원천징수액과 다를 수 있습니다.
          </p>
        </div>
        <div className="salary-source-links">
          <a href="https://www.nps.or.kr/pnsinfo/ntpsklg/getOHAF0038M0.do?menuId=MN24001113&tab=tab5" target="_blank" rel="noopener noreferrer">
            국민연금공단 기준소득월액
          </a>
          <a href="https://edi.nhis.or.kr/portal/images/popup/20251204_pop01longdesc.html" target="_blank" rel="noopener noreferrer">
            국민건강보험 2026년 보험료율
          </a>
          <a href="https://nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7862&mi=6583" target="_blank" rel="noopener noreferrer">
            국세청 근로소득 간이세액표
          </a>
        </div>
        <p className="salary-source-date">기준 확인일: 2026년 8월 25일</p>
      </section>
    </div>
  );
}
