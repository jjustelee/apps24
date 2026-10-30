import type { Locale } from "@/lib/site";

export type PrivacyFlows = { heading: string; items: [string, string] };

/** Verified against src/features/tools/implementations/background-remover.worker.ts, ip-lookup.tsx and src/app/api/ip-lookup/route.ts. */
export const PRIVACY_FLOWS: Record<Locale, PrivacyFlows> = {
  "en": {
    heading: "Additional third-party data flows",
    items: [
      "Background Remover: the AI model files are downloaded to your browser from Hugging Face (huggingface.co) and the ONNX runtime files from the jsDelivr CDN (cdn.jsdelivr.net). Those hosts receive your IP address and standard request headers. Your image is not uploaded. The model files are kept in your browser's Cache API until you clear this site's data.",
      "What Is My IP: the Apps24 server sends your public IP address to IPinfo (ipinfo.io) to look up approximate location and network details. If the server cannot see a public IP, your browser asks ipify (api64.ipify.org) directly and then passes the result to the Apps24 server.",
    ],
  },
  "ko": {
    heading: "추가 제3자 데이터 전송",
    items: [
      "배경 제거: AI 모델 파일은 Hugging Face(huggingface.co)에서, ONNX 런타임 파일은 jsDelivr CDN(cdn.jsdelivr.net)에서 브라우저로 내려받습니다. 이 호스트들은 사용자의 IP 주소와 일반 요청 헤더를 받습니다. 이미지는 업로드되지 않습니다. 모델 파일은 이 사이트의 데이터를 지우기 전까지 브라우저 Cache API에 보관됩니다.",
      "내 IP 확인: Apps24 서버가 대략적인 위치와 네트워크 정보를 조회하기 위해 사용자의 공인 IP 주소를 IPinfo(ipinfo.io)로 보냅니다. 서버가 공인 IP를 확인하지 못하면 브라우저가 ipify(api64.ipify.org)에 직접 물어본 뒤 그 결과를 Apps24 서버로 전달합니다.",
    ],
  },
  "fr": {
    heading: "Autres flux de données vers des tiers",
    items: [
      "Suppression d'arrière-plan : les fichiers du modèle d'IA sont téléchargés dans votre navigateur depuis Hugging Face (huggingface.co) et ceux d'ONNX Runtime depuis le CDN jsDelivr (cdn.jsdelivr.net). Ces hébergeurs reçoivent votre adresse IP et les en-têtes de requête habituels. Votre image n'est pas envoyée. Les fichiers du modèle restent dans l'API Cache de votre navigateur jusqu'à l'effacement des données du site.",
      "Quelle est mon IP : le serveur d'Apps24 transmet votre adresse IP publique à IPinfo (ipinfo.io) pour obtenir une localisation approximative et des informations réseau. Si le serveur ne voit pas d'IP publique, votre navigateur interroge directement ipify (api64.ipify.org), puis transmet le résultat au serveur d'Apps24.",
    ],
  },
  "de": {
    heading: "Weitere Datenflüsse an Dritte",
    items: [
      "Hintergrundentfernung: Die KI-Modelldateien werden von Hugging Face (huggingface.co), die ONNX-Runtime-Dateien vom jsDelivr-CDN (cdn.jsdelivr.net) in Ihren Browser geladen. Diese Hosts erhalten Ihre IP-Adresse und übliche Request-Header. Ihr Bild wird nicht hochgeladen. Die Modelldateien bleiben in der Cache API Ihres Browsers, bis Sie die Daten dieser Website löschen.",
      "Meine IP-Adresse: Der Apps24-Server sendet Ihre öffentliche IP-Adresse an IPinfo (ipinfo.io), um ungefähren Standort und Netzwerkdaten abzufragen. Sieht der Server keine öffentliche IP, fragt Ihr Browser direkt bei ipify (api64.ipify.org) an und übergibt das Ergebnis an den Apps24-Server.",
    ],
  },
  "es": {
    heading: "Otros flujos de datos con terceros",
    items: [
      "Eliminación de fondo: los archivos del modelo de IA se descargan en tu navegador desde Hugging Face (huggingface.co) y los de ONNX Runtime desde el CDN jsDelivr (cdn.jsdelivr.net). Esos servidores reciben tu dirección IP y las cabeceras de solicitud habituales. Tu imagen no se sube. Los archivos del modelo se guardan en la Cache API del navegador hasta que borres los datos del sitio.",
      "Cuál es mi IP: el servidor de Apps24 envía tu IP pública a IPinfo (ipinfo.io) para obtener una ubicación aproximada y datos de red. Si el servidor no ve una IP pública, tu navegador consulta directamente a ipify (api64.ipify.org) y pasa el resultado al servidor de Apps24.",
    ],
  },
  "pt": {
    heading: "Outros fluxos de dados com terceiros",
    items: [
      "Remoção de fundo: os arquivos do modelo de IA são baixados para o seu navegador do Hugging Face (huggingface.co) e os do ONNX Runtime do CDN jsDelivr (cdn.jsdelivr.net). Esses hosts recebem seu endereço IP e os cabeçalhos de solicitação habituais. Sua imagem não é enviada. Os arquivos do modelo ficam na Cache API do navegador até você limpar os dados do site.",
      "Qual é o meu IP: o servidor do Apps24 envia seu IP público ao IPinfo (ipinfo.io) para consultar localização aproximada e dados de rede. Se o servidor não vir um IP público, o navegador consulta o ipify (api64.ipify.org) diretamente e repassa o resultado ao servidor do Apps24.",
    ],
  },
  "ja": {
    heading: "その他の第三者へのデータ送信",
    items: [
      "背景除去:AIモデルのファイルはHugging Face(huggingface.co)から、ONNXランタイムのファイルはjsDelivr CDN(cdn.jsdelivr.net)からブラウザにダウンロードされます。これらのホストはIPアドレスと通常のリクエストヘッダーを受け取ります。画像はアップロードされません。モデルファイルは、このサイトのデータを削除するまでブラウザのCache APIに保存されます。",
      "IPアドレス確認:Apps24のサーバーが、おおよその位置とネットワーク情報を調べるため、公開IPアドレスをIPinfo(ipinfo.io)へ送信します。サーバーが公開IPを確認できない場合は、ブラウザがipify(api64.ipify.org)に直接問い合わせ、その結果をApps24のサーバーへ渡します。",
    ],
  },
  "zh": {
    heading: "其他第三方数据流向",
    items: [
      "背景移除:AI 模型文件从 Hugging Face(huggingface.co)下载到您的浏览器,ONNX 运行时文件来自 jsDelivr CDN(cdn.jsdelivr.net)。这些主机会收到您的 IP 地址和常规请求标头。您的图片不会被上传。模型文件会保存在浏览器的 Cache API 中,直到您清除本站数据。",
      "查看我的 IP:Apps24 服务器会把您的公网 IP 地址发送给 IPinfo(ipinfo.io),以查询大致位置和网络信息。若服务器看不到公网 IP,浏览器会直接向 ipify(api64.ipify.org)查询,再把结果交给 Apps24 服务器。",
    ],
  },
  "zh-TW": {
    heading: "其他第三方資料流向",
    items: [
      "去背:AI 模型檔案從 Hugging Face(huggingface.co)下載到您的瀏覽器,ONNX 執行環境檔案來自 jsDelivr CDN(cdn.jsdelivr.net)。這些主機會收到您的 IP 位址與一般請求標頭。您的圖片不會被上傳。模型檔案會保存在瀏覽器的 Cache API 中,直到您清除本站資料。",
      "查詢我的 IP:Apps24 伺服器會把您的公開 IP 位址傳送給 IPinfo(ipinfo.io),以查詢大致位置與網路資訊。若伺服器看不到公開 IP,瀏覽器會直接向 ipify(api64.ipify.org)查詢,再把結果交給 Apps24 伺服器。",
    ],
  },
  "ar": {
    heading: "تدفقات بيانات إضافية إلى أطراف ثالثة",
    items: [
      "إزالة الخلفية: تُنزَّل ملفات نموذج الذكاء الاصطناعي إلى متصفحك من Hugging Face ‏(huggingface.co) وملفات ONNX Runtime من شبكة jsDelivr ‏(cdn.jsdelivr.net). تتلقى هذه الخوادم عنوان IP الخاص بك وترويسات الطلب المعتادة. لا تُرفع صورتك. تبقى ملفات النموذج في Cache API بالمتصفح حتى تمسح بيانات هذا الموقع.",
      "ما هو IP الخاص بي: يرسل خادم Apps24 عنوان IP العام الخاص بك إلى IPinfo ‏(ipinfo.io) للحصول على الموقع التقريبي ومعلومات الشبكة. إذا لم يرَ الخادم عنوان IP عامًا، يستعلم متصفحك من ipify ‏(api64.ipify.org) مباشرة ثم يمرّر النتيجة إلى خادم Apps24.",
    ],
  },
};
