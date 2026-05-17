import type { Locale } from "@/lib/site";

type UseCaseLocaleCopy = {
  titleTemplate: string;
  intro: string;
  tools: Partial<Record<string, string[]>>;
};

const USE_CASE_COPY: Record<Locale, UseCaseLocaleCopy> = {
  en: {
    titleTemplate: "Common ways to use {0}",
    intro: "These examples focus on practical tasks people commonly search for when they need a quick online tool.",
    tools: {
      imagecompressor: [
        "Reduce large JPG or PNG files before uploading them to a website, form, email, or CMS.",
        "Convert images to WebP when you want smaller files for faster page loading.",
        "Prepare product, blog, and social media images without installing desktop software.",
        "Check the output size and visual quality before replacing the original image.",
      ],
      qrgenerator: [
        "Create a QR code for a website link, landing page, menu, signup form, or event page.",
        "Share contact details, short text, or instructions without asking users to type a long URL.",
        "Download a QR code image for posters, packaging, classroom material, or store displays.",
        "Scan the QR code on a phone before printing or publishing it.",
      ],
      jsonformatter: [
        "Format compressed JSON from an API response so it is easier to read and debug.",
        "Validate JSON before pasting it into a configuration file, request body, or test case.",
        "Find missing commas, brackets, quotation marks, and other common syntax problems.",
        "Prepare cleaner JSON snippets for documentation, support tickets, or team review.",
      ],
      passwordgenerator: [
        "Create a random password for a new account, admin panel, database, or shared system.",
        "Choose length and character types based on the password rules of the service you use.",
        "Avoid reusing old passwords across work, banking, email, or personal accounts.",
        "Save the generated password in a trusted password manager immediately after creating it.",
      ],
      iplookup: [
        "Check your public IP address before allowing access to a server, dashboard, or firewall.",
        "Confirm whether a VPN, proxy, or mobile network is changing your visible location.",
        "Review basic ISP, city, country, timezone, and browser network details.",
        "Copy your IP address when support teams or hosting providers ask for connection details.",
      ],
      wordcounter: [
        "Check character limits for titles, meta descriptions, forms, posts, and short messages.",
        "Estimate text length before publishing content to a website, profile, or campaign.",
        "Find the exact character position when reviewing a short snippet or input field.",
        "Clean up copy that needs to fit strict length limits before submission.",
      ],
      base64encoder: [
        "Encode plain text to Base64 for testing, sample payloads, or simple data transfer.",
        "Decode a Base64 string when you need to inspect readable text during debugging.",
        "Check whether copied encoded data is valid before using it in a workflow.",
        "Prepare small encoded examples for API documentation, demos, or support notes.",
      ],
      textdiffchecker: [
        "Compare two drafts to see exactly what changed before publishing.",
        "Review edits in emails, translations, documentation, or short code snippets.",
        "Find removed, added, or modified text without opening a heavy comparison tool.",
        "Confirm that copied content still matches the approved version.",
      ],
      barcodegenerator: [
        "Create barcodes for labels, inventory IDs, internal tracking, or simple product references.",
        "Choose a barcode format that matches the scanner, label system, or workflow you use.",
        "Download barcode images for print layouts, packaging drafts, or stock organization.",
        "Test the barcode with the target scanner before using it in a live process.",
      ],
      percentagecalculator: [
        "Calculate discounts, price changes, taxes, tips, margins, and quick percentage values.",
        "Check percentage increase or decrease between old and new numbers.",
        "Find what percent one value is of another for reports, schoolwork, or planning.",
        "Copy the result after confirming that the selected calculation mode matches the question.",
      ],
    },
  },
  ko: {
    titleTemplate: "{0}의 일반적인 사용 방법",
    intro: "아래 예시는 사용자가 빠른 온라인 도구를 찾을 때 실제로 많이 필요한 작업을 기준으로 정리했습니다.",
    tools: {
      imagecompressor: [
        "웹사이트, 양식, 이메일, CMS에 올리기 전 큰 JPG 또는 PNG 파일 크기를 줄입니다.",
        "페이지 로딩 속도를 높이고 싶을 때 이미지를 WebP로 변환합니다.",
        "데스크톱 프로그램 설치 없이 상품, 블로그, SNS용 이미지를 준비합니다.",
        "원본을 교체하기 전에 결과 파일 크기와 시각 품질을 확인합니다.",
      ],
      qrgenerator: [
        "웹사이트 링크, 랜딩페이지, 메뉴, 가입 양식, 이벤트 페이지용 QR 코드를 만듭니다.",
        "긴 URL을 직접 입력하게 하지 않고 연락처, 짧은 텍스트, 안내문을 공유합니다.",
        "포스터, 포장, 수업 자료, 매장 안내판에 사용할 QR 코드 이미지를 다운로드합니다.",
        "인쇄 또는 공개 전에 휴대폰으로 QR 코드가 정상 스캔되는지 확인합니다.",
      ],
      jsonformatter: [
        "API 응답의 압축된 JSON을 읽기 쉽게 정리하고 디버깅합니다.",
        "설정 파일, 요청 본문, 테스트 케이스에 붙여넣기 전 JSON 문법을 검증합니다.",
        "누락된 쉼표, 괄호, 따옴표 같은 일반적인 문법 문제를 찾습니다.",
        "문서, 지원 요청, 팀 리뷰에 사용할 JSON 예시를 깔끔하게 준비합니다.",
      ],
      passwordgenerator: [
        "새 계정, 관리자 페이지, 데이터베이스, 공유 시스템용 임의 비밀번호를 만듭니다.",
        "사용 중인 서비스의 비밀번호 규칙에 맞춰 길이와 문자 종류를 선택합니다.",
        "업무, 금융, 이메일, 개인 계정에서 기존 비밀번호 재사용을 피합니다.",
        "생성 직후 신뢰할 수 있는 비밀번호 관리자에 저장합니다.",
      ],
      iplookup: [
        "서버, 대시보드, 방화벽 접근 허용 전에 현재 공인 IP 주소를 확인합니다.",
        "VPN, 프록시, 모바일 네트워크가 보이는 위치를 바꾸는지 확인합니다.",
        "ISP, 도시, 국가, 시간대, 브라우저 네트워크 정보를 검토합니다.",
        "지원팀이나 호스팅 업체가 접속 정보를 요청할 때 IP 주소를 복사합니다.",
      ],
      wordcounter: [
        "제목, 메타 설명, 양식, 게시글, 짧은 메시지의 글자 수 제한을 확인합니다.",
        "웹사이트, 프로필, 캠페인에 게시하기 전 텍스트 길이를 예상합니다.",
        "짧은 문장이나 입력 필드를 검토할 때 정확한 문자 위치를 찾습니다.",
        "제출 전 엄격한 길이 제한에 맞게 문구를 정리합니다.",
      ],
      base64encoder: [
        "테스트, 샘플 페이로드, 간단한 데이터 전달을 위해 일반 텍스트를 Base64로 인코딩합니다.",
        "디버깅 중 Base64 문자열을 읽을 수 있는 텍스트로 디코딩합니다.",
        "복사한 인코딩 데이터가 작업 흐름에 쓰기 전 유효한지 확인합니다.",
        "API 문서, 데모, 지원 메모에 사용할 작은 인코딩 예시를 준비합니다.",
      ],
      textdiffchecker: [
        "게시 전 두 초안의 변경 내용을 정확히 비교합니다.",
        "이메일, 번역, 문서, 짧은 코드 조각의 수정 사항을 검토합니다.",
        "무거운 비교 프로그램 없이 삭제, 추가, 변경된 텍스트를 찾습니다.",
        "복사한 내용이 승인된 버전과 여전히 일치하는지 확인합니다.",
      ],
      barcodegenerator: [
        "라벨, 재고 ID, 내부 추적, 간단한 상품 참조용 바코드를 만듭니다.",
        "사용하는 스캐너, 라벨 시스템, 작업 흐름에 맞는 바코드 형식을 선택합니다.",
        "인쇄 레이아웃, 포장 시안, 재고 정리에 사용할 바코드 이미지를 다운로드합니다.",
        "실제 작업에 사용하기 전에 대상 스캐너로 바코드를 테스트합니다.",
      ],
      percentagecalculator: [
        "할인, 가격 변동, 세금, 팁, 마진, 빠른 퍼센트 값을 계산합니다.",
        "이전 숫자와 새 숫자 사이의 증가율 또는 감소율을 확인합니다.",
        "보고서, 학습, 계획에서 한 값이 다른 값의 몇 퍼센트인지 찾습니다.",
        "선택한 계산 모드가 질문과 맞는지 확인한 뒤 결과를 복사합니다.",
      ],
    },
  },
  fr: {
    titleTemplate: "Utilisations courantes de {0}",
    intro: "Ces exemples couvrent des tâches concrètes que les utilisateurs recherchent souvent lorsqu'ils ont besoin d'un outil en ligne rapide.",
    tools: {
      imagecompressor: [
        "Réduire de gros fichiers JPG ou PNG avant de les envoyer sur un site, un formulaire, un e-mail ou un CMS.",
        "Convertir des images en WebP pour obtenir des fichiers plus légers et un chargement plus rapide.",
        "Préparer des images de produit, de blog ou de réseaux sociaux sans installer de logiciel.",
        "Vérifier la taille de sortie et la qualité visuelle avant de remplacer l'image originale.",
      ],
      qrgenerator: [
        "Créer un QR code pour un lien, une page d'atterrissage, un menu, un formulaire ou un événement.",
        "Partager des coordonnées, un court texte ou des instructions sans faire saisir une longue URL.",
        "Télécharger une image de QR code pour affiches, emballages, supports de cours ou vitrines.",
        "Scanner le QR code sur un téléphone avant impression ou publication.",
      ],
      jsonformatter: [
        "Formater du JSON compressé depuis une réponse API afin de le lire et le déboguer plus facilement.",
        "Valider du JSON avant de l'utiliser dans un fichier de configuration, un corps de requête ou un test.",
        "Repérer les virgules, crochets, guillemets et autres erreurs de syntaxe courantes.",
        "Préparer des extraits JSON plus propres pour une documentation, un ticket ou une revue d'équipe.",
      ],
      passwordgenerator: [
        "Créer un mot de passe aléatoire pour un nouveau compte, un panneau admin, une base de données ou un système partagé.",
        "Choisir la longueur et les caractères selon les règles du service utilisé.",
        "Éviter de réutiliser d'anciens mots de passe sur des comptes professionnels ou personnels.",
        "Enregistrer immédiatement le mot de passe généré dans un gestionnaire fiable.",
      ],
      iplookup: [
        "Vérifier votre adresse IP publique avant d'autoriser un accès à un serveur, tableau de bord ou pare-feu.",
        "Confirmer si un VPN, proxy ou réseau mobile modifie votre emplacement visible.",
        "Consulter les détails de base sur le fournisseur, la ville, le pays, le fuseau horaire et le navigateur.",
        "Copier votre IP lorsque le support ou l'hébergeur demande des informations de connexion.",
      ],
      wordcounter: [
        "Contrôler les limites de caractères pour titres, méta descriptions, formulaires, publications et messages courts.",
        "Estimer la longueur d'un texte avant publication sur un site, un profil ou une campagne.",
        "Trouver la position exacte d'un caractère lors de la vérification d'un court extrait.",
        "Ajuster un texte qui doit respecter une limite stricte avant envoi.",
      ],
      base64encoder: [
        "Encoder du texte en Base64 pour des tests, exemples de payload ou transferts simples.",
        "Décoder une chaîne Base64 pour inspecter du texte lisible pendant le débogage.",
        "Vérifier qu'une donnée encodée copiée est valide avant de l'utiliser.",
        "Préparer de petits exemples encodés pour documentation API, démos ou notes de support.",
      ],
      textdiffchecker: [
        "Comparer deux brouillons pour voir exactement ce qui a changé avant publication.",
        "Relire des modifications dans des e-mails, traductions, documents ou courts extraits de code.",
        "Repérer du texte supprimé, ajouté ou modifié sans ouvrir un outil de comparaison lourd.",
        "Confirmer qu'un contenu copié correspond toujours à la version approuvée.",
      ],
      barcodegenerator: [
        "Créer des codes-barres pour étiquettes, identifiants de stock, suivi interne ou références produit simples.",
        "Choisir un format compatible avec le scanner, le système d'étiquettes ou le flux utilisé.",
        "Télécharger des images de code-barres pour maquettes d'impression, emballages ou organisation du stock.",
        "Tester le code-barres avec le scanner cible avant un usage réel.",
      ],
      percentagecalculator: [
        "Calculer remises, variations de prix, taxes, pourboires, marges et pourcentages rapides.",
        "Vérifier une hausse ou une baisse en pourcentage entre deux valeurs.",
        "Trouver quel pourcentage une valeur représente d'une autre pour rapports, études ou planification.",
        "Copier le résultat après avoir confirmé que le mode de calcul correspond à la question.",
      ],
    },
  },
  ja: {
    titleTemplate: "{0}のよくある使い方",
    intro: "これらは、すばやく使えるオンラインツールを探す人がよく必要とする実用的な作業例です。",
    tools: {
      imagecompressor: [
        "Webサイト、フォーム、メール、CMSにアップロードする前に大きなJPGやPNGを小さくします。",
        "ページ表示を速くしたいときに画像をWebPへ変換します。",
        "デスクトップソフトを入れずに商品、ブログ、SNS用の画像を準備します。",
        "元画像を置き換える前に、出力サイズと見た目の品質を確認します。",
      ],
      qrgenerator: [
        "Webリンク、ランディングページ、メニュー、登録フォーム、イベントページ用のQRコードを作成します。",
        "長いURLを入力させずに、連絡先、短い文章、案内を共有します。",
        "ポスター、パッケージ、授業資料、店舗表示用にQRコード画像をダウンロードします。",
        "印刷や公開の前にスマートフォンで読み取れるか確認します。",
      ],
      jsonformatter: [
        "APIレスポンスの圧縮されたJSONを読みやすく整形し、デバッグしやすくします。",
        "設定ファイル、リクエスト本文、テストケースに貼る前にJSONを検証します。",
        "カンマ、括弧、引用符などのよくある構文ミスを見つけます。",
        "ドキュメント、サポート依頼、チームレビュー用にJSON例を整理します。",
      ],
      passwordgenerator: [
        "新しいアカウント、管理画面、データベース、共有システム用のランダムなパスワードを作成します。",
        "利用するサービスのルールに合わせて長さや文字種を選びます。",
        "仕事、銀行、メール、個人アカウントで古いパスワードを使い回さないようにします。",
        "生成後すぐに信頼できるパスワード管理ツールへ保存します。",
      ],
      iplookup: [
        "サーバー、ダッシュボード、ファイアウォールの許可前に公開IPアドレスを確認します。",
        "VPN、プロキシ、モバイル回線によって見える場所が変わっているか確認します。",
        "ISP、都市、国、タイムゾーン、ブラウザのネットワーク情報を確認します。",
        "サポートやホスティング会社から接続情報を求められたときにIPをコピーします。",
      ],
      wordcounter: [
        "タイトル、メタ説明、フォーム、投稿、短いメッセージの文字数制限を確認します。",
        "Webサイト、プロフィール、キャンペーンへ公開する前に文章量を見積もります。",
        "短い文章や入力欄を確認するとき、正確な文字位置を探します。",
        "送信前に厳しい文字数制限へ合うよう文章を整えます。",
      ],
      base64encoder: [
        "テスト、サンプルペイロード、簡単なデータ受け渡し用にテキストをBase64へ変換します。",
        "デバッグ中にBase64文字列を読めるテキストへ戻して確認します。",
        "コピーしたエンコード済みデータが使う前に有効か確認します。",
        "APIドキュメント、デモ、サポートメモ用の小さなエンコード例を準備します。",
      ],
      textdiffchecker: [
        "公開前に2つの下書きを比較し、何が変わったか正確に確認します。",
        "メール、翻訳、文書、短いコード片の編集内容を確認します。",
        "重い比較ツールを開かずに、削除、追加、変更された文字を探します。",
        "コピーした内容が承認済みの版と一致しているか確認します。",
      ],
      barcodegenerator: [
        "ラベル、在庫ID、内部追跡、簡単な商品参照用のバーコードを作成します。",
        "使うスキャナー、ラベルシステム、作業フローに合うバーコード形式を選びます。",
        "印刷レイアウト、パッケージ案、在庫整理用のバーコード画像をダウンロードします。",
        "実運用で使う前に対象スキャナーで読み取りテストをします。",
      ],
      percentagecalculator: [
        "割引、価格変動、税金、チップ、利益率、簡単な割合を計算します。",
        "古い数値と新しい数値の間の増加率や減少率を確認します。",
        "レポート、学習、計画で、ある値が別の値の何パーセントかを調べます。",
        "計算モードが質問に合っていることを確認してから結果をコピーします。",
      ],
    },
  },
  zh: {
    titleTemplate: "{0} 的常见用途",
    intro: "这些示例围绕用户在寻找快速在线工具时经常需要完成的实际任务。",
    tools: {
      imagecompressor: [
        "在上传到网站、表单、邮件或 CMS 前压缩较大的 JPG 或 PNG 文件。",
        "需要更快页面加载时，将图片转换为 WebP 以减小文件体积。",
        "无需安装桌面软件即可准备商品、博客和社交媒体图片。",
        "替换原图前，先检查输出大小和视觉质量。",
      ],
      qrgenerator: [
        "为网站链接、落地页、菜单、注册表单或活动页面创建二维码。",
        "分享联系方式、短文本或说明，避免用户手动输入长链接。",
        "下载二维码图片，用于海报、包装、课堂资料或店铺展示。",
        "打印或发布前，先用手机扫描测试二维码。",
      ],
      jsonformatter: [
        "格式化 API 返回的压缩 JSON，使其更容易阅读和调试。",
        "在粘贴到配置文件、请求体或测试用例前验证 JSON。",
        "查找缺失的逗号、括号、引号等常见语法问题。",
        "为文档、支持工单或团队审阅准备更清晰的 JSON 片段。",
      ],
      passwordgenerator: [
        "为新账户、管理面板、数据库或共享系统创建随机密码。",
        "根据所用服务的密码规则选择长度和字符类型。",
        "避免在工作、银行、邮箱或个人账户中重复使用旧密码。",
        "生成后立即保存到可信的密码管理器中。",
      ],
      iplookup: [
        "在允许服务器、控制台或防火墙访问前检查公网 IP 地址。",
        "确认 VPN、代理或移动网络是否改变了可见位置。",
        "查看基础 ISP、城市、国家、时区和浏览器网络信息。",
        "当客服或主机服务商需要连接信息时复制 IP 地址。",
      ],
      wordcounter: [
        "检查标题、元描述、表单、帖子和短消息的字符限制。",
        "在发布到网站、资料页或营销活动前估算文本长度。",
        "审核短文本或输入框时查找准确的字符位置。",
        "提交前整理需要满足严格长度限制的文案。",
      ],
      base64encoder: [
        "将普通文本编码为 Base64，用于测试、示例载荷或简单数据传输。",
        "调试时将 Base64 字符串解码为可读文本。",
        "在工作流中使用前，检查复制的编码数据是否有效。",
        "为 API 文档、演示或支持说明准备小型编码示例。",
      ],
      textdiffchecker: [
        "发布前比较两个草稿，准确查看变化内容。",
        "审阅邮件、翻译、文档或短代码片段中的修改。",
        "无需打开复杂对比工具即可查找删除、添加或修改的文本。",
        "确认复制的内容仍与批准版本一致。",
      ],
      barcodegenerator: [
        "为标签、库存 ID、内部追踪或简单商品引用创建条形码。",
        "选择与扫描器、标签系统或工作流程匹配的条形码格式。",
        "下载条形码图片，用于打印版式、包装草稿或库存整理。",
        "正式使用前，使用目标扫描器测试条形码。",
      ],
      percentagecalculator: [
        "计算折扣、价格变化、税费、小费、利润率和快速百分比值。",
        "检查旧数字与新数字之间的百分比增加或减少。",
        "在报告、学习或计划中计算一个值占另一个值的百分比。",
        "确认所选计算模式符合问题后再复制结果。",
      ],
    },
  },
  "zh-TW": {
    titleTemplate: "{0} 的常見用途",
    intro: "這些範例聚焦於使用者尋找快速線上工具時常見的實際任務。",
    tools: {
      imagecompressor: [
        "上傳到網站、表單、電子郵件或 CMS 前，壓縮較大的 JPG 或 PNG 檔案。",
        "想讓頁面載入更快時，將圖片轉換為 WebP 以減少檔案大小。",
        "不安裝桌面軟體也能準備商品、部落格和社群媒體圖片。",
        "取代原圖前，先確認輸出大小和視覺品質。",
      ],
      qrgenerator: [
        "為網站連結、到達頁、菜單、註冊表單或活動頁面建立 QR Code。",
        "分享聯絡資訊、短文字或說明，避免使用者手動輸入長網址。",
        "下載 QR Code 圖片，用於海報、包裝、課堂資料或店面展示。",
        "列印或發布前，先用手機掃描測試 QR Code。",
      ],
      jsonformatter: [
        "格式化 API 回傳的壓縮 JSON，讓內容更容易閱讀和除錯。",
        "貼到設定檔、請求本文或測試案例前先驗證 JSON。",
        "找出遺漏的逗號、括號、引號等常見語法問題。",
        "為文件、客服工單或團隊審閱準備更清楚的 JSON 片段。",
      ],
      passwordgenerator: [
        "為新帳號、管理面板、資料庫或共享系統建立隨機密碼。",
        "依照使用服務的密碼規則選擇長度和字元類型。",
        "避免在工作、銀行、電子郵件或個人帳號重複使用舊密碼。",
        "產生後立即儲存在可信任的密碼管理器中。",
      ],
      iplookup: [
        "允許伺服器、控制台或防火牆存取前，檢查目前的公開 IP 位址。",
        "確認 VPN、代理或行動網路是否改變了可見位置。",
        "查看基本 ISP、城市、國家、時區和瀏覽器網路資訊。",
        "客服或主機服務商要求連線資訊時，複製 IP 位址。",
      ],
      wordcounter: [
        "檢查標題、中繼描述、表單、貼文和短訊息的字元限制。",
        "發布到網站、個人檔案或行銷活動前估算文字長度。",
        "審查短文字或輸入欄位時，找出精確的字元位置。",
        "提交前整理必須符合嚴格長度限制的文案。",
      ],
      base64encoder: [
        "將純文字編碼為 Base64，用於測試、範例 payload 或簡單資料傳輸。",
        "除錯時將 Base64 字串解碼為可讀文字。",
        "在工作流程中使用前，檢查複製的編碼資料是否有效。",
        "為 API 文件、展示或支援說明準備小型編碼範例。",
      ],
      textdiffchecker: [
        "發布前比較兩份草稿，準確查看變更內容。",
        "審閱電子郵件、翻譯、文件或短程式碼片段中的修改。",
        "不用開啟複雜比較工具，也能找出刪除、新增或修改的文字。",
        "確認複製內容仍與核准版本一致。",
      ],
      barcodegenerator: [
        "為標籤、庫存 ID、內部追蹤或簡單商品參照建立條碼。",
        "選擇符合掃描器、標籤系統或工作流程的條碼格式。",
        "下載條碼圖片，用於列印版面、包裝草稿或庫存整理。",
        "正式使用前，使用目標掃描器測試條碼。",
      ],
      percentagecalculator: [
        "計算折扣、價格變化、稅費、小費、利潤率和快速百分比值。",
        "檢查舊數字與新數字之間的百分比增加或減少。",
        "在報告、學習或規劃中計算某個值占另一個值的百分比。",
        "確認所選計算模式符合問題後，再複製結果。",
      ],
    },
  },
  pt: {
    titleTemplate: "Usos comuns de {0}",
    intro: "Estes exemplos focam tarefas práticas que as pessoas costumam procurar quando precisam de uma ferramenta online rápida.",
    tools: {
      imagecompressor: [
        "Reduzir arquivos JPG ou PNG grandes antes de enviar para site, formulário, e-mail ou CMS.",
        "Converter imagens para WebP quando você quer arquivos menores e páginas mais rápidas.",
        "Preparar imagens de produtos, blog e redes sociais sem instalar software.",
        "Verificar o tamanho final e a qualidade visual antes de substituir a imagem original.",
      ],
      qrgenerator: [
        "Criar um QR code para link, landing page, menu, formulário de inscrição ou página de evento.",
        "Compartilhar contatos, texto curto ou instruções sem pedir que o usuário digite uma URL longa.",
        "Baixar a imagem do QR code para cartazes, embalagens, material de aula ou displays de loja.",
        "Escanear o QR code no celular antes de imprimir ou publicar.",
      ],
      jsonformatter: [
        "Formatar JSON compactado de uma resposta de API para facilitar leitura e depuração.",
        "Validar JSON antes de colar em arquivo de configuração, corpo de requisição ou teste.",
        "Encontrar vírgulas, chaves, aspas e outros erros de sintaxe comuns.",
        "Preparar trechos JSON mais limpos para documentação, suporte ou revisão da equipe.",
      ],
      passwordgenerator: [
        "Criar uma senha aleatória para nova conta, painel admin, banco de dados ou sistema compartilhado.",
        "Escolher tamanho e tipos de caracteres conforme as regras do serviço usado.",
        "Evitar reutilizar senhas antigas em contas de trabalho, banco, e-mail ou pessoais.",
        "Salvar a senha gerada em um gerenciador confiável logo após criá-la.",
      ],
      iplookup: [
        "Verificar seu IP público antes de liberar acesso a servidor, painel ou firewall.",
        "Confirmar se VPN, proxy ou rede móvel está alterando sua localização visível.",
        "Revisar dados básicos de ISP, cidade, país, fuso horário e rede do navegador.",
        "Copiar o IP quando suporte ou hospedagem pedirem detalhes de conexão.",
      ],
      wordcounter: [
        "Conferir limites de caracteres para títulos, meta descrições, formulários, posts e mensagens curtas.",
        "Estimar o tamanho do texto antes de publicar em site, perfil ou campanha.",
        "Encontrar a posição exata de um caractere ao revisar um trecho curto.",
        "Ajustar textos que precisam respeitar limites rígidos antes do envio.",
      ],
      base64encoder: [
        "Codificar texto comum em Base64 para testes, payloads de exemplo ou transferência simples.",
        "Decodificar uma string Base64 para inspecionar texto legível durante depuração.",
        "Verificar se dados codificados copiados são válidos antes de usar no fluxo.",
        "Preparar pequenos exemplos codificados para documentação de API, demos ou suporte.",
      ],
      textdiffchecker: [
        "Comparar dois rascunhos para ver exatamente o que mudou antes de publicar.",
        "Revisar edições em e-mails, traduções, documentos ou pequenos trechos de código.",
        "Encontrar texto removido, adicionado ou modificado sem abrir uma ferramenta pesada.",
        "Confirmar se o conteúdo copiado ainda corresponde à versão aprovada.",
      ],
      barcodegenerator: [
        "Criar códigos de barras para etiquetas, IDs de estoque, rastreamento interno ou referências simples.",
        "Escolher um formato compatível com o scanner, sistema de etiquetas ou fluxo usado.",
        "Baixar imagens de código de barras para layouts de impressão, embalagens ou organização de estoque.",
        "Testar o código de barras no scanner de destino antes de usar em produção.",
      ],
      percentagecalculator: [
        "Calcular descontos, mudanças de preço, impostos, gorjetas, margens e porcentagens rápidas.",
        "Verificar aumento ou redução percentual entre valores antigos e novos.",
        "Descobrir que porcentagem um valor representa de outro em relatórios, estudos ou planejamento.",
        "Copiar o resultado depois de confirmar que o modo de cálculo corresponde à pergunta.",
      ],
    },
  },
  es: {
    titleTemplate: "Usos comunes de {0}",
    intro: "Estos ejemplos se centran en tareas prácticas que las personas suelen buscar cuando necesitan una herramienta en línea rápida.",
    tools: {
      imagecompressor: [
        "Reducir archivos JPG o PNG grandes antes de subirlos a un sitio, formulario, correo o CMS.",
        "Convertir imágenes a WebP cuando desea archivos más pequeños y carga más rápida.",
        "Preparar imágenes de productos, blog y redes sociales sin instalar software.",
        "Comprobar el tamaño final y la calidad visual antes de reemplazar la imagen original.",
      ],
      qrgenerator: [
        "Crear un código QR para enlace, landing page, menú, formulario de registro o evento.",
        "Compartir datos de contacto, texto breve o instrucciones sin pedir que se escriba una URL larga.",
        "Descargar una imagen QR para carteles, empaques, material de clase o exhibidores.",
        "Escanear el QR en un teléfono antes de imprimirlo o publicarlo.",
      ],
      jsonformatter: [
        "Formatear JSON comprimido de una respuesta API para leerlo y depurarlo mejor.",
        "Validar JSON antes de pegarlo en una configuración, cuerpo de solicitud o prueba.",
        "Encontrar comas, llaves, comillas y otros errores de sintaxis comunes.",
        "Preparar fragmentos JSON más limpios para documentación, soporte o revisión del equipo.",
      ],
      passwordgenerator: [
        "Crear una contraseña aleatoria para una cuenta nueva, panel admin, base de datos o sistema compartido.",
        "Elegir longitud y tipos de caracteres según las reglas del servicio usado.",
        "Evitar reutilizar contraseñas antiguas en cuentas laborales, bancarias, correo o personales.",
        "Guardar la contraseña generada en un gestor confiable inmediatamente después de crearla.",
      ],
      iplookup: [
        "Comprobar su IP pública antes de permitir acceso a un servidor, panel o firewall.",
        "Confirmar si una VPN, proxy o red móvil cambia su ubicación visible.",
        "Revisar datos básicos de ISP, ciudad, país, zona horaria y red del navegador.",
        "Copiar la IP cuando soporte o alojamiento soliciten detalles de conexión.",
      ],
      wordcounter: [
        "Comprobar límites de caracteres para títulos, meta descripciones, formularios, publicaciones y mensajes cortos.",
        "Estimar la longitud del texto antes de publicarlo en un sitio, perfil o campaña.",
        "Encontrar la posición exacta de un carácter al revisar un fragmento corto.",
        "Ajustar textos que deben cumplir límites estrictos antes de enviarlos.",
      ],
      base64encoder: [
        "Codificar texto plano en Base64 para pruebas, payloads de ejemplo o transferencia simple.",
        "Decodificar una cadena Base64 para inspeccionar texto legible durante depuración.",
        "Verificar si los datos codificados copiados son válidos antes de usarlos.",
        "Preparar pequeños ejemplos codificados para documentación API, demos o soporte.",
      ],
      textdiffchecker: [
        "Comparar dos borradores para ver exactamente qué cambió antes de publicar.",
        "Revisar ediciones en correos, traducciones, documentos o pequeños fragmentos de código.",
        "Encontrar texto eliminado, agregado o modificado sin abrir una herramienta pesada.",
        "Confirmar que el contenido copiado sigue coincidiendo con la versión aprobada.",
      ],
      barcodegenerator: [
        "Crear códigos de barras para etiquetas, IDs de inventario, seguimiento interno o referencias simples.",
        "Elegir un formato compatible con el escáner, sistema de etiquetas o flujo usado.",
        "Descargar imágenes de código de barras para impresión, empaques u organización de inventario.",
        "Probar el código con el escáner objetivo antes de usarlo en un proceso real.",
      ],
      percentagecalculator: [
        "Calcular descuentos, cambios de precio, impuestos, propinas, márgenes y porcentajes rápidos.",
        "Comprobar aumento o disminución porcentual entre números antiguos y nuevos.",
        "Encontrar qué porcentaje representa un valor de otro para informes, estudio o planificación.",
        "Copiar el resultado tras confirmar que el modo elegido coincide con la pregunta.",
      ],
    },
  },
  de: {
    titleTemplate: "Häufige Anwendungen von {0}",
    intro: "Diese Beispiele konzentrieren sich auf praktische Aufgaben, nach denen Nutzer oft suchen, wenn sie ein schnelles Online-Tool brauchen.",
    tools: {
      imagecompressor: [
        "Große JPG- oder PNG-Dateien vor dem Upload in Website, Formular, E-Mail oder CMS verkleinern.",
        "Bilder in WebP umwandeln, wenn kleinere Dateien und schnellere Ladezeiten gewünscht sind.",
        "Produkt-, Blog- und Social-Media-Bilder ohne Desktop-Software vorbereiten.",
        "Ausgabegröße und sichtbare Qualität prüfen, bevor das Original ersetzt wird.",
      ],
      qrgenerator: [
        "QR-Codes für Website-Link, Landingpage, Menü, Anmeldeformular oder Eventseite erstellen.",
        "Kontaktdaten, kurzen Text oder Hinweise teilen, ohne eine lange URL eintippen zu lassen.",
        "QR-Code-Bilder für Poster, Verpackungen, Unterrichtsmaterial oder Ladendisplays herunterladen.",
        "Den QR-Code vor Druck oder Veröffentlichung mit einem Smartphone scannen.",
      ],
      jsonformatter: [
        "Komprimiertes JSON aus einer API-Antwort formatieren, damit es leichter lesbar und prüfbar ist.",
        "JSON vor dem Einfügen in Konfiguration, Request Body oder Testfall validieren.",
        "Fehlende Kommas, Klammern, Anführungszeichen und andere häufige Syntaxfehler finden.",
        "Saubere JSON-Ausschnitte für Dokumentation, Supporttickets oder Teamreview vorbereiten.",
      ],
      passwordgenerator: [
        "Ein zufälliges Passwort für neues Konto, Adminbereich, Datenbank oder gemeinsam genutztes System erstellen.",
        "Länge und Zeichentypen passend zu den Regeln des verwendeten Dienstes wählen.",
        "Alte Passwörter nicht erneut für Arbeit, Banking, E-Mail oder private Konten verwenden.",
        "Das generierte Passwort sofort in einem vertrauenswürdigen Passwortmanager speichern.",
      ],
      iplookup: [
        "Die öffentliche IP-Adresse prüfen, bevor Zugriff auf Server, Dashboard oder Firewall erlaubt wird.",
        "Bestätigen, ob VPN, Proxy oder Mobilnetz den sichtbaren Standort verändert.",
        "Grunddaten zu Anbieter, Stadt, Land, Zeitzone und Browsernetzwerk prüfen.",
        "Die IP kopieren, wenn Support oder Hostinganbieter Verbindungsdetails anfordern.",
      ],
      wordcounter: [
        "Zeichenlimits für Titel, Meta-Beschreibungen, Formulare, Beiträge und kurze Nachrichten prüfen.",
        "Textlänge vor Veröffentlichung auf Website, Profil oder Kampagne einschätzen.",
        "Die genaue Zeichenposition in einem kurzen Ausschnitt oder Eingabefeld finden.",
        "Texte vor dem Absenden an strenge Längenlimits anpassen.",
      ],
      base64encoder: [
        "Klartext für Tests, Beispiel-Payloads oder einfache Datenübertragung in Base64 kodieren.",
        "Eine Base64-Zeichenfolge beim Debugging in lesbaren Text zurückwandeln.",
        "Kopierte kodierte Daten vor der Verwendung auf Gültigkeit prüfen.",
        "Kleine kodierte Beispiele für API-Dokumentation, Demos oder Supportnotizen vorbereiten.",
      ],
      textdiffchecker: [
        "Zwei Entwürfe vergleichen, um vor Veröffentlichung genau zu sehen, was geändert wurde.",
        "Änderungen in E-Mails, Übersetzungen, Dokumenten oder kurzen Codeausschnitten prüfen.",
        "Entfernten, hinzugefügten oder geänderten Text ohne großes Vergleichstool finden.",
        "Bestätigen, dass kopierter Inhalt noch der freigegebenen Version entspricht.",
      ],
      barcodegenerator: [
        "Barcodes für Etiketten, Inventar-IDs, internes Tracking oder einfache Produktreferenzen erstellen.",
        "Ein Barcodeformat wählen, das zu Scanner, Etikettensystem oder Ablauf passt.",
        "Barcode-Bilder für Drucklayouts, Verpackungsentwürfe oder Lagerorganisation herunterladen.",
        "Den Barcode vor produktiver Nutzung mit dem Zielscanner testen.",
      ],
      percentagecalculator: [
        "Rabatte, Preisänderungen, Steuern, Trinkgeld, Margen und schnelle Prozentwerte berechnen.",
        "Prozentuale Erhöhung oder Verringerung zwischen alten und neuen Zahlen prüfen.",
        "Ermitteln, wie viel Prozent ein Wert von einem anderen ist, etwa für Berichte oder Planung.",
        "Das Ergebnis kopieren, nachdem der passende Rechenmodus bestätigt wurde.",
      ],
    },
  },
  ar: {
    titleTemplate: "استخدامات شائعة لـ {0}",
    intro: "تركز هذه الأمثلة على مهام عملية يبحث عنها المستخدمون عادة عندما يحتاجون إلى أداة سريعة عبر الإنترنت.",
    tools: {
      imagecompressor: [
        "تقليل حجم ملفات JPG أو PNG الكبيرة قبل رفعها إلى موقع أو نموذج أو بريد إلكتروني أو نظام إدارة محتوى.",
        "تحويل الصور إلى WebP عندما تريد ملفات أصغر وصفحات أسرع.",
        "تجهيز صور المنتجات أو المدونات أو الشبكات الاجتماعية دون تثبيت برنامج مكتبي.",
        "التحقق من حجم النتيجة وجودتها البصرية قبل استبدال الصورة الأصلية.",
      ],
      qrgenerator: [
        "إنشاء رمز QR لرابط موقع أو صفحة هبوط أو قائمة طعام أو نموذج تسجيل أو صفحة حدث.",
        "مشاركة بيانات اتصال أو نص قصير أو تعليمات دون مطالبة المستخدم بكتابة رابط طويل.",
        "تنزيل صورة QR لاستخدامها في الملصقات أو التغليف أو المواد الدراسية أو عروض المتجر.",
        "فحص رمز QR بالهاتف قبل طباعته أو نشره.",
      ],
      jsonformatter: [
        "تنسيق JSON مضغوط من استجابة API ليصبح أسهل في القراءة وتصحيح الأخطاء.",
        "التحقق من JSON قبل لصقه في ملف إعدادات أو جسم طلب أو حالة اختبار.",
        "العثور على الفواصل أو الأقواس أو علامات الاقتباس المفقودة ومشكلات الصياغة الشائعة.",
        "إعداد مقاطع JSON أنظف للتوثيق أو طلبات الدعم أو مراجعة الفريق.",
      ],
      passwordgenerator: [
        "إنشاء كلمة مرور عشوائية لحساب جديد أو لوحة إدارة أو قاعدة بيانات أو نظام مشترك.",
        "اختيار الطول وأنواع الأحرف حسب قواعد الخدمة المستخدمة.",
        "تجنب إعادة استخدام كلمات المرور القديمة في حسابات العمل أو البنك أو البريد أو الحسابات الشخصية.",
        "حفظ كلمة المرور الناتجة فوراً في مدير كلمات مرور موثوق.",
      ],
      iplookup: [
        "التحقق من عنوان IP العام قبل السماح بالوصول إلى خادم أو لوحة تحكم أو جدار حماية.",
        "تأكيد ما إذا كان VPN أو الوكيل أو شبكة الهاتف يغير الموقع الظاهر.",
        "مراجعة تفاصيل أساسية عن المزود والمدينة والدولة والمنطقة الزمنية وشبكة المتصفح.",
        "نسخ عنوان IP عندما يطلب الدعم أو مزود الاستضافة تفاصيل الاتصال.",
      ],
      wordcounter: [
        "التحقق من حدود الأحرف للعناوين والأوصاف والنماذج والمنشورات والرسائل القصيرة.",
        "تقدير طول النص قبل نشره في موقع أو ملف شخصي أو حملة.",
        "العثور على موضع حرف محدد عند مراجعة مقطع قصير أو حقل إدخال.",
        "تنظيم النص قبل الإرسال عندما يجب الالتزام بحدود طول صارمة.",
      ],
      base64encoder: [
        "ترميز النص العادي إلى Base64 للاختبارات أو أمثلة البيانات أو النقل البسيط.",
        "فك ترميز سلسلة Base64 لفحص النص المقروء أثناء تصحيح الأخطاء.",
        "التحقق من أن البيانات المرمزة المنسوخة صالحة قبل استخدامها في سير العمل.",
        "إعداد أمثلة صغيرة مرمزة لتوثيق API أو العروض أو ملاحظات الدعم.",
      ],
      textdiffchecker: [
        "مقارنة مسودتين لمعرفة ما تغير بدقة قبل النشر.",
        "مراجعة التعديلات في رسائل البريد أو الترجمات أو المستندات أو مقاطع الكود القصيرة.",
        "العثور على النص المحذوف أو المضاف أو المعدل دون فتح أداة مقارنة ثقيلة.",
        "التأكد من أن المحتوى المنسوخ ما زال يطابق النسخة المعتمدة.",
      ],
      barcodegenerator: [
        "إنشاء باركود للملصقات أو معرفات المخزون أو التتبع الداخلي أو مراجع المنتجات البسيطة.",
        "اختيار صيغة باركود تناسب الماسح أو نظام الملصقات أو سير العمل.",
        "تنزيل صور الباركود لتصاميم الطباعة أو مسودات التغليف أو تنظيم المخزون.",
        "اختبار الباركود بالماسح المستهدف قبل استخدامه في عملية فعلية.",
      ],
      percentagecalculator: [
        "حساب الخصومات وتغيرات السعر والضرائب والإكراميات والهوامش وقيم النسب السريعة.",
        "التحقق من نسبة الزيادة أو النقصان بين رقم قديم ورقم جديد.",
        "معرفة نسبة قيمة معينة من قيمة أخرى للتقارير أو الدراسة أو التخطيط.",
        "نسخ النتيجة بعد التأكد من أن وضع الحساب المختار يطابق السؤال.",
      ],
    },
  },
};

export function getHighIntentUseCaseCopy(locale: Locale, toolId: string, title: string) {
  const localeCopy = USE_CASE_COPY[locale] ?? USE_CASE_COPY.en;
  const items = localeCopy.tools[toolId] ?? USE_CASE_COPY.en.tools[toolId];

  if (!items) {
    return null;
  }

  return {
    title: localeCopy.titleTemplate.replace("{0}", title),
    intro: localeCopy.intro,
    items,
  };
}
