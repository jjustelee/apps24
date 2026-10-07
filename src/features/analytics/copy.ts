import type { Locale } from "@/lib/site";

type AnalyticsCopy = {
  title: string; description: string; allow: string; decline: string; settings: string; close: string;
  privacy: string; policyTitle: string; policyBody: string;
};

export const ANALYTICS_COPY: Record<Locale, AnalyticsCopy> = {
  en: {
    title: "Optional website analytics", description: "With your permission, Google Analytics uses cookies to measure page visits. Tool inputs, files and filenames are not included. You can use every tool without agreeing and change your choice in the footer.",
    allow: "Allow analytics", decline: "No analytics", settings: "Analytics settings", close: "Keep current choice", privacy: "Privacy policy",
    policyTitle: "Optional Google Analytics measurement", policyBody: "If configured, Google Analytics 4 loads only after you allow analytics. Google processes page visits, device/browser information and approximate region, using analytics cookies. We send only published page paths, without query strings, fragments or tool inputs. We do not send passwords, salary values, text, files or filenames. Your choice is stored in this browser and can be changed in the footer. Refusing does not limit tools. Withdrawal stops future collection and deletes this site's GA4 cookies; it does not delete data already sent to Google. This choice is separate from advertising consent.",
  },
  ko: {
    title: "선택적 웹사이트 분석", description: "허용하면 Google Analytics가 쿠키를 사용해 페이지 방문을 측정합니다. 도구 입력값·파일·파일명은 포함하지 않습니다. 거부해도 모든 도구를 사용할 수 있으며, 하단에서 선택을 변경할 수 있습니다.",
    allow: "분석 허용", decline: "분석 거부", settings: "분석 설정", close: "현재 선택 유지", privacy: "개인정보처리방침",
    policyTitle: "선택적 Google Analytics 측정", policyBody: "설정된 경우 Google Analytics 4는 분석을 허용한 뒤에만 로드됩니다. Google은 분석 쿠키를 사용해 페이지 방문, 기기·브라우저 정보와 대략적인 지역을 처리합니다. 공개된 페이지 경로만 전송하며 쿼리 문자열·해시·도구 입력값은 제외합니다. 비밀번호·연봉 금액·텍스트·파일·파일명을 보내지 않습니다. 선택은 이 브라우저에 저장되며 사이트 하단에서 변경할 수 있습니다. 거부해도 도구 기능은 제한되지 않습니다. 동의를 철회하면 이후 수집을 중단하고 이 사이트의 GA4 쿠키를 삭제하지만, 이미 Google에 전송된 데이터가 삭제되는 것은 아닙니다. 이 선택은 광고 동의와 별개입니다.",
  },
  fr: {
    title: "Analyse facultative du site", description: "Avec votre accord, Google Analytics utilise des cookies pour mesurer les visites. Les saisies des outils, les fichiers et leurs noms sont exclus. Tous les outils restent disponibles sans accord. Vous pouvez modifier votre choix en bas de page.",
    allow: "Autoriser l'analyse", decline: "Refuser l'analyse", settings: "Paramètres d'analyse", close: "Conserver mon choix", privacy: "Confidentialité",
    policyTitle: "Mesure Google Analytics facultative", policyBody: "Si configuré, Google Analytics 4 ne se charge qu'après votre accord. Google traite les visites, les informations d'appareil/navigateur et la région approximative avec des cookies d'analyse. Seuls les chemins de pages publiées sont envoyés, sans paramètres, fragments ou saisies. Nous n'envoyons ni mots de passe, salaires, textes, fichiers ni noms de fichiers. Le choix est conservé dans ce navigateur et modifiable en bas de page. Refuser ne limite pas les outils. Le retrait arrête la collecte future et supprime les cookies GA4 de ce site, mais pas les données déjà envoyées à Google. Ce choix est distinct du consentement publicitaire.",
  },
  de: {
    title: "Optionale Website-Analyse", description: "Mit Ihrer Zustimmung misst Google Analytics Seitenbesuche mithilfe von Cookies. Tool-Eingaben, Dateien und Dateinamen werden nicht übermittelt. Alle Tools funktionieren ohne Zustimmung. Die Auswahl lässt sich im Seitenfuß ändern.",
    allow: "Analyse erlauben", decline: "Analyse ablehnen", settings: "Analyse-Einstellungen", close: "Auswahl beibehalten", privacy: "Datenschutz",
    policyTitle: "Optionale Google-Analytics-Messung", policyBody: "Falls eingerichtet, lädt Google Analytics 4 erst nach Ihrer Zustimmung. Google verarbeitet Seitenbesuche, Geräte-/Browserinformationen und die ungefähre Region mit Analyse-Cookies. Wir übermitteln nur veröffentlichte Seitenpfade ohne Abfrageparameter, Fragmente oder Tool-Eingaben. Passwörter, Gehaltswerte, Texte, Dateien und Dateinamen werden nicht gesendet. Die Auswahl wird in diesem Browser gespeichert und kann im Seitenfuß geändert werden. Ablehnung schränkt Tools nicht ein. Widerruf stoppt die künftige Erfassung und löscht die GA4-Cookies dieser Website, aber nicht bereits an Google übermittelte Daten. Werbeeinwilligung ist davon getrennt.",
  },
  es: {
    title: "Análisis opcional del sitio", description: "Con tu permiso, Google Analytics usa cookies para medir visitas. No se incluyen datos introducidos, archivos ni sus nombres. Puedes usar todas las herramientas sin aceptar y cambiar tu decisión al pie de página.",
    allow: "Permitir análisis", decline: "Rechazar análisis", settings: "Ajustes de análisis", close: "Mantener mi decisión", privacy: "Privacidad",
    policyTitle: "Medición opcional con Google Analytics", policyBody: "Si se configura, Google Analytics 4 solo se carga tras tu permiso. Google procesa visitas, información del dispositivo/navegador y región aproximada mediante cookies de análisis. Solo enviamos rutas de páginas publicadas, sin consultas, fragmentos ni datos introducidos. No enviamos contraseñas, salarios, textos, archivos ni nombres de archivos. La decisión se guarda en este navegador y se cambia al pie de página. Rechazar no limita las herramientas. Retirar el permiso detiene la recopilación futura y borra las cookies GA4 de este sitio, no los datos ya enviados a Google. Esta elección es independiente del consentimiento publicitario.",
  },
  pt: {
    title: "Análise opcional do site", description: "Com sua permissão, o Google Analytics usa cookies para medir visitas. Entradas das ferramentas, arquivos e nomes de arquivos não são incluídos. Todos os recursos funcionam sem aceitar. Você pode mudar sua escolha no rodapé.",
    allow: "Permitir análise", decline: "Recusar análise", settings: "Configurações de análise", close: "Manter escolha", privacy: "Privacidade",
    policyTitle: "Medição opcional com Google Analytics", policyBody: "Se configurado, o Google Analytics 4 só carrega após sua permissão. O Google processa visitas, informações do dispositivo/navegador e região aproximada com cookies de análise. Enviamos apenas caminhos de páginas publicadas, sem consultas, fragmentos ou entradas. Não enviamos senhas, salários, textos, arquivos ou nomes de arquivos. A escolha fica neste navegador e pode ser alterada no rodapé. Recusar não limita ferramentas. Retirar o consentimento interrompe a coleta futura e exclui os cookies GA4 deste site, não os dados já enviados ao Google. Esta escolha é separada do consentimento para publicidade.",
  },
  ja: {
    title: "任意のサイト分析", description: "許可するとGoogle AnalyticsがCookieでページ訪問を測定します。ツール入力、ファイル、ファイル名は含みません。同意しなくても全ツールを利用でき、ページ下部で選択を変更できます。",
    allow: "分析を許可", decline: "分析を拒否", settings: "分析設定", close: "現在の選択を維持", privacy: "プライバシーポリシー",
    policyTitle: "任意のGoogle Analytics測定", policyBody: "設定された場合、Google Analytics 4は分析の許可後にのみ読み込まれます。Googleは分析Cookieにより訪問、端末・ブラウザ情報、おおよその地域を処理します。公開ページのパスのみを送信し、クエリ、フラグメント、入力値は除外します。パスワード、年収、テキスト、ファイル、ファイル名は送りません。選択はこのブラウザに保存され、ページ下部で変更できます。拒否してもツールは制限されません。撤回は今後の収集を停止し、このサイトのGA4 Cookieを削除しますが、送信済みデータは削除しません。この選択は広告への同意とは別です。",
  },
  zh: {
    title: "可选的网站分析", description: "经你允许后，Google Analytics通过Cookie统计页面访问，不包含工具输入、文件或文件名。拒绝不会影响任何工具，可在页脚更改选择。",
    allow: "允许分析", decline: "拒绝分析", settings: "分析设置", close: "保留当前选择", privacy: "隐私政策",
    policyTitle: "可选的Google Analytics统计", policyBody: "如已配置，Google Analytics 4仅在你允许后加载。Google使用分析Cookie处理访问、设备及浏览器信息和大致地区。我们仅发送已发布页面的路径，不包含查询参数、片段或工具输入，不发送密码、年薪、文本、文件或文件名。选择保存在本浏览器，可在页脚更改。拒绝不限制工具。撤回同意会停止之后的收集并删除本站GA4 Cookie，但不会删除已发送给Google的数据。此选择与广告同意分开。",
  },
  "zh-TW": {
    title: "可選的網站分析", description: "經你允許後，Google Analytics透過Cookie統計頁面造訪，不包含工具輸入、檔案或檔名。拒絕不會影響任何工具，可在頁尾更改選擇。",
    allow: "允許分析", decline: "拒絕分析", settings: "分析設定", close: "保留目前選擇", privacy: "隱私權政策",
    policyTitle: "可選的Google Analytics統計", policyBody: "如已設定，Google Analytics 4僅在你允許後載入。Google使用分析Cookie處理造訪、裝置及瀏覽器資訊和大致地區。我們僅傳送已發佈頁面的路徑，不包含查詢參數、片段或工具輸入，不傳送密碼、年薪、文字、檔案或檔名。選擇儲存在本瀏覽器，可在頁尾更改。拒絕不限制工具。撤回同意會停止之後的收集並刪除本站GA4 Cookie，但不會刪除已傳送給Google的資料。此選擇與廣告同意分開。",
  },
  ar: {
    title: "تحليلات اختيارية للموقع", description: "بإذنك، يستخدم Google Analytics ملفات تعريف الارتباط لقياس الزيارات. لا تُرسل مدخلات الأدوات أو الملفات أو أسماؤها. تعمل جميع الأدوات دون موافقة، ويمكن تغيير الاختيار في أسفل الصفحة.",
    allow: "السماح بالتحليلات", decline: "رفض التحليلات", settings: "إعدادات التحليلات", close: "الإبقاء على الاختيار", privacy: "سياسة الخصوصية",
    policyTitle: "قياس Google Analytics الاختياري", policyBody: "عند إعداده، لا يُحمّل Google Analytics 4 إلا بعد موافقتك. يعالج Google الزيارات ومعلومات الجهاز والمتصفح والمنطقة التقريبية باستخدام ملفات التحليل. نرسل مسارات الصفحات المنشورة فقط، دون معاملات الاستعلام أو الأجزاء أو مدخلات الأدوات. لا نرسل كلمات المرور أو الرواتب أو النصوص أو الملفات أو أسماءها. يُحفظ الاختيار في هذا المتصفح ويمكن تغييره أسفل الصفحة. الرفض لا يقيّد الأدوات. سحب الموافقة يوقف الجمع المستقبلي ويحذف ملفات GA4 لهذا الموقع، لكنه لا يحذف بيانات أُرسلت إلى Google سابقًا. هذا الاختيار منفصل عن موافقة الإعلانات.",
  },
};
