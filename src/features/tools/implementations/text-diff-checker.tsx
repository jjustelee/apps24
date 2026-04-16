"use client";

import { useState } from "react";
import type { ToolRendererProps } from "./index";
import { SplitSquareHorizontal, Trash2 } from "lucide-react";
import type { Locale } from "@/lib/site";

export function TextDiffCheckerTool({ locale, commonText: common }: ToolRendererProps) {
  
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [lines1, setLines1] = useState<string[]>([]);
  const [lines2, setLines2] = useState<string[]>([]);
  const [diffMode, setDiffMode] = useState(false);

  const handleCompare = () => {
    if (!text1 && !text2) return;
    setLines1(text1.split("\n"));
    setLines2(text2.split("\n"));
    setDiffMode(true);
  };

  const handleClear = () => {
    setText1("");
    setText2("");
    setDiffMode(false);
  };

  const renderDiff = () => {
    const maxLines = Math.max(lines1.length, lines2.length);
    const diffs = [];

    for (let i = 0; i < maxLines; i++) {
      const l1 = lines1[i] || "";
      const l2 = lines2[i] || "";
      
      let type: "match" | "added" | "removed" | "changed" = "match";
      if (l1 === l2) {
        type = "match";
      } else if (!l1 && l2) {
        type = "added";
      } else if (l1 && !l2) {
        type = "removed";
      } else {
        type = "changed";
      }

      diffs.push(
        <tr key={i} className={`diff-line ${type}`}>
          <td className="line-num">{i + 1}</td>
          <td className="line-content l1">{l1}</td>
          <td className="line-content l2">{l2}</td>
        </tr>
      );
    }
    return diffs;
  };

  return (
    <div className="tool-container card-glass">
      
      {!diffMode ? (
        <>
          <div className="input-grid">
            <div className="input-col">
              <div className="col-header">{common.original || "Original"}</div>
              <textarea
                className="textarea-glass"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder={common.placeholder}
              />
            </div>
            <div className="input-col">
              <div className="col-header">{common.changeTo || "Changed"}</div>
              <textarea
                className="textarea-glass"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder={common.placeholder}
              />
            </div>
          </div>
          
          <div className="controls-row">
            <button onClick={handleCompare} className="button-primary">
              <SplitSquareHorizontal size={18} />
              {common.compare}
            </button>
            <button onClick={handleClear} className="button-ghost">
              <Trash2 size={18} />
              {common.clear}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="diff-viewer-wrapper">
            <table className="diff-table">
              <thead>
                <tr className="diff-header">
                  <th className="line-num">#</th>
                  <th className="line-content orig-header">{common.original || "Original"}</th>
                  <th className="line-content new-header">{common.changeTo || "Changed"}</th>
                </tr>
              </thead>
              <tbody>
                {renderDiff()}
              </tbody>
            </table>
          </div>
          
          <div className="controls-row centered">
            <button onClick={() => setDiffMode(false)} className="button-glass">
              Edit Texts
            </button>
            <button onClick={handleClear} className="button-ghost">
              <Trash2 size={18} />
              {common.clear}
            </button>
          </div>
        </>
      )}

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .input-grid {
            grid-template-columns: 1fr;
          }
        }
        .input-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .col-header {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.9rem;
          padding-left: 0.25rem;
        }
        .textarea-glass {
          width: 100%;
          height: 300px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          color: var(--text);
          font-family: monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
        }
        .textarea-glass:focus {
          border-color: var(--accent);
        }
        .controls-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .controls-row.centered {
          justify-content: center;
        }
        .button-primary, .button-ghost, .button-glass {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .button-primary {
          background: var(--accent);
          color: white;
          border: none;
        }
        .button-primary:hover {
          opacity: 0.9;
        }
        .button-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-muted);
        }
        .button-ghost:hover {
          border-color: #ef4444;
          color: #ef4444;
        }
        .button-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--line);
          color: var(--text);
        }
        .diff-viewer-wrapper {
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          overflow: hidden;
          background: rgba(128, 128, 128, 0.05);
        }
        .diff-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          font-family: monospace;
          font-size: 0.9rem;
        }
        .diff-header {
          background: rgba(128, 128, 128, 0.08);
          border-bottom: 2px solid var(--line);
        }
        .diff-header th {
          font-weight: 600;
          color: var(--text-muted);
          padding: 0.75rem 0.5rem;
          text-align: left;
        }
        .diff-header th.line-num {
          text-align: right;
        }
        .diff-line td {
          padding: 0.5rem;
          border-bottom: 1px solid rgba(128, 128, 128, 0.1);
          vertical-align: top;
        }
        .line-num {
          width: 40px;
          color: var(--text-muted);
          background: rgba(128, 128, 128, 0.02);
          text-align: right;
          border-right: 1px solid var(--line);
          user-select: none;
        }
        .line-content {
          white-space: pre-wrap;
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        .line-content.l1 {
          border-right: 1px solid rgba(128, 128, 128, 0.1);
        }
        .match .line-content {
          color: var(--text);
        }
        .added .l1 {
          background: rgba(128, 128, 128, 0.05);
        }
        .added .l2 {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }
        .removed .l1 {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }
        .removed .l2 {
          background: rgba(128, 128, 128, 0.05);
        }
        .changed .l1 {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }
        .changed .l2 {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }
      `}</style>
      {/* 
        [백엔드 프론트엔드 연동 고려사항]
        현재 텍스트 비교는 클라이언트의 브라우저에서 `handleCompare` 함수를 통해 순수 JS로 처리됩니다.
        하지만 비교해야 할 텍스트가 기가바이트(GB) 단위의 대용량 로그 파일이거나 보안이 중요한 코드 조각이라면,
        프론트엔드 메모리 한계로 인해 브라우저가 다운될 수 있습니다. 
        이 경우 백엔드 서버(예: Node.js 스트림 또는 Go 텍스트 디프 패키지)로 파일이나 원문을 전송하여
        서버 측에서 Diff를 수행한 결과값(patch/diff 데이터)만 프론트엔드로 전달받아 테이블에 렌더링하는 형태로 구조를 잡아야 합니다.
      */}
    </div>
  );
}
