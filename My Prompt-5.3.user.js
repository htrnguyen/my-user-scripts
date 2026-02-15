// ==UserScript==
// @name                My Prompt
// @name:pt-BR          Meu Prompt
// @name:zh-CN          我的提示词
// @name:zh-TW          我的提示詞
// @name:fr-CA          Mon Prompt
// @name:ckb            پڕۆمپتەکەم
// @name:ar             مُوجِّهي
// @name:be             Мой запыт
// @name:bg             Моята подкана
// @name:cs             Můj pokyn
// @name:da             Min prompt
// @name:de             Mein Prompt
// @name:el             Η προτροπή μου
// @name:en             My Prompt
// @name:eo             Mia instigo
// @name:es             Mi Prompt
// @name:fi             Kehotteeni
// @name:fr             Mon Prompt
// @name:he             ההנחיה שלי
// @name:hr             Moja uputa
// @name:hu             Promptom
// @name:id             Prompt Saya
// @name:it             Il mio Prompt
// @name:ja             マイプロンプト
// @name:ka             ჩემი პრომპტი
// @name:ko             나의 프롬프트
// @name:mr             माझी सूचना
// @name:nb             Min prompt
// @name:nl             Mijn Prompt
// @name:pl             Mój Prompt
// @name:ro             Prompt-ul meu
// @name:ru             Мой Промпт
// @name:sk             Môj pokyn
// @name:sr             Мој упит
// @name:sv             Min prompt
// @name:th             พรอมต์ของฉัน
// @name:tr             İstemim
// @name:uk             Мій запит
// @name:ug             مېنىڭ پرومپتۇم
// @name:vi             Lời nhắc của tôi
// @namespace           https://github.com/0H4S
// @version             5.3
// @author              OHAS
// @icon                https://files.catbox.moe/1nriwc.svg
// @license             CC-BY-NC-ND-4.0
// @copyright           2026 OHAS. All Rights Reserved.
// @description         Optimize your workflow and turn AI into your personal agent! Save and organize all your prompts in your personal library. Explore Dynamic Prompt Mode to create interactive prompts. Elevate simple prompts to professional quality with AI Enhance and auto-attach recurring files. Perfect for boosting productivity on ChatGPT, Gemini, Grok, DeepSeek, and other LLMs.
// @description:pt-BR   Otimize seu fluxo de trabalho e transforme a IA em seu agente pessoal! Salve e organize todos os seus prompts na biblioteca pessoal. Explore o Modo de Prompt Dinâmico para criar prompts interativos. Eleve prompts simples à qualidade profissional com Aprimorar com IA e anexe arquivos recorrentes automaticamente. Ideal para aumentar a produtividade no ChatGPT, Gemini, Grok, DeepSeek e outras LLMs.
// @description:zh-CN   优化工作流程，将人工智能变为您的专属助手！将所有提示保存并整理至个人库。探索动态提示模式，创建交互式提示。借助AI增强功能，将简单提示提升至专业水准，并自动附加常用文件。完美适用于提升在ChatGPT、Gemini、Grok、DeepSeek等大语言模型上的生产力。
// @description:zh-TW   優化工作流程，將人工智慧轉化為您的專屬助手！將所有提示儲存並整理至個人庫。探索動態提示模式，建立互動式提示。透過AI增強功能，將簡易提示提升至專業水準，並自動附加常用檔案。完美適用於提升在ChatGPT、Gemini、Grok、DeepSeek等大型語言模型上的生產力。
// @description:fr-CA   Optimisez votre flux de travail et transformez l'IA en votre agent personnel ! Enregistrez et organisez tous vos prompts dans votre bibliothèque personnelle. Découvrez le Mode Prompt Dynamique pour créer des prompts interactifs. Portez vos prompts simples à un niveau professionnel grâce à Améliorer avec l'IA et joignez automatiquement les fichiers récurrents. Idéal pour booster votre productivité sur ChatGPT, Gemini, Grok, DeepSeek et autres LLM.
// @description:ckb     کاریگەری کارگوزارییەکەت بەینەوە و زیرەکی دەستکرد بگۆڕە بۆ ئاژەڵی کەسیت! هەموو پرۆمپتەکانت لە کتێبخانەی کەسیتدا پاشەکەوت و ڕێکبخە. مۆدی پرۆمپتی دینامیکی تاقی بکەرەوە بۆ دروستکردنی پرۆمپتی ناوخۆیی. کوالیتی پرۆمپتە سادەکانت بەرزبکەرەوە بۆ ئاستی پیشەگەری بە تایبەتمەندی باشترکردن لەگەڵ زیرەکی دەستکرد و فایلە دووبارەکان بەگۆڕانکاری پاشەکەوت بکە. بەتاڵ بۆ زیادکردنی بەرهەمهێنان لەسەر ChatGPT، Gemini، Grok، DeepSeek و چەند LLMی تر.
// @description:ar      حسِّن سير عملك وحوِّل الذكاء الاصطناعي إلى وكيلك الشخصي! احفظ ونظِّم جميع مطالباتك في مكتبتك الشخصية. استكشف وضع المطالبة الديناميكي لإنشاء مطالبات تفاعلية. ارتقِ بجودة مطالباتك البسيطة إلى المستوى الاحترافي باستخدام ميزة التحسين بالذكاء الاصطناعي وأرفق الملفات المتكررة تلقائيًا. مثالي لزيادة الإنتاجية على ChatGPT وGemini وGrok وDeepSeek ونماذج اللغة الكبيرة الأخرى.
// @description:be      Аптымізуйце працоўны працэс і ператварыце ШІ ў свайго асабістага агента! Захоўвайце і арганізуйце ўсе запыты ў асабістай бібліятэцы. Даследуйце дынамічны рэжым запытаў для стварэння інтэрактыўных запытаў. Падвысіце якасць простых запытаў да прафесійнага ўзроўню з дапамогай функцыі «Палепшыць з ШІ» і аўтаматычна далучайце паўтаральныя файлы. Ідэальна для павелічэння прадукцыйнасці ў ChatGPT, Gemini, Grok, DeepSeek і іншых LLM.
// @description:bg      Оптимизирайте работния си процес и превърнете ИИ във вашия личен агент! Запазвайте и организирайте всички промпти в личната си библиотека. Изследвайте Динамичен режим на промптите, за да създавате интерактивни промпти. Повишете качеството на простите промпти до професионално ниво с функцията «Подобри с ИИ» и автоматично прикачайте повтарящи се файлове. Идеално за повишаване на продуктивността в ChatGPT, Gemini, Grok, DeepSeek и други LLM.
// @description:cs      Optimalizujte svůj pracovní postup a proměňte AI ve svého osobního agenta! Ukládejte a organizujte všechny své prompty ve své osobní knihovně. Prozkoumejte Dynamický režim promptů pro vytváření interaktivních promptů. Zvyšte kvalitu jednoduchých promptů na profesionální úroveň funkcí Vylepšit pomocí AI a automaticky přikládejte opakující se soubory. Ideální pro zvýšení produktivity v ChatGPT, Gemini, Grok, DeepSeek a dalších LLM.
// @description:da      Optimer dit arbejdsflow, og gør AI til din personlige agent! Gem og organiser alle dine prompts i dit personlige bibliotek. Udforsk Dynamisk Prompt-tilstand til at skabe interaktive prompts. Løft kvaliteten af dine enkle prompts til et professionelt niveau med AI-forbedring og vedhæft gentagne filer automatisk. Perfekt til at øge produktiviteten på ChatGPT, Gemini, Grok, DeepSeek og andre LLM'er.
// @description:de      Optimieren Sie Ihren Arbeitsablauf und machen Sie KI zu Ihrem persönlichen Agenten! Speichern und organisieren Sie alle Prompts in Ihrer persönlichen Bibliothek. Entdecken Sie den Dynamischen Prompt-Modus für interaktive Prompts. Veredeln Sie einfache Prompts mit KI-Verbesserung auf Profi-Niveau und hängen Sie wiederkehrende Dateien automatisch an. Perfekt zur Produktivitätssteigerung in ChatGPT, Gemini, Grok, DeepSeek und anderen LLMs.
// @description:el      Βελτιστοποιήστε τη ροή εργασίας σας και μετατρέψτε την ΤΝ σε προσωπικό σας βοηθό! Αποθηκεύστε και οργανώστε όλα τα prompts σας στην προσωπική σας βιβλιοθήκη. Εξερευνήστε τη Δυναμική Λειτουργία Prompt για δημιουργία διαδραστικών prompts. Ανεβάστε απλά prompts σε επαγγελματικό επίπεδο με τη λειτουργία Βελτίωση με ΤΝ και επισυνάψτε αυτόματα επαναλαμβανόμενα αρχεία. Ιδανικό για αύξηση παραγωγικότητας σε ChatGPT, Gemini, Grok, DeepSeek και άλλα LLM.
// @description:en      Optimize your workflow and turn AI into your personal agent! Save and organize all your prompts in your personal library. Explore Dynamic Prompt Mode to create interactive prompts. Elevate simple prompts to professional quality with AI Enhance and auto-attach recurring files. Perfect for boosting productivity on ChatGPT, Gemini, Grok, DeepSeek, and other LLMs.
// @description:eo      Optimumigu vian laborfluon kaj transformu la AI-n al via persona agento! Konservu kaj organizu ĉiujn viajn promptojn en via persona biblioteko. Esploru la Dinaman Prompt-Reĝimon por krei interaktivajn promptojn. Levu simplajn promptojn al profesian nivelo per la funkcio AI-Plibonigi kaj aŭtomate alkroĉu ripetajn dosierojn. Perfekte por pliigi produktivecon en ChatGPT, Gemini, Grok, DeepSeek kaj aliaj LLM.
// @description:es      ¡Optimiza tu flujo de trabajo y convierte la IA en tu agente personal! Guarda y organiza todos tus prompts en tu biblioteca personal. Explora el Modo de Prompt Dinámico para crear prompts interactivos. Eleva prompts simples a nivel profesional con Mejorar con IA y adjunta archivos recurrentes automáticamente. Perfecto para aumentar la productividad en ChatGPT, Gemini, Grok, DeepSeek y otras LLM.
// @description:fi      Optimoi työnkulku ja muuta tekoäly henkilökohtaiseksi avustajaksesi! Tallenna ja järjestä kaikki kehotteesi henkilökohtaiseen kirjastoosi. Tutustu dynaamiseen kehotetilaan vuorovaikutteisten kehotteiden luomiseksi. Nosta yksinkertaisten kehotteidesi laatu ammattitasolle tekoälyparannuksella ja liitä toistuvat tiedostot automaattisesti. Täydellinen tuottavuuden lisäämiseksi ChatGPT:ssä, Gemini:ssä, Grok:ssa, DeepSeek:ssä ja muissa LLM:ssä.
// @description:fr      Optimisez votre flux de travail et transformez l'IA en votre agent personnel ! Enregistrez et organisez tous vos prompts dans votre bibliothèque personnelle. Découvrez le Mode Prompt Dynamique pour créer des prompts interactifs. Portez vos prompts simples à un niveau professionnel grâce à Améliorer avec l'IA et joignez automatiquement les fichiers récurrents. Idéal pour booster votre productivité sur ChatGPT, Gemini, Grok, DeepSeek et autres LLM.
// @description:he      מיטוב זרימת העבודה והפיכת הבינה המלאכותית לסוכן האישי שלך! שמור וסדר את כל ה-prompts שלך בספריה האישית. גלה את מצב ה-Prompt הדינמי ליצירת prompts אינטראקטיביים. הרם prompts פשוטים לרמה מקצועית עם תכונת השדרוג בעזרת בינה מלאכותית והוסף קבצים חוזרים אוטומטית. מושלם להגברת פרודוקטיביות ב-ChatGPT, Gemini, Grok, DeepSeek ו-LLM נוספים.
// @description:hr      Optimizirajte radni tijek i pretvorite AI u svog osobnog agenta! Spremite i organizirajte sve svoje upite u osobnu biblioteku. Istražite Dinamički način rada s upitima za stvaranje interaktivnih upita. Podignite kvalitetu jednostavnih upita na profesionalnu razinu pomoću značajke Poboljšaj pomoću AI i automatski priložite ponavljajuće datoteke. Savršeno za povećanje produktivnosti na ChatGPT-u, Gemini-u, Grok-u, DeepSeek-u i drugim LLM-ovima.
// @description:hu      Optimalizáld a munkafolyamatodat, és változtasd az MI-t személyes ügynökké! Mentsd és rendezd el az összes promptodat a személyes könyvtárban. Fedezd fel a Dinamikus Prompt módot interaktív promptok létrehozásához. Emeld egyszerű promptjaid minőségét professzionális szintre az MI-fejlesztés funkcióval, és csatold automatikusan az ismétlődő fájlokat. Tökéletes a termelékenység növeléséhez ChatGPT, Gemini, Grok, DeepSeek és egyéb LLM esetén.
// @description:id      Optimalkan alur kerja Anda dan ubah AI menjadi agen pribadi Anda! Simpan dan atur semua prompt Anda di perpustakaan pribadi. Jelajahi Mode Prompt Dinamis untuk membuat prompt interaktif. Tingkatkan prompt sederhana ke kualitas profesional dengan Tingkatkan dengan AI dan lampirkan file berulang secara otomatis. Sempurna untuk meningkatkan produktivitas di ChatGPT, Gemini, Grok, DeepSeek, dan LLM lainnya.
// @description:it      Ottimizza il tuo flusso di lavoro e trasforma l'IA nel tuo agente personale! Salva e organizza tutti i tuoi prompt nella libreria personale. Esplora la Modalità Prompt Dinamico per creare prompt interattivi. Eleva prompt semplici a qualità professionale con Migliora con IA e allega automaticamente file ricorrenti. Perfetto per aumentare la produttività su ChatGPT, Gemini, Grok, DeepSeek e altri LLM.
// @description:ja      ワークフローを最適化し、AIをパーソナルエージェントに！すべてのプロンプトをパーソナルライブラリに保存・整理。ダイナミックプロンプトモードでインタラクティブなプロンプトを生成。AI強化機能でシンプルなプロンプトをプロ品質へ。頻出ファイルを自動添付。ChatGPT、Gemini、Grok、DeepSeekなど主要LLMでの生産性向上に最適。
// @description:ka      ოპტიმიზაცია თქვენი სამუშაო პროცესი და გადააქციეთ AI თქვენს პირად აგენტად! შეინახეთ და დაალაგეთ ყველა პრომპტი პირად ბიბლიოთეკაში. გამოიყენეთ დინამიური პრომპტის რეჟიმი ინტერაქტიული პრომპტების შესაქმნელად. აწიეთ მარტივი პრომპტების ხარისხი პროფესიონალურ დონეზე AI გაუმჯობესებით და ავტომატურად მიაბარეთ განმეორებადი ფაილები. სრულყოფილია პროდუქტიულობის გასაზრდელად ChatGPT, Gemini, Grok, DeepSeek და სხვა LLM-ებში.
// @description:ko      워크플로우를 최적화하고 AI를 개인 에이전트로 승격하세요! 모든 프롬프트를 개인 라이브러리에 저장 및 정리. 다이나믹 프롬프트 모드로 인터랙티브 프롬프트 생성. AI 향상 기능으로 간단한 프롬프트를 전문 수준으로 개선하고 반복 파일 자동 첨부. ChatGPT, Gemini, Grok, DeepSeek 등 주요 LLM에서 생산성 향상에 완벽합니다.
// @description:mr      तुमचा कार्यप्रवाह ऑप्टिमाइझ करा आणि AI ला तुमचा वैयक्तिक एजंट बनवा! तुमचे सर्व प्रॉम्प्ट्स वैयक्तिक लायब्ररीत साठवा आणि व्यवस्थित करा. इंटरॅक्टिव्ह प्रॉम्प्ट्स तयार करण्यासाठी डायनॅमिक प्रॉम्प्ट मोड एक्सप्लोर करा. AI इन्हँन्ससह साध्या प्रॉम्प्ट्सची गुणवत्ता प्रोफेशनल स्तरावर आणा आणि वारंवार फायली ऑटो-अटॅच करा. ChatGPT, Gemini, Grok, DeepSeek आणि इतर LLM वर उत्पादकता वाढवण्यासाठी आदर्श.
// @description:nb      Optimaliser arbeidsflyten og gjør AI til din personlige agent! Lagre og organiser alle promptene dine i det personlige biblioteket. Utforsk Dynamisk prompt-modus for å lage interaktive prompts. Løft enkle prompts til profesjonell kvalitet med AI-forbedring og fest gjentakende filer automatisk. Perfekt for økt produktivitet på ChatGPT, Gemini, Grok, DeepSeek og andre LLM-er.
// @description:nl      Optimaliseer je workflow en maak van AI je persoonlijke agent! Bewaar en organiseer al je prompts in je persoonlijke bibliotheek. Verken de Dynamische Prompt-modus voor interactieve prompts. Verhef eenvoudige prompts naar professioneel niveau met AI Verbeteren en koppel terugkerende bestanden automatisch. Ideaal om productiviteit te verhogen op ChatGPT, Gemini, Grok, DeepSeek en andere LLM's.
// @description:pl      Zoptymalizuj przepływ pracy i zamień AI w swojego osobistego agenta! Zapisuj i organizuj wszystkie swoje prompty w osobistej bibliotece. Poznaj Dynamiczny Tryb Promptów do tworzenia interaktywnych promptów. Podnieś jakość prostych promptów na poziom profesjonalny dzięki funkcji Ulepsz z AI i automatycznie dołączaj powtarzające się pliki. Idealne do zwiększenia produktywności w ChatGPT, Gemini, Grok, DeepSeek i innych LLM.
// @description:ro      Optimizează-ți fluxul de lucru și transformă IA în agentul tău personal! Salvează și organizează toate prompturile în biblioteca ta personală. Explorează Modul Prompt Dinamic pentru a crea prompturi interactive. Ridică prompturile simple la nivel profesional cu Îmbunătățește cu IA și atașează automat fișierele recurente. Perfect pentru creșterea productivității pe ChatGPT, Gemini, Grok, DeepSeek și alte LLM.
// @description:ru      Оптимизируйте рабочий процесс и превратите ИИ в вашего личного агента! Сохраняйте и организуйте все промпты в личной библиотеке. Исследуйте Динамический режим промптов для создания интерактивных промптов. Повысьте качество простых промптов до профессионального уровня функцией «Улучшить с ИИ» и автоматически прикрепляйте повторяющиеся файлы. Идеально для повышения продуктивности в ChatGPT, Gemini, Grok, DeepSeek и других LLM.
// @description:sk      Optimalizujte pracovný postup a premeňte AI na svojho osobného agenta! Ukladajte a organizujte všetky svoje prompty vo svojej osobnej knižnici. Preskúmajte Dynamický režim promptov na vytváranie interaktívnych promptov. Zvýšte kvalitu jednoduchých promptov na profesionálnu úroveň funkciou Vylepšiť pomocou AI a automaticky pripojte opakujúce sa súbory. Ideálne na zvýšenie produktivity v ChatGPT, Gemini, Grok, DeepSeek a ďalších LLM.
// @description:sr      Optimizujte radni tok i pretvorite veštačku inteligenciju u svog ličnog agenta! Sačuvajte i organizujte sve promptove u ličnoj biblioteci. Istražite Dinamički režim promptova za kreiranje interaktivnih promptova. Podignite kvalitet jednostavnih promptova na profesionalni nivo funkcijom Unapredi pomoću VI i automatski priložite ponavljajuće fajlove. Savršeno za povećanje produktivnosti na ChatGPT-u, Gemini-u, Grok-u, DeepSeek-u i drugim VJM-ima.
// @description:sv      Optimera ditt arbetsflöde och förvandla AI till din personliga agent! Spara och organisera alla dina prompts i ditt personliga bibliotek. Utforska Dynamiskt promptläge för att skapa interaktiva prompts. Lyft enkla prompts till professionell kvalitet med AI-förbättring och bifoga återkommande filer automatiskt. Perfekt för ökad produktivitet i ChatGPT, Gemini, Grok, DeepSeek och andra LLM:er.
// @description:th      เพิ่มประสิทธิภาพเวิร์กโฟลว์และเปลี่ยน AI ให้เป็นผู้ช่วยส่วนตัว! บันทึกและจัดระเบียบพรอมต์ทั้งหมดในคลังส่วนตัว สำรวจโหมดพรอมต์แบบไดนามิกเพื่อสร้างพรอมต์อินเทอร์แอคทีฟ ยกระดับพรอมต์พื้นฐานสู่คุณภาพมืออาชีพด้วยคุณสมบัติปรับปรุงด้วย AI และแนบไฟล์ประจำโดยอัตโนมัติ เหมาะอย่างยิ่งสำหรับเพิ่มผลิตภาพบน ChatGPT, Gemini, Grok, DeepSeek และ LLM อื่น ๆ
// @description:tr      İş akışınızı optimize edin, yapay zekayı kişisel temsilcinize dönüştürün! Tüm prompt'larınızı kişisel kütüphanenizde kaydedin ve düzenleyin. İnteraktif prompt'lar oluşturmak için Dinamik Prompt Modu'nu keşfedin. Basit prompt'larınızı Yapay Zeka İyileştirme ile profesyonel seviyeye taşıyın ve tekrarlanan dosyaları otomatik ekleyin. ChatGPT, Gemini, Grok, DeepSeek ve diğer LLM'lerde üretkenliği artırmak için ideal.
// @description:uk      Оптимізуйте робочий процес і перетворіть ШІ на вашого особистого агента! Зберігайте та організовуйте всі промпти в особистій бібліотеці. Дослідіть Динамічний режим промптів для створення інтерактивних промптів. Підвищте якість простих промптів до професійного рівня функцією «Покращити за допомогою ШІ» та автоматично долучайте повторювані файли. Ідеально для підвищення продуктивності в ChatGPT, Gemini, Grok, DeepSeek та інших LLM.
// @description:ug      ئىش جەريانىڭىزنى ئوپتىماللاشتۇرۇپ، ياسايلقان زېرەكلىكنى شەخسىي ۋاكالەتچىڭىزگە ئايلاندۇرۇڭ! بارلىق سۈرۈشتۈرۈشلىرىڭىزنى شەخسىي كىتابخانىڭىزدا ساقلاپ، تەرتىپلەڭ. ئۆزئارا تەسىرلەش سۈرۈشتۈرۈشلىرىنى ياساش ئۈچۈن دىنامىك سۈرۈشتۈرۈش ھالىتىنى تەكشۈرۈڭ. ياسايلقان زېرەكلىك بىلەن ياخشىلاش خۇسۇسىيىتى بىلەن سادە سۈرۈشتۈرۈشلىرىڭىزنى كەسپىي دەرىجىگە كۆتۈرۈپ، تەكرارلانغان ھۆججەتلەرنى ئاپتوماتىك تىرکەڭ. ChatGPT، Gemini، Grok، DeepSeek ۋە باشقا چوڭ تىل مودېلىدا مەھسۇلدارلىقنى ئاشۇرۇشقا مۇۋاپىق.
// @description:vi      Tối ưu hóa quy trình làm việc và biến AI thành trợ lý cá nhân! Lưu trữ và sắp xếp mọi prompt trong thư viện cá nhân. Khám phá Chế độ Prompt Động để tạo prompt tương tác. Nâng prompt đơn giản lên chuẩn chuyên nghiệp nhờ Tăng cường bằng AI và tự động đính kèm tệp định kỳ. Hoàn hảo để tăng năng suất trên ChatGPT, Gemini, Grok, DeepSeek và các LLM khác.
// @match               *://poe.com/*
// @match               *://grok.com/*
// @match               *://arena.ai/*
// @match               *://claude.ai/*
// @match               *://chat.z.ai/*
// @match               *://image.z.ai/*
// @match               *://chatglm.cn/*
// @match               *://labs.google/*
// @match               *://chatgpt.com/*
// @match               *://longcat.chat/*
// @match               *://chat.qwen.ai/*
// @match               *://www.kimi.com/*
// @match               *://www.doubao.com/*
// @match               *://ernie.baidu.com/*
// @match               *://chat.mistral.ai/*
// @match               *://build.nvidia.com/*
// @match               *://www.perplexity.ai/*
// @match               *://chat.deepseek.com/*
// @match               *://gemini.google.com/*
// @match               *://arena.ai4bharat.org/*
// @match               *://yuanbao.tencent.com/*
// @match               *://aistudio.google.com/*
// @match               *://dreamina.capcut.com/*
// @match               *://jimeng.jianying.com/*
// @match               *://copilot.microsoft.com/*
// @match               *://notebooklm.google.com/*
// @match               *://www.google.com/search?*udm=50*
// @require             https://update.greasyfork.org/scripts/564164.js
// @require             https://update.greasyfork.org/scripts/549920.js
// @resource            CSS https://cdn.jsdelivr.net/gh/0H4S/My-Prompt@1.8/Files/style.min.css
// @resource            IDIOMAS https://cdn.jsdelivr.net/gh/0H4S/My-Prompt@1.8/Files/languages.min.json
// @connect             generativelanguage.googleapis.com
// @connect             fonts.googleapis.com
// @connect             fonts.gstatic.com
// @connect             api.longcat.chat
// @connect             files.catbox.moe
// @connect             cdn.jsdelivr.net
// @connect             gist.github.com
// @connect             openrouter.ai
// @connect             api.groq.com
// @connect             i.imgur.com
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_listValues
// @grant               GM_deleteValue
// @grant               GM_xmlhttpRequest
// @grant               GM_getResourceText
// @grant               GM_registerMenuCommand
// @run-at              document-end
// @noframes
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @bgf-compatible      brave
// @bgf-colorLT         #847dfd
// @bgf-colorDT         #6963ca
// @bgf-copyright       [2026 OHAS. All Rights Reserved.](https://gist.github.com/0H4S/ae2fa82957a089576367e364cbf02438)
// @contributionURL     https://linktr.ee/0H4S
// @downloadURL https://update.greasyfork.org/scripts/549921/My%20Prompt.user.js
// @updateURL https://update.greasyfork.org/scripts/549921/My%20Prompt.meta.js
// ==/UserScript==

