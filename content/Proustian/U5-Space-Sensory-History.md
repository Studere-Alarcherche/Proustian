---
title: "U5: Space, Sensory History, and Social Time"
description: "Rooms, smell, sound, social space, and historical atmosphere."
tags:
  - Proustian
  - Course
  - Reading-Garden
---

<style>
    :root {
      /* U5 Inspired Color Palette - Spatial, Sensory, and Historical */
      --bg: #f5f4f0;               /* Parchment/Historical base */
      --paper: #ffffff;
      --ink: #2c2825;              /* Soft dark brown/black */
      --muted: #736b63;
      --line: #e3ddd5;
      
      --accent-corbin-bell: #4a5c68;   /* Slate/Iron - Bells and Sound */
      --accent-corbin-smell: #8c4a4a;  /* Muted Crimson - The Foul and Fragrant */
      --accent-proust-room: #997b4d;   /* Antique Gold - Salons and Rooms */
      --accent-balbec: #4b6b72;        /* Marine Blue - Sea and Hotel */
      --accent-charlus: #5a3c5a;       /* Deep Violet - Social Underground */

      --heat-glow: rgba(140, 74, 74, 0.12);
      --heat-border: #8c4a4a;

      --radius: 12px;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --font-serif: "Georgia", "Times New Roman", serif;
      --max: 1200px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      background-color: var(--bg);
      color: var(--ink);
      font-family: var(--font-sans);
      line-height: 1.7;
      padding: 40px 20px;
      background-image: radial-gradient(var(--line) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    .container {
      max-width: var(--max);
      margin: 0 auto;
    }

    /* Header */
    .header {
      text-align: center;
      margin-bottom: 60px;
      padding: 60px 40px;
      background: var(--paper);
      border-radius: var(--radius);
      box-shadow: 0 16px 44px rgba(44, 40, 37, 0.06);
      border: 1px solid var(--line);
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, var(--accent-corbin-bell), var(--accent-corbin-smell), var(--accent-proust-room), var(--accent-balbec), var(--accent-charlus));
    }

    .unit-label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-corbin-smell);
      font-weight: 700;
      margin-bottom: 15px;
      display: block;
    }

    .header h1 {
      font-size: clamp(2rem, 3.8vw, 3.2rem);
      margin: 0 0 20px 0;
      color: var(--ink);
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-family: var(--font-serif);
    }

    .header p {
      font-size: 1.15rem;
      color: var(--muted);
      max-width: 880px;
      margin: 0 auto;
    }

    /* Masonry Grid for Packs */
    .pack-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      gap: 30px;
      align-items: start;
    }

    /* Pack Section Base */
    .packet-section {
      background: var(--paper);
      border-radius: var(--radius);
      padding: 40px;
      box-shadow: 0 10px 30px rgba(44, 40, 37, 0.03);
      border: 1px solid var(--line);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .packet-section:hover {
      box-shadow: 0 20px 40px rgba(44, 40, 37, 0.08);
    }

    /* Top Bars for different theorists/themes */
    .theme-bell { border-top: 4px solid var(--accent-corbin-bell); }
    .theme-smell { border-top: 4px solid var(--accent-corbin-smell); }
    .theme-room { border-top: 4px solid var(--accent-proust-room); }
    .theme-balbec { border-top: 4px solid var(--accent-balbec); }
    .theme-charlus { border-top: 4px solid var(--accent-charlus); }

    .pack-header {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .theorist-tag {
      align-self: flex-start;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 15px;
      background: var(--bg);
      color: var(--muted);
      border: 1px solid var(--line);
    }

    .theme-bell .theorist-tag { color: var(--accent-corbin-bell); border-color: rgba(74, 92, 104, 0.3); background: rgba(74, 92, 104, 0.05); }
    .theme-smell .theorist-tag { color: var(--accent-corbin-smell); border-color: rgba(140, 74, 74, 0.3); background: rgba(140, 74, 74, 0.05); }
    .theme-room .theorist-tag { color: #80653d; border-color: rgba(153, 123, 77, 0.4); background: rgba(153, 123, 77, 0.05); }
    .theme-balbec .theorist-tag { color: var(--accent-balbec); border-color: rgba(75, 107, 114, 0.3); background: rgba(75, 107, 114, 0.05); }
    .theme-charlus .theorist-tag { color: var(--accent-charlus); border-color: rgba(90, 60, 90, 0.3); background: rgba(90, 60, 90, 0.05); }

    h2 { font-size: 1.6rem; margin: 0; letter-spacing: -0.01em; color: var(--ink); }

    /* Core Pressure */
    .core-pressure {
      font-family: var(--font-serif);
      font-size: 1.1rem;
      font-style: italic;
      color: var(--ink);
      background: var(--bg);
      padding: 20px 25px;
      border-radius: 8px;
      border-left: 3px solid var(--muted);
      margin: 0 0 25px 0;
    }

    /* Interactive Questions */
    .question-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 25px;
    }

    .interactive-q {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 18px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
    }

    .interactive-q:hover {
      background: var(--bg);
      border-color: #c9c1b7;
    }

    .interactive-q.heated {
      border-color: var(--heat-border);
      background: var(--paper);
      box-shadow: 0 4px 15px var(--heat-glow), inset 3px 0 0 var(--heat-border);
    }

    .interactive-q.heated::after {
      content: "🔥";
      position: absolute;
      top: -10px;
      right: 10px;
      font-size: 1.2rem;
      background: var(--paper);
      border-radius: 50%;
      padding: 2px;
    }

    .q-text { font-size: 1.05rem; color: var(--ink); line-height: 1.5; }
    .q-sub { font-size: 0.85rem; color: var(--muted); margin-top: 8px; font-style: italic; }

    /* Scene Anchors */
    .anchor-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 25px;
    }

    .anchor-tag {
      background: #eeebe6;
      color: var(--muted);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-family: monospace;
      border: 1px solid var(--line);
      cursor: crosshair;
      transition: all 0.2s ease;
    }

    .anchor-tag:hover {
      background: var(--ink);
      color: white;
      border-color: var(--ink);
    }

    /* Seed Boxes */
    .seed-module {
      background: var(--ink);
      border-radius: 8px;
      padding: 25px;
      color: white;
      position: relative;
    }

    .seed-header { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #a49e98; margin-bottom: 12px; }
    .seed-text { font-family: var(--font-serif); font-size: 1.1rem; line-height: 1.6; margin-bottom: 15px;}
    
    .blank {
      display: inline-block;
      min-width: 80px;
      border-bottom: 1px solid rgba(255,255,255,0.5);
      margin: 0 4px;
    }

    .reveal-btn {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: #e3ddd5;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.8rem;
      transition: background 0.2s;
      width: 100%;
      text-align: left;
    }
    .reveal-btn:hover { background: rgba(255,255,255,0.15); }

    .chinese-seed {
      display: none;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px dashed rgba(255,255,255,0.15);
      font-size: 0.95rem;
      color: #c9c1b7;
      line-height: 1.7;
    }

    .chinese-seed.active { display: block; animation: fadeIn 0.3s ease; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 900px) {
      .pack-grid { grid-template-columns: 1fr; }
    }
  </style>

<div class="container">
  <div class="header">
    <span class="unit-label">Proustian 2.0 | Unit 5</span>
    <h1>SPACE, SENSORY HISTORY, AND SOCIAL TIME</h1>
    <p>Unit 5 bridges private sensation and historical form. How do rooms, smells, bells, and salons function not as mere settings, but as spatial machines that produce class, atmosphere, and social time? A decentralized, roaming digital paper. Scan the 10 micro-packs below. Click the questions that generate heat. Use the scene anchors and bilingual seeds to extract the historical mechanics of Proust's prose.</p>
  </div>

  <div class="pack-grid">

    <!-- PACK 1 -->
    <div class="packet-section theme-bell">
      <div class="pack-header">
        <span class="theorist-tag">01. Corbin / Auditory Territory</span>
        <h2>The Architecture of Sound</h2>
      </div>
      <div class="core-pressure">
        "Corbin argues that bells define an auditory space, marking the limits of the village and organizing collective time. How does the steeple of Saint-Hilaire in Combray function not just as an image, but as a centralizing acoustic authority?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the twin strokes of the steeple of Saint-Hilaire. How do they dictate the precise rhythm of the family’s Saturday lunch and afternoon walk?</div>
          <div class="q-sub">声音的律令：钟声如何作为不可违抗的权威，统御着贡布雷的日常作息？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the ringing bell separate the "inside" (mutual acquaintance, the village) from the "outside" (the alien, the exiled)?</div>
          <div class="q-sub">听觉的领地：钟声的覆盖范围，如何成为了一种划分“我们”与“他者”的声学边界？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Compare this to the "timid, oval, golden" sound of the visitors' bell. How do different acoustic signals choreograph different social responses (e.g., Swann's arrival)?</div>
          <div class="q-sub">访客的铃声：那串“金色的、卵形的”微小声音，如何启动了一套精密的家庭防御与社交机制？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_03_combray_space_rooms_church</div>
        <div class="anchor-tag">📍 Corbin-U5-01-bells-soundscape</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Reading Combray through Corbin's history of village bells reveals that sound in Proust is profoundly territorial. The steeple of Saint-Hilaire does not merely strike the hour; it acts as a <span class="blank"></span>, synchronizing the entire community and enforcing a specific <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “借助科尔班对钟声的听觉历史学分析，我们发现贡布雷的钟声绝非浪漫的田园点缀，而是一种强烈的‘领土宣告’。当圣伊莱尔教堂的钟声敲响时，它实际上是在<span class="blank"></span>。这种声音的覆盖网，不仅将整个小镇的居民统一在同一种社会时间里，更在无形中筑起了一道抵御外界的声学高墙……”
        </div>
      </div>
    </div>

    <!-- PACK 2 -->
    <div class="packet-section theme-smell">
      <div class="pack-header">
        <span class="theorist-tag">02. Corbin / Domestic Atmospheres</span>
        <h2>The Edible Room</h2>
      </div>
      <div class="core-pressure">
        "Before modern deodorization, the bourgeoisie enclosed themselves in hyper-scented, stagnant domestic spaces. How does Aunt Léonie’s bedroom operate as an olfactory incubator, transforming stale air into a 'country pie'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze the "appetising smells with which the air of the room was thickly clotted." How does Proust merge the acts of breathing and eating in this space?</div>
          <div class="q-sub">可食用的空气：房间里的气味是如何像面团一样被火炉“烘烤”，变成一个巨大馅饼的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the extreme olfactory density of the bedroom function as a barrier against the "catastrophic deluge" of the outside world (winter, rain, the unknown)?</div>
          <div class="q-sub">气味的堡垒：莱奥妮姑妈房间里那种“令人窒息的稠密感”，是如何提供一种病态的安全感的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">According to Corbin, how did domestic ventilation and deodorization eventually destroy this very specific 19th-century intimacy?</div>
          <div class="q-sub">感官的现代化：现代卫生的通风理念，杀死了何种“内部空间的诗意”？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_01_combray_space_rooms_church</div>
        <div class="anchor-tag">📍 11-Ch10-Domestic-Atmospheres</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Aunt Léonie's bedroom is an olfactory masterpiece of the 19th century. Using Corbin’s concept of 'domestic atmospheres', we can see that the clotted, fruity smell of the room is not a sign of poor hygiene, but rather an intentional <span class="blank"></span>, designed to keep the outside world at bay and foster <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “莱奥妮姑妈的房间是一个名副其实的嗅觉孵化器。结合科尔班的‘家庭氛围’史，我们可以看出，那种被火炉烤得黏稠、令人作呕却又充满果香的空气，并不是因为缺乏卫生观念。相反，这种‘气味的闭环’是一种精心的防卫机制。它像蚕茧一样包裹着姑妈，通过极端的气味浓度来隔绝<span class="blank"></span>，从而确立了绝对的室内统治权……”
        </div>
      </div>
    </div>

    <!-- PACK 3 -->
    <div class="packet-section theme-balbec">
      <div class="pack-header">
        <span class="theorist-tag">03. Proust / Resort Space</span>
        <h2>The Glass Aquarium of Class</h2>
      </div>
      <div class="core-pressure">
        "The Grand Hotel at Balbec is an architecture of modern visibility. With its massive plate-glass windows facing the sea, how does it stage a brutal, silent theater of social inequality between those eating inside and those watching from the dark?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the metaphor of the dining room as a brightly lit aquarium. How does the glass wall enforce a rigid separation while maintaining total visibility?</div>
          <div class="q-sub">阶级的水族箱：一堵透明的玻璃，如何比石墙更残酷地划定了“看”与“被看”、“食客”与“饥民”的界限？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "blinding light of the beach" alter social distinctions, making aristocratic women and bourgeois girls momentarily indistinguishable?</div>
          <div class="q-sub">海滩的民主化：海滨胜地的强光，是如何暂时熔断了巴黎那种森严的社会符号系统的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does the narrator feel a "passionate curiosity" toward the strangers passing by, unshielded by the Combray network of mutual acquaintance?</div>
          <div class="q-sub">匿名的诱惑：在脱离了熟人社会的巴尔贝克，面对完全未知的他者，欲望是如何被重新点燃的？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_06_balbec_place_sea_hotel</div>
        <div class="anchor-tag">📍 U5_05_balbec_place_sea_hotel</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"At Balbec, the architecture of the Grand Hotel materializes the social structure. The plate glass of the dining room operates as a transparent but impenetrable <span class="blank"></span>, creating a cruel diorama where the poor outside watch the wealthy inside feed like <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “巴尔贝克大饭店的空间结构，就是 19 世纪末阶级政治的微缩模型。那面巨大的落地玻璃窗，将餐厅变成了一个光鲜亮丽的水族箱。通过这种‘绝对可见但绝对隔离’的建筑设计，普鲁斯特无情地展示了社会财富的傲慢：里面的权贵像奇异的鱼类一样被展示，而外面的穷人则被隔绝在<span class="blank"></span>之中。在这里，风景不仅是审美的，更是权力的……”
        </div>
      </div>
    </div>

    <!-- PACK 4 -->
    <div class="packet-section theme-room">
      <div class="pack-header">
        <span class="theorist-tag">04. Proust / Social Topology</span>
        <h2>The Incomprehensible Province</h2>
      </div>
      <div class="core-pressure">
        "Society is not a unified whole, but a patchwork of 'separate provinces' created by Time. How do the Guermantes actively maintain their incomprehensibility to outsiders as a form of social domination?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the concept of the "Guermantes wit." Why must it be treated as a localized, non-transferable commodity, "like the minced pork of Tours"?</div>
          <div class="q-sub">不可译的谈吐：盖尔芒特家的“机智”，为何必须像某种地方特产一样，拒绝被外人真正理解？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the Duchess's use of obscure names and "ancient history" (e.g., Mme de Varambon) create a poetry of the incomprehensible that humiliates newcomers like Bloch?</div>
          <div class="q-sub">黑话的权力：公爵夫人如何通过抛出那些早已死去的、无人知晓的贵族名字，在沙龙里建立起知识的鄙视链？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the spatial hostility of the Courvoisiers towards the Guermantes' guests demonstrate the viciousness of micro-distinctions within the same class?</div>
          <div class="q-sub">内部的裂痕：为何同一个阶级内部的倾轧（如库尔沃西耶家族对盖尔芒特的嫉妒），比跨阶级的冲突更加致命？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_13_guermantes_social_space</div>
        <div class="anchor-tag">📍 U5_14_guermantes_social_space</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Proust maps the Guermantes salon not as a room, but as a sovereign state. By cultivating a highly specific 'wit' and relying on a lexicon of forgotten names, the Duchess enforces a profound <span class="blank"></span>, deliberately making her social sphere incomprehensible to those who arrive <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “盖尔芒特沙龙并不是一个开放的社交场，而是一个被时间封锁的‘独立行省’。公爵夫人深谙社交隔离的拓扑学。当她对着布洛克谈论起那些无人知晓的陈年旧事时，她实际上是在利用‘不可解（the incomprehensible）’的诗意来行使权力。这种地方性的黑话体系，确保了任何新来者都会被立刻辨认出其<span class="blank"></span>的身份……”
        </div>
      </div>
    </div>

    <!-- PACK 5 -->
    <div class="packet-section theme-bell">
      <div class="pack-header">
        <span class="theorist-tag">05. Proust / Acoustic Memory</span>
        <h2>The Tactile Soundscape</h2>
      </div>
      <div class="core-pressure">
        "How do the mechanical, urban sounds of the modern city (tramcars, motors) act upon the isolated body in the bedroom, transforming noise into a 'dazzling sun of sound' or a spatial map?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When the sick narrator adjusts the wads of cotton-wool in his ears, how does he "press the pedals" of the outer world's sonority?</div>
          <div class="q-sub">听觉的调音板：塞在耳朵里的棉花，是如何让卧病在床的主人公掌握了对整个巴黎街道噪音的“控制权”的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the "singing tram-cars" and the horns of passing motors. How does the text translate these harsh industrial noises into a poetic "military summons" to live?</div>
          <div class="q-sub">工业噪音的诗化：电车与汽车喇叭声，如何取代了自然的鸟鸣，成为召唤欲望与生命力的现代晨钟？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does sound function as a "continuous narrative" that describes the invisible street to the confined body?</div>
          <div class="q-sub">看不见的剧场：对于被囚禁在房间里的人来说，声音如何替代了视觉，为他描绘出了一幅流动的城市地形图？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_23_sensory_history_smell_sound</div>
        <div class="anchor-tag">📍 U5_20_sensory_history_smell_sound</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"In Proust, the soundscape of the modern city invades the domestic interior. The noise of tramcars is not mere disruption; it acts as an acoustic <span class="blank"></span>, transmitting the energy of the street directly into the sick man's room, transforming his bed into a <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “在这段极具现象学意味的描写中，听觉取代了视觉成为了感知世界的主导。生病的主人公虽然被困在床上，但他通过调整耳中的棉花，就像踩下钢琴的踏板一样，精妙地调节着巴黎街道传来的声响。电车的声音不再是纯粹的工业噪音，而是化作了<span class="blank"></span>，穿透墙壁，将外部那生机勃勃的城市图景强行注射进了封闭的卧室……”
        </div>
      </div>
    </div>

    <!-- PACK 6 -->
    <div class="packet-section theme-smell">
      <div class="pack-header">
        <span class="theorist-tag">06. Corbin / Social Emanations</span>
        <h2>The Stench of the Poor</h2>
      </div>
      <div class="core-pressure">
        "Smell is a political instrument. Corbin shows how the 19th-century bourgeoisie used 'olfactory vigilance' to pathologize the poor. How does Proust echo this in the sharp sensory boundaries between classes?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Corbin argues that a delicate nose proved one's "ignorance of the sweat of hard labor." How does Françoise's or the peasants' relation to smell differ from the narrator's hyper-aestheticized nose?</div>
          <div class="q-sub">阶级的嗅觉：为什么“对气味敏感”成为了不用从事体力劳动的资产阶级的特权标志？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "stench of the poor" serve as a miasma that justifies spatial segregation (urban zoning, separate quarters for servants)?</div>
          <div class="q-sub">气味的隔离带：底层人民的“气味”，是如何在物理空间中被用作正当化阶级隔离的借口的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Look at the public bathroom or street encounters. How does an unexpected smell violently expose a social reality the intellect wants to ignore?</div>
          <div class="q-sub">气味的刺穿：那些突如其来的恶臭，是如何撕破了上流社会的温情面纱的？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 10-Ch09-Stench-of-the-Poor</div>
        <div class="anchor-tag">📍 04-Ch03-Social-Emanations</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Corbin’s historical analysis reveals that smell is not politically neutral. The 'olfactory vigilance' of the 19th century transformed the natural sweat of the working class into a <span class="blank"></span>, using hygiene to enforce an absolute <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “气味从来都不只关乎美学，它关乎政治。科尔班向我们揭示了 19 世纪的‘嗅觉警惕’是如何将穷人身上的汗味病理化的。在普鲁斯特的文本深处，我们也常常能察觉到这种隐秘的感官阶级论：资产阶级的精致鼻子，实际上是一台用来<span class="blank"></span>的扫描仪。‘除臭’的卫生要求，成为了在城市空间中驱赶底层、划定阶级隔离带的最有效工具……”
        </div>
      </div>
    </div>

    <!-- PACK 7 -->
    <div class="packet-section theme-charlus">
      <div class="pack-header">
        <span class="theorist-tag">07. Proust / Subterranean Networks</span>
        <h2>The Topography of Sodom</h2>
      </div>
      <div class="core-pressure">
        "Beneath the visible maps of Paris and Balbec lies an invisible, parallel geography structured by sexual inversion. How does M. de Charlus navigate and dominate this subterranean space that defies standard class boundaries?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze Charlus's intense, dilated gaze at the young Marcel in Balbec. How does his look function as a coded "radar" searching for a specific sign within the public space?</div>
          <div class="q-sub">同性恋的雷达：夏尔吕斯在海滨的眼神，如何像间谍或疯子一样，在人群中发送和接收着隐秘的信号？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Charlus's vice create a "freemasonry" that connects a Guermantes aristocrat with tailors, waiters, and a violinist (Morel), short-circuiting traditional social hierarchies?</div>
          <div class="q-sub">情欲的跨阶级性：隐秘的欲望法则，是如何轻易击穿了连金钱和头衔都无法跨越的阶级壁垒的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the scene where Charlus hides in Jupien's brothel. How does this space of illicit desire serve as the dark mirror (the inversion) of the Guermantes' elegant salon?</div>
          <div class="q-sub">沙龙的暗面：男妓院的空间结构，在哪些意义上构成了上流贵族聚会的倒影与嘲讽？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_15_charlus_social_signs</div>
        <div class="anchor-tag">📍 U5_16_charlus_social_signs</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Charlus does not merely exist in Paris; he inhabits a parallel dimension. His 'malady' forces him to read the city through a different set of coordinates, creating a subterranean network where desire successfully overrides <span class="blank"></span>, making a tailor more significant than a <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “夏尔吕斯男爵的游荡，为《追忆》绘制了一幅‘所多玛’的地下地形图。在这个由同性欲望编织的秘密网络中，地表的阶级法则失效了。通过解读他那狂热、闪烁的眼神和夸张的举止，我们发现，情欲的共谋（freemasonry）建立起了一种超越血统和财富的全新联结。在这个不可见的暗网里，一个电梯男孩的地位，完全可能高于<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 8 -->
    <div class="packet-section theme-room">
      <div class="pack-header">
        <span class="theorist-tag">08. Proust / Somatic Memory</span>
        <h2>The Architecture of the Body</h2>
      </div>
      <div class="core-pressure">
        "When waking in an unfamiliar room, the intellect fails completely. It is the physical body—the thighs, the ribs, the shoulders—that must 'remember' and forcibly align the new space. How does the body act as a spatial archive?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When Marcel creates a woman out of "some misplacing of my thigh," how does the body's posture hallucinate a missing presence based on past physical habits?</div>
          <div class="q-sub">肉身的幻觉：睡眠中一条腿的错误摆放，如何让身体“无中生有”地召唤出一个女人？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Contrast the "memory of the intellect" (which gives a flat, voluntary picture) with the profound disorientation required for the body to authentically reclaim a lost space.</div>
          <div class="q-sub">理智的苍白：为什么大脑主动回忆起的房间只是一张二维的废纸，而身体的惊跳却能重建四维的宇宙？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does arriving at a new hotel room in Balbec act as an act of violence against the body, demanding a painful, multi-day process of spatial habituation?</div>
          <div class="q-sub">陌生物理的暴力：搬入巴尔贝克新房间的那个夜晚，为何被描写得如同经历一场残酷的外科手术？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_02_sleep_waking_rooms</div>
        <div class="anchor-tag">📍 02-awakening-lost-space-localization</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Before the brain can remember the year, the body must remember the room. Proust demonstrates that the self is not a continuous mental narrative, but a fragile collection of physical habits. Awakening in a strange place forces the body to <span class="blank"></span>, exposing how much our identity relies on <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特是对笛卡尔‘我思故我在’的最彻底的反叛。在那些从黑暗中猛然惊醒的瞬间，‘我思（智力）’彻底瘫痪了，真正出面接管局面的是‘我在（肉身）’。身体的肌肉、骨骼和触觉，像盲人的拐杖一样在虚无中摸索，强行将天花板和门把手拉回正确的位置。这证明了我们的主体性并非储存在大脑的意识流里，而是深刻地铭刻在<span class="blank"></span>之中……”
        </div>
      </div>
    </div>

    <!-- PACK 9 -->
    <div class="packet-section theme-balbec">
      <div class="pack-header">
        <span class="theorist-tag">09. Proust / Imaginary Geography</span>
        <h2>The Name vs. The Paving Stones</h2>
      </div>
      <div class="core-pressure">
        "A Name (Guermantes, Parma, Balbec) is a sealed, perfect linguistic space. But the moment the narrator actually visits the place or meets the person, the material reality destroys the phonetic poetry. How does spatial desire guarantee disappointment?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine how the syllables of "Guermantes" initially conjure a mythical forest, a feudal castle, and an ancient lineage, entirely devoid of any "opaque, material element."</div>
          <div class="q-sub">语言的炼金术：“盖尔芒特”这几个音节，是如何在童年马塞尔的脑海中建造起一座悬浮在半空中的城堡的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When Marcel finally sees the actual Hôtel de Guermantes in Paris, or meets the Duchess, why is the specific *physicality* of the stones or her flesh felt as an intolerable lack?</div>
          <div class="q-sub">遭遇物质的悲剧：为什么当神话般的公爵夫人化身为一个长着雀斑、穿着时装的具体女人时，欲望就破灭了？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "Name" function similarly to Deleuze's "Worldly Sign"—full of associative promise, but ultimately empty at its core?</div>
          <div class="q-sub">空转的能指：“名字”如何像一个极其精美的空壳，吸引着我们耗费一生去寻找那个根本不存在的所指？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U5_12_guermantes_social_space</div>
        <div class="anchor-tag">📍 U2_11_names_and_imagination</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Proustian geography is primarily phonetic, not physical. The name of a place operates as a magical container that absorbs all historical and aesthetic fantasies. Consequently, the actual act of traveling to Balbec or Guermantes is inherently traumatic, because the physical stones must inevitably <span class="blank"></span> the perfection of the <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “在普鲁斯特的认知地图上，词语（名字）的疆域永远大于现实。‘巴尔贝克’或‘盖尔芒特’不是地理学上的存在，而是欲望的投射区。它们被童年的马塞尔塞满了关于哥特式教堂、波浪和封建领主的完美幻想。因此，任何一次真实的旅行或会面，本质上都是一场无可避免的灾难。因为坚硬的铺路石和凡人的肉身，注定会无情地戳破那层由<span class="blank"></span>吹起的华丽肥皂泡……”
        </div>
      </div>
    </div>

    <!-- PACK 10 -->
    <div class="packet-section theme-smell">
      <div class="pack-header">
        <span class="theorist-tag">10. Synthesis / Sensory History</span>
        <h2>History in a Bead of Sweat</h2>
      </div>
      <div class="core-pressure">
        "History is traditionally written through battles, dates, and treaties. By focusing on changing smells, the rhythm of bells, and the micro-politics of the salon, how does Proust invent a profound 'history of mentalities' (Annales school)?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Proust trace the tectonic shifts of the Dreyfus Affair or World War I not through battlefields, but through changes in salon guest lists and conversational codes?</div>
          <div class="q-sub">沙龙里的微观战争：德雷福斯事件或一战的巨变，是如何在公爵夫人客厅的宾客名单和闲话中被精确折射出来的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider Corbin’s argument that smells and sounds anchor social representations. How does Proust’s novel function as the ultimate archive of a vanished 19th-century sensorium?</div>
          <div class="q-sub">感官的档案馆：如果抽离了那些关于霉味、钟声和山楂花的气味描写，我们失去的是怎样一部 19 世纪的精神史？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why is the *body* (with its involuntary memories, reflexes, and sudden alienations) a more accurate historical record than the intellect?</div>
          <div class="q-sub">身体即编年史：为何比起理性的备忘录，肉身那无法作伪的惊跳与回忆，才是最忠实的刻录机？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 14-Ch13-Laughter-in-a-Bead-of-Sweat</div>
        <div class="anchor-tag">📍 11-Ch09-Deduced-to-Proclaimed</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Synthesizing U5, we see that Proust is an avant-garde historian of the senses. Instead of documenting political events directly, he captures the macro-historical shifts of French society through the micro-fluctuations of <span class="blank"></span>. The true history of an era, Corbin and Proust suggest, is encoded in its <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “对 U5 的总结让我们看到，普鲁斯特不仅是小说家，更是年鉴学派（Annales）意义上的‘心态史学家’。他不写王侯将相的丰功伟绩，而是把历史的巨变塞进了维尔迪兰夫人的一声咳嗽、夏尔吕斯男爵的一丝眼波，以及贡布雷的某一种特定的潮湿霉味中。他和科尔班共同证明了：一个时代的深层真理并不写在官方的文书上，而是被秘密地封印在人们的<span class="blank"></span>之中。解码这些感官，就是重写历史……”
        </div>
      </div>
    </div>

  </div> <!-- End pack-grid -->

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Proustian U5 Traversal Pack loaded.");
    // Interactive questions toggle logic is handled inline via onclick="this.classList.toggle('heated')"
  });
</script>
