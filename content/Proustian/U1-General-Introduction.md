---
title: "U1: General Introduction"
description: "From the memory cliché to polycentric reading."
tags:
  - Proustian
  - Course
  - Reading-Garden
---

<style>
    :root {
      /* U1 Inspired Color Palette - Methodological, Grounding, and Polycentric */
      --bg: #f7f9fc;               /* Cool light blue/grey base */
      --paper: #ffffff;
      --ink: #1a202c;              /* Deep obsidian */
      --muted: #64748b;
      --line: #e2e8f0;
      
      --accent-deleuze: #2c5282;   /* Deep Slate Blue - Signs & Apprenticeship */
      --accent-landy: #9b2c2c;     /* Terracotta Red - Fiction & Training */
      --accent-proust: #b7791f;    /* Antique Gold - Textual Anchors */
      --accent-method: #2f855a;    /* Forest Green - Kite-Line Reading */
      --accent-art: #553c9a;       /* Deep Purple - Art Signs & Synthesis */

      --heat-glow: rgba(44, 82, 130, 0.12);
      --heat-border: #2c5282;

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
      box-shadow: 0 16px 44px rgba(26, 32, 44, 0.05);
      border: 1px solid var(--line);
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, var(--accent-deleuze), var(--accent-landy), var(--accent-proust), var(--accent-method), var(--accent-art));
    }

    .unit-label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-method);
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
      box-shadow: 0 10px 30px rgba(26, 32, 44, 0.03);
      border: 1px solid var(--line);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .packet-section:hover {
      box-shadow: 0 20px 40px rgba(26, 32, 44, 0.08);
    }

    /* Top Bars for different theorists/themes */
    .theme-deleuze { border-top: 4px solid var(--accent-deleuze); }
    .theme-landy { border-top: 4px solid var(--accent-landy); }
    .theme-proust { border-top: 4px solid var(--accent-proust); }
    .theme-method { border-top: 4px solid var(--accent-method); }
    .theme-art { border-top: 4px solid var(--accent-art); }

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

    .theme-deleuze .theorist-tag { color: var(--accent-deleuze); border-color: rgba(44, 82, 130, 0.3); background: rgba(44, 82, 130, 0.05); }
    .theme-landy .theorist-tag { color: var(--accent-landy); border-color: rgba(155, 44, 44, 0.3); background: rgba(155, 44, 44, 0.05); }
    .theme-proust .theorist-tag { color: var(--accent-proust); border-color: rgba(183, 121, 31, 0.4); background: rgba(183, 121, 31, 0.05); }
    .theme-method .theorist-tag { color: var(--accent-method); border-color: rgba(47, 133, 90, 0.3); background: rgba(47, 133, 90, 0.05); }
    .theme-art .theorist-tag { color: var(--accent-art); border-color: rgba(85, 60, 154, 0.3); background: rgba(85, 60, 154, 0.05); }

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
      border-color: #cbd5e1;
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
      background: #f1f5f9;
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

    .seed-header { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 12px; }
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
      color: #e2e8f0;
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
      color: #cbd5e1;
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
    <span class="unit-label">Proustian 2.0 | Unit 1</span>
    <h1>METHOD, RHIZOME, AND APPRENTICESHIP</h1>
    <p>A decentralized, roaming digital paper. U1 is the methodological entrance. It dismantles the cliché that Proust is solely about "memory," replacing it with an active apprenticeship in decoding signs, cognitive training, and forced thought. Scan the 10 micro-packs below. Click the questions that generate heat. Use the scene anchors and bilingual seeds to establish your Kite-Line Reading.</p>
  </div>

  <div class="pack-grid">

    <!-- PACK 1 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">01. Deleuze / Apprenticeship</span>
        <h2>The Anti-Memory Novel</h2>
      </div>
      <div class="core-pressure">
        "What constitutes the unity of In Search of Lost Time? We know, at least, what does not. It is not recollection, memory, even involuntary memory... Proust’s work is based not on the exposition of memory, but on the apprenticeship to signs."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If the novel is an "apprenticeship," what exactly does the young Marcel need to learn that he does not know at the start?</div>
          <div class="q-sub">如果小说是一个“学徒期”，那么年轻的马塞尔在开头欠缺的究竟是什么“知识”？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze argue that memory is merely a "secondary" faculty, arriving too late to do the real work of interpretation?</div>
          <div class="q-sub">记忆的迟到：为什么德勒兹认为记忆只是一种次要的官能，总是错失破译符号的最佳时机？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does reading the Combray sleep passages as an "apprenticeship" alter them from being mere nostalgic reveries?</div>
          <div class="q-sub">打破乡愁：将贡布雷的失眠视为一种“学徒的受苦”，如何改变了我们对这些唯美段落的阅读？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 02-apprenticeship</div>
        <div class="anchor-tag">📍 U1_01_combray_opening_sleep_habit</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"By reading Proust through Deleuze's concept of apprenticeship, we realize the Search is not a passive memoir. When Marcel wakes in the dark, he is not merely remembering; he is <span class="blank"></span>, proving that time lost is actually time spent <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “通过德勒兹‘学徒期’的透镜，我们必须抛弃将《追忆》视为怀旧自传的陈词滥调。当马塞尔在黑暗的房间中醒来、绝望地试图弄清自己在哪里时，他并不是在沉湎于记忆。他正在经历一场严苛的<span class="blank"></span>。这也证明了，那些看似被浪费掉的时间（Lost Time），实际上是主人公用来<span class="blank"></span>的必经之路……”
        </div>
      </div>
    </div>

    <!-- PACK 2 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">02. Deleuze / Forced Thought</span>
        <h2>The Violence of the Sign</h2>
      </div>
      <div class="core-pressure">
        "The philosopher readily presupposes that the mind naturally seeks the truth. Proust sets up an image of thought in opposition to that... Thought is nothing without something that forces and does violence to it."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "violence" of a sign differ from the logical operations of classical philosophy (the Cartesian or Socratic method)?</div>
          <div class="q-sub">反理性主义：符号的“暴力”，是如何击碎了古典哲学（如笛卡尔或苏格拉底）关于“主动求知”的神话的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Find a moment where Swann or Marcel is "forced" to think by a sudden shock (e.g., a lie, an unreadable face). Why does goodwill fail them here?</div>
          <div class="q-sub">善意的失效：找出斯万或马塞尔被某个突如其来的谎言“逼迫”着去思考的瞬间。为什么主观上的善意在这里毫无用处？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If intelligence "always comes after," what faculty is actually the first to receive the wound of the sign?</div>
          <div class="q-sub">理智的滞后：如果智力“总是迟到”，那么究竟是哪种官能最先承受了符号的创伤？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 10-image-of-thought</div>
        <div class="anchor-tag">📍 07-truth-as-forced-thought</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Proust destroys the classical image of thought. In the Search, truth is never achieved by a willing intellect. When Swann is confronted with Odette's lie, his thought is <span class="blank"></span>, demonstrating that true interpretation only begins under the condition of <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特彻底颠覆了古典的思维意象。在《追忆》中，真理从来不是一颗善意的大脑主动求索的结果。当斯万面对奥黛特那漏洞百出的谎言时，他的思考是被<span class="blank"></span>的。这证明了，真正的破译与认知，只有在主体遭受到<span class="blank"></span>的条件下才会启动。思想不是一种散步，而是一种被迫的自卫……”
        </div>
      </div>
    </div>

    <!-- PACK 3 -->
    <div class="packet-section theme-landy">
      <div class="pack-header">
        <span class="theorist-tag">03. Landy / Fiction as Training</span>
        <h2>The Reader's Gym</h2>
      </div>
      <div class="core-pressure">
        "Fiction does not merely state philosophical doctrines; it trains the reader to experience error, delay, correction, and self-recognition... The massive novel is a training ground for lucid self-delusion."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Proust wanted to deliver a theory of time or memory, why did he bury it in a 3,000-page fictional narrative full of errors?</div>
          <div class="q-sub">虚构的必要性：如果普鲁斯特只是想宣讲一套时间哲学，他为什么要把这些理论埋藏在充满错误的庞大虚构故事中？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does experiencing Swann's jealousy step-by-step train the reader differently than reading a philosophical essay about jealousy?</div>
          <div class="q-sub">体验与训诫的对立：跟着斯万一步步经历嫉妒的折磨，与阅读一篇关于嫉妒的哲学论文，两者在对读者的“规训”上有何根本不同？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Where does the text deliberately lead the reader into a "false trail" to expose our own cognitive blind spots?</div>
          <div class="q-sub">预设的陷阱：文本在何处故意将读者引入了“错误的期待”，以此来暴露我们自身的认知盲区？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 01-fiction-as-training</div>
        <div class="anchor-tag">📍 00-Landy-Philosophy-as-Fiction-Source-Card</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"According to Landy, we do not read Proust to extract a set of maxims. The novel is a machine for training. By forcing us to wade through Marcel's epistemic failures regarding <span class="blank"></span>, the text actually trains us in the art of <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “正如 Landy 所言，我们阅读普鲁斯特绝不是为了摘抄几句金玉良言。这部小说是一台精密的认知训练仪。通过迫使读者全程参与马塞尔在<span class="blank"></span>上的屡屡犯错与自我欺骗，文本实际上是在暗中训练我们<span class="blank"></span>的能力。哲学在这里不再是说教，而是一种必须亲身经历的精神体操……”
        </div>
      </div>
    </div>

    <!-- PACK 4 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">04. Deleuze / Love Signs</span>
        <h2>The Epistemology of Jealousy</h2>
      </div>
      <div class="core-pressure">
        "Love signs are deceptive signs that express unknown worlds and produce jealousy, interpretation, and suffering. The beloved is essentially a liar, and the lover is an exhausted detective."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze argue that we fall in love not with a person, but with the "unknown worlds" they appear to envelop?</div>
          <div class="q-sub">爱上一个世界：为什么德勒兹认为我们爱的从来不是一个人，而是他们所包裹的那个“未知的世界”？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Swann's jealous investigation of Odette mirror the deciphering of a difficult, hostile text?</div>
          <div class="q-sub">痛苦的文本：斯万对奥黛特的疯狂调查，是如何像极了一个学者在破译一份充满敌意的古老文献的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why is the lie considered the most profound "love sign"? What truth does the lie ironically reveal?</div>
          <div class="q-sub">谎言的深度：为什么谎言被视为最深刻的“爱情符号”？它讽刺性地揭示了什么真理？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 04-love-signs</div>
        <div class="anchor-tag">📍 U1_06_swann_signs_apprenticeship_anchor</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Love in Proust is never a site of mutual understanding; it is an epistemological crisis. As Deleuze shows, Odette functions for Swann as an emitter of deceptive love signs. Her lies force Swann to become a <span class="blank"></span>, proving that love is fundamentally an apprenticeship in <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “在普鲁斯特的宇宙里，爱情绝非心心相印的温床，而是一场彻头彻尾的认识论危机。通过德勒兹的透镜，我们看到奥黛特对斯万而言，就是一个不断发射欺骗性符号的源头。她的谎言迫使斯万化身为一个<span class="blank"></span>。这证明了，所谓的爱情，本质上就是一场关于<span class="blank"></span>的残酷学徒期……”
        </div>
      </div>
    </div>

    <!-- PACK 5 -->
    <div class="packet-section theme-landy">
      <div class="pack-header">
        <span class="theorist-tag">05. Landy / Proust vs. Marcel</span>
        <h2>The Unreliable Guide</h2>
      </div>
      <div class="core-pressure">
        "The narrator Marcel is not simply Proust's mouthpiece. Some narrator claims are provisional, subjective, ironic, or later revised... We must distinguish what the novel says from what the novel makes the reader undergo."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Find a moment where Marcel makes a grand, philosophical generalization about love or women. How does the text quietly undermine his authority?</div>
          <div class="q-sub">主观法则的破产：找出马塞尔对爱情发表的某句宏大哲理。文本是如何在暗中拆解他的权威，暗示这不过是他的自我安慰的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Marcel is frequently self-deceived, how does this shift the burden of interpretation onto us, the readers?</div>
          <div class="q-sub">责任的转移：如果叙述者自己也常常陷入自欺欺人，这如何将“破译”的责任强行推给了我们读者？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How do we discern the "Proustian architecture" (the invisible author) operating behind "Marcel's errors" (the visible character)?</div>
          <div class="q-sub">幕后的建筑师：我们如何学会在“马塞尔的愚蠢错误”背后，察觉到那个隐形作者（普鲁斯特）的精密布局？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 02-proust-marcel-distinction</div>
        <div class="anchor-tag">📍 04-objective-and-subjective-laws</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Landy warns us against reading the *Recherche* as a collection of wise quotes. The narrator, Marcel, is often an unreliable guide who masks his personal failures as universal laws. When Marcel claims that <span class="blank"></span>, we are actually meant to see his <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “Landy 警告我们：千万不要把《追忆》当成一本哲理金句集来读。叙述者马塞尔是一个极不可靠的向导，他经常用看似客观的宇宙法则来掩饰自己个人的无能。比如当马塞尔信誓旦旦地宣称<span class="blank"></span>时，作为受过训练的读者，我们应该立刻意识到，文本真正想向我们展示的，其实是他的<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 6 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">06. Deleuze / Worldly Signs</span>
        <h2>The Empty Ritual</h2>
      </div>
      <div class="core-pressure">
        "Worldly signs replace action and thought; they are empty but ritually powerful signs of social codes. Why is the superficiality of the salon a necessary stage in the apprentice's journey?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze a gesture from the Guermantes or Verdurin salon. How does this gesture mean nothing in itself, yet strictly enforce inclusion or exclusion?</div>
          <div class="q-sub">空洞的权力：分析沙龙中的某个礼仪动作。它本身虽然毫无意义，却如何严酷地执行着阶级的接纳与排斥？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze call the habitués of the salon "prophetic birds" or "parrots"? What law do they unconsciously emit?</div>
          <div class="q-sub">鹦鹉与先知：为何德勒兹将沙龙里的常客比作“鹦鹉”？他们无意识地泄露了什么社会法则？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If worldly signs are "empty," why couldn't Marcel simply skip the salons and go straight to the revelation of Art?</div>
          <div class="q-sub">世俗的必要性：既然世俗符号是“空洞”的，马塞尔为什么不能直接跳过沙龙，直接去追求艺术的真理？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 03-worldly-signs</div>
        <div class="anchor-tag">📍 06-chapter-6-series-and-group</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"The salons of Proust are not mere social realism; they are machines for emitting Worldly Signs. When Mme Verdurin performs her exaggerated reactions, she is not expressing a true self, but executing a <span class="blank"></span>. The apprentice must learn to decode these empty rituals because they <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特笔下的沙龙绝不仅仅是社会写实，它们是不断发射‘世俗符号’的机器。当维尔迪兰夫人做出那些夸张的表情时，她并没有表达任何内在的真实自我，而是在执行一种<span class="blank"></span>。学徒必须学会在这些令人窒息的空洞仪式中摸爬滚打，因为只有识破了这些虚空，他才能<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 7 -->
    <div class="packet-section theme-proust">
      <div class="pack-header">
        <span class="theorist-tag">07. Deleuze / Sensuous Signs</span>
        <h2>The Failure of the Madeleine</h2>
      </div>
      <div class="core-pressure">
        "Sensuous signs give joy and force interpretation, but remain material and incomplete until art reveals their essence. The madeleine is a success of memory, but a failure of ultimate truth."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze provocatively claim that the Madeleine episode is ultimately a "failure" in the grand architecture of the Search?</div>
          <div class="q-sub">玛德莱娜的失败：为什么德勒兹敢于挑衅地断言，玛德莱娜蛋糕的体验在整个《追忆》的架构中，最终是一次“失败”？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the joy of the Sensuous Sign (the taste of tea) differ from the anxiety produced by Love Signs?</div>
          <div class="q-sub">感官的狂喜 vs 爱情的焦虑：同样是遭遇符号，为什么茶水的味道带来狂喜，而爱人的眼神带来恐慌？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">"I had then postponed seeking the profound causes." What prevents Marcel from fully grasping the essence of the madeleine at the very beginning of the novel?</div>
          <div class="q-sub">被推迟的本质：“我推迟了寻找那深刻的原因”。是什么阻碍了马塞尔在小说开头就彻底抓住玛德莱娜的本质？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 05-sensuous-signs</div>
        <div class="anchor-tag">📍 U1_04_madeleine_as_method_anchor</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Deleuze radically decenters the Madeleine. While it successfully resurrects Combray, it remains a Sensuous Sign—still tied to material taste. Its ultimate meaning is <span class="blank"></span>, proving that memory alone cannot yield the absolute truth; it must wait for the revelation of <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “德勒兹极其激进地将‘玛德莱娜蛋糕’从神坛上拉了下来。虽然它成功复活了贡布雷，但它终究只是一个‘感官符号’——依然被死死绑在物质的味觉上。它的终极意义在这里是<span class="blank"></span>的。这证明了，仅仅依靠记忆是无法提炼出绝对真理的，它必须耐心等待<span class="blank"></span>的最终降临……”
        </div>
      </div>
    </div>

    <!-- PACK 8 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">08. Deleuze / Pluralism</span>
        <h2>The Hieroglyphic World</h2>
      </div>
      <div class="core-pressure">
        "There is no Logos; there are only hieroglyphs. To think is therefore to interpret, is therefore to translate. Everything is implicated, everything is complicated, everything is sign."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If there is no central "Logos" (rational organizing principle) in Proust's world, how do the different fragments and signs manage to communicate?</div>
          <div class="q-sub">没有逻各斯的世界：如果在普鲁斯特的宇宙中没有一个理性的中心原则，那些散落的碎片和符号是如何发生联系的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">What does it mean to say the writer is not a philosopher but an "Egyptologist"? How does this alter the act of reading?</div>
          <div class="q-sub">作家即埃及学家：把作家比作“埃及学家”而非哲学家，这意味着什么？这如何改变了我们对“阅读”的定义？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How do the different sign systems (Worldly, Love, Sensuous, Art) intersect and interfere with each other in a single passage?</div>
          <div class="q-sub">符号的交响：世俗、爱情、感官和艺术这四大符号系统，是如何在同一个段落中相互干涉、重叠的？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 09-pluralism-of-signs</div>
        <div class="anchor-tag">📍 07-chapter-7-pluralism-system-of-signs</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Proust's universe is not a harmonious unity, but a pluralism of signs. The narrator is cast as an Egyptologist decoding hieroglyphs. When he encounters <span class="blank"></span>, he cannot simply look up its meaning in a dictionary; he must <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特的宇宙绝不是一个和谐统一的整体，而是一个充满断裂与重叠的‘符号多元论’。叙述者就像是一个在黑暗中摸索的埃及学家，面对着满墙的象形文字。当他遭遇<span class="blank"></span>时，他无法在任何现成的字典里查到答案，他必须<span class="blank"></span>。在这个世界里，没有现成的真理，只有无尽的翻译……”
        </div>
      </div>
    </div>

    <!-- PACK 9 -->
    <div class="packet-section theme-art">
      <div class="pack-header">
        <span class="theorist-tag">09. Deleuze / Art Signs</span>
        <h2>The Immaterial Revelation</h2>
      </div>
      <div class="core-pressure">
        "Art signs are the highest signs because they reveal essence and transform all other signs retrospectively... The piano here is merely the spatial image of an entirely different keyboard."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the Art Sign (e.g., Vinteuil's music or Elstir's painting) "dematerialize" the matter it uses to express itself?</div>
          <div class="q-sub">去物质化：艺术符号（如凡特伊的音乐或埃尔斯蒂尔的画）是如何将其赖以显现的“物质载体”彻底蒸发的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze argue that Art Signs retrospectively organize and justify all the wasted time spent on Worldly and Love Signs?</div>
          <div class="q-sub">回溯性的救赎：为什么德勒兹认为，只有艺术符号才能在事后为那些浪费在沙龙和嫉妒上的岁月赋予意义？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Art Signs reveal "essence," what exactly is a Proustian essence, and why can it not be shared through ordinary language?</div>
          <div class="q-sub">本质的孤独：如果艺术揭示了“本质”，那么普鲁斯特意义上的“本质”究竟是什么？为什么它无法通过日常语言共享？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 06-art-signs</div>
        <div class="anchor-tag">📍 U1_08_time_regained_art_method_anchor</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"For Deleuze, the Art Sign sits at the apex of the Proustian pyramid because it alone is immaterial. While love and society offer only deceptive surfaces, Art forces us to confront <span class="blank"></span>, retrospectively proving that all our earlier 'wasted time' was actually <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “在德勒兹的阶层中，艺术符号稳居普鲁斯特金字塔的塔尖，因为只有它摆脱了物质的沉重。当爱情和社交只提供令人疲惫的谎言时，艺术却强迫我们直面<span class="blank"></span>。它的出现，产生了一种巨大的回溯性力量，向我们证明了：之前所有那些看似被‘浪费的时间’，实际上都是<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 10 -->
    <div class="packet-section theme-method">
      <div class="pack-header">
        <span class="theorist-tag">10. Synthesis / Kite-Line Reading</span>
        <h2>The Polycentric Method</h2>
      </div>
      <div class="core-pressure">
        "Proust is the spine. Theory is the kite-line. Reading is the disciplined release and return. The center is not memory, not signs, not Deleuze, not Poulet... The center is the effort to understand and approach the novel itself."
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">What happens when we let theory (like Deleuze's taxonomy) override the specific sensory details of Proust's prose? How do we prevent this?</div>
          <div class="q-sub">理论的暴政：当我们让理论（如德勒兹的分类法）压倒普鲁斯特散文中的具体感官细节时，会发生什么？我们该如何防范？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the concept of "Kite-Line Reading" change your approach to analyzing the text compared to traditional literary criticism?</div>
          <div class="q-sub">风筝线阅读法：“风筝线阅读法”如何改变了你分析文本的方式（相较于传统的文学批评）？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Proustian 2.0 is "polycentric," how do you hold Deleuze (signs), Poulet (space), and Landy (fiction/training) in tension without forcing them to agree?</div>
          <div class="q-sub">保持张力：如果本课程是“多中心的”，你将如何在德勒兹、普莱和 Landy 之间保持思想的张力，而不是强迫他们达成共识？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U1-Method-Kite-Line-Reading</div>
        <div class="anchor-tag">📍 UNIT-README.md</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"U1 establishes the foundational method of Proustian 2.0: Kite-Line Reading. We use theories from Deleuze and Landy not as ultimate dogmas, but as analytical tensions. When analyzing a passage, theory allows the mind to fly high, but we must always <span class="blank"></span>, because the ultimate ground of truth is <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “U1 确立了整个 Proustian 2.0 的基石：风筝线阅读法。我们不把德勒兹或 Landy 的理论当作不容置疑的教条，而是将其视为创造分析张力的工具。在面对一段文本时，理论确实能让我们的思维飞入高空，但我们必须时刻记得<span class="blank"></span>。因为在这个庞大的阅读工程中，最终检验真理的唯一地面，永远是<span class="blank"></span>……”
        </div>
      </div>
    </div>

  </div> <!-- End pack-grid -->

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Proustian U1 Traversal Pack loaded.");
    // Interactive questions toggle logic is handled inline via onclick="this.classList.toggle('heated')"
  });
</script>