(function() {
    'use strict';
    const LANG_STORAGE_KEY          = 'UserScriptLang';
    const GLOBAL_FILES_KEY          = 'GlobalFiles';
    const PROMPT_STORAGE_KEY        = 'Prompts';
    const THEME_STORAGE_KEY         = 'Theme';
    const IMPORTED_THEMES_KEY       = 'ImportedThemes';
    const PREDICTION_STORAGE_KEY    = 'Prediction';
    const SHORTCUTS_STORAGE_KEY     = 'ShortcutsConfig';
    const AI_SETTINGS_KEY           = 'AISettings';
    const NAV_STORAGE_KEY           = 'NavConfig';
    const NAV_SESSION_KEY           = 'NavState';
    const DEFAULT_PREDICTION_CONFIG = { enabled: true };
    const DEFAULT_NAV_CONFIG        = { enabled: true, filterMode: 'all' };
    const DEFAULT_THEME_CONFIG      = { themeId: 'default', mode: 'auto' };
    const NO_NAV_PLATFORMS          = ['dreamina', 'jimengJianying', 'glmimage', 'whisk', 'longcat'];
    const DEFAULT_SHORTCUTS         = { newPrompt: { keys: 'Alt+N', descKey: 'altN' }, listPrompts: { keys: 'Alt+P', descKey: 'altP' }, saveSend: { keys: 'Ctrl+Enter', descKey: 'ctrlEnter' }, lineBreak: { keys: 'Shift+Enter', descKey: 'shiftEnter' }, enhancePrompt: { keys: 'Alt+E', descKey: 'altE' }};
    const DEFAULT_AI_CONFIG         = { apiKeyGemini: '', apiKeyLongcat: '', apiKeyGroq: '', apiKeyOpenRouter: '', keyIndexGemini: 0, keyIndexLongcat: 0, keyIndexGroq: 0, keyIndexOpenRouter: 0, model: 'gemini-2.5-flash', systemPrompt: "You are an expert prompt engineer. Improve the user's prompt to be clearer, more detailed, and effective for an LLM. Respond ONLY with the improved prompt text, in the same language as the user. Do not add introductions like \"Here is the improved prompt:\"." };
    let isInitialized               = false;
    let isInitializing              = false;
    let currentPlatform             = null;
    let currentLang                 = 'en';
    let mediaQueryList              = window.matchMedia('(prefers-color-scheme: dark)');
    let currentThemeConfig          = DEFAULT_THEME_CONFIG;
    let currentPredictionConfig     = DEFAULT_PREDICTION_CONFIG;
    let currentAIConfig             = JSON.parse(JSON.stringify(DEFAULT_AI_CONFIG));
    let currentShortcuts            = JSON.parse(JSON.stringify(DEFAULT_SHORTCUTS));
    let currentNavConfig            = JSON.parse(JSON.stringify(DEFAULT_NAV_CONFIG));
    let importedThemes              = {};
    let settingsModal               = null;
    let languageModal               = null;
    let currentPlaceholderModal     = null;
    let infoModal                   = null;
    let currentModal                = null;
    let inlineMenu                  = null;
    let currentMenu                 = null;
    let navContainer                = null;
    let navListPopup                = null;
    let currentButton               = null;
    let pageObserver                = null;
    let cachedMessages              = [];
    let currentActiveFileIds        = new Set();
    let navFilterMode               = 'all';
    let navLiveInterval             = null;
    let navLastDomCount             = 0;
    let currentNavIndex             = -1;
    let inlineMenuCurrentItems      = [];
    let inlineMenuIndex             = 0;
    let macroMemory                 = { active: false, text: '', startIndex: 0, hashCount: 0 };
    let varMemory                   = { active: false, list: [], index: 0, startPos: 0, typed: '' };
    let scriptPolicy = null;
    const policyNames = ['MyPromptPolicy', 'dompurify', 'default', 'cwm-policy'];
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        for (const name of policyNames) {
            try {
                scriptPolicy = window.trustedTypes.createPolicy(name, {
                    createHTML: (input) => input
                });
                break;
            } catch (e) {}
        }
    }
    function setSafeInnerHTML(element, html) {
        if (!element) return;
        if (scriptPolicy) {
            element.innerHTML = scriptPolicy.createHTML(html);
        } else {
            element.innerHTML = html;
        }
    }
    const SCRIPT_CONFIG = {notificationsUrl:'https://gist.github.com/0H4S/b2f9a9f92259deadc35bdccb11cd9a75', scriptVersion: '5.3', runtimePolicy: scriptPolicy};
    const notifier = new ScriptNotifier(SCRIPT_CONFIG);
    notifier.run();
    window.addEventListener('load', () => {
        const lista = [
            { url: 'https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap' }
        ];
        lista.forEach(item => {FontLoaderBypass.load(item.url, item.nome, item.peso);});
    });
    const platformSelectors = {
        chatgpt:        '#prompt-textarea',
        deepseek:       'textarea.ds-scroll-area',
        googleaistudio: 'textarea',
        qwen:           '.message-input-textarea',
        zai:            'textarea#chat-input',
        gemini:         'div.ql-editor[contenteditable="true"]',
        arena:          'textarea[name="message"]',
        kimi:           'div.chat-input-editor[contenteditable="true"]',
        claude:         'div.ProseMirror[contenteditable="true"]',
        grok:           'div.tiptap.ProseMirror[contenteditable="true"], textarea',
        perplexity:     '#ask-input',
        longcat:        'div.tiptap.ProseMirror',
        mistral:        '.ProseMirror',
        yuanbao:        'div.ql-editor[contenteditable="true"]',
        chatglm:        'textarea.scroll-display-none',
        poe:            'textarea[class*="GrowingTextArea_textArea"]',
        googleModoIA:   'textarea.ITIRGe',
        notebooklm:     'textarea.query-box-input',
        doubao:         'textarea[data-testid="chat_input_input"]',
        copilot:        '#userInput, textarea[data-testid="composer-input"]',
        glmimage:       'textarea.flex.w-full',
        whisk:          'textarea.sc-18deeb1d-8, textarea.DwQls, textarea',
        ernie:          'div[contenteditable="true"][role="textbox"].editable__QRoAFgYA',
        dreamina:       'textarea.lv-textarea.textarea-xle6zp.prompt-textarea-zqvueo, [contenteditable="true"]',
        jimengJianying: 'textarea[class*="prompt-textarea"]',
        nvidiaNim:      'textarea.nv-text-area-element[data-testid="nv-text-area-element"]',
        indicArena:     'textarea[data-testid="rt-input-component"]',
    };
    let translations = {};
    try {const rawJson = GM_getResourceText("IDIOMAS");if (rawJson) {translations = JSON.parse(rawJson);}} catch (e) {}
    function getTranslation(key, replacements = {}) {
        let text = translations[currentLang]?.[key] || translations.en[key];
        Object.entries(replacements).forEach(([p, v]) => text = text.replace(`{${p}}`, v));
        return text;
    }
    async function determineLanguage() {
        const savedLang = await GM_getValue(LANG_STORAGE_KEY);
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
            return;
        }
        const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
        const baseLang = browserLang.split('-')[0];
        if (translations[browserLang]) {
            currentLang = browserLang;
            return;
        }
        if (translations[baseLang]) {
            currentLang = baseLang;
            return;
        }
        const availableVariant = Object.keys(translations).find(key => key.startsWith(baseLang));
        if (availableVariant) {
            currentLang = availableVariant;
            return;
        }
        currentLang = 'en';
    }
    async function getGlobalFiles() {
        return await GM_getValue(GLOBAL_FILES_KEY, []);
    }
    async function saveGlobalFile(fileObj) {
        const files = await getGlobalFiles();
        if (!files.find(f => f.name === fileObj.name && f.size === fileObj.size)) {
            files.push(fileObj);
            await GM_setValue(GLOBAL_FILES_KEY, files);
        }
        return files;
    }
    async function deleteGlobalFile(id) {
        let files = await getGlobalFiles();
        files = files.filter(f => f.id !== id);
        await GM_setValue(GLOBAL_FILES_KEY, files);
    }
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){ u8arr[n] = bstr.charCodeAt(n); }
        return new File([u8arr], filename, {type:mime});
    }
    function waitFor(selector, timeout = 8000) {
        return new Promise((resolve, reject) => {
            const el = document.querySelector(selector);
            if (el) { resolve(el); return; }
            const timer = setTimeout(() => { obs.disconnect(); reject(); }, timeout);
            const obs = new MutationObserver(() => {
                const target = document.querySelector(selector);
                if (target) { clearTimeout(timer); obs.disconnect(); resolve(target); }
            });
            if (document.body) obs.observe(document.body, { childList: true, subtree: true });
            else document.addEventListener('DOMContentLoaded', () => obs.observe(document.body, { childList: true, subtree: true }));
        });
    }
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };
    async function getAll() {
        return await GM_getValue(PROMPT_STORAGE_KEY, []);
    }
    async function addItem(item) {
        let prompts = await getAll();
        let nonFixedItems = prompts.filter(p => !p.isFixed);
        nonFixedItems.unshift(item);
        let newPrompts = [];
        let nonFixedIndex = 0;
        const totalSize = prompts.length + 1;
        for (let i = 0; i < totalSize; i++) {
            if (prompts[i] && prompts[i].isFixed) {
                newPrompts[i] = prompts[i];
            } else {
                if (nonFixedIndex < nonFixedItems.length) {
                    newPrompts[i] = nonFixedItems[nonFixedIndex];
                    nonFixedIndex++;
                }
            }
        }
        await GM_setValue(PROMPT_STORAGE_KEY, newPrompts);
    }
    async function update(index, item) {
        let prompts = await getAll();
        if (prompts[index]) {
            prompts[index] = item;
            await GM_setValue(PROMPT_STORAGE_KEY, prompts);
        }
    }
    async function remove(index) {
        let prompts = await getAll();
        prompts.splice(index, 1);
        await GM_setValue(PROMPT_STORAGE_KEY, prompts);
    }
    const themeDefinitions = { 'default': { name: 'default', light: { '--mp-bg-primary': '#ffffff', '--mp-bg-secondary': '#f8f9fa', '--mp-bg-tertiary': '#f1f3f5', '--mp-bg-overlay': 'rgba(10, 10, 10, 0.5)', '--mp-bg-disabled': '#e9ecef', '--mp-text-primary': '#212529', '--mp-text-secondary': '#495057', '--mp-text-tertiary': '#868e96', '--mp-text-buttons': '#ffffff', '--mp-text-disabled': '#adb5bd', '--mp-border-primary': '#dee2e6', '--mp-border-secondary': '#ced4da', '--mp-focus-ring': 'rgba(112, 113, 252, 0.4)', '--mp-accent-primary': '#7071fc', '--mp-accent-primary-hover': '#595ac9', '--mp-success': '#28a745', '--mp-warning': '#ffc107', '--mp-error': '#dc3545', '--mp-info': '#17a2b8', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.04)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.1)' }, dark: { '--mp-bg-primary': '#212529', '--mp-bg-secondary': '#2c2c30', '--mp-bg-tertiary': '#343a40', '--mp-bg-overlay': 'rgba(0, 0, 0, 0.7)', '--mp-bg-disabled': '#3d4248', '--mp-text-primary': '#f8f9fa', '--mp-text-secondary': '#e9ecef', '--mp-text-tertiary': '#adb5bd', '--mp-text-buttons': '#ffffff', '--mp-text-disabled': '#6c757d', '--mp-border-primary': '#495057', '--mp-border-secondary': '#868e96', '--mp-focus-ring': 'rgba(112, 113, 252, 0.6)', '--mp-accent-primary': '#7071fc', '--mp-accent-primary-hover': '#595ac9', '--mp-success': '#34c759', '--mp-warning': '#ff9f0a', '--mp-error': '#ff4d4f', '--mp-info': '#5ac8fa', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.15)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.25)' } }, 'dracula': { name: 'Dracula', light: { '--mp-bg-primary': '#f8f8f2', '--mp-bg-secondary': '#e2e2e2', '--mp-bg-tertiary': '#d6d6d6', '--mp-bg-overlay': 'rgba(40, 42, 54, 0.5)', '--mp-text-primary': '#282a36', '--mp-text-secondary': '#44475a', '--mp-text-tertiary': '#6272a4', '--mp-border-primary': '#bd93f9', '--mp-border-secondary': '#6272a4', '--mp-accent-primary': '#ff79c6', '--mp-accent-primary-hover': '#ff92d0', '--mp-accent-edit': '#f1fa8c', '--mp-accent-edit-hover': '#e6ee82', '--mp-accent-close': '#ff5555', '--mp-accent-close-hover': '#ff6e6e', '--mp-btn-export-background': 'rgba(139, 233, 253, 0.1)', '--mp-btn-export-color': '#8be9fd', '--mp-btn-add-background': 'rgba(80, 250, 123, 0.1)', '--mp-btn-add-color': '#50fa7b', '--mp-btn-import-background': 'rgba(255, 184, 108, 0.1)', '--mp-btn-import-color': '#ffb86c', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(98, 114, 164, 0.2)', '--mp-shadow-md': '0 4px 12px rgba(98, 114, 164, 0.2)' }, dark: { '--mp-bg-primary': '#282a36', '--mp-bg-secondary': '#44475a', '--mp-bg-tertiary': '#6272a4', '--mp-bg-overlay': 'rgba(0, 0, 0, 0.7)', '--mp-text-primary': '#f8f8f2', '--mp-text-secondary': '#bfbfbf', '--mp-text-tertiary': '#6272a4', '--mp-border-primary': '#6272a4', '--mp-border-secondary': '#44475a', '--mp-accent-primary': '#bd93f9', '--mp-accent-primary-hover': '#caa9fa', '--mp-accent-edit': '#f1fa8c', '--mp-accent-edit-hover': '#ffffa5', '--mp-accent-close': '#ff5555', '--mp-accent-close-hover': '#ff6e6e', '--mp-btn-export-background': 'rgba(139, 233, 253, 0.15)', '--mp-btn-export-color': '#8be9fd', '--mp-btn-add-background': 'rgba(80, 250, 123, 0.15)', '--mp-btn-add-color': '#50fa7b', '--mp-btn-import-background': 'rgba(255, 184, 108, 0.15)', '--mp-btn-import-color': '#ffb86c', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.3)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.4)' } }, 'coffee': { name: 'Coffee', light: { '--mp-bg-primary': '#fffbf0', '--mp-bg-secondary': '#f3e5d0', '--mp-bg-tertiary': '#e6d0b3', '--mp-bg-overlay': 'rgba(67, 40, 24, 0.3)', '--mp-text-primary': '#432818', '--mp-text-secondary': '#6f4e37', '--mp-text-tertiary': '#9c6644', '--mp-border-primary': '#d4a373', '--mp-border-secondary': '#e6ccb2', '--mp-accent-primary': '#bb9457', '--mp-accent-primary-hover': '#997b46', '--mp-accent-edit': '#e9c46a', '--mp-accent-edit-hover': '#deb045', '--mp-accent-close': '#bc4749', '--mp-accent-close-hover': '#a3393b', '--mp-btn-export-background': 'rgba(69, 123, 157, 0.1)', '--mp-btn-export-color': '#457b9d', '--mp-btn-add-background': 'rgba(106, 153, 78, 0.1)', '--mp-btn-add-color': '#6a994e', '--mp-btn-import-background': 'rgba(231, 111, 81, 0.1)', '--mp-btn-import-color': '#e76f51', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(67, 40, 24, 0.1)', '--mp-shadow-md': '0 4px 12px rgba(67, 40, 24, 0.15)' }, dark: { '--mp-bg-primary': '#1a1412', '--mp-bg-secondary': '#2b211e', '--mp-bg-tertiary': '#3e312b', '--mp-bg-overlay': 'rgba(0, 0, 0, 0.8)', '--mp-text-primary': '#ede0d4', '--mp-text-secondary': '#ddb892', '--mp-text-tertiary': '#b08968', '--mp-border-primary': '#7f5539', '--mp-border-secondary': '#5c3d2e', '--mp-accent-primary': '#d4a373', '--mp-accent-primary-hover': '#e6ccb2', '--mp-accent-edit': '#f4a261', '--mp-accent-edit-hover': '#fbc492', '--mp-accent-close': '#e76f51', '--mp-accent-close-hover': '#ff8a6e', '--mp-btn-export-background': 'rgba(168, 218, 220, 0.15)', '--mp-btn-export-color': '#a8dadc', '--mp-btn-add-background': 'rgba(144, 190, 109, 0.15)', '--mp-btn-add-color': '#90be6d', '--mp-btn-import-background': 'rgba(244, 162, 97, 0.15)', '--mp-btn-import-color': '#f4a261', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.5)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.6)' } }, 'cyberpunk': { name: 'Cyberpunk', light: { '--mp-bg-primary': '#f0f0f5', '--mp-bg-secondary': '#e2e2ea', '--mp-bg-tertiary': '#d1d1db', '--mp-bg-overlay': 'rgba(10, 10, 35, 0.4)', '--mp-text-primary': '#050505', '--mp-text-secondary': '#2e2e38', '--mp-text-tertiary': '#5a5a66', '--mp-border-primary': '#b8b8c2', '--mp-border-secondary': '#d1d1db', '--mp-accent-primary': '#b000b0', '--mp-accent-primary-hover': '#8a008a', '--mp-accent-edit': '#e6b800', '--mp-accent-edit-hover': '#c29b00', '--mp-accent-close': '#d90429', '--mp-accent-close-hover': '#a1031f', '--mp-btn-export-background': 'rgba(0, 168, 181, 0.1)', '--mp-btn-export-color': '#0097a7', '--mp-btn-add-background': 'rgba(0, 184, 92, 0.1)', '--mp-btn-add-color': '#008f47', '--mp-btn-import-background': 'rgba(245, 124, 0, 0.1)', '--mp-btn-import-color': '#ef6c00', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.15)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.2)' }, dark: { '--mp-bg-primary': '#09090b', '--mp-bg-secondary': '#121217', '--mp-bg-tertiary': '#1c1c24', '--mp-bg-overlay': 'rgba(0, 0, 0, 0.85)', '--mp-text-primary': '#ffffff', '--mp-text-secondary': '#e0e0e0', '--mp-text-tertiary': '#a1a1aa', '--mp-border-primary': '#272730', '--mp-border-secondary': '#3f3f46', '--mp-accent-primary': '#f700ff', '--mp-accent-primary-hover': '#d900df', '--mp-accent-edit': '#fcee0a', '--mp-accent-edit-hover': '#e6d805', '--mp-accent-close': '#ff2a6d', '--mp-accent-close-hover': '#e01655', '--mp-btn-export-background': 'rgba(0, 243, 255, 0.15)', '--mp-btn-export-color': '#00f3ff', '--mp-btn-add-background': 'rgba(0, 255, 65, 0.15)', '--mp-btn-add-color': '#00ff41', '--mp-btn-import-background': 'rgba(255, 153, 0, 0.15)', '--mp-btn-import-color': '#ff9900', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 4px rgba(0, 243, 255, 0.1)', '--mp-shadow-md': '0 4px 12px rgba(247, 0, 255, 0.15)' } }, 'full-dark': { name: 'Full Dark', light: { '--mp-bg-primary': '#ffffff', '--mp-bg-secondary': '#f5f5f5', '--mp-bg-tertiary': '#e6e6e6', '--mp-bg-overlay': 'rgba(0, 0, 0, 0.2)', '--mp-text-primary': '#000000', '--mp-text-secondary': '#404040', '--mp-text-tertiary': '#737373', '--mp-text-buttons': '#ffffff', '--mp-border-primary': '#000000', '--mp-border-secondary': '#cccccc', '--mp-accent-primary': '#000000', '--mp-accent-primary-hover': '#333333', '--mp-accent-edit': '#eab308', '--mp-accent-edit-hover': '#ca8a04', '--mp-accent-close': '#dc2626', '--mp-accent-close-hover': '#b91c1c', '--mp-btn-export-background': 'rgba(37, 99, 235, 0.1)', '--mp-btn-export-color': '#2563eb', '--mp-btn-add-background': 'rgba(5, 150, 105, 0.1)', '--mp-btn-add-color': '#059669', '--mp-btn-import-background': 'rgba(234, 88, 12, 0.1)', '--mp-btn-import-color': '#ea580c', '--mp-switch-knob': '#ffffff', '--mp-shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.1)', '--mp-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.15)' }, dark: { '--mp-bg-primary': '#000000', '--mp-bg-secondary': '#0a0a0a', '--mp-bg-tertiary': '#141414', '--mp-bg-overlay': 'rgba(255, 255, 255, 0.05)', '--mp-text-primary': '#ffffff', '--mp-text-secondary': '#e5e5e5', '--mp-text-tertiary': '#a3a3a3', '--mp-text-buttons': '#000000', '--mp-border-primary': '#333333', '--mp-border-secondary': '#262626', '--mp-accent-primary': '#ffffff', '--mp-accent-primary-hover': '#d4d4d4', '--mp-accent-edit': '#facc15', '--mp-accent-edit-hover': '#fde047', '--mp-accent-close': '#f87171', '--mp-accent-close-hover': '#fca5a5', '--mp-btn-export-background': 'rgba(59, 130, 246, 0.2)', '--mp-btn-export-color': '#3b82f6', '--mp-btn-add-background': 'rgba(34, 197, 94, 0.2)', '--mp-btn-add-color': '#22c55e', '--mp-btn-import-background': 'rgba(249, 115, 22, 0.2)', '--mp-btn-import-color': '#f97316', '--mp-switch-knob': '#000000', '--mp-shadow-sm': 'none', '--mp-shadow-md': '0 0 0 1px #333333' } }, };
    function applyTheme(configData) {
        if (!configData) return;
        const themeDef = importedThemes[configData.themeId] || themeDefinitions[configData.themeId] || themeDefinitions['default'];
        Object.assign(ICONS, DEFAULT_ICONS);
        if (themeDef.icons) {
            const validCustomIcons = {};
            Object.keys(themeDef.icons).forEach(key => {
                if (DEFAULT_ICONS.hasOwnProperty(key)) {
                    validCustomIcons[key] = themeDef.icons[key];
                }
            });
            Object.assign(ICONS, validCustomIcons);
        }
        let targetMode = configData.mode;
        if (targetMode === 'auto') {
            targetMode = mediaQueryList.matches ? 'dark' : 'light';
        }
        const modeColors = themeDef[targetMode] || themeDefinitions['default'][targetMode];
        const fontsToLoad = [];
        const addFontConfig = (val) => {
            if (Array.isArray(val)) {
                val.forEach(item => fontsToLoad.push(item));
            } else if (val) {
                fontsToLoad.push(val);
            }
        };
        if (themeDef['@import']) addFontConfig(themeDef['@import']);
        Object.keys(themeDef).forEach(key => {
            if (key.startsWith('@import') && key !== '@import') addFontConfig(themeDef[key]);
        });
        Object.entries(modeColors).forEach(([key, value]) => {
            if (key.startsWith('@import')) {
                addFontConfig(value);
            }
        });
        const processedUrls = new Set();
        fontsToLoad.forEach(item => {
            if (typeof item === 'string') {
                if (!processedUrls.has(item)) {
                    FontLoaderBypass.load(item);
                    processedUrls.add(item);
                }
            }
            else if (typeof item === 'object' && item.url) {
                if (!processedUrls.has(item.url)) {
                    FontLoaderBypass.load(item.url, item.name, item.peso);
                    processedUrls.add(item.url);
                }
            }
        });
        const existingThemeStyle = document.getElementById('mp-theme-override');
        if (existingThemeStyle) existingThemeStyle.remove();
        const themeStyleElement = document.createElement('style');
        themeStyleElement.id = 'mp-theme-override';
        let themeCSS = ':root {';
        Object.entries(themeDef).forEach(([key, value]) => {
            if (!key.startsWith('@import') && typeof value !== 'object') {
                themeCSS += `${key}: ${value} !important;`;
            }
        });
        Object.entries(modeColors).forEach(([key, value]) => {
            if (!key.startsWith('@import') && typeof value !== 'object') {
                themeCSS += `${key}: ${value} !important;`;
            }
        });
        themeCSS += '}';
        setSafeInnerHTML(themeStyleElement, themeCSS);
        document.head.appendChild(themeStyleElement);
        document.documentElement.setAttribute('data-mp-theme', targetMode);
    }
    async function loadThemeConfig() {
        const saved = await GM_getValue(THEME_STORAGE_KEY);
        if (saved) {
            try { currentThemeConfig = JSON.parse(saved); }
            catch (e) { console.error(e); }
        }
        applyTheme(currentThemeConfig);
    }
    async function saveThemeConfig(newConfig) {
        currentThemeConfig = { ...currentThemeConfig, ...newConfig };
        await GM_setValue(THEME_STORAGE_KEY, JSON.stringify(currentThemeConfig));
        applyTheme(currentThemeConfig);
    }
    async function loadImportedThemes() {
        const stored = await GM_getValue(IMPORTED_THEMES_KEY, '{}');
        try {
            importedThemes = JSON.parse(stored);
        } catch (e) {
            console.error(`${getTranslation('errorLoadingThemes')} `, e);
            importedThemes = {};
        }
    }
    async function saveImportedThemesData() {
        await GM_setValue(IMPORTED_THEMES_KEY, JSON.stringify(importedThemes));
    }
    async function importThemesFromFile(file, callbackRefresh) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const jsonContent = JSON.parse(e.target.result);
                let count = 0;
                for (const [id, themeData] of Object.entries(jsonContent)) {
                    if (themeData.name && (themeData.light || themeData.dark)) {
                        if (typeof themeData.light === 'object' && typeof themeData.dark === 'object') {
                            importedThemes[id] = themeData;
                            count++;
                        }
                    }
                }
                if (count > 0) {
                    await saveImportedThemesData();
                    alert(getTranslation('successThemeImport', { count }));
                    if (callbackRefresh) callbackRefresh();
                }
                else {
                    alert(getTranslation('noValidThemesFound'));
                }
            }
            catch (err) {
                console.error(err);
                alert(getTranslation('errorReadingJSON'));
            }
        };
        reader.readAsText(file);
    }
    async function deleteImportedTheme(themeId, callbackRefresh) {
        const themeName = importedThemes[themeId]?.name || themeId;
        if (confirm(getTranslation('confirmDeleteTheme', { name: themeName }))) {
            const themeToDelete = importedThemes[themeId];
            if (themeToDelete) {
                const fontsToClean = new Set();
                const collectConfig = (val) => {
                    if (!val) return;
                    if (Array.isArray(val)) {val.forEach(item => collectConfig(item));}
                    else if (typeof val === 'object' && val.url) {fontsToClean.add(val.url);}
                    else if (typeof val === 'string') {fontsToClean.add(val);}
                };
                if (themeToDelete['@import']) collectConfig(themeToDelete['@import']);
                Object.keys(themeToDelete).forEach(key => {
                    if (key.startsWith('@import') && key !== '@import') {
                        collectConfig(themeToDelete[key]);
                    }
                });
                ['light', 'dark'].forEach(mode => {
                    if (themeToDelete[mode]) {
                        Object.entries(themeToDelete[mode]).forEach(([key, value]) => {
                            if (key.startsWith('@import')) {
                                collectConfig(value);
                            }
                        });
                    }
                });
                if (typeof FontLoaderBypass !== 'undefined' && FontLoaderBypass.clear) {
                    fontsToClean.forEach(url => {
                        FontLoaderBypass.clear(url);
                    });
                }
            }
            delete importedThemes[themeId];
            if (currentThemeConfig.themeId === themeId) {
                currentThemeConfig.themeId = 'default';
                await saveThemeConfig(currentThemeConfig);
            }
            await saveImportedThemesData();
            if (callbackRefresh) callbackRefresh();
        }
    }
    function injectGlobalStyles() {
        const styleId = 'my-prompt-styles';
        if (document.getElementById(styleId)) return;
        const cssContent = GM_getResourceText("CSS");
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        setSafeInnerHTML(styleElement, cssContent);
        document.head.appendChild(styleElement);
    }
    function createCustomTooltip(button, text, position = 'top') {
        let tooltipElement = null;
        const showTooltip = () => {
            if (tooltipElement) return;
            tooltipElement = document.createElement('div');
            tooltipElement.className = `mp-tooltip mp-tooltip-${position}`;
            tooltipElement.style.visibility = 'hidden';
            const content = document.createElement('div');
            content.className = 'mp-tooltip-content';
            content.textContent = text;
            const arrow = document.createElement('div');
            arrow.className = 'mp-tooltip-arrow';
            tooltipElement.appendChild(content);
            tooltipElement.appendChild(arrow);
            document.body.appendChild(tooltipElement);
            const btnRect = button.getBoundingClientRect();
            const tooltipWidth = tooltipElement.offsetWidth;
            const tooltipHeight = tooltipElement.offsetHeight;
            const margin = 8;
            let top, left;
            if (position === 'bottom') {top  = btnRect.bottom + margin + window.scrollY;}
            else if (position === 'top') {top  = btnRect.top - tooltipHeight - margin + window.scrollY;}
            else if (position === 'left') {top  = btnRect.top + (btnRect.height / 2) - (tooltipHeight / 2) + window.scrollY; left = btnRect.left - tooltipWidth - margin;}
            else if (position === 'right') {top  = btnRect.top + (btnRect.height / 2) - (tooltipHeight / 2) + window.scrollY; left = btnRect.right + margin;}
            if (position === 'top' || position === 'bottom') {left = btnRect.left + (btnRect.width / 2) - (tooltipWidth / 2);}
            const screenPadding = 10;
            if (left < screenPadding) {left = screenPadding;}
            else if (left + tooltipWidth > window.innerWidth - screenPadding) {left = window.innerWidth - tooltipWidth - screenPadding;}
            tooltipElement.style.left = `${Math.round(left)}px`;
            tooltipElement.style.top = `${Math.round(top)}px`;
            requestAnimationFrame(() => {
                if (tooltipElement) {
                    tooltipElement.style.visibility = 'visible';
                    tooltipElement.classList.add('visible');
                }
            });
        };
        const hideTooltip = () => {
            if (!tooltipElement) return;
            const el = tooltipElement;
            tooltipElement = null;
            el.classList.remove('visible');
            setTimeout(() => {
                if (document.body.contains(el)) document.body.removeChild(el);
            }, 150);
        };
        button.addEventListener('mouseenter', showTooltip);
        button.addEventListener('mouseleave', hideTooltip);
        button.addEventListener('mousedown', hideTooltip);
    }
    const ICONS = {
        cloudFile:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.913 7.029C7.751 5.772 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.1 7.1 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5s-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20H13v-6.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 13.414V20H7.5c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26z" fill="currentColor"/></svg>`,
        monitor:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
        globo:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
        plus:       `<svg class="mp-add-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
        sol:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
        lua:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
        close:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5 285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512 195.2 285.7a64 64 0 0 1 0-90.5"/></svg>`,
        file:       `<svg class="mp-file-icon-gen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 28"><path d="m16.5 0 7 7v15.6c0 2.25 0 3.38-.57 4.16a3 3 0 0 1-.67.67c-.79.57-1.91.57-4.16.57H5.9c-2.25 0-3.37 0-4.16-.57a3 3 0 0 1-.67-.67C.5 25.97.5 24.85.5 22.6V5.4c0-2.25 0-3.38.57-4.16a3 3 0 0 1 .67-.67C2.52 0 3.65 0 5.9 0z" fill="url(#a)"/><path d="m16.5 0 7 7h-3.8c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87c-.22-.43-.22-.99-.22-2.11z" fill="var(--mp-switch-knob)" fill-opacity=".55"/><path d="M6 11.78c0-.43.35-.78.78-.78h10.44a.78.78 0 1 1 0 1.57H6.78a.8.8 0 0 1-.78-.79m0 4c0-.43.35-.78.78-.78h10.44a.78.78 0 1 1 0 1.57H6.78a.8.8 0 0 1-.78-.79m.11 4.04c0-.44.35-.79.79-.79h6.32a.78.78 0 1 1 0 1.57H6.9a.8.8 0 0 1-.79-.78" fill="var(--mp-switch-knob)"/><defs><linearGradient id="a" x1="1.5" y1="-1" x2="23.5" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="var(--mp-accent-primary)"/><stop offset="1" stop-color="var(--mp-accent-primary-hover)"/></linearGradient></defs></svg>`,
        expand:     `<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`,
        collapse:   `<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>`,
        folder:     `<svg style="width:16px;height:16px;margin-right:8px;vertical-align:text-bottom;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
        chevron:    `<svg class="mp-acc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>`,
        edit:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 432"><path fill="currentColor" d="m366 237 45 35q7 6 3 14l-43 74q-4 8-13 4l-53-21q-18 13-36 21l-8 56q-1 9-11 9h-85q-9 0-11-9l-8-56q-19-8-36-21l-53 21q-9 3-13-4L1 286q-4-8 3-14l45-35q-1-12-1-21t1-21L4 160q-7-6-3-14l43-74q5-8 13-4l53 21q18-13 36-21l8-56q2-9 11-9h85q10 0 11 9l8 56q19 8 36 21l53-21q9-3 13 4l43 74q4 8-3 14l-45 35q2 12 2 21t-2 21m-158.5 54q30.5 0 52.5-22t22-53-22-53-52.5-22-52.5 22-22 53 22 53 52.5 22"/></svg>`,
        delete:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 384"><path fill="currentColor" d="M21 341V85h256v256q0 18-12.5 30.5T235 384H64q-18 0-30.5-12.5T21 341M299 21v43H0V21h75L96 0h107l21 21z"/></svg>`,
        export:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m-9.71 1.71a1 1 0 0 0 .33.21 1 1 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42Z"/></svg>`,
        add:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5H1a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0V8h5a1 1 0 1 0 0-2H8z" clip-rule="evenodd"/></svg>`,
        import:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71 11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1"/></svg>`,
        info:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12ZM9 5h2v2H9V5Zm0 4h2v6H9V9Z"/></svg>`,
        shop:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.0" d="m21.05 11.5.28-1.66c.18-1.09.27-1.63-.02-1.98s-.82-.36-1.9-.36H4.6c-1.07 0-1.61 0-1.9.36-.3.35-.2.9-.02 1.98l1.2 7.18c.4 2.38.6 3.57 1.42 4.28.81.7 1.98.7 4.33.7H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="currentColor"/></svg>`,
        cart:       `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
        drag:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M278.6 9.4a32 32 0 0 0-45.3 0l-64 64A32 32 0 0 0 192 128h32v96h-96v-32a32.1 32.1 0 0 0-54.7-22.7l-64 64a32 32 0 0 0 0 45.3l64 64A32 32 0 0 0 128 320v-32h96v96h-32a32.1 32.1 0 0 0-22.7 54.7l64 64a32 32 0 0 0 45.3 0l64-64A32 32 0 0 0 320 384h-32v-96h96v32a32.1 32.1 0 0 0 54.7 22.7l64-64a32 32 0 0 0 0-45.3l-64-64A32 32 0 0 0 384 192v32h-96v-96h32a32.1 32.1 0 0 0 22.7-54.7l-64-64z"/></svg>`,
        pin:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`,
        saveExit:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M11.5 12A2.5 2.5 0 0 1 9 9.5V3H7.5A4.5 4.5 0 0 0 3 7.5v17a4.5 4.5 0 0 0 4 4.47V18.5A2.5 2.5 0 0 1 9.5 16h13a2.5 2.5 0 0 1 2.5 2.5v10.47a4.5 4.5 0 0 0 4-4.47V10.45a4.5 4.5 0 0 0-1.32-3.18l-2.95-2.95A4.5 4.5 0 0 0 22 3.02V9.5a2.5 2.5 0 0 1-2.5 2.5zM20 3h-9v6.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zm3 26H9V18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"/></svg>`,
        restore:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 448A192 192 0 0 1 65.5 279.8l42.3-5.3a149.4 149.4 0 1 0 25.6-103.8h80v42.6H64V64h42.7v71.3A192 192 0 1 1 256 448" clip-rule="evenodd"/></svg>`,
        magic:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
        loading:    `<svg viewBox="0 0 50 50" style="width:100%;height:100%;display:block;"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="20"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite" /></circle></svg>`,
        prompts:    `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M9.812 1.238a1 1 0 0 1 .73 1.11l-.023.115-3.106 11.591a1 1 0 0 1-1.956-.403l.024-.114L8.587 1.946a1 1 0 0 1 1.225-.708M4.707 4.293a1 1 0 0 1 0 1.414L2.414 8l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0m6.586 0a1 1 0 0 1 1.32-.083l.094.083 3 3a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.497-1.32l.083-.094L13.586 8l-2.293-2.293a1 1 0 0 1 0-1.414"/></svg>`,
        navUp:      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" d="M9.286 5.65a1.01 1.01 0 011.427 0l5.785 5.785a1.009 1.009 0 01-1.427 1.427L10 7.79l-5.072 5.072A1.008 1.008 0 113.5 11.435z"></path></svg>`,
        navMenu:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.12 5.546h9.76M5.12 9.993h9.76M5.12 14.44h9.76"></path></svg>`,
        navDown:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" style="transform: rotate(180deg);"><path fill="currentColor" d="M9.286 5.65a1.01 1.01 0 011.427 0l5.785 5.785a1.009 1.009 0 01-1.427 1.427L10 7.79l-5.072 5.072A1.008 1.008 0 113.5 11.435z"></path></svg>`,
        expImp:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 16-4 4-4-4m4 4V4M3 8l4-4 4 4M7 4v16"/></svg>`,
        ai:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 20 20"><path fill="currentColor" d="M17 11h3v10h-3v2h8v-2h-3V11h3V9h-8zm-4-2H9a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"/></svg>`,
        user:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M12.6 23.26h-.02l-.07.03h-.03l-.07-.03h-.03v.01l-.02.43v.02l.02.02.1.07h.02l.11-.07.01-.02v-.02l-.01-.42q0-.02-.02-.02m.27-.11-.19.09-.01.01v.01l.02.43v.02l.2.1.04-.01v-.02l-.03-.61q0-.02-.02-.02m-.72 0h-.02l-.01.02-.03.61.01.03h.02l.2-.1.01-.02.02-.43v-.01l-.01-.01z"/><path fill="currentColor" d="M12 13c2.4 0 4.58.7 6.18 1.67q1.21.75 1.98 1.7c.48.6.84 1.34.84 2.13a2.5 2.5 0 0 1-1 1.99c-.56.45-1.3.74-2.09.95-1.57.42-3.68.56-5.91.56s-4.33-.14-5.91-.56A5.5 5.5 0 0 1 4 20.49a2.5 2.5 0 0 1-1-1.99c0-.79.36-1.52.84-2.14q.77-.94 1.98-1.69C7.42 13.7 9.61 13 12 13m0-11a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/></g></svg>`,
        all:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.8 0-1.4-.6T13 19v-4q0-.8.6-1.4T15 13h4q.8 0 1.4.6T21 15v4q0 .8-.6 1.4T19 21zm0-10q-.8 0-1.4-.6T13 9V5q0-.8.6-1.4T15 3h4q.8 0 1.4.6T21 5v4q0 .8-.6 1.4T19 11zM5 11q-.8 0-1.4-.6T3 9V5q0-.8.6-1.4T5 3h4q.8 0 1.4.6T11 5v4q0 .8-.6 1.4T9 11zm0 10q-.8 0-1.4-.6T3 19v-4q0-.8.6-1.4T5 13h4q.8 0 1.4.6T11 15v4q0 .8-.6 1.4T9 21z"/></svg>`,
        bot:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="currentColor" d="M14 1.5a.75.75 0 0 1 .75.75V3h4.5A2.75 2.75 0 0 1 22 5.75v5.5q0 .74-.35 1.34l-.16-.5a1.7 1.7 0 0 0-.6-.8 1.6 1.6 0 0 0-1.9 0 1.7 1.7 0 0 0-.57.78L18 13.62q-.06.2-.16.38H8.75A2.75 2.75 0 0 1 6 11.25v-5.5A2.75 2.75 0 0 1 8.75 3h4.5v-.75A.75.75 0 0 1 14 1.5m.3 14.59.07-.09H6.75A2.75 2.75 0 0 0 4 18.75v.75c0 1.98.96 3.64 2.72 4.78C8.44 25.4 10.92 26 14 26s5.56-.6 7.28-1.72l.27-.18a1 1 0 0 1-.3-.31A1.4 1.4 0 0 1 21 23q0-.2.06-.38l-.13.11a1.6 1.6 0 0 1-1.86 0 1.7 1.7 0 0 1-.59-.8l-.5-1.53a2 2 0 0 0-.34-.64l-.18-.21a2 2 0 0 0-.83-.52l-1.56-.5a1.6 1.6 0 0 1-.77-.59 1.6 1.6 0 0 1 0-1.85M11 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-.33 10.33a3 3 0 0 1 .76 1.24l.5 1.53a.6.6 0 0 0 1.14 0l.5-1.53a3.2 3.2 0 0 1 2-2l1.53-.5a.6.6 0 0 0 0-1.14h-.03l-1.53-.5a3.2 3.2 0 0 1-2-2l-.5-1.53a.6.6 0 0 0-1.14 0l-.5 1.53-.01.04a3.2 3.2 0 0 1-1.96 1.96l-1.53.5a.6.6 0 0 0 0 1.14l1.53.5q.72.23 1.24.76m8.65 3.53.92.3h.02a.36.36 0 0 1 0 .68l-.92.3a1.9 1.9 0 0 0-1.2 1.2l-.3.92a.36.36 0 0 1-.68 0l-.3-.92a1.9 1.9 0 0 0-1.2-1.2l-.92-.3a.36.36 0 0 1 0-.68l.92-.3a1.9 1.9 0 0 0 1.18-1.2l.3-.92a.36.36 0 0 1 .68 0l.3.92a1.9 1.9 0 0 0 1.2 1.2"/></svg>`
    };
    const DEFAULT_ICONS = { ...ICONS };
    function createPromptButton(direction = 'top') {
        const wrapper = document.createElement('div');
        wrapper.className = 'mp-prompt-wrapper';
        const slidingContainer = document.createElement('div');
        slidingContainer.className = `mp-sliding-pill-container mp-dir-${direction}`;
        const tooltipPos = (direction === 'left' || direction === 'right') ? 'top' : 'left';
        const btnAI = document.createElement('button');
        btnAI.type = "button";
        btnAI.className = 'mp-btn-part mp-btn-ai';
        btnAI.setAttribute('data-testid', 'composer-button-ai-enhance');
        setSafeInnerHTML(btnAI, ICONS.magic);
        createCustomTooltip(btnAI, getTranslation('enhanceTooltip'), tooltipPos);
        btnAI.addEventListener('click', (e) => {
            e.stopPropagation();
            handleInstantPageEnhancement();
        });
        const btnMain = document.createElement('button');
        btnMain.type = "button";
        btnMain.className = 'mp-btn-part mp-btn-main';
        btnMain.setAttribute('data-testid', 'composer-button-prompts');
        setSafeInnerHTML(btnMain, ICONS.prompts);
        createCustomTooltip(btnMain, getTranslation('prompts'), tooltipPos);
        slidingContainer.appendChild(btnAI);
        slidingContainer.appendChild(btnMain);
        wrapper.appendChild(slidingContainer);
        return wrapper;
    }
    function createSettingsModal() {
        let tempConfig = { ...currentThemeConfig };
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-hidden';
        overlay.id = '__ap_settings_overlay';
        const handleClose = () => {
            applyTheme(currentThemeConfig);
            hideModal(overlay);
        };
        overlay.onclick = (e) => { if(e.target === overlay) handleClose(); };
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.style.width = '420px !important';
        box.style.maxHeight = '85vh !important';
        box.onclick = (e) => e.stopPropagation();
        const htmlContent = ` <div class="mp-settings-container"> <div class="mp-tabs-header"> <button class="mp-tab-btn active" data-tab="basic">${getTranslation('basic')}</button> <button class="mp-tab-btn" data-tab="advanced">${getTranslation('advanced')}</button> </div> <div class="mp-scroll-wrapper" style="flex:1; overflow:hidden;"> <div id="mp-settings-scroll-area" style="padding: 0 4px 12px 4px; overflow-y: auto;"> <div class="mp-tab-content active" id="tab-basic" style="margin-bottom: 16px; margin-top: 16px;"> <div class="mp-form-row"> <div class="mp-form-group"> <label class="mp-label">${getTranslation('languageSettings')}</label> <button id="mp-btn-open-lang" class="mp-action-btn-full"> <span id="mp-current-lang-display" style="font-weight:600;">${translations[currentLang]?.langName || currentLang}</span> <span class="mp-btn-icon">${ICONS.globo}</span> </button> </div> <div class="mp-form-group"> <label class="mp-label">${getTranslation('backupRestore')}</label> <button id="mp-btn-open-backup" class="mp-action-btn-full"> <span style="font-weight:600;">${getTranslation('exportImport')}</span> <span class="mp-btn-icon">${ICONS.expImp}</span> </button> </div> </div> <div class="mp-form-group"> <label class="mp-label">${getTranslation('colorMode')}</label> <div class="mp-segmented-control"> <div class="mp-segment-opt" data-val="auto">${ICONS.monitor} <span>${getTranslation('auto')}</span></div> <div class="mp-segment-opt" data-val="light">${ICONS.sol} <span>${getTranslation('light')}</span></div> <div class="mp-segment-opt" data-val="dark">${ICONS.lua} <span>${getTranslation('dark')}</span></div> </div> </div> <div class="mp-form-group style=" style="margin-bottom: 0px;"> <label class="mp-label">${getTranslation('theme')}</label> <div class="mp-theme-scroll-container" id="mp-theme-list-container"></div> </div> </div> <div class="mp-tab-content" id="tab-advanced" style="margin-bottom: 16px; margin-top: 16px;"> <div class="mp-form-group"> <label class="mp-label">${getTranslation('featureSettings')}</label> <div class="mp-settings-switch-container" style="margin-bottom: 8px;"> <span id="mp-smart-predict-lbl"> ${getTranslation('smartPredict')} </span> <div class="mp-switch"> <input type="checkbox" id="mp_setting_prediction" /> <label for="mp_setting_prediction">Toggle</label> </div> </div> <div class="mp-settings-switch-container"> <span id="mp-nav-lbl"> ${getTranslation('navConfig')} </span> <div class="mp-switch"> <input type="checkbox" id="mp_setting_nav" ${currentNavConfig.enabled ? 'checked' : ''} /> <label for="mp_setting_nav">Toggle</label> </div> </div> </div> <div class="mp-form-group"> <label class="mp-label mp-label-row"> ${getTranslation('aiEnhanceSettings')} </label> <input type="text" id="mp_ai_api_key_input" class="form-input hide-api-key" placeholder="${getTranslation('aiKeyPlaceholder')}"> <select id="mp_ai_model_select" class="form-input"> <optgroup label="Google Gemini"> <option value="gemini-3-pro-preview" ${currentAIConfig.model==='gemini-3-pro-preview' ? 'selected' : '' }>Gemini 3 Pro Preview</option> <option value="gemini-3-flash-preview" ${currentAIConfig.model==='gemini-3-flash-preview' ? 'selected' : '' }>Gemini 3 Flash Preview</option> <option value="gemini-2.5-pro" ${currentAIConfig.model==='gemini-2.5-pro' ? 'selected' : '' }>Gemini 2.5 Pro</option> <option value="gemini-2.5-flash" ${currentAIConfig.model==='gemini-2.5-flash' ? 'selected' : '' }>Gemini 2.5 Flash</option> <option value="gemini-flash-latest" ${currentAIConfig.model==='gemini-flash-latest' ? 'selected' : '' }>Gemini Flash Latest</option> <option value="gemini-flash-lite-latest" ${currentAIConfig.model==='gemini-flash-lite-latest' ? 'selected' : '' }>Gemini Flash-Lite Latest</option> </optgroup> <optgroup label="LongCat"> <option value="LongCat-Flash-Thinking-2601" ${currentAIConfig.model==='LongCat-Flash-Thinking-2601' ? 'selected' : '' }>LongCat Flash Thinking 2601</option> <option value="LongCat-Flash-Thinking" ${currentAIConfig.model==='LongCat-Flash-Thinking' ? 'selected' : '' }>LongCat Flash Thinking</option> <option value="LongCat-Flash-Chat" ${currentAIConfig.model==='LongCat-Flash-Chat' ? 'selected' : '' }>LongCat Flash Chat</option> <option value="LongCat-Flash-Lite" ${currentAIConfig.model==='LongCat-Flash-Lite' ? 'selected' : '' }>LongCat Flash Lite</option> </optgroup> <optgroup label="Groq"> <option value="openai/gpt-oss-120b" ${currentAIConfig.model==='openai/gpt-oss-120b' ? 'selected' : '' }>GPT-OSS 120B</option> <option value="qwen/qwen3-32b" ${currentAIConfig.model==='qwen/qwen3-32b' ? 'selected' : '' }>Qwen3 32B</option> <option value="moonshotai/kimi-k2-instruct-0905" ${currentAIConfig.model==='moonshotai/kimi-k2-instruct-0905' ? 'selected' : '' }>Kimi K2 0905</option> <option value="llama-3.3-70b-versatile" ${currentAIConfig.model==='llama-3.3-70b-versatile' ? 'selected' : '' }>Llama 3.3 70B</option> <option value="llama-3.1-8b-instant" ${currentAIConfig.model==='llama-3.1-8b-instant' ? 'selected' : '' }>Llama 3.1 8B</option> </optgroup> <optgroup label="OpenRouter"> <option value="openrouter|openai/gpt-oss-120b:free" ${currentAIConfig.model==='openrouter|openai/gpt-oss-120b:free' ? 'selected' : '' }>GPT-OSS 120B Free</option> <option value="openrouter|openai/gpt-oss-20b:free" ${currentAIConfig.model==='openrouter|openai/gpt-oss-20b:free' ? 'selected' : '' }>GPT-OSS 20B Free</option> <option value="openrouter|stepfun/step-3.5-flash:free" ${currentAIConfig.model==='openrouter|stepfun/step-3.5-flash:free' ? 'selected' : '' }>StepFun 3.5 Flash Free</option> <option value="openrouter|arcee-ai/trinity-large-preview:free" ${currentAIConfig.model==='openrouter|arcee-ai/trinity-large-preview:free' ? 'selected' : '' }>Trinity Large Preview Free</option> <option value="openrouter|z-ai/glm-4.5-air:free" ${currentAIConfig.model==='openrouter|z-ai/glm-4.5-air:free' ? 'selected' : '' }>GLM 4.5 Air Free</option> <option value="openrouter|qwen/qwen3-next-80b-a3b-instruct:free" ${currentAIConfig.model==='openrouter|qwen/qwen3-next-80b-a3b-instruct:free' ? 'selected' : '' }>Qwen3 Next 80B A3B Free</option> <option value="openrouter|deepseek/deepseek-r1-0528:free" ${currentAIConfig.model==='openrouter|deepseek/deepseek-r1-0528:free' ? 'selected' : '' }>DeepSeek R1 0528 Free</option> <option value="openrouter|tngtech/deepseek-r1t2-chimera:free" ${currentAIConfig.model==='openrouter|tngtech/deepseek-r1t2-chimera:free' ? 'selected' : '' }>DeepSeek R1T2 Chimera Free</option> <option value="openrouter|mistralai/mistral-small-3.1-24b-instruct:free" ${currentAIConfig.model==='openrouter|mistralai/mistral-small-3.1-24b-instruct:free' ? 'selected' : '' }>Mistral Small 3.1 24B Free</option> <option value="openrouter|openrouter/aurora-alpha" ${currentAIConfig.model==='openrouter|openrouter/aurora-alpha' ? 'selected' : '' }>Aurora Alpha Free</option> <option value="openrouter|moonshotai/kimi-k2.5" ${currentAIConfig.model==='openrouter|moonshotai/kimi-k2.5' ? 'selected' : '' }>Kimi K2.5</option> <option value="openrouter|google/gemini-3-flash-preview" ${currentAIConfig.model==='openrouter|google/gemini-3-flash-preview' ? 'selected' : '' }>Gemini 3 Flash Prev</option> <option value="openrouter|deepseek/deepseek-v3.2" ${currentAIConfig.model==='openrouter|deepseek/deepseek-v3.2' ? 'selected' : '' }>DeepSeek V3.2</option> <option value="openrouter|anthropic/claude-sonnet-4.5" ${currentAIConfig.model==='openrouter|anthropic/claude-sonnet-4.5' ? 'selected' : '' }>Claude Sonnet 4.5</option> <option value="openrouter|x-ai/grok-4.1-fast" ${currentAIConfig.model==='openrouter|x-ai/grok-4.1-fast' ? 'selected' : '' }>Grok 4.1 Fast</option> <option value="openrouter|openai/gpt-5.2" ${currentAIConfig.model==='openrouter|openai/gpt-5.2' ? 'selected' : '' }>GPT-5.2</option> </optgroup> </select> <textarea id="mp_ai_sys_prompt_input" class="form-input" placeholder="${getTranslation('aiSysPromptInput')}"></textarea> </div> <div class="mp-form-group" style="margin-bottom: 0px;"> <label class="mp-label">${getTranslation('shortcutsSettings')}</label> <div class="mp-shortcut-scroll-container" id="mp-shortcuts-list-container"></div> </div> </div> </div> </div> <div class="mp-settings-footer"> <button class="save-button" id="mp-settings-save">${getTranslation('save')}</button> </div> </div> `;
        setSafeInnerHTML(box, htmlContent);
        overlay.appendChild(box);
        const themeListContainer = box.querySelector('#mp-theme-list-container');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.multiple = true;
        fileInput.style.display = 'none';
        box.appendChild(fileInput);
        fileInput.onchange = (e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                Array.from(files).forEach((file, index) => {
                    importThemesFromFile(file, () => {
                        if (index === files.length - 1) {
                            renderThemeList();
                            fileInput.value = '';
                        }
                    });
                });
            }
        };
        const renderThemeList = () => {
            setSafeInnerHTML(themeListContainer, '');
            const actionRow = document.createElement('div');
            actionRow.className = 'mp-theme-action-row';
            const shopBtn = document.createElement('div');
            shopBtn.className = 'mp-theme-split-btn';
            setSafeInnerHTML(shopBtn, ICONS.cart);
            shopBtn.onclick = () => window.open('https://ohas.gumroad.com/?section=ZXwZxCX_0cBARzWyglhEQg%3D%3D', '_blank');
            createCustomTooltip(shopBtn, getTranslation('getMoreThemes'), 'bottom');
            const addBtn = document.createElement('div');
            addBtn.className = 'mp-theme-split-btn';
            setSafeInnerHTML(addBtn, ICONS.plus);
            addBtn.onclick = () => fileInput.click();
            createCustomTooltip(addBtn, getTranslation('addTheme'), 'bottom');
            actionRow.appendChild(shopBtn);
            actionRow.appendChild(addBtn);
            themeListContainer.appendChild(actionRow);
            const createThemeEl = (id, def, isImported) => {
                const item = document.createElement('div');
                item.className = 'mp-theme-option';
                if (id === tempConfig.themeId) item.classList.add('selected');
                const displayName = isImported ? `${def.name} *` : (def.name === 'default' ? getTranslation('default') : def.name);
                item.textContent = displayName;
                item.onclick = () => {
                    tempConfig.themeId = id;
                    renderThemeList();
                    applyTheme(tempConfig);
                };
                if (isImported) {
                    item.oncontextmenu = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteImportedTheme(id, () => {
                            if (tempConfig.themeId === id) tempConfig.themeId = 'default';
                            renderThemeList();
                        });
                    };
                    item.title = (getTranslation('clickDelete'));
                }
                themeListContainer.appendChild(item);
            };
            Object.keys(themeDefinitions).forEach(key => createThemeEl(key, themeDefinitions[key], false));
            Object.keys(importedThemes).forEach(key => createThemeEl(key, importedThemes[key], true));
        };
        renderThemeList();
        const themeWrapper = setupEnhancedScroll(
            themeListContainer,
            'var(--mp-bg-secondary)',
            'var(--mp-border-radius-md)'
        );
        if (themeWrapper) themeWrapper.classList.add('mp-theme-wrapper-fixed');
        const shortcutContainer = box.querySelector('#mp-shortcuts-list-container');
        const shortcutLabel = shortcutContainer.parentElement.querySelector('.mp-label');
        if(shortcutLabel) shortcutLabel.textContent = getTranslation('shortcutsSettings');
        const renderShortcuts = () => {
            setSafeInnerHTML(shortcutContainer, '');
            const restoreBtn = document.createElement('div');
            restoreBtn.className = 'mp-shortcut-option';
            setSafeInnerHTML(restoreBtn, ICONS.restore);
            restoreBtn.style.border = '1px dashed var(--mp-border-primary)';
            restoreBtn.style.color = 'var(--mp-accent-close)';
            restoreBtn.style.backgroundColor = 'transparent';
            const restoreIcon = restoreBtn.querySelector('svg');
            if(restoreIcon) {
                restoreIcon.style.width = '20px';
                restoreIcon.style.height = '20px';
                restoreIcon.style.display = 'block';
            }
            restoreBtn.onmouseenter = () => restoreBtn.style.borderColor = 'var(--mp-accent-close)';
            restoreBtn.onmouseleave = () => restoreBtn.style.borderColor = 'var(--mp-border-primary)';
            restoreBtn.onclick = () => {
                if(confirm(getTranslation('restoreShortcuts') + '?')) {
                    currentShortcuts = JSON.parse(JSON.stringify(DEFAULT_SHORTCUTS));
                    renderShortcuts();
                }
            };
            createCustomTooltip(restoreBtn, getTranslation('restoreShortcuts'), 'right');
            shortcutContainer.appendChild(restoreBtn);
            Object.keys(currentShortcuts).forEach(key => {
                const item = currentShortcuts[key];
                const btn = document.createElement('div');
                btn.className = 'mp-shortcut-option';
                btn.textContent = item.keys;
                createCustomTooltip(btn, getTranslation(item.descKey), 'right');
                btn.onclick = (e) => {
                    e.stopPropagation();
                    const originalText = btn.textContent;
                    btn.textContent = getTranslation('pressKeyToRecord');
                    btn.classList.add('recording');
                    shortcutContainer.querySelectorAll('.recording').forEach(el => {
                        if(el !== btn) el.classList.remove('recording');
                    });
                    const handleRecord = (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        if (['Control', 'Alt', 'Shift', 'Meta'].includes(ev.key)) return;
                        const parts = [];
                        if (ev.ctrlKey) parts.push('Ctrl');
                        if (ev.altKey) parts.push('Alt');
                        if (ev.shiftKey) parts.push('Shift');
                        let mainKey = ev.key.toUpperCase();
                        if (ev.code === 'Space') mainKey = 'Space';
                        if (mainKey === ' ') mainKey = 'Space';
                        parts.push(mainKey);
                        const newShortcut = parts.join('+');
                        currentShortcuts[key].keys = newShortcut;
                        cleanup();
                        renderShortcuts();
                    };
                    const cleanup = () => {
                        document.removeEventListener('keydown', handleRecord, true);
                        document.removeEventListener('mousedown', cancelClick, true);
                        btn.classList.remove('recording');
                    };
                    const cancelClick = (ev) => {
                        if (ev.target !== btn) {
                            cleanup();
                            btn.textContent = originalText;
                        }
                    };
                    document.addEventListener('keydown', handleRecord, true);
                    document.addEventListener('mousedown', cancelClick, true);
                };
                shortcutContainer.appendChild(btn);
            });
        };
        renderShortcuts();
        if (shortcutContainer && !shortcutContainer.parentElement.classList.contains('mp-shortcut-wrapper-fixed')) {
            const shortcutWrapper = setupEnhancedScroll(
                shortcutContainer,
                'var(--mp-bg-secondary)',
                'var(--mp-border-radius-md)'
            );
            if (shortcutWrapper) {
                shortcutWrapper.classList.add('mp-shortcut-wrapper-fixed');
                shortcutContainer.style.border = 'none';
                shortcutContainer.style.background = 'transparent';
                shortcutContainer.style.boxShadow = 'none';
                shortcutContainer.style.width = '100%';
            }
        }
        const tabs = box.querySelectorAll('.mp-tab-btn');
        tabs.forEach(btn => {
            btn.onclick = () => {
                tabs.forEach(t => t.classList.remove('active'));
                box.querySelectorAll('.mp-tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const targetId = `tab-${btn.getAttribute('data-tab')}`;
                if(box.querySelector(`#${targetId}`)) box.querySelector(`#${targetId}`).classList.add('active');
            };
        });
        const modeOpts = box.querySelectorAll('.mp-segment-opt');
        const updateModeUI = () => {
            modeOpts.forEach(opt => opt.classList.toggle('selected', opt.getAttribute('data-val') === tempConfig.mode));
        };
        updateModeUI();
        modeOpts.forEach(opt => {
            opt.onclick = () => {
                tempConfig.mode = opt.getAttribute('data-val');
                updateModeUI();
                applyTheme(tempConfig);
            };
        });
        box.querySelector('#mp-btn-open-lang').onclick = () => {
            if (!languageModal) { languageModal = createLanguageModal(); document.body.appendChild(languageModal); }
            showModal(languageModal);
        };
        box.querySelector('#mp-btn-open-backup').onclick = openBackupManager;
        const smartLabel = box.querySelector('#mp-smart-predict-lbl');
        if(smartLabel) {
            createCustomTooltip(smartLabel, getTranslation('smartPredictDesc'), 'left');
        }
        const navConfig = box.querySelector('#mp-nav-lbl');
        if(navConfig) {
            createCustomTooltip(navConfig, getTranslation('navConfigDesc'), 'left');
        }
        const predictionCheckbox = box.querySelector('#mp_setting_prediction');
        if (predictionCheckbox) {
            predictionCheckbox.checked = currentPredictionConfig.enabled;
            predictionCheckbox.onchange = () => {
                currentPredictionConfig.enabled = predictionCheckbox.checked;
            };
        }
        const apiKeyInput = box.querySelector('#mp_ai_api_key_input');
        const modelSelect = box.querySelector('#mp_ai_model_select');
        const sysPromptInput = box.querySelector('#mp_ai_sys_prompt_input');
        const updateApiKeyInput = () => {
            const selectedModel = modelSelect.value;
            const provider = getProvider(selectedModel);
            if (provider === 'openrouter') { apiKeyInput.value = currentAIConfig.apiKeyOpenRouter || ''; }
            else if (provider === 'longcat') { apiKeyInput.value = currentAIConfig.apiKeyLongcat || ''; }
            else if (provider === 'groq') { apiKeyInput.value = currentAIConfig.apiKeyGroq || ''; }
            else { apiKeyInput.value = currentAIConfig.apiKeyGemini || ''; }
        };
        modelSelect.addEventListener('change', updateApiKeyInput);
        if (apiKeyInput && modelSelect) {
            sysPromptInput.value = currentAIConfig.systemPrompt || '';
            updateApiKeyInput();
        }
        box.querySelector('#mp-settings-save').onclick = async () => {
            await saveThemeConfig(tempConfig);
            if (predictionCheckbox) {savePredictionConfig({ enabled: predictionCheckbox.checked });}
            saveShortcutsConfig();
            const navCheck = box.querySelector('#mp_setting_nav');
            if (navCheck) {
                const newEnabled = navCheck.checked;
                saveNavConfig({ enabled: newEnabled });
                createNavInterface();
                if (document.getElementById('mp-nav-container')) {
                    document.getElementById('mp-nav-container').style.display = newEnabled ? 'flex' : 'none';
                }
            }
            if (apiKeyInput && modelSelect && sysPromptInput) {
                const selectedModel = modelSelect.value;
                const provider = getProvider(selectedModel);
                const aiUpdate = {
                    model: selectedModel,
                    systemPrompt: sysPromptInput.value,
                    keyIndexGemini: currentAIConfig.keyIndexGemini,
                    keyIndexLongcat: currentAIConfig.keyIndexLongcat,
                    keyIndexGroq: currentAIConfig.keyIndexGroq,
                    keyIndexOpenRouter: currentAIConfig.keyIndexOpenRouter
                };
                if (provider === 'openrouter') {aiUpdate.apiKeyOpenRouter = apiKeyInput.value.trim(); aiUpdate.apiKeyLongcat = currentAIConfig.apiKeyLongcat || ''; aiUpdate.apiKeyGroq = currentAIConfig.apiKeyGroq || ''; aiUpdate.apiKeyGemini = currentAIConfig.apiKeyGemini || '';}
                else if (provider === 'longcat') {aiUpdate.apiKeyLongcat = apiKeyInput.value.trim(); aiUpdate.apiKeyOpenRouter = currentAIConfig.apiKeyOpenRouter || ''; aiUpdate.apiKeyGroq = currentAIConfig.apiKeyGroq || ''; aiUpdate.apiKeyGemini = currentAIConfig.apiKeyGemini || '';}
                else if (provider === 'groq') {aiUpdate.apiKeyGroq = apiKeyInput.value.trim(); aiUpdate.apiKeyOpenRouter = currentAIConfig.apiKeyOpenRouter || ''; aiUpdate.apiKeyLongcat = currentAIConfig.apiKeyLongcat || ''; aiUpdate.apiKeyGemini = currentAIConfig.apiKeyGemini || '';}
                else {aiUpdate.apiKeyGemini = apiKeyInput.value.trim(); aiUpdate.apiKeyOpenRouter = currentAIConfig.apiKeyOpenRouter || ''; aiUpdate.apiKeyLongcat = currentAIConfig.apiKeyLongcat || ''; aiUpdate.apiKeyGroq = currentAIConfig.apiKeyGroq || '';}
                await saveAIConfig(aiUpdate);
            }
            hideModal(overlay);
        };
        setupEnhancedScroll(box.querySelector('#mp-settings-scroll-area'));
        overlay.resetToCurrent = () => {
            tempConfig = { ...currentThemeConfig };
            renderThemeList();
            renderShortcuts();
            updateModeUI();
            const langDisplay = box.querySelector('#mp-current-lang-display');
            if(langDisplay) langDisplay.textContent = translations[currentLang]?.langName || currentLang;
            tabs[0].click();
        };
        return overlay;
    }
    function parsePromptInternal(rawText) {
        if (!rawText) return { processedText: '', ignoreMap: new Map(), selectMap: new Map(), inputMap: new Map() };
        let processedText = rawText;
        const ignoreMap = new Map();
        const selectMap = new Map();
        const inputMap = new Map();
        let ignoreCounter = 0;
        let selectCounter = 0;
        let inputCounter = 0;
        const cleanFenceContent = (content) => {
            if (!content) return '';
            let c = content.replace(/^[ \t]*\r?\n/, '');
            c = c.replace(/\r?\n[ \t]*$/, '');
            return c;
        };
        const blockFenceRegex = /([ \t]*)(#+)ignore[ \t]*(?:\r?\n)?([\s\S]*?)(?:\r?\n)?[ \t]*\2end/g;
        processedText = processedText.replace(blockFenceRegex, (_match, _whitespace, _hashes, content) => {
            const key = `__IGNORE_BLK_${ignoreCounter++}__`;
            ignoreMap.set(key, content);
            return key;
        });
        const valueFenceRegex = /('{2,})((?:(?!\1)[\s\S])*)\1/g;
        processedText = processedText.replace(valueFenceRegex, (_match, _quoteSequence, content) => {
            const key = `__QUOTE_${ignoreCounter++}__`;
            ignoreMap.set(key, content);
            return key;
        });
        processedText = processedText.replace(/\\([#\[\]])/g, (_match, char) => {
            const key = `__ESC_CHAR_${ignoreCounter++}__`;
            ignoreMap.set(key, char);
            return key;
        });
        const regionRegex = /([ \t]*)(#+)start[ \t]*(?:\r?\n)?([\s\S]*?)(?:\r?\n)?[ \t]*\2end/g;
        processedText = processedText.replace(regionRegex, (_match, _indent, _hashes, body) => {
            const key = `__SELECT_${selectCounter++}__`;
            const options = [];
            let currentOption = null;
            const tokenRegex = /(?:^\s*#\s*(?!start|end)(.*)$)|(?:^\s*([+\-]|\d+)\s*\[([^\]]*)\])|(?:(__QUOTE_\d+__)|'([^'\\]*(?:\\.[^'\\]*)*)')/gm;
            let m;
            while ((m = tokenRegex.exec(body)) !== null) {
                if (m[1]) {
                    const label = m[1].trim();
                    if (label) {
                        options.push({ type: 'header', label: label });
                        currentOption = null;
                    }
                }
                else if (m[2]) {
                    const prefix = m[2];
                    const label = m[3];
                    let type = prefix === '+' ? 'multi' : (prefix === '-' ? 'sovereign' : 'id');
                    let id = (type === 'id') ? prefix : null;
                    currentOption = { label, value: label, type, id };
                    options.push(currentOption);
                }
                else if (currentOption) {
                    if (m[4]) {
                        const quoteKey = m[4];
                        if (ignoreMap.has(quoteKey)) {
                            currentOption.value = cleanFenceContent(ignoreMap.get(quoteKey));
                        }
                    }
                    else if (m[5] !== undefined) {
                        let val = m[5];
                        val = cleanFenceContent(val);
                        val = val.replace(/\\'/g, "'");
                        currentOption.value = val;
                    }
                }
            }
            selectMap.set(key, { title: (typeof getTranslation !== 'undefined' ? getTranslation('select') : 'Select'), options });
            return key;
        });
        processedText = processedText.replace(/\[([^\]=]+?)\s*=\s*(\$[a-zA-Z0-9_]+)\](?:\(([^)]*)\))?/g, (match, label, varName, comment, _offset, _fullString) => {
            if (label.startsWith('__') && label.endsWith('__')) return match;
            const key = `__INPUT_${inputCounter++}__`;
            let finalContext = comment ? comment : '';
            inputMap.set(key, { label: label.trim(), varName: varName.trim(), context: finalContext });
            return key;
        });
        processedText = processedText.replace(/\[([^\]]+?)\](?:\(([^)]*)\))?/g, (match, label, comment, _offset, _fullString) => {
            if (label.startsWith('__') && label.endsWith('__')) return match;
            if (inputMap.has(match)) return match;
            const key = `__INPUT_${inputCounter++}__`;
            let finalContext = comment ? comment : '';
            inputMap.set(key, { label: label.trim(), varName: null, context: finalContext });
            return key;
        });
        return { processedText, ignoreMap, selectMap, inputMap };
    }
    function createPlaceholderModal() {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-hidden';
        overlay.id = '__ap_placeholder_modal_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.onclick = e => e.stopPropagation();
        const modalContentHTML = ` <button id="__ap_ph_expand_btn" class="mp-modal-expand-btn" title="${getTranslation('expand')}">${ICONS.expand}</button> <button id="__ap_close_placeholder" class="mp-modal-close-btn" aria-label="${getTranslation('close')}">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('fillPlaceholders')}</h2> <div id="__ap_placeholders_container"></div> <div class="modal-footer"><button id="__ap_insert_prompt" class="save-button">${getTranslation('insert')}</button></div> `;
        setSafeInnerHTML(box, modalContentHTML);
        overlay.appendChild(box);
        const container = box.querySelector('#__ap_placeholders_container');
        container.style.maxHeight = '450px';
        setupEnhancedScroll(container);
        const expandBtn = box.querySelector('#__ap_ph_expand_btn');
        let isExpanded = false;
        expandBtn.onclick = (e) => {
            e.stopPropagation();
            isExpanded = !isExpanded;
            if (isExpanded) {
                box.classList.add('mp-expanded');
                setSafeInnerHTML(expandBtn, `${ICONS.collapse}`);
                expandBtn.title = getTranslation('collapse');
            } else {
                box.classList.remove('mp-expanded');
                setSafeInnerHTML(expandBtn, `${ICONS.expand}`);
                expandBtn.title = getTranslation('expand');
            }
            setTimeout(() => {
                if (container.updateScrollArrows) container.updateScrollArrows();
            }, 350);
        };
        return overlay;
    }
    function createPromptMenu() {
        const menu = document.createElement('div');
        menu.className = 'prompt-menu';
        menu.id = 'prompt-menu-container';
        return menu;
    }
    function createPromptModal() {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-hidden';
        overlay.id = '__ap_modal_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.id = '__ap_modal_box_el';
        box.style.cssText = 'overflow-y: auto; padding-bottom: 24px;';
        box.onclick = e => e.stopPropagation();
        setSafeInnerHTML(box, ` <button id="__ap_expand_btn" class="mp-modal-expand-btn">${ICONS.expand}</button> <button id="__ap_shop_btn" class="mp-modal-shop-btn">${ICONS.shop}</button> <button id="__ap_info_btn" class="mp-modal-info-btn">${ICONS.info}</button> <button id="__ap_close_prompt" class="mp-modal-close-btn">${ICONS.close}</button> <h2 class="modal-title" style="flex-shrink:0;">${getTranslation('newPrompt')}</h2> <div class="form-group" style="flex-shrink:0;"><label for="__ap_title" class="form-label">${getTranslation('title')}</label><input id="__ap_title" class="form-input" /></div> <div class="form-group" style="height: 300px; flex-shrink: 0; display: flex; flex-direction: column;"> <div class="mp-label-wrapper"><label for="__ap_text" class="form-label" style="margin-bottom:0;">${getTranslation('prompt')}</label><button id="__ap_enhance_btn" class="mp-enhance-btn"><span class="icon">${ICONS.magic}</span></button> </div><textarea id="__ap_text" class="form-textarea" spellcheck="false" style="height:100% !important; resize:none;"></textarea></div> <div class="mp-files-accordion" id="__ap_accordion"> <div class="mp-accordion-header" id="__ap_files_header"> <div style="display:flex;align-items:center;">${ICONS.folder}<span id="__ap_files_label">${getTranslation('filesLabel')}</span></div>${ICONS.chevron}</div> <div class="mp-accordion-content" id="__ap_files_content"> <div id="__ap_file_scroll_wrapper" class="mp-file-scroll-wrapper"> <div id="__ap_file_grid" class="mp-file-grid"></div> </div><input type="file" id="__ap_file_input" multiple style="display:none"></div></div> <div class="mp-switch-container" style="flex-shrink:0;"> <div class="mp-switch"><input type="checkbox" id="__ap_use_placeholders" /><label for="__ap_use_placeholders">Toggle</label><span class="switch-text" onclick="document.getElementById('__ap_use_placeholders').click()">${getTranslation('enablePlaceholders')}</span></div> <div class="mp-switch"><input type="checkbox" id="__ap_auto_execute" /><label for="__ap_auto_execute">Toggle</label><span class="switch-text" onclick="document.getElementById('__ap_auto_execute').click()">${getTranslation('autoExecute')}</span></div></div> <div class="modal-footer" style="flex-shrink:0; margin-top: auto;"><button id="__ap_save" class="save-button">${getTranslation('save')}</button></div> `);
        overlay.appendChild(box);
        const enhanceBtn = box.querySelector('#__ap_enhance_btn');
        const textarea = box.querySelector('#__ap_text');
        textarea.addEventListener('keydown', (e) => {
            if (isShortcutPressed(e, 'enhancePrompt')) {
                e.preventDefault();
                e.stopPropagation();
                enhanceBtn.click();
            }
        });
        createCustomTooltip(enhanceBtn, getTranslation('enhanceTooltip'), 'left');
        enhanceBtn.onclick = async () => {
            const originalText = textarea.value.trim();
            if (!originalText) {
                alert(getTranslation('noTextToEnhance'));
                return;
            }
            const provider = getProvider(currentAIConfig.model);
            const currentKey = getRotatingApiKey(provider);
            if (!currentKey) {
                showAPIKeyRequiredModal();
                return;
            }
            enhanceBtn.classList.add('loading');
            const originalIcon = enhanceBtn.innerHTML;
            setSafeInnerHTML(enhanceBtn, ICONS.loading);
            try {
                const enhancedText = await callAI_API(originalText);
                showAIDiffModal(originalText, enhancedText, textarea);
            } catch (error) {
                console.error(error);
                alert(getTranslation('aiErrorPrefix') + error.message);
            } finally {
                enhanceBtn.classList.remove('loading');
                setSafeInnerHTML(enhanceBtn, originalIcon);
            }
        };
        const shopBtn = box.querySelector('#__ap_shop_btn');
        createCustomTooltip(shopBtn, getTranslation('getMorePrompts'), 'bottom');
        shopBtn.onclick = (e) => {
            e.stopPropagation();
            window.open('https://ohas.gumroad.com/?section=M-Brf6TRCZeF1mFoPmDa4w%3D%3D', '_blank');
        };
        const infoBtn = box.querySelector('#__ap_info_btn');
        createCustomTooltip(infoBtn, getTranslation('infoTitle'), 'bottom');
        const closeBtn = box.querySelector('#__ap_close_prompt');
        createCustomTooltip(closeBtn, getTranslation('close'), 'bottom');
        closeBtn.onclick = () => {
            overlay.classList.add('mp-hidden');
            setTimeout(() => overlay.remove(), 200);
        };
        attachSmartEditorLogic(textarea);
        const fileScrollWrapper = box.querySelector('#__ap_file_scroll_wrapper');
        setTimeout(() => {
            const textWrapper = setupEnhancedScroll(textarea, null, 'var(--mp-border-radius-md)');
            if (textWrapper) textWrapper.classList.add('prompt-editor-scroll-wrapper');
            setupEnhancedScroll(fileScrollWrapper, null, '0');
        }, 0);
        const accordion = box.querySelector('#__ap_accordion');
        const accHeader = box.querySelector('#__ap_files_header');
        const accContent = box.querySelector('#__ap_files_content');
        accHeader.onclick = () => {
            const isOpen = accContent.classList.toggle('open');
            accordion.classList.toggle('open');
            if (isOpen && fileScrollWrapper.updateScrollArrows) {
                setTimeout(() => fileScrollWrapper.updateScrollArrows(), 50);
            }
        };
        const fileInput = box.querySelector('#__ap_file_input');
        const grid = box.querySelector('#__ap_file_grid');
        const label = box.querySelector('#__ap_files_label');
        box.renderGlobalFiles = async () => {
            const files = await getGlobalFiles();
            setSafeInnerHTML(grid, '');
            let activeCount = 0;
            files.forEach(f => { if(currentActiveFileIds.has(f.id)) activeCount++; });
            label.textContent = getTranslation('filesCounter')
                .replace('{active}', activeCount)
                .replace('{total}', files.length);
            if (files.length === 0) {
                fileScrollWrapper.classList.add('empty-state');
                grid.classList.add('empty-state');
                const emptyIcon = document.createElement('div');
                emptyIcon.className = 'mp-file-empty-icon';
                setSafeInnerHTML(emptyIcon, `${ICONS.cloudFile}`);
                const emptyText = document.createElement('div');
                emptyText.className = 'mp-file-empty-text';
                emptyText.textContent = getTranslation('addCardTitle');
                const emptySubtext = document.createElement('div');
                emptySubtext.className = 'mp-file-empty-subtext';
                emptySubtext.textContent = getTranslation('addCards');
                grid.appendChild(emptyIcon);
                grid.appendChild(emptyText);
                grid.appendChild(emptySubtext);
                fileScrollWrapper.onclick = () => fileInput.click();
                return;
            }
            fileScrollWrapper.classList.remove('empty-state');
            grid.classList.remove('empty-state');
            fileScrollWrapper.onclick = null;
            const addCard = document.createElement('div');
            addCard.className = 'mp-add-file-card';
            addCard.title = getTranslation('addCardTitle');
            setSafeInnerHTML(addCard, `${ICONS.plus}`);
            addCard.onclick = () => fileInput.click();
            grid.appendChild(addCard);
            files.forEach(file => {
                const isActive = currentActiveFileIds.has(file.id);
                const card = document.createElement('div');
                card.className = `mp-file-card ${isActive ? 'active' : 'inactive'}`;
                card.title = file.name;
                card.onclick = () => {
                    if (currentActiveFileIds.has(file.id)) currentActiveFileIds.delete(file.id);
                    else currentActiveFileIds.add(file.id);
                    box.renderGlobalFiles();
                };
                const delBtn = document.createElement('div');
                delBtn.className = 'mp-file-delete-perm';
                setSafeInnerHTML(delBtn, `${ICONS.close}`);
                delBtn.onclick = async (e) => {
                    e.stopPropagation();
                    if(confirm(getTranslation('confirmDeleteFile'))) {
                        await deleteGlobalFile(file.id);
                        currentActiveFileIds.delete(file.id);
                        box.renderGlobalFiles();
                    }
                };
                let previewHtml = '';
                if (file.type.startsWith('image/')) previewHtml = `<img src="${file.data}" class="mp-file-thumb">`;
                else previewHtml = `${ICONS.file}`;
                setSafeInnerHTML(card, previewHtml);
                card.appendChild(delBtn);
                grid.appendChild(card);
            });
            if (fileScrollWrapper.updateScrollArrows) {
                setTimeout(() => fileScrollWrapper.updateScrollArrows(), 50);
            }
        };
        fileScrollWrapper.ondragover = (e) => { e.preventDefault(); };
        fileScrollWrapper.ondrop = async (e) => {
            e.preventDefault();
            handleNewFiles(e.dataTransfer.files);
        };
        fileInput.onchange = (e) => handleNewFiles(e.target.files);
        async function handleNewFiles(fileList) {
            for (const file of fileList) {
                if (file.size > 5 * 1024 * 1024) {
                    const fileSizeMB = (file.size / 1024 / 1024).toFixed(1);
                    if (!confirm(getTranslation('confirmLargeFile').replace('{fileSizeMB}', fileSizeMB))) { continue; }
                }
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const newFile = {
                        id: Date.now() + Math.random().toString(36).substr(2, 9),
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        data: e.target.result
                    };
                    await saveGlobalFile(newFile);
                    currentActiveFileIds.add(newFile.id);
                    if (box.renderGlobalFiles) {
                         if (!accContent.classList.contains('open')) {
                             accContent.classList.add('open');
                             accordion.classList.add('open');
                         }
                         box.renderGlobalFiles();
                    }
                };
                reader.readAsDataURL(file);
            }
        }
        const expandBtn = box.querySelector('#__ap_expand_btn');
        let isExpanded = false;
        createCustomTooltip(expandBtn, getTranslation('expand'), 'bottom');
        expandBtn.onclick = (e) => {
            e.stopPropagation();
            isExpanded = !isExpanded;
            if (isExpanded) {
                box.classList.add('mp-expanded');
                setSafeInnerHTML(expandBtn, `${ICONS.collapse}`);
                createCustomTooltip(expandBtn, getTranslation('collapse'), 'bottom');
            } else {
                box.classList.remove('mp-expanded');
                setSafeInnerHTML(expandBtn, `${ICONS.expand}`);
                createCustomTooltip(expandBtn, getTranslation('expand'), 'bottom');
            }
            setTimeout(() => {
                if (textarea.updateScrollArrows) textarea.updateScrollArrows();
            }, 350);
        };
        return overlay;
    }
    function showAIDiffModal(originalText, enhancedText, targetTextarea) {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-diff-modal-overlay';
        overlay.id = '__ap_diff_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        setSafeInnerHTML(box, ` <button id="__ap_diff_close" class="mp-modal-close-btn" title="${getTranslation('close')}">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('compareTitle')}</h2> <div class="mp-diff-container"> <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation('originalLabel')}</div> <textarea id="__ap_diff_original" class="mp-diff-textarea" readonly>${originalText}</textarea> </div> <div class="mp-diff-column"> <div class="mp-diff-label enhanced">${getTranslation('enhancedLabel')}</div> <textarea id="__ap_diff_enhanced" class="mp-diff-textarea">${enhancedText}</textarea> </div> </div> <div class="mp-diff-actions"> <button id="__ap_diff_cancel" class="mp-button-secondary">${getTranslation('keepOriginal')}</button> <button id="__ap_diff_accept" class="save-button">${getTranslation('useEnhanced')}</button> </div> `);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        const close = () => {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        };
        box.querySelector('#__ap_diff_close').onclick = close;
        box.querySelector('#__ap_diff_cancel').onclick = close;
        box.querySelector('#__ap_diff_accept').onclick = () => {
            targetTextarea.value = box.querySelector('#__ap_diff_enhanced').value;
            close();
        };
        requestAnimationFrame(() => overlay.classList.add('visible'));
    }
    function showAPIKeyRequiredModal() {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.style.cssText = 'max-width: 450px;';
        setSafeInnerHTML(box, ` <button id="__ap_key_close" class="mp-modal-close-btn">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('apiKeyTitle')}</h2> <div class="mp-apikey-info-box"> <p>${getTranslation('apiKeyDesc')}</p> </div> <div class="modal-footer"> <button id="__ap_open_settings" class="save-button">${getTranslation('openConfig')}</button> </div> `);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        const close = () => {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        };
        box.querySelector('#__ap_key_close').onclick = close;
        box.querySelector('#__ap_open_settings').onclick = () => {
            close();
            if (!settingsModal) {
                settingsModal = createSettingsModal();
                document.body.appendChild(settingsModal);
            }
            if (settingsModal.resetToCurrent) settingsModal.resetToCurrent();
            showModal(settingsModal);
            setTimeout(() => {
                const advancedTabBtn = settingsModal.querySelector('.mp-tab-btn[data-tab="advanced"]');
                if (advancedTabBtn) advancedTabBtn.click();
            }, 50);
        };
        requestAnimationFrame(() => {
            overlay.classList.add('visible');
        });
    }
    function createInfoModal() {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-hidden';
        overlay.id = '__ap_info_modal_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.onclick = e => e.stopPropagation();
        const modalContentHTML = ` <button id="__ap_close_info" class="mp-modal-close-btn" aria-label="${getTranslation('close')}">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('infoTitle')}</h2> <div class="mp-info-table"><div class="mp-info-row"><div class="mp-info-col"><h3>${getTranslation('enablePlaceholders')}</h3></div><div class="mp-info-col"><h3>${getTranslation('autoExecute')}</h3></div></div> <div class="mp-info-row"><div class="mp-info-col"><p>${getTranslation('infoDPDesc')}</p></div><div class="mp-info-col"><p>${getTranslation('infoASDesc')}</p></div></div></div> `;
        setSafeInnerHTML(box, modalContentHTML);
        overlay.appendChild(box);
        return overlay;
    }
    function openPromptModal(item = null, index = -1) {
        if (!currentModal) return;
        const isEditing = !!item;
        currentModal.dataset.index = index;
        currentModal.querySelector('.modal-title').textContent = isEditing ? getTranslation('edit') : getTranslation('newPrompt');
        document.getElementById('__ap_title').value = item?.title || '';
        document.getElementById('__ap_text').value = item?.text || '';
        document.getElementById('__ap_use_placeholders').checked = item?.usePlaceholders || false;
        document.getElementById('__ap_auto_execute').checked = item?.autoExecute || false;
        currentActiveFileIds = new Set(item?.activeFileIds || []);
        const box = currentModal.querySelector('.mp-modal-box');
        if (box && box.renderGlobalFiles) {
            box.renderGlobalFiles();
        }
        showModal(currentModal);
        setTimeout(() => document.getElementById('__ap_title').focus(), 100);
    }
    function createLanguageModal() {
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay mp-hidden lang-overlay';
        overlay.id = '__ap_lang_modal_overlay';
        overlay.onclick = () => hideModal(overlay);
        const box = document.createElement('div');
        box.className = 'mp-modal-box lang-box';
        box.onclick = (e) => e.stopPropagation();
        const searchInput = document.createElement('input');
        searchInput.className = 'lang-search-input';
        searchInput.placeholder = (typeof getTranslation === 'function' && translations[currentLang]?.search)
            ? getTranslation('search')
            : 'Search language...';
        searchInput.type = 'prompt';
        searchInput.autocomplete = 'off';
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.flexDirection = 'column';
        buttonsContainer.style.gap = '8px';
        buttonsContainer.style.maxHeight = '400px';
        function renderButtons(filterText = '') {
            setSafeInnerHTML(buttonsContainer, '');
            const term = filterText.toLowerCase();
            Object.keys(translations).forEach((langKey, index) => {
                const langName = translations[langKey].langName;
                if (term && !langName.toLowerCase().includes(term)) return;
                const btn = document.createElement('button');
                btn.className = 'lang-button';
                btn.textContent = langName;
                if (langKey === currentLang) btn.classList.add('selected');
                btn.style.animation = `mp-fade-in-up .3s ease forwards`;
                btn.style.animationDelay = `${Math.min(index * 30, 200)}ms`;
                btn.style.opacity = '0';
                btn.onclick = async () => {
                    await GM_setValue(LANG_STORAGE_KEY, langKey);
                    window.location.reload();
                };
                buttonsContainer.appendChild(btn);
            });
        }
        renderButtons();
        searchInput.oninput = (e) => renderButtons(e.target.value);
        box.appendChild(searchInput);
        box.appendChild(buttonsContainer);
        setupEnhancedScroll(buttonsContainer);
        overlay.appendChild(box);
        const observer = new MutationObserver(() => {
            if (overlay.classList.contains('visible')) {
                setTimeout(() => searchInput.focus(), 50);
            }
        });
        observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });
        return overlay;
    }
    function showModal(modal) {
        if (!modal) return;
        modal.classList.remove('mp-hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
    }
    function hideModal(modal) {
        if (!modal) return;
        modal.classList.remove('visible');
        setTimeout(() => modal.classList.add('mp-hidden'), 200);
    }
    async function openBackupManager() {
        closeMenu();
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay';
        overlay.id = '__ap_backup_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.style.width = '450px !important';
        box.onclick = e => e.stopPropagation();
        const backupCategories = [
            { key: 'aiSettings',        label: getTranslation('aiSettings'),    desc: getTranslation('aiSettingsDesc'),     storageKey: AI_SETTINGS_KEY,        defaultVal: DEFAULT_AI_CONFIG },
            { key: 'prompts',           label: getTranslation('prompts'),       desc: getTranslation('promptBdesc'),        storageKey: PROMPT_STORAGE_KEY,     defaultVal: [] },
            { key: 'globalFiles',       label: getTranslation('globalFiles'),   desc: getTranslation('globalFilesDesc'),    storageKey: GLOBAL_FILES_KEY,       defaultVal: {} },
            { key: 'theme',             label: getTranslation('theme'),         desc: getTranslation('themeBackupDesc'),    storageKey: THEME_STORAGE_KEY,      defaultVal: DEFAULT_THEME_CONFIG },
            { key: 'importedThemes',    label: getTranslation('customThemes'),  desc: getTranslation('customThemesDesc'),   storageKey: IMPORTED_THEMES_KEY,    defaultVal: {} },
            { key: 'shortcuts',         label: getTranslation('shortcuts'),     desc: getTranslation('shortcutsDesc'),      storageKey: SHORTCUTS_STORAGE_KEY,  defaultVal: DEFAULT_SHORTCUTS },
            { key: 'navConfig',         label: getTranslation('navConfig'),     desc: getTranslation('navConfigDesc'),      storageKey: NAV_STORAGE_KEY,        defaultVal: DEFAULT_NAV_CONFIG },
            { key: 'prediction',        label: getTranslation('prediction'),    desc: getTranslation('predictionDesc'),     storageKey: PREDICTION_STORAGE_KEY, defaultVal: DEFAULT_PREDICTION_CONFIG },
            { key: 'lang',              label: getTranslation('language'),      desc: getTranslation('languageDesc'),       storageKey: LANG_STORAGE_KEY,       defaultVal: 'en' }
        ];
        const htmlStructure = ` <button id="__ap_close_backup" class="mp-modal-close-btn">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('backupRestoreT')}</h2> <div class="mp-backup-section"> <div class="mp-backup-subtitle"> ${ICONS.export} <span>${getTranslation('exportData')}</span> </div> <div class="mp-export-actions" style="border:none; margin-top:0; padding-bottom:0; margin-bottom: 8px;"> <label class="mp-checkbox-wrapper" style="cursor:pointer; user-select:none;"> <input type="checkbox" id="__ap_backup_select_all" class="mp-checkbox" checked> <span style="margin-left:8px;">${getTranslation('selectAll')}</span> </label> </div> <div class="mp-backup-list mp-scroll-wrapper" id="__ap_backup_list"> </div> <div class="mp-backup-actions"> <button id="__ap_do_export_backup" class="save-button">${getTranslation('exportFile')}</button> </div> </div> <div class="mp-backup-divider"></div> <div class="mp-backup-section"> <div class="mp-backup-subtitle"> ${ICONS.import} <span>${getTranslation('importData')}</span> </div> <div class="mp-backup-warning">${getTranslation('importWarning')}</div> <div class="mp-backup-actions" style="justify-content: center;"> <button id="__ap_do_import_backup" class="save-button mp-btn-secondary">${getTranslation('selectFile')}</button> </div> </div> `;
        setSafeInnerHTML(box, htmlStructure);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        const listContainer = box.querySelector('#__ap_backup_list');
        listContainer.style.maxHeight = '220px !important';
        setupEnhancedScroll(listContainer);
        backupCategories.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'mp-backup-item';
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.className = 'mp-checkbox-wrapper';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'mp-checkbox backup-selector';
            checkbox.dataset.key = cat.key;
            checkbox.dataset.storageKey = cat.storageKey;
            checkbox.checked = true;
            checkboxWrapper.appendChild(checkbox);
            const content = document.createElement('div');
            content.className = 'mp-backup-item-content';
            const title = document.createElement('div');
            title.className = 'mp-backup-item-title';
            title.textContent = cat.label;
            const desc = document.createElement('div');
            desc.className = 'mp-backup-item-desc';
            desc.textContent = cat.desc;
            content.appendChild(title);
            content.appendChild(desc);
            item.onclick = (e) => {
                if (e.target.type !== 'checkbox') {
                    checkbox.checked = !checkbox.checked;
                    updateMasterCheckbox();
                }
            };
            checkbox.onchange = updateMasterCheckbox;
            item.appendChild(checkboxWrapper);
            item.appendChild(content);
            listContainer.appendChild(item);
        });
        const masterCb = box.querySelector('#__ap_backup_select_all');
        function updateMasterCheckbox() {
            const cbs = listContainer.querySelectorAll('.backup-selector');
            const allChecked = Array.from(cbs).every(cb => cb.checked);
            const someChecked = Array.from(cbs).some(cb => cb.checked);
            masterCb.checked = allChecked;
            masterCb.indeterminate = someChecked && !allChecked;
        }
        masterCb.onchange = (e) => {
            listContainer.querySelectorAll('.backup-selector').forEach(cb => cb.checked = e.target.checked);
        };
        box.querySelector('#__ap_do_export_backup').onclick = async () => {
            const selected = Array.from(listContainer.querySelectorAll('.backup-selector:checked'));
            if (selected.length === 0) {
                alert(getTranslation('nothingSelected'));
                return;
            }
            const exportData = {
                meta: {
                    scriptName: 'My Prompt',
                    version: '5.2',
                    exportDate: new Date().toISOString()
                },
                data: {}
            };
            for (const cb of selected) {
                const key = cb.dataset.storageKey;
                const val = await GM_getValue(key);
                if (val !== undefined && val !== null) {
                    exportData.data[key] = val;
                }
            }
            const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            const now = new Date();
            const datePart = now.toLocaleDateString(navigator.language).replace(/\//g, '-');
            const timePart = now.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'}).replace(/:/g, '-');
            a.download = `Backup_MyPrompt_${datePart}_${timePart}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
            closeModal(overlay);
        };
        box.querySelector('#__ap_do_import_backup').onclick = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = async (evt) => {
                    try {
                        const importedObj = JSON.parse(evt.target.result);
                        if (!importedObj.data) throw new Error("Invalid format");
                        const keysImported = Object.keys(importedObj.data);
                        if (keysImported.length === 0) throw new Error("Empty file");
                        if (!confirm(getTranslation('confirmImportB', { count: keysImported.length }))) return;
                        for (const key of keysImported) {
                            await GM_setValue(key, importedObj.data[key]);
                        }
                        alert(getTranslation('importSuccess'));
                        closeModal(overlay);
                        location.reload();
                    } catch (err) {
                        alert(getTranslation('errorImporting', { error: err.message }));
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        };
        box.querySelector('#__ap_close_backup').onclick = () => closeModal(overlay);
        overlay.onclick = (e) => { if (e.target === overlay) closeModal(overlay); };
        setTimeout(() => overlay.classList.add('visible'), 10);
    }
    function closeModal(overlay) {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.remove(), 200);
    }
    function setupEnhancedScroll(scrollContainer, customBgVariable = null, borderRadius = null) {
        if (!scrollContainer) return;
        const computedStyle = window.getComputedStyle(scrollContainer);
        const marginBottom = computedStyle.marginBottom;
        const marginTop = computedStyle.marginTop;
        scrollContainer.classList.add('mp-scroll-invisible');
        const wrapper = document.createElement('div');
        wrapper.className = 'mp-scroll-wrapper';
        if (customBgVariable) wrapper.style.setProperty('--mp-scroll-bg', customBgVariable);
        if (borderRadius) wrapper.style.borderRadius = borderRadius;
        wrapper.style.marginBottom = marginBottom;
        wrapper.style.marginTop = marginTop;
        scrollContainer.style.marginBottom = '0';
        scrollContainer.style.marginTop = '0';
        scrollContainer.parentNode.insertBefore(wrapper, scrollContainer);
        wrapper.appendChild(scrollContainer);
        const createArrow = (cls) => {
            const arr = document.createElement('div');
            arr.className = `mp-scroll-arrow ${cls}`;
            setSafeInnerHTML(arr, cls === 'up'
                ? `${ICONS.navUp}`
                : `${ICONS.navDown}`);
            return arr;
        };
        const arrowUp = createArrow('up');
        const arrowDown = createArrow('down');
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        const updateArrows = () => {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
            if (scrollTop > 1) arrowUp.classList.add('visible');
            else arrowUp.classList.remove('visible');
            if (scrollHeight - scrollTop - clientHeight > 1) arrowDown.classList.add('visible');
            else arrowDown.classList.remove('visible');
        };
        arrowUp.onclick = (e) => { e.stopPropagation(); scrollContainer.scrollBy({ top: -100, behavior: 'smooth' }); };
        arrowDown.onclick = (e) => { e.stopPropagation(); scrollContainer.scrollBy({ top: 100, behavior: 'smooth' }); };
        scrollContainer.addEventListener('scroll', updateArrows);
        const obs = new MutationObserver(updateArrows);
        obs.observe(scrollContainer, { childList: true, subtree: true });
        const resizeObs = new ResizeObserver(updateArrows);
        resizeObs.observe(scrollContainer);
        scrollContainer.updateScrollArrows = updateArrows;
        setTimeout(updateArrows, 0);
        return wrapper;
    }
    function moveCursorToEnd(editor) {
        setTimeout(() => {
            try {
                editor.focus();
                if (currentPlatform === 'gemini') {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(editor);
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    editor.scrollTop = editor.scrollHeight;
                }
                else if (currentPlatform === 'mistral') {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(editor);
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    let scrollContainer = editor.parentElement;
                    let i = 0;
                    while (scrollContainer && i < 10) {
                        if (scrollContainer.scrollHeight > scrollContainer.clientHeight) {
                            scrollContainer.scrollTop = scrollContainer.scrollHeight;
                        }
                        scrollContainer = scrollContainer.parentElement;
                        i++;
                    }
                }
                else if (currentPlatform === 'chatgpt' || currentPlatform === 'claude' || currentPlatform === 'grok') {
                    const selection = window.getSelection();
                    const range = document.createRange();
                    range.selectNodeContents(editor);
                    range.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    if (currentPlatform === 'grok') {
                        editor.scrollTop = editor.scrollHeight;
                    } else {
                        const scrollContainer = editor.parentElement;
                        if (scrollContainer) {
                            scrollContainer.scrollTop = scrollContainer.scrollHeight;
                        }
                    }
                }
                else if (currentPlatform === 'googleaistudio' || currentPlatform === 'googleModoIA') {
                    const textLength = editor.value.length;
                    editor.setSelectionRange(textLength, textLength);
                    editor.scrollTop = editor.scrollHeight;
                    editor.blur();
                    editor.focus();
                    editor.setSelectionRange(textLength, textLength);
                }
                else {
                    const textLength = editor.value.length;
                    if (editor.setSelectionRange) {
                        editor.setSelectionRange(textLength, textLength);
                    } else {
                        editor.selectionStart = editor.selectionEnd = textLength;
                    }
                    editor.scrollTop = editor.scrollHeight;
                }
            } catch (e) {}
        }, 10);
    }
    function positionMenu(menu, button) {
        const btnRect = button.getBoundingClientRect();
        const menuHeight = menu.offsetHeight;
        const menuWidth = menu.offsetWidth;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const margin = 8;
        let top, left;
        const spaceBelow = viewportHeight - btnRect.bottom - margin;
        const spaceAbove = btnRect.top - margin;
        if (spaceBelow >= menuHeight) {top = btnRect.bottom + margin;}
        else if (spaceAbove >= menuHeight) {top = btnRect.top - menuHeight - margin;}
        else {top = Math.max(margin, viewportHeight - menuHeight - margin);}
        const spaceRight = viewportWidth - btnRect.left - margin;
        const spaceLeft = btnRect.right - margin;
        if (spaceRight >= menuWidth) {left = btnRect.left;}
        else if (spaceLeft >= menuWidth) {left = btnRect.right - menuWidth;}
        else {left = (viewportWidth - menuWidth) / 2;}
        menu.style.top = `${Math.max(margin, Math.min(top, viewportHeight - menuHeight - margin))}px`;
        menu.style.left = `${Math.max(margin, Math.min(left, viewportWidth - menuWidth - margin))}px`;
    }
    async function refreshMenu(maintainDragIndex = -1) {
        if (!currentMenu) return;
        const existingList = currentMenu.querySelector('#prompt-menu-list-el');
        const previousScrollTop = existingList ? existingList.scrollTop : 0;
        setSafeInnerHTML(currentMenu, '');
        let selectedIndex = -1;
        const searchContainer = document.createElement('div');
        searchContainer.className = 'menu-search-container';
        const searchInput = document.createElement('input');
        searchInput.className = 'menu-search-input';
        searchInput.placeholder = getTranslation('search');
        searchInput.type = 'text';
        searchInput.autocomplete = 'off';
        searchInput.onclick = (e) => e.stopPropagation();
        searchContainer.appendChild(searchInput);
        currentMenu.appendChild(searchContainer);
        const listContainer = document.createElement('div');
        listContainer.className = 'prompt-menu-list';
        listContainer.id = 'prompt-menu-list-el';
        const items = await getAll();
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = getTranslation('noSavedPrompts');
        const updateSelection = () => {
            const visibleRows = Array.from(listContainer.querySelectorAll('.prompt-item-row'))
                .filter(row => row.style.display !== 'none');
            listContainer.querySelectorAll('.prompt-item-row.nav-selected')
                .forEach(row => row.classList.remove('nav-selected'));
            if (selectedIndex >= 0 && selectedIndex < visibleRows.length) {
                const selectedRow = visibleRows[selectedIndex];
                selectedRow.classList.add('nav-selected');
                selectedRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        };
        const handleReorder = async (fromIndex, toIndex) => {
            if (fromIndex === toIndex) return;
            const currentPrompts = await getAll();
            const [moved] = currentPrompts.splice(fromIndex, 1);
            currentPrompts.splice(toIndex, 0, moved);
            await GM_setValue(PROMPT_STORAGE_KEY, currentPrompts);
            refreshMenu(toIndex);
        };
        if (items.length === 0) {
            listContainer.appendChild(emptyState);
        } else {
            emptyState.style.display = 'none';
            emptyState.textContent = getTranslation('noSearchResults');
            listContainer.appendChild(emptyState);
            items.forEach((p, index) => {
                const row = document.createElement('div');
                row.className = 'prompt-item-row';
                row.dataset.searchText = (p.title + ' ' + p.text).toLowerCase();
                row.dataset.index = index;
                const isDragMode = (index === maintainDragIndex);
                if (isDragMode) {
                    row.classList.add('drag-mode');
                    row.draggable = true;
                } else {
                    row.draggable = false;
                }
                row.addEventListener('dragstart', (e) => {
                    e.stopPropagation();
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', index.toString());
                    row.style.opacity = '0.5';
                });
                row.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'move';
                    row.classList.add('nav-selected');
                    const rect = listContainer.getBoundingClientRect();
                    const relY = e.clientY - rect.top;
                    if (relY < 40) listContainer.scrollTop -= 10;
                    else if (relY > rect.height - 40) listContainer.scrollTop += 10;
                });
                row.addEventListener('dragleave', (e) => {
                    e.stopPropagation();
                    row.classList.remove('nav-selected');
                });
                row.addEventListener('dragend', (e) => {
                    e.stopPropagation();
                    row.style.opacity = '1';
                    listContainer.querySelectorAll('.prompt-item-row').forEach(r => r.classList.remove('nav-selected'));
                });
                row.addEventListener('drop', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    row.classList.remove('nav-selected');
                    const rawIndex = e.dataTransfer.getData('text/plain');
                    if (rawIndex) {
                        const fromIdx = parseInt(rawIndex, 10);
                        if (!isNaN(fromIdx)) handleReorder(fromIdx, index);
                    }
                });
                row.onmouseenter = () => {
                    if (maintainDragIndex === -1) {
                        selectedIndex = -1;
                        updateSelection();
                    }
                };
                const titleDiv = document.createElement('div');
                titleDiv.className = 'prompt-title';
                titleDiv.textContent = p.title;
                const executePrompt = () => {
                    if (isDragMode) return;
                    if (currentPlaceholderModal) currentPlaceholderModal.dataset.fromInline = "false";
                    if (p.usePlaceholders) openPlaceholderModal(p, index);
                    else insertPrompt(p, index);
                    closeMenu();
                };
                titleDiv.onclick = (e) => { e.stopPropagation(); executePrompt(); };
                row.executeItem = executePrompt;
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'prompt-actions';
                const createBtn = (cls, icon, title, clickFn) => {
                    const b = document.createElement('button');
                    b.className = `action-btn ${cls}`;
                    setSafeInnerHTML(b, icon);
                    if (typeof createCustomTooltip === 'function') {
                        createCustomTooltip(b, title, 'top');
                    }
                    b.onclick = (e) => { e.stopPropagation(); clickFn(e); };
                    return b;
                };
                if (isDragMode) {
                    const fixTitle = p.isFixed ? getTranslation('unpin') : getTranslation('pin');
                    const fixClass = p.isFixed ? 'unpin' : 'pin';
                    actionsDiv.appendChild(createBtn(fixClass, ICONS.pin, fixTitle, async () => {
                        p.isFixed = !p.isFixed;
                        await update(index, p);
                        refreshMenu(index);
                    }));
                    actionsDiv.appendChild(createBtn('restore', ICONS.saveExit, getTranslation('save'), () => {
                        refreshMenu();
                    }));
                }
                else {
                    actionsDiv.appendChild(createBtn('edit', ICONS.edit, getTranslation('edit'), () => openPromptModal(p, index)));
                    actionsDiv.appendChild(createBtn('delete', ICONS.delete, getTranslation('delete'), () => {
                        if (confirm(getTranslation('confirmDelete', { title: p.title }))) remove(index).then(() => refreshMenu());
                    }));
                    actionsDiv.appendChild(createBtn('drag', ICONS.drag, getTranslation('move'), () => {
                        refreshMenu(index);
                    }));
                    if (p.isFixed) {
                        actionsDiv.appendChild(createBtn('unpin', ICONS.pin, getTranslation('unpin'), async () => {
                            p.isFixed = false;
                            await update(index, p);
                            refreshMenu();
                        }));
                    }
                }
                row.appendChild(titleDiv);
                row.appendChild(actionsDiv);
                listContainer.appendChild(row);
            });
        }
        currentMenu.appendChild(listContainer);
        setupEnhancedScroll(listContainer);
        if (maintainDragIndex !== -1) {
            if (previousScrollTop > 0) {
                listContainer.scrollTop = previousScrollTop;
            } else {
                setTimeout(() => {
                    const el = listContainer.children[maintainDragIndex];
                    if (el) el.scrollIntoView({ block: 'nearest' });
                }, 50);
            }
        } else {
            if (previousScrollTop > 0) {
                listContainer.scrollTop = previousScrollTop;
            }
            setTimeout(() => searchInput.focus(), 50);
        }
        searchInput.oninput = (e) => {
            const term = e.target.value.toLowerCase();
            const rows = listContainer.querySelectorAll('.prompt-item-row');
            let visibleCount = 0;
            selectedIndex = -1;
            rows.forEach(row => {
                if (row.dataset.searchText && row.dataset.searchText.includes(term)) { row.style.display = 'flex'; visibleCount++; }
                else { row.style.display = 'none'; }
            });
            updateSelection();
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        };
        searchInput.onkeydown = (e) => {
            if (e.key === 'Escape') { closeMenu(); return; }
            const visibleRows = Array.from(listContainer.querySelectorAll('.prompt-item-row')).filter(r => r.style.display !== 'none');
            if (visibleRows.length === 0) return;
            if (e.key === 'ArrowDown') { selectedIndex++; if (selectedIndex >= visibleRows.length) selectedIndex = 0; updateSelection(); }
            else if (e.key === 'ArrowUp') { selectedIndex--; if (selectedIndex < 0) selectedIndex = visibleRows.length - 1; updateSelection(); }
            else if (e.key === 'Enter' && selectedIndex >= 0 && visibleRows[selectedIndex].executeItem) visibleRows[selectedIndex].executeItem();
        };
        const footerGrid = document.createElement('div');
        footerGrid.className = 'menu-footer-grid';
        const createFooterBtn = (cls, icon, title, clickFn) => {
            const b = document.createElement('button');
            b.className = `menu-footer-btn ${cls}`;
            setSafeInnerHTML(b, icon);
            if (typeof createCustomTooltip === 'function') {createCustomTooltip(b, title, 'bottom');}
            b.onclick = clickFn;
            return b;
        };
        footerGrid.appendChild(createFooterBtn('btn-export', ICONS.export, getTranslation('export'), (e) => {e.stopPropagation(); exportPrompts();}));
        footerGrid.appendChild(createFooterBtn('btn-add', ICONS.add, getTranslation('newPrompt'), (e) => {e.stopPropagation(); openPromptModal();}));
        footerGrid.appendChild(createFooterBtn('btn-import', ICONS.import, getTranslation('import'), (e) => {e.stopPropagation(); importPrompts();}));
        currentMenu.appendChild(footerGrid);
    }
    function closeMenu() {
        if (currentMenu && currentMenu.classList.contains('visible')) {
            currentMenu.classList.remove('visible');
        }
    }
    function openPlaceholderModal(item, index) {
        const { processedText, ignoreMap, selectMap, inputMap } = parsePromptInternal(item.text);
        if (selectMap.size === 0 && inputMap.size === 0) {
            let finalText = processedText;
            ignoreMap.forEach((val, key) => { finalText = finalText.replace(key, val); });
            const finalItem = { ...item, text: finalText };
            insertPrompt(finalItem, index);
            return;
        }
        if (!currentPlaceholderModal) return;
        const container = document.getElementById('__ap_placeholders_container');
        setSafeInnerHTML(container, '');
        currentPlaceholderModal.dataset.parseData = JSON.stringify({
            processedText,
            ignoreMap: Array.from(ignoreMap.entries()),
            selectMap: Array.from(selectMap.entries()),
            inputMap:  Array.from(inputMap.entries())
        });
        currentPlaceholderModal.dataset.index = index;
        currentPlaceholderModal.dataset.originalItem = JSON.stringify(item);
        inputMap.forEach((data, key) => {
            const labelText = typeof data === 'string' ? data : data.label;
            let contextText = (typeof data === 'object' && data.context) ? data.context : null;
            if (contextText) {
                inputMap.forEach((iData, iKey) => {
                    if (contextText.includes(iKey)) {
                        const iLabel = typeof iData === 'string' ? iData : iData.label;
                        contextText = contextText.split(iKey).join(`[${iLabel}]`);
                    }
                });
                selectMap.forEach((sData, sKey) => {
                    if (contextText.includes(sKey)) {
                        contextText = contextText.split(sKey).join(`[List: ${sData.title}]`);
                    }
                });
                ignoreMap.forEach((_val, iKey) => {
                    if (contextText.includes(iKey)) {
                        contextText = contextText.split(iKey).join('[...Code/Block...]');
                    }
                });
            }
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            formGroup.style.marginBottom = '12px';
            const labelWrapper = document.createElement('div');
            labelWrapper.className = 'mp-label-wrapper';
            const lbl = document.createElement('label');
            lbl.className = 'form-label';
            lbl.textContent = labelText;
            lbl.style.marginBottom = '0';
            labelWrapper.appendChild(lbl);
            if (contextText) {
                const icon = document.createElement('div');
                icon.className = 'mp-help-icon';
                icon.title = getTranslation('clickToShowContext');
                setSafeInnerHTML(icon, `${ICONS.info}`);
                icon.onclick = (e) => { e.stopPropagation(); formGroup.querySelector('.mp-context-bubble').classList.toggle('visible'); };
                labelWrapper.appendChild(icon);
            }
            formGroup.appendChild(labelWrapper);
            if (contextText) {
                const bubble = document.createElement('div');
                bubble.className = 'mp-context-bubble';
                bubble.textContent = contextText;
                formGroup.appendChild(bubble);
            }
            const textarea = document.createElement('textarea');
            textarea.className = 'form-input dynamic-input';
            textarea.dataset.key = key;
            textarea.rows = 1;
            textarea.style.resize = 'vertical';
            textarea.style.height = 'auto';
            textarea.placeholder = data.varName ? data.varName : '';
            textarea.addEventListener('keydown', (event) => {
                if (event.isComposing || event.keyCode === 229) return;
                if (isShortcutPressed(event, 'lineBreak')) {
                    event.preventDefault();
                    event.stopPropagation();
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const val = textarea.value;
                    textarea.value = val.substring(0, start) + "\n" + val.substring(end);
                    textarea.selectionStart = textarea.selectionEnd = start + 1;
                    textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    return;
                }
                if (isShortcutPressed(event, 'saveSend')) {
                    event.preventDefault();
                    event.stopPropagation();
                    document.getElementById('__ap_insert_prompt').click();
                    return;
                }
                if (event.key === 'Enter') {
                    if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    document.getElementById('__ap_insert_prompt').click();
                }
            });
            formGroup.appendChild(textarea);
            container.appendChild(formGroup);
        });
        selectMap.forEach((data, key) => {
            const regionContainer = document.createElement('div');
            regionContainer.dataset.selectKey = key;
            regionContainer.style.marginBottom = '16px';
            let currentOptionGroup = null;
            if (data.options.length > 0 && data.options[0].type !== 'header') {
                const defaultLabel = document.createElement('label');
                defaultLabel.className = 'form-label';
                defaultLabel.textContent = data.title;
                defaultLabel.style.marginBottom = '6px';
                regionContainer.appendChild(defaultLabel);
                currentOptionGroup = document.createElement('div');
                currentOptionGroup.className = 'mp-option-group';
                regionContainer.appendChild(currentOptionGroup);
            }
            data.options.forEach((opt) => {
                if (opt.type === 'header') {
                    if (regionContainer.children.length > 0) {
                        const spacer = document.createElement('div');
                        spacer.style.height = '8px';
                        regionContainer.appendChild(spacer);
                    }
                    const headerLabel = document.createElement('label');
                    headerLabel.className = 'form-label';
                    headerLabel.textContent = opt.label;
                    headerLabel.style.color = 'var(--mp-accent-secondary)';
                    regionContainer.appendChild(headerLabel);
                    currentOptionGroup = document.createElement('div');
                    currentOptionGroup.className = 'mp-option-group';
                    regionContainer.appendChild(currentOptionGroup);
                }
                else {
                    if (!currentOptionGroup) {
                        currentOptionGroup = document.createElement('div');
                        currentOptionGroup.className = 'mp-option-group';
                        regionContainer.appendChild(currentOptionGroup);
                    }
                    const optLabel = document.createElement('label');
                    optLabel.className = 'mp-option-item';
                    if (opt.type === 'id' && opt.id) {
                        const color = getColorForId(opt.id);
                        optLabel.style.cssText = `border-left: 5px solid ${color} !important; padding-left: 8px;`;
                        const idGroupText = typeof getTranslation === 'function' ? getTranslation('idGroup') : 'ID Group';
                        optLabel.title = `${idGroupText}: ${opt.id}`;
                    }
                    else if (opt.type === 'sovereign') {
                        optLabel.style.cssText = `border-left: 5px solid #FF4444 !important; padding-left: 8px;`;
                        optLabel.title = typeof getTranslation === 'function' ? getTranslation('uniqueSelection') : 'Unique Selection';
                    }
                    else {
                        optLabel.style.borderLeft = "5px solid transparent";
                    }
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className = 'mp-checkbox';
                    checkbox.dataset.type = opt.type;
                    if (opt.id) checkbox.dataset.id = opt.id;
                    checkbox.value = opt.value;
                    checkbox.onchange = function() {
                        if (!this.checked) return;
                        const myGroup = this.closest('.mp-option-group');
                        const siblings = Array.from(myGroup.querySelectorAll('input[type="checkbox"]'));
                        const myType = this.dataset.type;
                        const myId = this.dataset.id;
                        siblings.forEach(other => {
                            if (other === this) return;
                            if (myType === 'sovereign') { other.checked = false; return; }
                            if (other.dataset.type === 'sovereign') other.checked = false;
                            if (myType === 'id' && other.dataset.type === 'id' && other.dataset.id === myId) other.checked = false;
                        });
                    };
                    const span = document.createElement('span');
                    span.textContent = opt.label;
                    if (opt.type === 'sovereign') {
                        span.style.fontWeight = '600';
                        span.style.color = 'var(--mp-text-primary)';
                    }
                    optLabel.appendChild(checkbox);
                    optLabel.appendChild(span);
                    currentOptionGroup.appendChild(optLabel);
                }
            });
            container.appendChild(regionContainer);
        });
        showModal(currentPlaceholderModal);
        setTimeout(() => container.querySelector('textarea, input')?.focus(), 100);
    }
    const mpColorPalette = [
        '#4ECDC4', '#45B7D1', '#98D8C8', '#F7DC6F', '#BB8FCE',
        '#82E0AA', '#85C1E9', '#DAF7A6', '#FFC300', '#3498DB',
        '#2ECC71', '#9B59B6', '#F4D03F', '#1ABC9C', '#27AE60',
        '#F39C12', '#16A085', '#34495E', '#F5B041', '#5499C7'
    ];
    function getColorForId(id) {
        if (!id) return 'transparent';
        let str = String(id);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % mpColorPalette.length;
        return mpColorPalette[index];
    }
    function applyChatGLMCustomStyles() {
        const styleId = 'mp-chatglm-left-align';
        if (document.getElementById(styleId)) return;
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        const cssRule = `body {text-align: left !important;}`;
        setSafeInnerHTML(styleElement, cssRule);
        document.head.appendChild(styleElement);
    }
    function applyGrokCustomStyles() {
        const styleId = 'my-prompt-grok-padding';
        if (document.getElementById(styleId)) return;
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        const cssRule = `.tiptap.ProseMirror { padding-right: 70px !important; }`;
        setSafeInnerHTML(styleElement, cssRule);
        document.head.appendChild(styleElement);
    }
    function createInlineMenu() {
        if (inlineMenu) return inlineMenu;
        const menu = document.createElement('div');
        menu.className = 'mp-inline-menu';
        document.body.appendChild(menu);
        inlineMenu = menu;
        return menu;
    }
    function closeInlineMenu() {
        if (inlineMenu) {
            inlineMenu.classList.remove('visible');
            inlineMenuCurrentItems = [];
            inlineMenuIndex = 0;
        }
    }
    function renderInlineList(items, queryRaw) {
        if (!inlineMenu) createInlineMenu();
        setSafeInnerHTML(inlineMenu, '');
        if (items.length === 0) { closeInlineMenu(); return; }
        const scrollWrapper = document.createElement('div');
        scrollWrapper.className = 'mp-inline-list';
        items.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = `mp-inline-item ${idx === inlineMenuIndex ? 'selected' : ''}`;
            div.onmousedown = (e) => {
                e.preventDefault(); e.stopPropagation();
                completeInlinePrompt(item, queryRaw);
            };
            const title = document.createElement('span');
            title.className = 'mp-inline-title';
            title.textContent = item.title;
            div.appendChild(title);
            scrollWrapper.appendChild(div);
        });
        inlineMenu.appendChild(scrollWrapper);
        setupEnhancedScroll(scrollWrapper);
        const selected = scrollWrapper.children[inlineMenuIndex];
        if (selected) selected.scrollIntoView({ block: 'nearest' });
    }
    function updateInlineVisuals() {
        if (!inlineMenu) return;
        const scrollContainer = inlineMenu.querySelector('.mp-inline-list');
        const items = inlineMenu.querySelectorAll('.mp-inline-item');
        if (!scrollContainer) return;
        items.forEach((item, idx) => {
            if (idx === inlineMenuIndex) {
                item.classList.add('selected');
                if (idx === 0) {
                    scrollContainer.scrollTop = 0;
                }
                else if (idx === items.length - 1) {
                    scrollContainer.scrollTop = scrollContainer.scrollHeight;
                }
                else {
                    item.scrollIntoView({ block: 'nearest', behavior: 'auto' });
                }
            } else {
                item.classList.remove('selected');
            }
        });
    }
    function positionInlineMenu(editor) {
        if (!inlineMenu) return;
        const rect = editor.getBoundingClientRect();
        const bottom = window.innerHeight - rect.top + 8;
        const left = rect.left;
        inlineMenu.style.bottom = `${bottom}px`;
        inlineMenu.style.left = `${left}px`;
        if (left + 300 > window.innerWidth) {
             inlineMenu.style.left = 'auto';
             inlineMenu.style.right = '20px';
        }
    }
    function getTextBeforeCaret(editor) {
        if (editor.tagName === 'TEXTAREA' || editor.tagName === 'INPUT') {
            return editor.value.substring(0, editor.selectionEnd);
        }
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            if   (range.startContainer.nodeType === 3) {return range.startContainer.textContent.substring(0, range.startOffset);}
            else {return '';}
        }
        return '';
    }
    async function completeInlinePrompt(item, queryRaw) {
        const editor = document.querySelector(platformSelectors[currentPlatform]);
        if (!editor) return;
        editor.focus();
        const textBefore = getTextBeforeCaret(editor);
        const match = textBefore.match(/(?:^|\s)(#[^\s]*)$/);
        let deleteCount = (match && match[1]) ? match[1].length : ((queryRaw ? queryRaw.length : 0) + 1);
        let savedCursor = null;
        if (editor.tagName === 'TEXTAREA' || editor.tagName === 'INPUT') {
            if (typeof editor.selectionEnd === 'number') {
                 const start = Math.max(0, editor.selectionEnd - deleteCount);
                 const end = editor.selectionEnd;
                 if (editor.setRangeText) {
                     editor.setRangeText('', start, end, 'end');
                 } else {
                     editor.value = editor.value.slice(0, start) + editor.value.slice(end);
                     editor.selectionEnd = start;
                 }
                 savedCursor = { type: 'input', start: editor.selectionEnd, end: editor.selectionEnd };
            }
        } else {
            const sel = window.getSelection();
            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                if (range.startContainer.nodeType === 3) {
                    const currentPos = range.startOffset;
                    const startPos = Math.max(0, currentPos - deleteCount);
                    range.setStart(range.startContainer, startPos);
                    range.setEnd(range.startContainer, currentPos);
                    range.deleteContents();
                    savedCursor = {
                        type: 'contenteditable',
                        node: range.startContainer,
                        offset: range.startOffset
                    };
                } else {
                    for(let i=0; i < deleteCount; i++) document.execCommand('delete', false, null);
                    try {
                        const r = sel.getRangeAt(0);
                        savedCursor = { type: 'contenteditable', node: r.startContainer, offset: r.startOffset };
                    } catch(e) {}
                }
            }
        }
        closeInlineMenu();
        if (item.usePlaceholders) {
             if (currentPlaceholderModal) {
                 currentPlaceholderModal.dataset.fromInline = "true";
                 currentPlaceholderModal._savedCursor = savedCursor;
             }
             openPlaceholderModal(item, -1);
        } else {
            await insertPrompt(item, -1, true, true);
        }
    }
    function setupInlineSuggestion(editor) {
        if (editor.dataset.mpInlineActive) return;
        editor.dataset.mpInlineActive = 'true';
        let ignoreNextEnter = false;
        editor.addEventListener('keydown', (e) => {
            if (inlineMenu && inlineMenu.classList.contains('visible')) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault(); e.stopPropagation();
                    inlineMenuIndex = (inlineMenuIndex + 1) % inlineMenuCurrentItems.length;
                    updateInlineVisuals();
                }
                else if (e.key === 'ArrowUp') {
                    e.preventDefault(); e.stopPropagation();
                    inlineMenuIndex = (inlineMenuIndex - 1 + inlineMenuCurrentItems.length) % inlineMenuCurrentItems.length;
                    updateInlineVisuals();
                }
                else if (e.key === 'Enter' || e.key === 'Tab') {
                    if (inlineMenuCurrentItems[inlineMenuIndex]) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        ignoreNextEnter = true;
                        const text = getTextBeforeCaret(editor);
                        const match = text.match(/(?:^|\s)(#[^\s]*)$/);
                        const rawQuery = match ? match[1] : '';
                        completeInlinePrompt(inlineMenuCurrentItems[inlineMenuIndex], rawQuery);
                    }
                }
                else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeInlineMenu();
                }
            }
        }, true);
        editor.addEventListener('keypress', (e) => {
            if (ignoreNextEnter && (e.key === 'Enter' || e.key === 'Tab')) {
                e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            }
        }, true);
        editor.addEventListener('keyup', (e) => {
            if (ignoreNextEnter && (e.key === 'Enter' || e.key === 'Tab')) {
                e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                ignoreNextEnter = false;
            }
        }, true);
        editor.addEventListener('input', debounce(async (e) => {
            const textBefore = getTextBeforeCaret(editor);
            const match = textBefore.match(/(?:^|\s)#([^\s]*)$/);
            if (match) {
                const rawQuery = match[1];
                const cleanQuery = rawQuery.toLowerCase().replace(/-/g, ' ');
                const allPrompts = await getAll();
                inlineMenuCurrentItems = allPrompts.filter(p => {
                    const title = p.title.toLowerCase();
                    return title.includes(cleanQuery);
                }).slice(0, 8);
                if (inlineMenuCurrentItems.length > 0) {
                    inlineMenuIndex = 0;
                    renderInlineList(inlineMenuCurrentItems, rawQuery);
                    positionInlineMenu(editor);
                    if (inlineMenu) inlineMenu.classList.add('visible');
                } else {
                    closeInlineMenu();
                }
            } else {
                closeInlineMenu();
            }
        }, 100));
        document.addEventListener('click', (e) => {
            if (inlineMenu && inlineMenu.classList.contains('visible') && !inlineMenu.contains(e.target) && e.target !== editor) {
                closeInlineMenu();
            }
        });
    }
    function loadPredictionConfig() {
        currentPredictionConfig = GM_getValue(PREDICTION_STORAGE_KEY, DEFAULT_PREDICTION_CONFIG);
    }
    async function savePredictionConfig(config) {
        currentPredictionConfig = config;
        await GM_setValue(PREDICTION_STORAGE_KEY, config);
    }
    function attachSmartEditorLogic(textarea) {
        if (!textarea) return;
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
            '"': '"',
            "'": "'",
            '`': '`',
            '<': '>'
        };
        const closePairs = new Set(Object.values(pairs));
        const closeVarPrediction = () => {
            varMemory.active = false;
            varMemory.list = [];
            varMemory.typed = '';
        };
        textarea.addEventListener('keydown', function(e) {
            if (!currentPredictionConfig.enabled) return;
            if (e.isComposing || e.keyCode === 229) return;
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const val = this.value;
            const char = e.key;
            const hasSelection = start !== end;
            if (e.key === 'Backquote' && e.shiftKey) {
                e.preventDefault();
                if (hasSelection) {
                    const selectedText = val.substring(start, end);
                    this.setRangeText('`' + selectedText + '`', start, end, 'select');
                    this.selectionStart = start + 1;
                    this.selectionEnd = start + 1 + selectedText.length;
                } else {
                    const textToInsert = '``';
                    this.setRangeText(textToInsert, start, end, 'end');
                    this.selectionStart = start + 1;
                    this.selectionEnd = start + 1;
                }
                return;
            }
            if (varMemory.active) {
                if (start < varMemory.startPos) {
                    closeVarPrediction();
                }
                else {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        if (varMemory.list.length <= 1) return;
                        if (e.key === 'ArrowUp') {
                            varMemory.index = (varMemory.index + 1) % varMemory.list.length;
                        }
                        else {
                            varMemory.index = (varMemory.index - 1 + varMemory.list.length) % varMemory.list.length;
                        }
                        const suggestion = varMemory.list[varMemory.index];
                        const textToInsert = suggestion.substring(varMemory.typed.length);
                        this.setRangeText(textToInsert, varMemory.startPos + varMemory.typed.length, end, 'select');
                        return;
                    }
                    if (['Enter', 'Tab', 'ArrowRight'].includes(e.key)) {
                        e.preventDefault();
                        this.selectionStart = end;
                        this.selectionEnd = end;
                        closeVarPrediction();
                        return;
                    }
                    if (e.key === 'Escape') {
                        e.preventDefault();
                        this.setRangeText('', varMemory.startPos + varMemory.typed.length, end, 'end');
                        closeVarPrediction();
                        return;
                    }
                }
            }
            if (char === '#' && hasSelection) {
                macroMemory.text = val.substring(start, end);
                macroMemory.startIndex = start;
                macroMemory.active = true;
                macroMemory.hashCount = 1;
                return;
            }
            if (macroMemory.active) {
                if (start !== macroMemory.startIndex + macroMemory.hashCount) {
                    macroMemory.active = false;
                    macroMemory.text = '';
                } else {
                    if (char === '#') {
                        macroMemory.hashCount++;
                        return;
                    }
                    const commandChar = char ? char.toLowerCase() : '';
                    if (['s', 'i'].includes(commandChar)) {
                        e.preventDefault();
                        const hashes = '#'.repeat(macroMemory.hashCount);
                        let replacement = '';
                        if (commandChar === 's') {
                            replacement = `${hashes}start\n${macroMemory.text}\n${hashes}end`;
                        }
                        else if (commandChar === 'i') {
                            replacement = `${hashes}ignore\n${macroMemory.text}\n${hashes}end`;
                        }
                        this.setRangeText(replacement, macroMemory.startIndex, start, 'select');
                        macroMemory.active = false;
                        macroMemory.text = '';
                        return;
                    }
                    if (!['Shift', 'Control', 'Alt', 'CapsLock', 'Meta'].includes(e.key)) {
                        macroMemory.active = false;
                        macroMemory.text = '';
                    }
                }
            }
            if (hasSelection && pairs[char]) {
                e.preventDefault();
                const selectedText = val.substring(start, end);
                const textToInsert = char + selectedText + pairs[char];
                this.setRangeText(textToInsert, start, end, 'select');
                this.selectionStart = start + 1;
                this.selectionEnd = start + 1 + selectedText.length;
                return;
            }
            if (!hasSelection && closePairs.has(char) && val[start] === char) {
                e.preventDefault();
                this.selectionStart = start + 1;
                this.selectionEnd = start + 1;
                return;
            }
            if (e.key === 'Backspace' && !hasSelection && start > 0) {
                if (varMemory.active) {
                } else {
                    const prevChar = val[start - 1];
                    const nextChar = val[start];
                    if (pairs[prevChar] === nextChar) {
                        e.preventDefault();
                        this.setRangeText('', start - 1, start + 1, 'end');
                    }
                }
                return;
            }
            if (!hasSelection && pairs[char]) {
                if (varMemory.active) return;
                if (char === '`' && !e.shiftKey) {
                    e.preventDefault();
                    const textToInsert = '``';
                    this.setRangeText(textToInsert, start, end, 'end');
                    this.selectionStart = start + 1;
                    this.selectionEnd = start + 1;
                    return;
                }
                if (char !== '`') {
                    e.preventDefault();
                    const textToInsert = char + pairs[char];
                    this.setRangeText(textToInsert, start, end, 'end');
                    this.selectionStart = start + 1;
                    this.selectionEnd = start + 1;
                    return;
                }
            }
        });
        textarea.addEventListener('input', function(e) {
            if (!currentPredictionConfig.enabled) return;
            if (e.isComposing || (e.inputType && e.inputType.startsWith('insertComposition'))) return;
            if (macroMemory.active) return;
            const cursor = this.selectionStart;
            const text = this.value;
            const char = e.data;
            if (char === '$') {
                const textBefore = text.substring(0, cursor);
                const varRegex = /\[[^\]]*?=\s*(\$[\w]+)\]/g;
                let match;
                const foundVars = new Set();
                const varsOrdered = [];
                while ((match = varRegex.exec(textBefore)) !== null) {
                    foundVars.add(match[1]);
                    varsOrdered.push(match[1]);
                }
                if (varsOrdered.length > 0) {
                    const uniqueVars = [...new Set(varsOrdered.reverse())];
                    varMemory.active = true;
                    varMemory.list = uniqueVars;
                    varMemory.index = 0;
                    varMemory.startPos = cursor - 1;
                    varMemory.typed = '$';
                    const suggestion = uniqueVars[0];
                    const suggestionName = suggestion.substring(1);
                    this.setRangeText(suggestionName, cursor, cursor, 'select');
                }
                return;
            }
            if (varMemory.active && e.inputType !== 'deleteContentBackward') {
                varMemory.typed += char;
                const matches = varMemory.list.filter(v => v.startsWith(varMemory.typed));
                if (matches.length > 0) {
                    varMemory.index = 0;
                    const firstMatch = matches[0];
                    const textToInsert = firstMatch.substring(varMemory.typed.length);
                    this.setRangeText(textToInsert, cursor, cursor, 'select');
                }
                else {closeVarPrediction();}
                return;
            }
            if (e.inputType === 'deleteContentBackward' && varMemory.active) {
                if (cursor <= varMemory.startPos) {
                    closeVarPrediction();
                }
                else {varMemory.typed = text.substring(varMemory.startPos, cursor);closeVarPrediction();}
                return;
            }
            const commandChar = char ? char.toLowerCase() : '';
            if (['s', 'e', 'i'].includes(commandChar)) {
                const prefixMatch = text.substring(0, cursor).match(/(^|[\s\n])(#+)([seiSEI])$/);
                if (prefixMatch) {
                    const hashes = prefixMatch[2];
                    const type = prefixMatch[3].toLowerCase();
                    let replacement = '';
                    if (type === 's') replacement = `${hashes}start\n\n${hashes}end`;
                    else if (type === 'i') replacement = `${hashes}ignore\n\n${hashes}end`;
                    else if (type === 'e') replacement = `${hashes}end`;
                    const triggerLength = hashes.length + 1;
                    const replaceStart = cursor - triggerLength;
                    this.setRangeText(replacement, replaceStart, cursor, 'select');
                    const newCursorPos = replaceStart + (type === 'e' ? replacement.length : (hashes.length + (type === 's' ? 5 : 6) + 1));
                    this.selectionStart = newCursorPos;
                    this.selectionEnd = newCursorPos;
                    return;
                }
            }
        });
    }
    function loadShortcuts() {
        const saved = GM_getValue(SHORTCUTS_STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                currentShortcuts = { ...DEFAULT_SHORTCUTS, ...parsed };
                Object.keys(DEFAULT_SHORTCUTS).forEach(k => {
                    if(currentShortcuts[k]) {
                        currentShortcuts[k].descKey = DEFAULT_SHORTCUTS[k].descKey;
                    }
                });
            } catch (e) { console.error(e); }
        }
    }
    function saveShortcutsConfig() {
        GM_setValue(SHORTCUTS_STORAGE_KEY, JSON.stringify(currentShortcuts));
    }
    function isShortcutPressed(event, id) {
        if (!currentShortcuts[id]) return false;
        const config = currentShortcuts[id].keys.toUpperCase().split('+');
        const key = config[config.length - 1];
        const reqCtrl  = config.includes('CTRL');
        const reqAlt   = config.includes('ALT');
        const reqShift = config.includes('SHIFT');
        if (event.ctrlKey !== reqCtrl) return false;
        if (event.altKey !== reqAlt) return false;
        if (event.shiftKey !== reqShift) return false;
        const code = event.code ? event.code.toUpperCase() : '';
        const eventKey = event.key ? event.key.toUpperCase() : '';
        if (key.length === 1) {
            return eventKey === key || code === `KEY${key}` || code === `DIGIT${key}`;
        } else {
            return eventKey === key || code === key;
        }
    }
    function getProvider(modelName) {
        if (modelName.startsWith('openrouter|'))    return 'openrouter';
        if (modelName.startsWith('LongCat'))        return 'longcat';
        if (modelName.startsWith('gemini'))         return 'gemini';
        return 'groq';
    }
    function getOpenAIEndpoint(provider) {
        switch (provider) {
            case 'openrouter':  return 'https://openrouter.ai/api/v1/chat/completions';
            case 'longcat':     return 'https://api.longcat.chat/openai/v1/chat/completions';
            case 'groq':        return 'https://api.groq.com/openai/v1/chat/completions';
            default: throw new Error(`Unknown provider: ${provider}`);
        }
    }
    function getRotatingApiKey(provider) {
        let rawKeyString, indexKey;
        if (provider === 'openrouter') {rawKeyString = currentAIConfig.apiKeyOpenRouter; indexKey = 'keyIndexOpenRouter';}
        else if (provider === 'longcat') {rawKeyString = currentAIConfig.apiKeyLongcat; indexKey = 'keyIndexLongcat';}
        else if (provider === 'groq') {rawKeyString = currentAIConfig.apiKeyGroq; indexKey = 'keyIndexGroq';}
        else {rawKeyString = currentAIConfig.apiKeyGemini; indexKey = 'keyIndexGemini';}
        const keys = rawKeyString.split(/[,\s]+/).filter(k => k.trim() !== '');
        if (keys.length === 0) return null;
        let currentIndex = currentAIConfig[indexKey] || 0;
        if (currentIndex >= keys.length) currentIndex = 0;
        const selectedKey = keys[currentIndex];
        const nextIndex = (currentIndex + 1) % keys.length;
        currentAIConfig[indexKey] = nextIndex;
        saveAIConfig({ [indexKey]: nextIndex });
        return selectedKey;
    }
    async function loadAIConfig() {
        const saved = await GM_getValue(AI_SETTINGS_KEY, DEFAULT_AI_CONFIG);
        currentAIConfig = { ...DEFAULT_AI_CONFIG, ...saved };
    }
    async function saveAIConfig(newConfig) {
        currentAIConfig = { ...currentAIConfig, ...newConfig };
        await GM_setValue(AI_SETTINGS_KEY, currentAIConfig);
    }
    async function callAI_API(promptText) {
        const model = currentAIConfig.model;
        const provider = getProvider(model);
        const apiKey = getRotatingApiKey(provider);
        const systemInstruction = currentAIConfig.systemPrompt.trim() !== ''
            ? currentAIConfig.systemPrompt
            : DEFAULT_AI_CONFIG.systemPrompt;
        if (!apiKey) throw new Error(getTranslation('missingKeyError'));
        if (provider === 'gemini') {
            return new Promise((resolve, reject) => {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
                GM_xmlhttpRequest({
                    method: 'POST',
                    url: url,
                    headers: { 'Content-Type': 'application/json' },
                    data: JSON.stringify({
                        contents: [{ parts: [{ text: promptText }] }],
                        systemInstruction: { parts: [{ text: systemInstruction }] }
                    }),
                    onload: (response) => {
                        try {
                            const data = JSON.parse(response.responseText);
                            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                                resolve(data.candidates[0].content.parts[0].text.trim());
                            } else {
                                reject(new Error(data.error?.message || getTranslation('invalidResponse')));
                            }
                        } catch (e) { reject(new Error(getTranslation('processError'))); }
                    },
                    onerror: () => reject(new Error(getTranslation('connectionError')))
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                const url = getOpenAIEndpoint(provider);
                const actualModel = provider === 'openrouter' ? model.replace('openrouter|', '') : model;
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                };
                if (provider === 'openrouter') {
                    headers['HTTP-Referer'] = window.location.origin;
                }
                GM_xmlhttpRequest({
                    method: 'POST',
                    url: url,
                    headers: headers,
                    data: JSON.stringify({
                        model: actualModel,
                        messages: [
                            { role: "system", content: systemInstruction },
                            { role: "user", content: promptText }
                        ],
                        temperature: 0.7
                    }),
                    onload: (response) => {
                        if (response.status === 200) {
                            try {
                                const data = JSON.parse(response.responseText);
                                if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                                    resolve(data.choices[0].message.content.trim());
                                } else {
                                    reject(new Error(getTranslation('invalidResponse')));
                                }
                            } catch (e) {
                                console.error(e);
                                reject(new Error(getTranslation('processError')));
                            }
                        } else {
                            try {
                                const errData = JSON.parse(response.responseText);
                                reject(new Error(`Error ${provider} (${response.status}): ${errData.error?.message || response.statusText}`));
                            } catch(e) {
                                reject(new Error(`Error ${provider} (${response.status})`));
                            }
                        }
                    },
                    onerror: (err) => {
                        console.error(err);
                        reject(new Error(getTranslation('connectionError')));
                    }
                });
            });
        }
    }
    function showEnhanceLoadingOverlay() {
        if (document.getElementById('__ap_enhance_loading')) return;
        const overlay = document.createElement('div');
        overlay.id = '__ap_enhance_loading';
        overlay.className = 'mp-overlay';
        overlay.style.zIndex = '100000';
        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';
        content.style.gap = '15px';
        content.style.color = '#ffffff';
        const iconWrapper = document.createElement('div');
        iconWrapper.style.width = '50px';
        iconWrapper.style.height = '50px';
        setSafeInnerHTML(iconWrapper, ICONS.loading);
        const textNode = document.createElement('div');
        textNode.style.fontSize = '16px';
        textNode.style.fontWeight = '500';
        textNode.textContent = getTranslation('enhancingPrompt');
        content.appendChild(iconWrapper);
        content.appendChild(textNode);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
        requestAnimationFrame(() => {overlay.classList.add('visible');});
    }
    function hideEnhanceLoadingOverlay() {
        const overlay = document.getElementById('__ap_enhance_loading');
        if (overlay) {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 300);
        }
    }
    async function robustClearEditor(editor) {
        editor.focus();
        try {
            document.execCommand('selectAll', false, null);
            await new Promise(r => setTimeout(r, 10));
            document.execCommand('delete', false, null);
        } catch (e) {
            if (editor.contentEditable === 'true') {
                const range = document.createRange();
                range.selectNodeContents(editor);
                const sel = window.getSelection();
                if (sel) {
                    sel.removeAllRanges();
                    sel.addRange(range);
                    document.execCommand('delete', false, null);
                }
            }
        }
        await new Promise(r => setTimeout(r, 50));
        const currentVal = (editor.value !== undefined) ? editor.value : (editor.textContent || '');
        const isQuill = editor.matches('.ql-editor');
        const isEmptyEnough = currentVal.trim().length === 0 || (isQuill && currentVal.trim() === '');
        if (!isEmptyEnough) {
            if (editor.tagName === 'TEXTAREA' || editor.tagName === 'INPUT') {
                const proto = editor.tagName === 'TEXTAREA'
                    ? window.HTMLTextAreaElement.prototype
                    : window.HTMLInputElement.prototype;
                const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value").set;
                if (nativeSetter) nativeSetter.call(editor, '');
                else editor.value = '';
            }
            else {
                if (isQuill) {
                    editor.innerHTML = '<p><br></p>';
                } else {
                    editor.innerHTML = '';
                }
            }
            editor.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
            editor.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (editor.contentEditable === 'true') {
            editor.focus();
            const range = document.createRange();
            const sel = window.getSelection();
            if (editor.firstChild) {
                range.selectNode(editor.firstChild);
                range.collapse(true);
            } else {
                range.selectNodeContents(editor);
                range.collapse(true);
            }
            if (sel) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
        } else {
            editor.focus();
        }
    }
    async function handleInstantPageEnhancement() {
        if (!currentPlatform || !platformSelectors[currentPlatform]) return;
        const editor = document.querySelector(platformSelectors[currentPlatform]);
        if (!editor) return;
        let currentText = '';
        if (editor.tagName === 'TEXTAREA' || editor.tagName === 'INPUT') {
            currentText = editor.value;
        } else {
            currentText = editor.innerText || editor.textContent || '';
        }
        if (!currentText || currentText.trim().length === 0) {
            alert(getTranslation('noTextToEnhance'));
            return;
        }
        const provider = getProvider(currentAIConfig.model);
        const apiKey = getRotatingApiKey(provider);
        if (!apiKey) {
            showAPIKeyRequiredModal();
            return;
        }
        showEnhanceLoadingOverlay();
        try {
            const enhancedText = await callAI_API(currentText);
            hideEnhanceLoadingOverlay();
            const targetProxy = {
                get value() { return ''; },
                set value(newValue) {
                    (async () => {
                        await robustClearEditor(editor);
                        setTimeout(() => {
                            editor.focus();
                            insertPrompt({ text: newValue }, -1, true, false);
                        }, 200);
                    })();
                }
            };
            showAIDiffModal(currentText, enhancedText, targetProxy);
        } catch (error) {
            hideEnhanceLoadingOverlay();
            if (error.message && (error.message.includes('API Key') || error.message.includes('Missing'))) {
                showAPIKeyRequiredModal();
            } else {
                alert(getTranslation('aiErrorPrefix') + error.message);
            }
        }
    }
    function loadNavConfig() {
        const saved = GM_getValue(NAV_STORAGE_KEY);
        if (saved) {
            try {
                currentNavConfig = { ...DEFAULT_NAV_CONFIG, ...JSON.parse(saved) };
            } catch (e) { console.error(e); }
        }
        if (currentNavConfig.filterMode) {
            navFilterMode = currentNavConfig.filterMode;
        }
        setTimeout(restoreNavState, 1500);
    }
    function saveNavConfig(config) {
        currentNavConfig = config;
        GM_setValue(NAV_STORAGE_KEY, JSON.stringify(config));
    }
    function saveNavState(index, text) {
        if (index < 0) return;
        let sessionHistory = {};
        const raw = sessionStorage.getItem(NAV_SESSION_KEY);
        if (raw) {
            try {
                sessionHistory = JSON.parse(raw);
                if (sessionHistory.textPreview && !sessionHistory[index]) {
                    sessionHistory = {};
                }
            } catch (e) { sessionHistory = {}; }
        }
        sessionHistory[index] = {
            index: index,
            textPreview: text ? text.substring(0, 50) : '',
            timestamp: Date.now()
        };
        sessionStorage.setItem(NAV_SESSION_KEY, JSON.stringify(sessionHistory));
        currentNavIndex = index;
    }
    function restoreNavState() {
        const raw = sessionStorage.getItem(NAV_SESSION_KEY);
        if (!raw) return;
        try {
            const sessionHistory = JSON.parse(raw);
            scanMessages();
            if (!cachedMessages || cachedMessages.length === 0) return;
            let lastVisitedEntry = null;
            let maxTime = 0;
            Object.values(sessionHistory).forEach(entry => {
                if (entry.timestamp > maxTime) {
                    maxTime = entry.timestamp;
                    lastVisitedEntry = entry;
                }
            });
            if (lastVisitedEntry) {
                let foundIndex = cachedMessages.findIndex(m =>
                    m.fullText.includes(lastVisitedEntry.textPreview) ||
                    lastVisitedEntry.textPreview.includes(m.preview)
                );
                if (foundIndex === -1 && cachedMessages[lastVisitedEntry.index]) {
                    foundIndex = lastVisitedEntry.index;
                }
                if (foundIndex !== -1) currentNavIndex = foundIndex;
            }
        } catch (e) {}
    }
    function getMessageSelectors() {
        switch (currentPlatform) {
            case 'googleaistudio':  return { user: { item: 'div[data-turn-role="User"]',                                text: '.user-chunk'                                                 }, ai: { item: 'div[data-turn-role="Model"]', text: 'ms-prompt-chunk > ms-text-chunk'                                   }};
            case 'chatgpt':         return { user: { item: 'div[class*="user-message-bubble"]',                         text: 'div[data-message-author-role="user"] .whitespace-pre-wrap'   }, ai: { item: 'div[data-message-author-role="assistant"]',             text: '.markdown'                               }};
            case 'gemini':          return { user: { item: 'span[class^="user-query-bubble"]',                          text: '.horizontal-container .query-text p'                         }, ai: { item: 'div[class^="markdown markdown-main-panel"]',            text: 'p'                                       }};
            case 'grok':            return { user: { item: '.message-bubble.bg-surface-l1',                             text: '.break-words'                                                }, ai: { item: '.items-start .response-content-markdown',               text: 'p.break-words'                           }};
            case 'qwen':            return { user: { item: 'div.chat-user-message',                                     text: 'p.user-message-content'                                      }, ai: { item: '.response-message-content.t2t',                         text: '.qwen-markdown-text'                     }};
            case 'zai':             return { user: { item: '.user-message .rounded-xl.whitespace-pre-wrap',             text: '.user-message .rounded-xl.whitespace-pre-wrap'               }, ai: { item: '.chat-assistant',                                       text: '.markdown-prose > p'                     }};
            case 'deepseek':        return { user: { item: '.ds-message:not(:has(.ds-markdown)) > div:first-child',     text: '.ds-message:not(:has(.ds-markdown)) > div:first-child'       }, ai: { item: '.ds-message:has(.ds-markdown)',                         text: '.ds-markdown'                            }};
            case 'kimi':            return { user: { item: '.chat-content-item-user .segment-content',                  text: '.user-content'                                               }, ai: { item: '.segment-assistant .segment-content-box',               text: '.markdown'                               }};
            case 'claude':          return { user: { item: 'div.inline-flex:has([data-testid="user-message"])',         text: '[data-testid="user-message"] p'                              }, ai: { item: '.font-claude-response:has(.standard-markdown)',         text: '.standard-markdown'                      }};
            case 'perplexity':      return { user: { item: 'div.group\\/title',                                         text: 'span.select-text'                                            }, ai: { item: '[id^="markdown-content-"]',                             text: '.prose'                                  }};
            case 'copilot':         return { user: { item: 'div:has(> div[data-content="user-message"])',               text: 'div[data-content="user-message"]'                            }, ai: { item: 'div[data-testid="ai-message"]',                         text: 'div[id*="-content-"]'                    }};
            case 'mistral':         return { user: { item: 'div[data-message-author-role="user"] .rounded-3xl',         text: '.select-text span'                                           }, ai: { item: 'div:has(> [data-testid="text-message-part"])',          text: '[data-testid="text-message-part"]'       }};
            case 'googleModoIA':    return { user: { item: '.tbIZh.wQN2Jd',                                             text: 'span[role="heading"]'                                        }, ai: { item: 'div[data-subtree="aimc"]',                              text: 'div[data-subtree="aimfl"]'               }};
            case 'yuanbao':         return { user: { item: '.agent-chat__bubble--human .agent-chat__bubble__content',   text: '.hyc-content-text'                                           }, ai: { item: '.agent-chat__bubble--ai .agent-chat__bubble__content',  text: '.hyc-common-markdown'                    }};
            case 'poe':             return { user: { item: '.Message_rightSideMessageBubble__ioa_i',                    text: '.Message_selectableText__SQ8WH p'                            }, ai: { item: '.Message_leftSideMessageBubble__VPdk6',                 text: '.Message_selectableText__SQ8WH p'        }};
            case 'chatglm':         return { user: { item: '.question .question-txt',                                   text: '.question-txt span'                                          }, ai: { item: '.panel .answer-content',                                text: '.markdown-body'                          }};
            case 'notebooklm':      return { user: { item: '.from-user-container',                                      text: '.message-text-content p'                                     }, ai: { item: '.to-user-container',                                    text: '.message-text-content'                   }};
            case 'doubao':          return { user: { item: 'div.justify-end > div[data-testid="message_text_content"]', text: 'div.justify-end > div[data-testid="message_text_content"]'   }, ai: { item: '[data-testid="receive_message"]',                       text: '[data-testid="message_text_content"]'    }};
            case 'arena':           return { user: { item: '.bg-surface-raised',                                        text: '.prose p'                                                    }, ai: { item: 'div.no-scrollbar.flex-1',                               text: '.prose p'                                }};
            case 'ernie':           return { user: { item: '#question_text_id',                                         text: '#question_text_id span'                                      }, ai: { item: '#answer_text_id',                                       text: '.custom-html p'                          }};
            case 'indicArena':      return { user: { item: 'div.bg-orange-500.text-white.rounded-lg',                   text: 'p.whitespace-pre-wrap'                                       }, ai: { item: 'div.rounded-lg.bg-white.w-full.flex.flex-col.border',   text: 'div.prose'                               }};
            case 'nvidiaNim':       return { user: { item: '[data-testid="chat-bubble-prompt"]',                        text: '.prose p'                                                    }, ai:   null };
            default: return { user: { item: '[data-message-author-role="user"], [data-role="user"], [data-author="user"], .user-message, .user-query, .human-message, .prompt', text: ['.prose p', '.whitespace-pre-wrap', '.message-content p', '.text-content', 'p'] }, ai: null, reverse: false};
        }
    }
    function getSafeText(el, selectors) {
        if (!el) return '';
        try {
            let textEl = null;
            if (Array.isArray(selectors)) {
                for (const sel of selectors) {
                    textEl = el.querySelector(sel);
                    if (textEl) break;
                }
            }
            else {textEl = el.querySelector(selectors);}
            return textEl ? (textEl.innerText || textEl.textContent || '') : (el.innerText || el.textContent || '');
        } catch(e) { return ''; }
    }
    function scanMessages() {
        if (NO_NAV_PLATFORMS.includes(currentPlatform)) return [];
        const selConfig = getMessageSelectors();
        const previousCache = [...(cachedMessages || [])];
        let rawMessages = [];
        if (selConfig.user) {
            document.querySelectorAll(selConfig.user.item).forEach(el => {
                rawMessages.push({
                    element: el,
                    type: 'user',
                    textSel: selConfig.user.text,
                    topPos: el.getBoundingClientRect().top + window.scrollY
                });
            });
        }
        if (selConfig.ai) {
            document.querySelectorAll(selConfig.ai.item).forEach(el => {
                rawMessages.push({
                    element: el,
                    type: 'ai',
                    textSel: selConfig.ai.text,
                    topPos: el.getBoundingClientRect().top + window.scrollY
                });
            });
        }
        rawMessages.sort((a, b) => a.topPos - b.topPos);
        if (selConfig.reverse) rawMessages.reverse();
        const filtered = rawMessages.filter(msg => {
            if (navFilterMode === 'all') return true;
            return msg.type === navFilterMode;
        });
        cachedMessages = filtered.map((msg, index) => {
            let currentText = getSafeText(msg.element, msg.textSel).replace(/\s+/g, ' ').trim();
            const prevItem = previousCache[index];
            if ((!currentText || currentText.length === 0) && prevItem && prevItem.fullText && prevItem.type === msg.type) {currentText = prevItem.fullText;}
            const preview = currentText.length > 35 ? currentText.substring(0, 35) + '...' : currentText;
            return {element: msg.element, index: index, preview: preview, fullText: currentText, type: msg.type};
        });
        return cachedMessages;
    }
    function getVisualIndex() {
        if (!cachedMessages || cachedMessages.length === 0) return -1;
        const viewCenter = window.scrollY + (window.innerHeight / 2);
        let closestIndex = 0;
        let minDistance = Infinity;
        cachedMessages.forEach((msg, idx) => {
            const rect = msg.element.getBoundingClientRect();
            if (rect.height === 0 && rect.width === 0) return;
            const elementCenter = window.scrollY + rect.top + (rect.height / 2);
            const distance = Math.abs(viewCenter - elementCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
            }
        });
        return closestIndex;
    }
    function getScrollParent(element) {
        if (!element) return document.documentElement;
        let parent = element.parentElement;
        while (parent) {
            const style = window.getComputedStyle(parent);
            if (parent.scrollHeight > parent.clientHeight &&
               (style.overflowY === 'auto' || style.overflowY === 'scroll')) {
                return parent;
            }
            parent = parent.parentElement;
        }
        return document.documentElement;
    }
    function scrollToMessage(index) {
        if (!cachedMessages || cachedMessages.length === 0) return;
        if (index < 0) index = 0;
        if (index >= cachedMessages.length) index = cachedMessages.length - 1;
        const targetMsg = cachedMessages[index];
        if (targetMsg && targetMsg.element) {
            if (!document.body.contains(targetMsg.element)) {
                scanMessages();
                const newIdx = cachedMessages.findIndex(m => m.fullText === targetMsg.fullText);
                if (newIdx !== -1) {
                    scrollToMessage(newIdx);
                    return;
                }
            }
            try {
                if (currentPlatform === 'kimi') {
                    targetMsg.element.style.scrollMarginTop = '30vh'; 
                    targetMsg.element.scrollIntoView({
                        behavior: 'auto',
                        block: 'start',
                        inline: 'nearest'
                    });
                    setTimeout(() => {
                        highlightElement(targetMsg.element);
                    }, 50);
                    saveNavState(index, targetMsg.fullText);
                    if (navListPopup && navListPopup.classList.contains('active')) {
                        updateMenuHighlight(index);
                    }
                    return;
                }
                const container = getScrollParent(targetMsg.element);
                const elRect = targetMsg.element.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const currentScrollTop = container === document.documentElement ? window.scrollY : container.scrollTop;
                const relativeTop = elRect.top - containerRect.top;
                const visualOffset = container.clientHeight * 0.30; 
                const desiredScrollTop = currentScrollTop + relativeTop - visualOffset;
                if (container === document.documentElement) {
                    window.scrollTo({ top: desiredScrollTop, behavior: 'smooth' });
                } else {
                    container.scrollTo({ top: desiredScrollTop, behavior: 'smooth' });
                }
                highlightElement(targetMsg.element);
                saveNavState(index, targetMsg.fullText);
                if (navListPopup && navListPopup.classList.contains('active')) {
                    updateMenuHighlight(index);
                }
            } catch (e) {}
        }
    }
    function navigateToMessage(direction) {
        scanMessages();
        const visualIndex = getVisualIndex();
        let baseIndex = currentNavIndex;
        if (baseIndex === -1 || (visualIndex !== -1 && Math.abs(visualIndex - baseIndex) > 2)) {
            baseIndex = visualIndex;
        }
        if (baseIndex === -1) baseIndex = 0;
        let targetIndex = baseIndex;
        if (direction === 'prev') targetIndex = baseIndex - 1;
        if (direction === 'next') targetIndex = baseIndex + 1;
        scrollToMessage(targetIndex);
    }
    function updateMenuHighlight(idx) {
        const scrollArea = navListPopup ? navListPopup.querySelector('.mp-nav-scroll-area') : null;
        if (!scrollArea) return;
        const items = scrollArea.querySelectorAll('.mp-nav-list-item');
        items.forEach(i => i.classList.remove('current-item'));
        if (items[idx]) {
            items[idx].classList.add('current-item');
            items[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    function highlightElement(element) {
        if (!element) return;
        element.classList.remove('mp-highlight-anim');
        void element.offsetWidth;
        element.classList.add('mp-highlight-anim');
    }
    function createNavInterface() {
        if (NO_NAV_PLATFORMS.includes(currentPlatform)) {
            const ext = document.getElementById('mp-nav-container');
            if (ext) ext.remove();
            return;
        }
        const existing = document.getElementById('mp-nav-container');
        if (existing) {
            existing.style.display = currentNavConfig.enabled ? 'flex' : 'none';
            return;
        }
        if (!currentNavConfig.enabled) return;
        navContainer = document.createElement('div');
        navContainer.id = 'mp-nav-container';
        navContainer.className = 'mp-nav-switch';
        const btnUp = createNavBtn(ICONS.navUp, () => navigateToMessage('prev'), 'prev');
        const btnList = createNavBtn(ICONS.navMenu, () => toggleNavList(), 'list');
        const btnDown = createNavBtn(ICONS.navDown, () => navigateToMessage('next'), 'next');
        navContainer.appendChild(btnUp);
        navContainer.appendChild(btnList);
        navContainer.appendChild(btnDown);
        navListPopup = document.createElement('div');
        navListPopup.className = 'mp-nav-list-popup';
        const header = document.createElement('div');
        header.className = 'mp-nav-header';
        header.appendChild(createTab('all', ICONS.all, getTranslation('all')));
        header.appendChild(createTab('user', ICONS.user, getTranslation('user')));
        header.appendChild(createTab('ai', ICONS.bot, getTranslation('ai')));
        navListPopup.appendChild(header);
        const scrollArea = document.createElement('div');
        scrollArea.className = 'mp-nav-scroll-area';
        navListPopup.appendChild(scrollArea);
        navContainer.appendChild(navListPopup);
        document.body.appendChild(navContainer);
        document.addEventListener('click', (e) => {
            if (navListPopup && navListPopup.classList.contains('active') &&
                navContainer && !navContainer.contains(e.target)) {
                closeNavList();
            }
        });
    }
    function createNavBtn(icon, onClick, tooltipKey) {
        const btn = document.createElement('div');
        btn.className = 'mp-nav-btn';
        setSafeInnerHTML(btn, icon);
        btn.onclick = (e) => { e.stopPropagation(); onClick(e); };
        createCustomTooltip(btn, getTranslation(tooltipKey), 'left');
        return btn;
    }
    function createTab(mode, icon, tooltipText) {
        const tab = document.createElement('div');
        tab.className = `mp-nav-tab ${navFilterMode === mode ? 'active' : ''}`;
        setSafeInnerHTML(tab, icon);
        tab.onclick = (e) => {
            e.stopPropagation();
            setNavFilter(mode);
        };
        createCustomTooltip(tab, tooltipText, 'top');
        return tab;
    }
    function setNavFilter(mode) {
        navFilterMode = mode;
        currentNavConfig.filterMode = mode;
        saveNavConfig(currentNavConfig);
        const tabs = navListPopup.querySelectorAll('.mp-nav-tab');
        tabs.forEach(t => t.classList.remove('active'));
        if (mode === 'all') tabs[0].classList.add('active');
        if (mode === 'user') tabs[1].classList.add('active');
        if (mode === 'ai') tabs[2].classList.add('active');
        renderNavListItems();
    }
    function toggleNavList() {
        if (!navListPopup) return;
        if (navListPopup.classList.contains('active')) closeNavList();
        else openNavList();
    }
    function openNavList() {
        navListPopup.classList.add('active');
        renderNavListItems();
        if (currentNavIndex !== -1) updateMenuHighlight(currentNavIndex);
        else {
             const visIdx = getVisualIndex();
             if (visIdx !== -1) updateMenuHighlight(visIdx);
        }
        if (navLiveInterval) clearInterval(navLiveInterval);
        navLiveInterval = setInterval(checkUpdatesAndRender, 1500);
    }
    function closeNavList() {
        navListPopup.classList.remove('active');
        if (navLiveInterval) clearInterval(navLiveInterval);
        navLiveInterval = null;
    }
    function checkUpdatesAndRender() {
        const selConfig = getMessageSelectors();
        let currentCount = 0;
        if (selConfig.user) currentCount += document.querySelectorAll(selConfig.user.item).length;
        if (selConfig.ai)   currentCount += document.querySelectorAll(selConfig.ai.item).length;
        if (currentCount !== navLastDomCount) {
            renderNavListItems();
        }
    }
    function renderNavListItems() {
        scanMessages();
        const scrollArea = navListPopup.querySelector('.mp-nav-scroll-area');
        setSafeInnerHTML(scrollArea, '');
        if (cachedMessages.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'mp-nav-list-item';
            empty.textContent = getTranslation('noConversations');
            empty.style.justifyContent = 'center';
            empty.style.opacity = '0.5';
            scrollArea.appendChild(empty);
            return;
        }
        let activeIdx = currentNavIndex;
        if (activeIdx === -1) activeIdx = getVisualIndex();
        const frag = document.createDocumentFragment();
        cachedMessages.forEach((msg, idx) => {
            const item = document.createElement('div');
            item.className = 'mp-nav-list-item';
            if (idx === activeIdx) item.classList.add('current-item');
            const showAiIcon = (navFilterMode === 'all' && msg.type === 'ai');
            const aiIconHtml = showAiIcon ? `<div class="mp-nav-type-icon">${ICONS.ai}</div>` : '';
            const html = `<span class="mp-nav-idx-badge">${idx + 1}</span><span class="mp-nav-preview-text">${msg.preview || '...'}</span>${aiIconHtml}`;
            setSafeInnerHTML(item, html);
            item.onclick = (e) => {
                e.stopPropagation();
                scrollToMessage(idx);
            };
            frag.appendChild(item);
        });
        scrollArea.appendChild(frag);
        const activeItem = scrollArea.querySelector('.current-item');
        if (activeItem) {
            setTimeout(() => activeItem.scrollIntoView({ block: 'nearest' }), 50);
        }
        const selConfig = getMessageSelectors();
        navLastDomCount = 0;
        if (selConfig.user) navLastDomCount += document.querySelectorAll(selConfig.user.item).length;
        if (selConfig.ai)   navLastDomCount += document.querySelectorAll(selConfig.ai.item).length;
    }
    function detectPlatform() {
        const hostname = window.location.hostname;
        if (hostname.includes('chatgpt.com'))           return 'chatgpt';
        if (hostname.includes('deepseek.com'))          return 'deepseek';
        if (hostname.includes('aistudio.google.com'))   return 'googleaistudio';
        if (hostname.includes('chat.qwen.ai'))          return 'qwen';
        if (hostname.includes('chat.z.ai'))             return 'zai';
        if (hostname.includes('gemini.google.com'))     return 'gemini';
        if (hostname.includes('arena.ai4bharat.org'))   return 'indicArena';
        if (hostname.includes('arena.ai'))              return 'arena';
        if (hostname.includes('kimi.com'))              return 'kimi';
        if (hostname.includes('claude.ai'))             return 'claude';
        if (hostname.includes('grok.com'))              return 'grok';
        if (hostname.includes('www.perplexity.ai'))     return 'perplexity';
        if (hostname.includes('longcat.chat'))          return 'longcat';
        if (hostname.includes('mistral.ai'))            return 'mistral';
        if (hostname.includes('yuanbao.tencent.com'))   return 'yuanbao';
        if (hostname.includes('chatglm.cn'))            return 'chatglm';
        if (hostname.includes('poe.com'))               return 'poe';
        if (hostname.includes('notebooklm.google.com')) return 'notebooklm';
        if (hostname.includes('doubao.com'))            return 'doubao';
        if (hostname.includes('copilot.microsoft.com')) return 'copilot';
        if (hostname.includes('image.z.ai'))            return 'glmimage';
        if (hostname.includes('ernie.baidu.com'))       return 'ernie';
        if (hostname.includes('dreamina.capcut.com'))   return 'dreamina';
        if (hostname.includes('jimeng.jianying.com'))   return 'jimengJianying';
        if (hostname.includes('build.nvidia.com'))      return 'nvidiaNim';
        if (hostname.includes('labs.google') && window.location.pathname.includes('/tools/whisk/')) return 'whisk';
        if (hostname.includes('google.com') && window.location.pathname.includes('/search') && window.location.search.includes('udm=50')) return 'googleModoIA';
        return null;
    }
    function getSendButton() {
        switch (currentPlatform) {
            case 'chatgpt':         return document.querySelector('[data-testid="send-button"]') || document.querySelector('#composer-submit-button');
            case 'deepseek':        return document.querySelector('div[role="button"]:has(svg path[d^="M8.3125"])');
            case 'googleaistudio':  return document.querySelector('button.run-button');
            case 'qwen':            return document.querySelector('button.send-button') || document.querySelector('button:has(use[xlink:href="#icon-line-arrow-up"])');
            case 'zai':             return document.querySelector('#send-message-button');
            case 'gemini':          return document.querySelector('button:has(mat-icon[data-mat-icon-name="send"])') || document.querySelector('button:has(mat-icon[fonticon="send"])');
            case 'arena':           return document.querySelector('button[type="submit"]');
            case 'kimi':            return document.querySelector('div:has(> svg[name="Send"])');
            case 'claude':          return document.querySelector('button:has(svg path[d^="M208.49,120.49"])');
            case 'grok':            return document.querySelector('button:has(svg path[d^="M5 11L12 4"])');
            case 'perplexity':      return document.querySelector('button:has(svg use[xlink:href*="arrow-up"]), button:has(svg use[xlink:href*="arrow-right"])');
            case 'longcat':         return document.querySelector('.send-btn') || document.querySelector('div:has(svg use[href="#icon-send"])');
            case 'mistral':         return document.querySelector('button[type="submit"]:has(svg path[d^="M12 18v4"])');
            case 'yuanbao':         return document.querySelector('a[class*="style__send-btn"]');
            case 'poe':             return document.querySelector('button[data-button-send="true"]');
            case 'googleModoIA':    return document.querySelector('button[data-xid="input-plate-send-button"]');
            case 'notebooklm':      return document.querySelector('button.submit-button');
            case 'doubao':          return document.querySelector('button[data-testid="chat_input_send_button"], button#flow-end-msg-send');
            case 'copilot':         return document.querySelector('[data-testid="submit-button"]');
            case 'glmimage':        return document.querySelector('button:has(img[src*="generate-icon"])');
            case 'whisk':           return document.querySelector('button:has(path[d^="M12 4l-1.41 1.41L16.17 11H4v2"])');
            case 'ernie':           return document.querySelector('span:has(path[d^="M43,-63.4379997253418 C43,-63.4379997253418 31,-59.6879997253418"])');
            case 'dreamina':        return document.querySelector('button.lv-btn.lv-btn-primary.lv-btn-size-default.lv-btn-shape-circle.lv-btn-icon-only.button-oBBmQ2.submit-button-_3B9GU.submit-button-FEaBl7');
            case 'jimengJianying':  return document.querySelector('button[class*="submit-button"]:not([disabled])');
            case 'nvidiaNim':       return document.querySelector('button:has(svg path[d^="M0.747,1.623l14.495,6.377"])');
            case 'indicArena':      return document.querySelector('button[type="submit"]:has(svg path[d^="M14.536 21.686"])');
            default:                return null;
        }
    }
    function showToast(message, duration = 8000) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = 'position:fixed; top:20px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.8); color:white; padding:8px 16px; border-radius:30px; z-index:99999; font-size:13px; pointer-events:none; font-family: var(--mp-font-family-base) !important;';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }
    function isEditorEmpty(editor) {
        if (!editor) return true;
        if (!editor.isConnected) return true;
        let content = '';
        if (editor.tagName.toLowerCase() === 'textarea') {
            content = editor.value;
        } else {
            content = editor.textContent || editor.innerText || '';
        }
        return content.replace(/[\s\u200B\u00A0\r\n]/g, '').length === 0;
    }
    function waitForUploadAndClick(editor, maxWaitTime = 120000) {
        const startTime = Date.now();
        const interval = setInterval(() => {
            if (Date.now() - startTime > maxWaitTime) {
                clearInterval(interval);
                return;
            }
            if (isEditorEmpty(editor)) {
                clearInterval(interval);
                return;
            }
            const btn = getSendButton();
            if (!btn) return;
            const isDisabled = btn.disabled || btn.getAttribute('aria-disabled') === 'true';
            const style = window.getComputedStyle(btn);
            const isVisuallyDisabled = style.cursor  === 'not-allowed' || parseFloat(style.opacity) < 0.5;
            const isHidden = style.display === 'none' || style.visibility === 'hidden';
            if (!isDisabled && !isVisuallyDisabled && !isHidden) {btn.click();}
        }, 800);
    }
    function handleChatGLM(editor, maxWaitTime = 120000) {
        const startTime = Date.now();
        const interval  = setInterval(() => {
            if (Date.now() - startTime > maxWaitTime || isEditorEmpty(editor)) {
                clearInterval(interval);
                return;
            }
            try {
                if(editor.isConnected) editor.focus();
                const enterEvent = new KeyboardEvent('keydown', {key: 'Enter',code: 'Enter',which: 13,keyCode: 13,bubbles: true,cancelable: true});
                editor.dispatchEvent(enterEvent);
            } catch (e) {}
        }, 800);
    }
    async function insertPrompt(promptItem, index, forceNoAutoExecute = false, isInline = false) {
        let editor = document.querySelector(platformSelectors[currentPlatform]);
        if (!editor) { return; }
        editor.focus();
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
        let hasFiles = false;
        let totalUploadDelay = 0;
        let fileCount = 0;
        if (promptItem.activeFileIds && promptItem.activeFileIds.length > 0) {
            const allFiles      = await getGlobalFiles();
            const filesToAttach = allFiles
                .filter(f => promptItem.activeFileIds.includes(f.id))
                .map(f => {
                    fileCount++;
                    totalUploadDelay += f.size;
                    return dataURLtoFile(f.data, f.name);
                });
            if (filesToAttach.length > 0) {
                hasFiles = true;
                totalUploadDelay = 1500 + (totalUploadDelay / 1024 / 100 * 100);
                const dt = new DataTransfer();
                filesToAttach.forEach(file => dt.items.add(file));
                if (currentPlatform === 'gemini') {
                    if (isFirefox) {
                        let dropTarget = document.querySelector('[data-filedrop-id]') || document.querySelector('.chat-window-input-container') || editor;
                        ['dragenter', 'dragover', 'drop'].forEach(eventName => {
                            const evt = new DragEvent(eventName, {
                                bubbles: true,
                                cancelable: true,
                                dataTransfer: dt
                            });
                            dropTarget.dispatchEvent(evt);
                        });
                    }
                    else {
                        const pasteEvent = new ClipboardEvent('paste', {
                            bubbles: true,
                            cancelable: true,
                            clipboardData: dt
                        });
                        editor.dispatchEvent(pasteEvent);
                    }
                }
                else {
                    let dropHandled = false;
                    const preferDrop = ['deepseek', 'qwen', 'longcat', 'grok', 'mistral', 'googleaistudio', 'yuanbao', 'ernie'];
                    if (preferDrop.includes(currentPlatform)) {
                        let dropTarget = document.querySelector('.chat-input-container') || document.querySelector('form') || editor;
                        ['dragenter', 'dragover', 'drop'].forEach(eventName => {
                            const evt = new DragEvent(eventName, { bubbles: true, cancelable: true, dataTransfer: dt });
                            dropTarget.dispatchEvent(evt);
                        });
                        dropHandled = true;
                    }
                    if (!dropHandled) {
                        let fileInput = document.querySelector('input[type="file"]');
                        if (currentPlatform === 'perplexity') fileInput = document.querySelector('input[data-testid="file-upload-input"]');
                        if (fileInput) {
                            try {
                                fileInput.value = '';
                                fileInput.files = dt.files;
                                fileInput.dispatchEvent(new Event('change', { bubbles: true }));
                                fileInput.dispatchEvent(new Event('input', { bubbles: true }));
                            } catch(e) {}
                        }
                        else {
                            ['dragenter', 'dragover', 'drop'].forEach(eventName => {
                                const evt = new DragEvent(eventName, { bubbles: true, cancelable: true, dataTransfer: dt });
                                editor.dispatchEvent(evt);
                            });
                        }
                    }
                }
                showToast(getTranslation('sendingFiles').replace('{fileCount}', fileCount), totalUploadDelay);
            }
        }
        setTimeout(() => {
            if (isFirefox && (currentPlatform === 'kimi' || currentPlatform === 'perplexity' || currentPlatform === 'qwen')) {
                editor.focus();
                document.execCommand('insertText', false, promptItem.text);
            }
            else if (isFirefox && (currentPlatform === 'chatgpt' || currentPlatform === 'claude' || currentPlatform === 'grok' || currentPlatform === 'longcat' || currentPlatform === 'mistral' || currentPlatform === 'yuanbao')) {
                const lines = promptItem.text.split('\n');
                lines.forEach(line => {
                    const p = document.createElement('p');
                    if (line.trim() === '') p.appendChild(document.createElement('br'));
                    else p.textContent = line;
                    editor.appendChild(p);
                });
                editor.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                editor.focus();
                const range = document.createRange();
                range.selectNodeContents(editor);
                range.collapse(false);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
            else if (currentPlatform === 'gemini') {
                editor.focus();
                if (isFirefox) {
                    let p = editor.querySelector('p') || document.createElement('p');
                    p.textContent += promptItem.text;
                    if (!editor.contains(p)) editor.appendChild(p);
                    editor.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                }
                else {
                    const success = document.execCommand('insertText', false, promptItem.text);
                    if (!success) {
                         const textNode = document.createTextNode(promptItem.text);
                         editor.appendChild(textNode);
                    }
                    editor.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                }
            }
            else {
                const dt = new DataTransfer();
                dt.setData('text/plain', promptItem.text);
                editor.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
                if (editor.value !== undefined && !editor.value.includes(promptItem.text)) {
                    let newVal = editor.value + promptItem.text;
                    if (isInline && typeof editor.selectionStart === 'number') {
                        const start = editor.selectionStart;
                        newVal = editor.value.substring(0, start) + promptItem.text + editor.value.substring(editor.selectionEnd);
                        setTimeout(() => { editor.selectionStart = editor.selectionEnd = start + promptItem.text.length; }, 0);
                    }
                    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
                    if (setter) {
                        setter.call(editor, newVal);
                    } else {
                        editor.value = newVal;
                    }
                    editor.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
            if (!isInline) {
                moveCursorToEnd(editor);
            }
            if (promptItem.autoExecute && !forceNoAutoExecute) {
                if (currentPlatform === 'chatglm') {
                    handleChatGLM(editor);
                }
                else if (hasFiles) {
                    waitForUploadAndClick(editor);
                }
                else {
                    setTimeout(() => {
                        let sent = false;
                        if (currentPlatform === 'qwen') {
                            try {
                                const sendButton = document.querySelector('button.send-button') || document.querySelector('button:has(use[xlink:href="#icon-line-arrow-up"])');
                                if (sendButton && !sendButton.disabled) { sendButton.click(); sent = true; }
                            } catch (e) {}
                        }
                        if (currentPlatform === 'googleaistudio') {
                            try {
                                const sendBtn = document.querySelector('button.run-button');
                                if (sendBtn) { sendBtn.click(); sent = true; }
                            } catch (e) {}
                        }
                        if (currentPlatform === 'glmimage') {
                            try {
                                const iconImg = document.querySelector('button img[src*="generate-icon"]') || document.querySelector('button img[alt="generate"]');
                                if (iconImg) {
                                    const sendBtn = iconImg.closest('button');
                                    if (sendBtn && !sendBtn.disabled) {
                                        sendBtn.click();
                                        sent = true;
                                    }
                                }
                            } catch (e) {}
                        }
                        if (currentPlatform === 'whisk') {
                            try {
                                const sendBtn = document.querySelector('button[type="submit"]');
                                if (sendBtn) {
                                     sendBtn.click();
                                     sent = true;
                                }
                            } catch (e) {}
                        }
                        if (!sent) {
                            try {
                                const enterEvent = new KeyboardEvent('keydown', {key: 'Enter', code: 'Enter', which: 13, keyCode: 13, bubbles: true, cancelable: true});
                                editor.dispatchEvent(enterEvent);
                            } catch (e) {}
                        }
                    }, 150);
                }
            }
        }, 100);
        if (index > -1) {
            let prompts = await getAll();
            const originalSavedItem = prompts[index];
            if (originalSavedItem && !originalSavedItem.isFixed) {
                const fixedMap = {};
                const floating = [];
                prompts.forEach((p, i) => {
                    if (i === index) return;
                    if (p.isFixed) {
                        fixedMap[i] = p;
                    } else {
                        floating.push(p);
                    }
                });
                floating.unshift(originalSavedItem);
                const newList = [];
                let floatPtr = 0;
                const total = Object.keys(fixedMap).length + floating.length;
                for (let i = 0; i < total; i++) {
                    if (fixedMap[i]) {
                        newList.push(fixedMap[i]);
                    } else {
                        if (floatPtr < floating.length) {
                            newList.push(floating[floatPtr++]);
                        }
                    }
                }
                await GM_setValue(PROMPT_STORAGE_KEY, newList);
            }
        }
    }
    async function openExportMenu() {
        closeMenu();
        const overlay = document.createElement('div');
        overlay.className = 'mp-overlay';
        overlay.id = '__ap_export_overlay';
        const box = document.createElement('div');
        box.className = 'mp-modal-box';
        box.onclick = e => e.stopPropagation();
        const prompts = await getAll();
        const htmlStructure = ` <button id="__ap_close_export" class="mp-modal-close-btn">${ICONS.close}</button> <h2 class="modal-title">${getTranslation('export')}</h2> <div class="mp-search-container"> <input type="text" id="__ap_export_search" class="mp-search-input" placeholder="${getTranslation('search')}" autocomplete="off"> <div class="mp-export-actions"> <label class="mp-checkbox-wrapper" style="cursor:pointer; user-select:none;"> <input type="checkbox" id="__ap_select_all" class="mp-checkbox" checked> <span style="margin-left:8px;">${getTranslation('selectAll')}</span> </label> <span id="__ap_count_label">${getTranslation('countPrompts', { count: prompts.length })}</span> </div> </div> <div class="mp-export-list" id="__ap_export_list"></div> <div class="mp-export-buttons"> <button id="__ap_do_export_txt" class="save-button mp-btn-secondary" style="margin-right:auto">TXT</button> <button id="__ap_do_export_json" class="save-button">JSON</button> </div> `;
        setSafeInnerHTML(box, htmlStructure);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('visible'));
        const listContainer = box.querySelector('#__ap_export_list');
        listContainer.style.maxHeight = '300px';
        setupEnhancedScroll(listContainer);
        function renderList(filterText = '') {
            listContainer.textContent = '';
            const lowerFilter = filterText.toLowerCase();
            let visibleCount = 0;
            if (prompts.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.className = 'empty-state';
                emptyMsg.textContent = getTranslation('noSavedPrompts');
                listContainer.appendChild(emptyMsg);
                return;
            }
            prompts.forEach((p, index) => {
                const match = p.title.toLowerCase().includes(lowerFilter) || p.text.toLowerCase().includes(lowerFilter);
                if (!match) return;
                visibleCount++;
                const item = document.createElement('div');
                item.className = 'mp-export-item';
                item.onclick = (e) => {
                    if (e.target.type !== 'checkbox') {
                        const cb = item.querySelector('input');
                        cb.checked = !cb.checked;
                        updateSelectAllState();
                    }
                };
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'mp-checkbox prompt-selector';
                checkbox.checked = true;
                checkbox.dataset.index = index;
                checkbox.onclick = (e) => { e.stopPropagation(); updateSelectAllState(); };
                const content = document.createElement('div');
                content.className = 'mp-item-content';
                const title = document.createElement('div');
                title.className = 'mp-item-title';
                title.textContent = p.title;
                const preview = document.createElement('div');
                preview.className = 'mp-item-preview';
                preview.textContent = p.text.substring(0, 90).replace(/\n/g, ' ') + '...';
                const cbWrapper = document.createElement('div');
                cbWrapper.className = 'mp-checkbox-wrapper';
                cbWrapper.appendChild(checkbox);
                content.appendChild(title);
                content.appendChild(preview);
                item.appendChild(cbWrapper);
                item.appendChild(content);
                listContainer.appendChild(item);
            });
            document.getElementById('__ap_count_label').textContent = getTranslation('countPrompts', { count: visibleCount });
        }
        renderList();
        const searchInput = document.getElementById('__ap_export_search');
        const selectAllCb = document.getElementById('__ap_select_all');
        searchInput.oninput = (e) => {
            renderList(e.target.value);
            updateSelectAllState();
        };
        selectAllCb.onchange = (e) => {
            listContainer.querySelectorAll('.prompt-selector').forEach(cb => cb.checked = e.target.checked);
        };
        function updateSelectAllState() {
            const checkboxes = Array.from(listContainer.querySelectorAll('.prompt-selector'));
            if (checkboxes.length === 0) return;
            const allChecked = checkboxes.every(cb => cb.checked);
            const someChecked = checkboxes.some(cb => cb.checked);
            selectAllCb.checked = allChecked;
            selectAllCb.indeterminate = someChecked && !allChecked;
        }
        const getSelectedPrompts = () => {
            const checkboxes = Array.from(listContainer.querySelectorAll('.prompt-selector:checked'));
            return checkboxes.map(cb => prompts[parseInt(cb.dataset.index)]);
        };
        const closeExportModal = () => {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        };
        box.querySelector('#__ap_close_export').onclick = closeExportModal;
        overlay.onclick = (e) => { if (e.target === overlay) closeExportModal(); };
        document.getElementById('__ap_do_export_json').onclick = () => {
            const selected = getSelectedPrompts();
            if (selected.length === 0) { alert(getTranslation('noPromptsToExport')); return; }
            const exportedPrompts = selected.map(p => ({
                title: p.title,
                text: p.text,
                usePlaceholders: p.usePlaceholders,
                autoExecute: p.autoExecute
            }));
            const now = new Date();
            const dateStr = now.toLocaleDateString(navigator.language).replace(/\//g, '-');
            const timeStr = now.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'}).replace(/:/g, '-');
            const a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([JSON.stringify(exportedPrompts, null, 2)], { type: 'application/json' }));
            a.download = `Prompts_MyPrompt_${dateStr}_${timeStr}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
            closeExportModal();
        };
        document.getElementById('__ap_do_export_txt').onclick = async () => {
            const selected = getSelectedPrompts();
            if (selected.length === 0) { alert(getTranslation('noPromptsToExport')); return; }
            if (selected.length > 10 && !confirm(getTranslation('confirmDownloads', { count: selected.length }))) return;
            for (const p of selected) {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(new Blob([p.text], { type: 'text/plain' }));
                const safeTitle = (p.title || 'prompt').replace(/[<>:"/\\|?*]/g, '').trim();
                a.download = `${safeTitle || 'prompt'}.txt`;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                await new Promise(r => setTimeout(r, 200));
            }
            closeExportModal();
        };
        setTimeout(() => searchInput.focus(), 100);
    }
    function exportPrompts() {
        openExportMenu();
    }
    function importPrompts() {
        const input=document.createElement('input');
        input.type='file';
        input.accept='.json';
        input.onchange=e=>{
            const file=e.target.files[0];
            if(!file)return;
            const reader=new FileReader();
            reader.onload=async event=>{
                try{
                    const imported=JSON.parse(event.target.result);
                    if(!Array.isArray(imported))throw new Error("Not an array.");
                    const current=await getAll();
                    const newPrompts = imported.map(p => ({
                        title: p.title || 'No Title',
                        text: p.text || '',
                        usePlaceholders: p.usePlaceholders || false,
                        autoExecute: p.autoExecute || false
                    }));
                    await GM_setValue(PROMPT_STORAGE_KEY,[...current,...newPrompts]);
                    await refreshMenu();
                    alert(getTranslation('promptsImported',{count:newPrompts.length}));
                }catch(err){alert(getTranslation('errorImporting',{error:err.message}))}
            };
            reader.readAsText(file);
        };
        input.click();
        closeMenu();
    }
    function cleanup() {
        if (currentButton          ) { currentButton.remove          (); currentButton           = null; }
        if (currentMenu            ) { currentMenu.remove            (); currentMenu             = null; }
        if (currentModal           ) { currentModal.remove           (); currentModal            = null; }
        if (languageModal          ) { languageModal.remove          (); languageModal           = null; }
        if (currentPlaceholderModal) { currentPlaceholderModal.remove(); currentPlaceholderModal = null; }
        isInitialized = false;
    }
    async function initUI() {
        if (pageObserver) pageObserver.disconnect();
        cleanup();
        currentPlatform = detectPlatform();
        if (!currentPlatform) return;
        createNavInterface();
        try {
            let btn, elementToInsert, insertionPoint, insertionMethod = 'before';
            if (currentPlatform === 'chatgpt') {
                const findAnchor = () => {
                    const anchor = document.getElementById('composer-plus-btn') || document.querySelector('[data-testid="composer-plus-btn"]');
                    if (anchor) {
                        const hasIcon = anchor.querySelector('use[href*="6be74c"]');
                        if (hasIcon || anchor.querySelector('svg')) {
                            return { element: anchor, type: 'fingerprint-id' };
                        }
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const anchorBtn = anchorData.element;
                const container = anchorBtn.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('right');
                    container.insertBefore(btn, anchorBtn);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'deepseek') {
                const findAnchor = () => {
                    const SEND_ICON_PATH = "M8.3125 0.981587C8.66767"; const STOP_ICON_PATH = "M2 4.88C2 3.68009";
                    const candidates = Array.from(document.querySelectorAll('div[role="button"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        const d = path?.getAttribute('d') || "";
                        return d.startsWith(SEND_ICON_PATH) || d.startsWith(STOP_ICON_PATH);
                    });
                    if (target && target.parentElement) {
                        return { element: target.parentElement, type: 'icon-fingerprint' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    btn.style.marginRight = "15px";
                    btn.style.display = "inline-flex";
                    btn.style.alignItems = "center";
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'googleaistudio') {
                const findAnchor = () => {
                    const mediaBtn = document.querySelector('button[iconname="add_circle"]');
                    if (mediaBtn) {
                        const wrapper = mediaBtn.closest('.button-wrapper');
                        if (wrapper) return { element: wrapper, type: 'attribute-fingerprint' };
                    }
                    const wrapper = document.querySelector('.button-wrapper');
                    if (wrapper) return { element: wrapper, type: 'class-fallback' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginRight = '8px';
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'qwen') {
                const findAnchor = () => {
                    const ANCHOR_IDS = ['#icon-line-waveform', '#icon-line-arrow-up', '#icon-fill-stop-011'];
                    const containerCandidate = document.querySelector('.message-input-right-button-send');
                    if (!containerCandidate) return null;
                    const hasValidIcon = containerCandidate.querySelector('use');
                    const iconHref = hasValidIcon?.getAttribute('xlink:href') || hasValidIcon?.getAttribute('href');
                    if (iconHref && ANCHOR_IDS.includes(iconHref)) {
                        return { element: containerCandidate, type: 'svg-use-fingerprint' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const parentContainer = anchorData.element.parentElement;
                if (!parentContainer) return;
                let existingBtn = parentContainer.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    parentContainer.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = parentContainer;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'zai') {
                const findAnchor = () => {
                    const SEND_ICON = "M7.99946 1.50005L2.29635 13.5283"; const STOP_SELECTOR = "button span.block.bg-white.size-3";
                    const sendBtn = document.getElementById('send-message-button');
                    if (sendBtn) return { element: sendBtn, type: 'id' };
                    const pathTarget = Array.from(document.querySelectorAll('button svg path'))
                        .find(p => p.getAttribute('d')?.startsWith(SEND_ICON));
                    if (pathTarget) return { element: pathTarget.closest('button'), type: 'fingerprint-send' };
                    const stopBtn = document.querySelector(STOP_SELECTOR)?.closest('button');
                    if (stopBtn) return { element: stopBtn, type: 'fingerprint-stop' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const container = anchorData.element.closest('div.flex.self-end');
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginRight = '10px';
                    container.insertBefore(btn, container.firstChild);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'gemini') {
                const findAnchor = () => {
                    const micIcon = document.querySelector('mat-icon[data-mat-icon-name="mic"]');
                    if (micIcon) {
                        return { element: micIcon.closest('.input-buttons-wrapper-bottom'), type: 'mic-wrapper' };
                    }
                    const sendIcon = document.querySelector('mat-icon[data-mat-icon-name="send"]');
                    if (sendIcon) {
                        return { element: sendIcon.closest('.input-buttons-wrapper-bottom'), type: 'send-wrapper' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const bottomWrapper = anchorData.element;
                const container = bottomWrapper.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, bottomWrapper);
                    container.insertBefore(document.createComment(''), bottomWrapper);
                    container.insertBefore(document.createComment(''), bottomWrapper);
                    container.insertBefore(document.createComment(''), bottomWrapper);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'arena') {
                const findAnchor = () => {
                    const ANCHOR_FINGERPRINT = "M3 12L21 12M21 12L12.5 3.5";
                    const candidates = Array.from(document.querySelectorAll('button[type="submit"], div[role="button"], button'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        const hasFingerprint = path && path.getAttribute('d')?.includes(ANCHOR_FINGERPRINT);
                        if (!hasFingerprint) return false;
                        const safeContainer = btn.closest('div.flex.items-center.gap-2');
                        return !!safeContainer;
                    });
                    if (target) return { element: target, type: 'svg-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const anchorElement = anchorData.element;
                const container = anchorElement.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('.custom-prompt-btn-class') || container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorElement);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'kimi') {
                const findAnchor = () => {
                    const SEND_ICON_PATH = "M705.536 433.664a38.4 38.4 0 1 1-54.272 54.272L550.4"; const STOP_ICON_PATH = "M331.946667 379.904";
                    const candidates = Array.from(document.querySelectorAll('.send-button-container, .send-icon, svg'));
                    const targetIcon = candidates.find(el => {
                        const path = el.querySelector('path');
                        const d = path?.getAttribute('d');
                        return d && (d.startsWith(SEND_ICON_PATH) || d.startsWith(STOP_ICON_PATH));
                    });
                    const sendContainer = targetIcon?.closest('.send-button-container');
                    if (sendContainer) {
                        return { element: sendContainer, type: 'icon-fingerprint' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 2000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const container = anchorData.element.closest('.right-area') || anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'claude') {
                const findAnchor = () => {
                    const ANCHOR_SEND_PATH = "M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"; const ANCHOR_STOP_PATH = "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm40-112v56a12,12,0,0,1-12,12H100a12,12,0,0,1-12-12V100a12,12,0,0,1,12-12h56A12,12,0,0,1,168,100Z";
                    const candidates = Array.from(document.querySelectorAll('button'));
                    const target = candidates.find(btn => {
                        const svg = btn.querySelector('svg');
                        if (!svg) return false;
                        const path = svg.querySelector('path');
                        if (path) {
                            const d = path.getAttribute('d');
                            if (d === ANCHOR_SEND_PATH || d === ANCHOR_STOP_PATH) return true;
                        }
                        const rects = svg.querySelectorAll('rect');
                        if (rects.length > 0) {
                            const hasVoiceBars = Array.from(rects).some(r =>
                                r.getAttribute('width') === '1px' &&
                                (r.getAttribute('height') === '6px' || r.getAttribute('height') === '10px' || r.getAttribute('height') === '16px')
                            );
                            if (hasVoiceBars) return true;
                        }
                        return false;
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let wrapperDiv = anchorData.element;
                while (wrapperDiv && wrapperDiv !== document.body) {
                    wrapperDiv = wrapperDiv.parentElement;
                    if (wrapperDiv && wrapperDiv.classList.contains('shrink-0')) {
                        if (wrapperDiv.classList.contains('gap-1')) {
                            continue;
                        }
                        break;
                    }
                }
                if (!wrapperDiv || wrapperDiv === document.body) return;
                const insertionContainer = wrapperDiv.parentElement;
                if (!insertionContainer) return;
                let existingBtn = insertionContainer.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.setProperty('margin', '0', 'important');
                    insertionContainer.insertBefore(btn, wrapperDiv);
                }
                elementToInsert = btn;
                insertionPoint = insertionContainer;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'grok') {
                const findAnchor = () => {
                    const idCandidate = document.getElementById('model-select-trigger');
                    if (idCandidate) {
                        return { element: idCandidate.parentElement, type: 'model-id' };
                    }
                    const MODEL_SVG_PATH = "M6.5 12.5L11.5 17.5M6.5 12.5";
                    const candidates = Array.from(document.querySelectorAll('button'));
                    const svgCandidate = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(MODEL_SVG_PATH);
                    });
                    if (svgCandidate) {
                        return { element: svgCandidate.parentElement, type: 'model-svg' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const leftAnchor = anchorData.element;
                const container = leftAnchor.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                    if (btn.previousElementSibling !== leftAnchor) {
                        container.insertBefore(btn, leftAnchor.nextElementSibling);
                    }
                } else {
                    btn = createPromptButton('left');
                    btn.style.marginRight = '0.9rem';
                    btn.style.marginBottom = '2px';
                    container.insertBefore(btn, leftAnchor.nextElementSibling);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'perplexity') {
                const findAnchor = () => {
                    const PPLX_FINGERPRINTS = ['#pplx-icon-custom-perplexity-v2v', '#pplx-icon-player-stop-filled', '#pplx-icon-arrow-up', '#pplx-icon-arrow-right'];
                    const buttons = document.querySelectorAll('button[type="button"]');
                    for (const btnEl of buttons) {
                        const useTag = btnEl.querySelector('use');
                        if (useTag) {
                            const href = useTag.getAttribute('xlink:href') || useTag.getAttribute('href');
                            if (PPLX_FINGERPRINTS.includes(href)) {
                                const anchorWrapper = btnEl.closest('.ml-2') || btnEl.parentElement;
                                return { element: anchorWrapper, type: 'svg-use-fingerprint' };
                            }
                        }
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    for (let i = 0; i < 3; i++) {
                        await new Promise(r => setTimeout(r, 800));
                        anchorData = findAnchor();
                        if (anchorData) break;
                    }
                }
                if (!anchorData) return;
                const container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (!existingBtn) {
                    btn = createPromptButton('left');
                    container.insertBefore(btn, anchorData.element);
                } else {
                    btn = existingBtn;
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'longcat') {
                const findAnchor = () => {
                    const ICON_HREFS = ["#icon-sikao", "#icon-lianwang", "#icon-upload"];
                    const candidates = Array.from(document.querySelectorAll('use'));
                    const targetIcon = ICON_HREFS.map(href =>
                        candidates.find(use => use.getAttribute('href') === href)
                    ).find(el => el !== undefined);
                    if (targetIcon) {
                        const footer = targetIcon.closest('.chat-input-footer');
                        if (footer) {
                            const leftBox = footer.closest('.left-box');
                            if (leftBox) return { element: leftBox, type: 'structure-fingerprint' };
                        }
                    }
                    const leftBoxEl = document.querySelector('.left-box');
                    if (leftBoxEl) return { element: leftBoxEl, type: 'class-selector' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginRight = '8px';
                    container.prepend(btn);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'mistral') {
                const findAnchor = () => {
                    const ANCHORICONPATH = "M12 19v3";
                    const candidates = Array.from(document.querySelectorAll('button, [role="button"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(ANCHORICONPATH);
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const micButton = anchorData.element;
                const wrapperDiv = micButton.parentElement;
                const outerContainer = wrapperDiv.parentElement;
                if (!outerContainer) return;
                let existingBtn = outerContainer.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    outerContainer.insertBefore(btn, wrapperDiv);
                }
                elementToInsert = btn;
                insertionPoint = outerContainer;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'yuanbao') {
                const findAnchor = () => {
                    let target = document.querySelector('a[class*="style__send-btn"]');
                    if (target) return { element: target, type: 'class-prefix' };
                    const iconSpan = document.querySelector('span.iconfont.icon-send');
                    if (iconSpan && iconSpan.closest('a')) {
                        return { element: iconSpan.closest('a'), type: 'child-icon' };
                    }
                    const ANCHOR_RECT_X = "7.71448";
                    const candidates = Array.from(document.querySelectorAll('a, button'));
                    const svgTarget = candidates.find(btn => {
                        const rect = btn.querySelector('rect[x="' + ANCHOR_RECT_X + '"]');
                        return rect;
                    });
                    if (svgTarget) return { element: svgTarget, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'chatglm') {
                let container = document.querySelector('div.options-container.flex.flex-y-center');
                let anchor = null;
                if (container) {
                    anchor = container.querySelector('.upload-image-wrap');
                }
                if (!container || !anchor) {
                    container = document.querySelector('div.options[data-v-7dc2591c]');
                    if (container) {
                        targetType = 'element1';
                        anchor = container.lastElementChild;
                    }
                }
                if (!container || !anchor) {
                    container = document.querySelector('div.options[data-v-7a34b085]');
                    if (container) {
                        targetType = 'element2';
                        anchor = container.lastElementChild;
                    }
                }
                if (!container || !anchor) {
                    container = await waitFor('.options, .options-container', 5000);
                    if (!container) return;
                    if (container.matches('[data-v-7dc2591c]')) {
                         targetType = 'element1';
                         anchor = container.lastElementChild;
                    } else if (container.matches('[data-v-7a34b085]')) {
                         targetType = 'element2';
                         anchor = container.lastElementChild;
                    } else {
                         targetType = 'original';
                         anchor = container.querySelector('.upload-image-wrap');
                    }
                }
                if (!container || !anchor) return;
                btn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (!btn) {
                    btn = createPromptButton();
                }
                elementToInsert = btn;
                insertionPoint = anchor;
                insertionMethod = 'after';
            }
            else if (currentPlatform === 'poe') {
                const findAnchor = () => {
                    const ANCHOR_ICON_SIG = "M13 4.5a1 1 0 1 0-2 0V11";
                    const candidates = Array.from(document.querySelectorAll('button[data-button-file-input="true"], button'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(ANCHOR_ICON_SIG);
                    });
                    if (target) {
                        const actionContainer = target.closest('[class*="actionContainerLeft"]');
                        return {
                            element: actionContainer || target.parentElement,
                            type: 'icon-fingerprint'
                        };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData || !anchorData.element) return;
                let container = anchorData.element;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    if (container.firstChild) {
                        container.insertBefore(btn, container.firstChild);
                    } else {
                        container.appendChild(btn);
                    }
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'googleModoIA') {
                const findAnchor = () => {
                    const ANCHOR_SVG_PATH = "M440-440H200v-80H440V-760h80v240H760v80H520v240H440V-440Z";
                    const candidates = Array.from(document.querySelectorAll('button.uMMzHc, button[jsuid]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d') === ANCHOR_SVG_PATH;
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginTop = "6px";
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'notebooklm') {
                const findAnchor = () => {
                    const ANCHORICONPATH = "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l7 7Z";
                    const candidates = Array.from(document.querySelectorAll('button.submit-button, button[aria-label]'));
                    const target = candidates.find(btn => {
                        const svgPath = btn.querySelector('path');
                        const dAttribute = svgPath?.getAttribute('d');
                        const isArrow = dAttribute && dAttribute.includes(ANCHORICONPATH.substring(0, 4));
                        const isNamed = btn.querySelector('mat-icon')?.textContent.trim() === 'arrow_forward';
                        return isArrow || isNamed;
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    const fallback = document.querySelector('button.submit-button');
                    if (fallback) return { element: fallback, type: 'class-selector' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 2000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'doubao') {
                const findAnchor = () => {
                    const ANCHOR_ICON_PATH = "M17.3977 3.9588C15.8361 2.39727";
                    const candidates = Array.from(document.querySelectorAll('button'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(ANCHOR_ICON_PATH);
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let anchorWrapper = anchorData.element.parentElement;
                if (anchorWrapper && !anchorWrapper.classList.contains('flex')) {
                    anchorWrapper = anchorData.element;
                }
                let container = anchorWrapper.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    if (anchorWrapper.nextSibling) {
                        container.insertBefore(btn, anchorWrapper.nextSibling);
                    } else {
                        container.appendChild(btn);
                    }
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'copilot') {
                const findAnchor = () => {
                    const testIdEl = document.querySelector('button[data-testid="composer-create-button"]');
                    if (testIdEl) {
                        const wrapper = testIdEl.parentElement;
                        return { element: testIdEl, wrapper: wrapper, type: 'testid' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 2000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const mainContainer = anchorData.wrapper.parentElement;
                if (!mainContainer) return;
                let existingBtn = mainContainer.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    mainContainer.insertBefore(btn, anchorData.wrapper);
                }
                elementToInsert = btn;
                insertionPoint = mainContainer;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'glmimage') {
                const findAnchor = () => {
                    const ANCHORICONPATH = "m6 9 6 6 6-6";
                    const candidates = Array.from(document.querySelectorAll('button, [role="combobox"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(ANCHORICONPATH);
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (container && !container.classList.contains('flex')) {
                    container = container.closest('.flex.items-center.gap-4');
                }
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.prepend(btn);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'whisk') {
                const findAnchor = () => {
                    const ANCHORICONPATH = "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l7 7Z";
                    const candidates = Array.from(document.querySelectorAll('button[type="submit"]'));
                    const target = candidates.find(btn => {
                        const icon = btn.querySelector('i');
                        const hasArrowText = icon?.textContent.trim() === 'arrow_forward';
                        const hasArrowPath = btn.querySelector('path')?.getAttribute('d')?.includes("M6.4");
                        return hasArrowText || hasArrowPath;
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    const fallback = document.querySelector('button.sc-bece3008-0');
                    if (fallback) return { element: fallback, type: 'class-selector' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.setProperty('padding', '0', 'important');
                    btn.style.flexShrink = '0';
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'ernie') {
                const findAnchor = () => {
                    const ANCHORICONPATH = " M43,-63.4379997253418 C43,-63.4379997253418 31,-59.6879997253418 31,-59.6879997253418";
                    const path = Array.from(document.querySelectorAll('path')).find(p => {
                        const d = p.getAttribute('d');
                        return d && d.startsWith(ANCHORICONPATH);
                    });
                    if (path) {
                        const anchor = path.closest('.send__slzHSuja');
                        if (anchor) return { element: anchor, type: 'icon-fingerprint' };
                    }
                    const fallbackAnchor = document.querySelector('.send__slzHSuja');
                    if (fallbackAnchor) return { element: fallbackAnchor, type: 'class-fallback' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const anchor = anchorData.element;
                const container = anchor.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginRight = '15px';
                    container.insertBefore(btn, anchor);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'dreamina' || currentPlatform === 'jimengJianying') {
                const findAnchor = () => {
                    const container = document.querySelector('div[class*="toolbar-actions"]');
                    if (container) return { element: container, type: 'container' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    if (container.firstChild) {
                        container.insertBefore(btn, container.firstChild);
                    } else {
                        container.appendChild(btn);
                    }
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'nvidiaNim') {
                const findAnchor = () => {
                    const ANCHORICONPATH = "M0.747,1.623l14.495,6.377";
                    const candidates = Array.from(document.querySelectorAll('button, [role="button"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        return path && path.getAttribute('d')?.startsWith(ANCHORICONPATH);
                    });
                    if (target) return { element: target, type: 'icon-fingerprint' };
                    const textArea = document.querySelector('textarea[data-testid="nv-text-area-element"]');
                    if (textArea && textArea.parentElement) return { element: textArea.parentElement, type: 'fallback-parent' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element;
                if (anchorData.type === 'icon-fingerprint') {
                    container = anchorData.element.parentElement;
                }
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    btn.style.marginBottom = "2px";
                    btn.style.marginRight = "5px";
                    btn.style.setProperty('padding', 'revert', 'important');
                    if (anchorData.type === 'icon-fingerprint') {
                        container.insertBefore(btn, anchorData.element);
                    } else {
                        container.appendChild(btn);
                    }
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'indicArena') {
                const findAnchor = () => {
                    const ANCHOR_ICON_PATH = "M14.536 21.686a.5.5";
                    const candidates = Array.from(document.querySelectorAll('button[type="submit"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('svg path');
                        return path && path.getAttribute('d')?.startsWith(ANCHOR_ICON_PATH);
                    });
                    if (target) return { element: target, type: 'svg-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let container = anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            if (!btn || !insertionPoint) return;
            const editorEl = document.querySelector(platformSelectors[currentPlatform]);
            if (editorEl) {
                setupInlineSuggestion(editorEl);
            } else {
                setTimeout(() => {
                    const retryEditor = document.querySelector(platformSelectors[currentPlatform]);
                    if (retryEditor) setupInlineSuggestion(retryEditor);
                }, 1000);
            }
            currentButton   = elementToInsert;
            const clickable = btn;
            if      (insertionMethod === 'append'){insertionPoint.appendChild(elementToInsert);}
            else if (insertionMethod === 'before'){insertionPoint.parentNode.insertBefore(elementToInsert, insertionPoint);}
            else if (insertionMethod === 'after' ){insertionPoint.parentNode.insertBefore(elementToInsert, insertionPoint.nextSibling);}
            else if (currentPlatform === 'chatglm'){applyChatGLMCustomStyles();}
            else if (currentPlatform === 'grok'){applyGrokCustomStyles();}
            currentMenu = createPromptMenu();
            currentModal = createPromptModal();
            languageModal = createLanguageModal();
            currentPlaceholderModal = createPlaceholderModal();
            infoModal = createInfoModal();
            document.body.appendChild(currentMenu);
            document.body.appendChild(currentModal);
            document.body.appendChild(languageModal);
            document.body.appendChild(currentPlaceholderModal);
            document.body.appendChild(infoModal);
            clickable.addEventListener('click', e => {
                e.stopPropagation();
                e.preventDefault();
                const menu = currentMenu;
                if (menu.classList.contains('visible')) {
                    closeMenu();
                    return;
                }
                refreshMenu().then(() => {
                    positionMenu(menu, clickable);
                    menu.classList.add('visible');
                    setTimeout(() => {
                        const list = menu.querySelector('#prompt-menu-list-el');
                        if (list && list.updateScrollArrows) {
                            list.updateScrollArrows();
                        }
                    }, 250);
                });
            });
            currentModal.querySelector('#__ap_save').onclick = async (e) => {
                e.stopPropagation();
                const index = parseInt(currentModal.dataset.index, 10);
                const title = document.getElementById('__ap_title').value.trim();
                const text = document.getElementById('__ap_text').value.trim();
                const usePlaceholders = document.getElementById('__ap_use_placeholders').checked;
                const autoExecute = document.getElementById('__ap_auto_execute').checked;
                if (!title || !text) { alert(getTranslation('requiredFields')); return; }
                const allPrompts = await getAll();
                let preservedFixed = false;
                if (index > -1 && allPrompts[index]) {
                    preservedFixed = allPrompts[index].isFixed || false;
                }
                const newItem = {
                    title,
                    text,
                    usePlaceholders,
                    autoExecute,
                    isFixed: preservedFixed,
                    activeFileIds: Array.from(currentActiveFileIds)
                };
                const op = index > -1 ? update(index, newItem) : addItem(newItem);
                op.then(() => {
                    hideModal(currentModal);
                    refreshMenu();
                    currentActiveFileIds.clear();
                });
            };
            const handleSaveAndExecute = async (e) => {
                if (!isShortcutPressed(e, 'saveSend')) return;
                e.preventDefault();
                e.stopPropagation();
                const index = parseInt(currentModal.dataset.index, 10);
                const title = document.getElementById('__ap_title').value.trim();
                const text = document.getElementById('__ap_text').value.trim();
                const usePlaceholders = document.getElementById('__ap_use_placeholders').checked;
                const autoExecute = document.getElementById('__ap_auto_execute').checked;
                if (!title || !text) {
                    alert(getTranslation('requiredFields'));
                    return;
                }
                const newItem = {title, text, usePlaceholders, autoExecute, activeFileIds: Array.from(currentActiveFileIds)};
                if (index > -1) {await update(index, newItem);}
                else {await addItem(newItem);}
                hideModal(currentModal);
                currentActiveFileIds.clear();
                refreshMenu();
                if (newItem.usePlaceholders) {openPlaceholderModal(newItem, index);}
                else {insertPrompt(newItem, index);}
            };
            document.getElementById('__ap_title').addEventListener('keydown', handleSaveAndExecute);
            document.getElementById('__ap_text').addEventListener('keydown', handleSaveAndExecute);
            currentModal.querySelector('#__ap_close_prompt').onclick = (e) => {
                e.stopPropagation();
                hideModal(currentModal);
            };
            currentPlaceholderModal.querySelector('#__ap_insert_prompt').onclick = async (e) => {
                e.stopPropagation();
                const isFromInline = currentPlaceholderModal.dataset.fromInline === "true";
                const parseData = JSON.parse(currentPlaceholderModal.dataset.parseData);
                const originalItem = JSON.parse(currentPlaceholderModal.dataset.originalItem);
                const index = parseInt(currentPlaceholderModal.dataset.index, 10);
                let finalText = parseData.processedText;
                const ignoreMap = new Map(parseData.ignoreMap);
                const selectMap = new Map(parseData.selectMap);
                const inputMap = new Map(parseData.inputMap);
                const variablesToApply = [];
                const container = document.getElementById('__ap_placeholders_container');
                inputMap.forEach((data, key) => {
                    const inputEl = container.querySelector(`textarea[data-key="${key}"]`);
                    const val = inputEl ? inputEl.value : '';
                    finalText = finalText.replace(key, val);
                    if (typeof data === 'object' && data.varName) {
                        variablesToApply.push({ name: data.varName, value: val });
                    }
                });
                selectMap.forEach((_data, key) => {
                    const group = container.querySelector(`div[data-select-key="${key}"]`);
                    const checked = Array.from(group.querySelectorAll('input:checked'));
                    const selectedText = checked.map(cb => cb.value).join('\n');
                    finalText = finalText.replace(key, selectedText);
                });
                const applyVariables = (text) => {
                    if (!text) return text;
                    let t = text;
                    variablesToApply.forEach(v => {
                        const escapedVar = v.name.replace(/\$/g, '\\$');
                        const varRegex = new RegExp(escapedVar, 'g');
                        t = t.replace(varRegex, v.value);
                    });
                    return t;
                };
                finalText = applyVariables(finalText);
                ignoreMap.forEach((content, key) => {
                    if (key.startsWith('__QUOTE_')) {
                        const contentWithVars = applyVariables(content);
                        finalText = finalText.replace(key, contentWithVars);
                    }
                    else {
                        finalText = finalText.replace(key, content);
                    }
                });
                if (isFromInline && currentPlaceholderModal._savedCursor) {
                    const saved = currentPlaceholderModal._savedCursor;
                    const editor = document.querySelector(platformSelectors[currentPlatform]);
                    if (editor) {
                        editor.focus();
                        try {
                            if (saved.type === 'input') {
                                if (typeof editor.setSelectionRange === 'function') {
                                    editor.setSelectionRange(saved.start, saved.end);
                                }
                            } else if (saved.type === 'contenteditable' && saved.node) {
                                const sel = window.getSelection();
                                const range = document.createRange();
                                range.setStart(saved.node, saved.offset);
                                range.setEnd(saved.node, saved.offset);
                                sel.removeAllRanges();
                                sel.addRange(range);
                            }
                        } catch(err) {}
                    }
                }
                const finalPrompt = { ...originalItem, text: finalText };
                await insertPrompt(finalPrompt, index, isFromInline, isFromInline);
                currentPlaceholderModal.dataset.fromInline = "false";
                currentPlaceholderModal._savedCursor = null;
                hideModal(currentPlaceholderModal);
            };
            currentPlaceholderModal.querySelector('#__ap_close_placeholder').onclick = (e) => {
                e.stopPropagation();
                hideModal(currentPlaceholderModal);
            };
            currentModal.querySelector('#__ap_info_btn').onclick = (e) => {
                e.stopPropagation();
                showModal(infoModal);
            };
            infoModal.querySelector('#__ap_close_info').onclick = (e) => {
                e.stopPropagation();
                hideModal(infoModal);
            };
            isInitialized = true;
        }
        catch (error) {cleanup();}
        finally {setupPageObserver();}
    }
    const debouncedTryInit = debounce(tryInit, 500);
    function setupPageObserver() {
        if (pageObserver) pageObserver.disconnect();
        pageObserver = new MutationObserver(() => {
            if (!document.body.contains(currentButton)) {
                debouncedTryInit();
            }
        });
        pageObserver.observe(document.body, { childList: true, subtree: true });
    }
    function setupGlobalEventListeners() {
        document.addEventListener('click', ev => {
            if (!currentMenu || !currentButton) return;
            if (ev.target.closest('#prompt-menu-container, [data-testid="composer-button-prompts"]')) return;
            closeMenu();
        });
        document.addEventListener('keydown', ev => {
            if (ev.key === 'Escape') {
                if (currentMenu && currentMenu.classList.contains('visible')) {
                    closeMenu();
                }
                if (currentModal && currentModal.classList.contains('visible')) hideModal(currentModal);
                if (languageModal && languageModal.classList.contains('visible')) hideModal(languageModal);
                if (currentPlaceholderModal && currentPlaceholderModal.classList.contains('visible')) hideModal(currentPlaceholderModal);
            }
            if (isShortcutPressed(ev, 'newPrompt')) {
                ev.preventDefault();
                ev.stopPropagation();
                closeMenu();
                openPromptModal();
            }
            if (isShortcutPressed(ev, 'listPrompts')) {
                ev.preventDefault();
                ev.stopPropagation();
                if (currentMenu && currentMenu.classList.contains('visible')) {
                    closeMenu();
                } else {
                    if (currentButton) currentButton.click();
                }
            }
            if (isShortcutPressed(ev, 'enhancePrompt')) {
                ev.preventDefault();
                ev.stopPropagation();
                handleInstantPageEnhancement();
            }
        });
        window.addEventListener('resize', debounce(() => {
            if (currentMenu && currentMenu.classList.contains('visible')) {
                positionMenu(currentMenu, currentButton);
            }
        }, 100));
    }
    function tryInit() {
        if (isInitializing) return;
        if (isInitialized && currentButton && document.body.contains(currentButton) && currentPlatform === detectPlatform()) {
            return;
        }
        isInitializing = true;
        initUI().finally(() => { isInitializing = false; });
    }
    async function start() {
        await determineLanguage();
        loadShortcuts()
        loadPredictionConfig();
        loadNavConfig();
        GM_registerMenuCommand(`⚙️ ${getTranslation('settings')}`, () => {
            if (!settingsModal) {
                settingsModal = createSettingsModal();
                document.body.appendChild(settingsModal);
            }
            if (settingsModal.resetToCurrent) settingsModal.resetToCurrent();
            showModal(settingsModal);
        });
        await loadAIConfig();
        await loadImportedThemes();
        await loadThemeConfig();
        injectGlobalStyles();
        setupGlobalEventListeners();
        tryInit();
    }
    start();
})();