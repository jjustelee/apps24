"use client";

import { Search, X } from "lucide-react";
import { useDeferredValue, useMemo, useState, type ReactNode } from "react";
import { ToolCard } from "@/components/tool-card";
import type { Locale } from "@/lib/site";

type SearchTool = {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  groupTitle: string;
  keywords: string[];
  tags: string[];
};

type ToolSearchProps = {
  locale: Locale;
  tools: SearchTool[];
  children: ReactNode;
};

const SEARCH_COPY: Record<Locale, { placeholder: string; results: string; empty: string; clear: string }> = {
  en: {
    placeholder: "Search tools by name, task, or keyword",
    results: "Search results",
    empty: "No matching tools found.",
    clear: "Clear search",
  },
  ko: {
    placeholder: "툴 이름, 작업, 키워드로 검색",
    results: "검색 결과",
    empty: "일치하는 툴이 없습니다.",
    clear: "검색 지우기",
  },
  fr: {
    placeholder: "Rechercher par outil, tâche ou mot-clé",
    results: "Résultats de recherche",
    empty: "Aucun outil correspondant.",
    clear: "Effacer la recherche",
  },
  ja: {
    placeholder: "ツール名、作業、キーワードで検索",
    results: "検索結果",
    empty: "一致するツールがありません。",
    clear: "検索をクリア",
  },
  zh: {
    placeholder: "按工具名称、任务或关键词搜索",
    results: "搜索结果",
    empty: "没有找到匹配的工具。",
    clear: "清除搜索",
  },
  "zh-TW": {
    placeholder: "依工具名稱、任務或關鍵字搜尋",
    results: "搜尋結果",
    empty: "找不到符合的工具。",
    clear: "清除搜尋",
  },
  pt: {
    placeholder: "Pesquisar por ferramenta, tarefa ou palavra-chave",
    results: "Resultados da pesquisa",
    empty: "Nenhuma ferramenta encontrada.",
    clear: "Limpar pesquisa",
  },
  es: {
    placeholder: "Buscar por herramienta, tarea o palabra clave",
    results: "Resultados de búsqueda",
    empty: "No se encontraron herramientas.",
    clear: "Borrar búsqueda",
  },
  de: {
    placeholder: "Nach Tool, Aufgabe oder Stichwort suchen",
    results: "Suchergebnisse",
    empty: "Keine passenden Tools gefunden.",
    clear: "Suche löschen",
  },
  ar: {
    placeholder: "ابحث باسم الأداة أو المهمة أو الكلمة المفتاحية",
    results: "نتائج البحث",
    empty: "لم يتم العثور على أدوات مطابقة.",
    clear: "مسح البحث",
  },
};

export function ToolSearch({ locale, tools, children }: ToolSearchProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const copy = SEARCH_COPY[locale] ?? SEARCH_COPY.en;
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return tools.filter((tool) => {
      const haystack = [
        tool.title,
        tool.description,
        tool.category,
        tool.groupTitle,
        ...tool.keywords,
        ...tool.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery, tools]);

  return (
    <div className="tool-search-shell">
      <label className="tool-search-box">
        <Search size={20} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.placeholder}
          aria-label={copy.placeholder}
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label={copy.clear}>
            <X size={18} aria-hidden="true" />
          </button>
        ) : null}
      </label>

      {normalizedQuery ? (
        <section className="tool-search-results" aria-live="polite">
          <div className="tool-search-results-header">
            <h3>{copy.results}</h3>
            <span>{results.length}</span>
          </div>

          {results.length > 0 ? (
            <div className="tool-grid home-category-grid">
              {results.map((tool) => (
                <ToolCard
                  key={tool.id}
                  href={tool.href}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                />
              ))}
            </div>
          ) : (
            <div className="tool-search-empty">
              <p>{copy.empty}</p>
              <button type="button" onClick={() => setQuery("")}>
                {copy.clear}
              </button>
            </div>
          )}
        </section>
      ) : (
        children
      )}
    </div>
  );
}
