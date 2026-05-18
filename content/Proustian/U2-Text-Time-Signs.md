---
title: "U2: Text, Time, and Signs"
description: "Narrative mechanics, time, spatialization, and signs."
tags:
  - Proustian
  - Course
  - Reading-Garden
---

<style>
    :root {
      /* U1-Pack-A Inspired Color Palette */
      --bg: #fbfaf7;
      --paper: #ffffff;
      --ink: #1f2933;
      --muted: #667085;
      --line: #e8e2d8;
      
      --accent-rust: #7c3f2c;
      --accent-slate: #3f5f8a;
      --accent-green: #476a57;
      --accent-ochre: #a6652b;
      --accent-purple: #6b46c1;

      --heat-glow: rgba(124, 63, 44, 0.12);
      --heat-border: #7c3f2c;

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
      box-shadow: 0 16px 44px rgba(31, 41, 51, 0.05);
      border: 1px solid var(--line);
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, var(--accent-slate), var(--accent-rust), var(--accent-green), var(--accent-ochre));
    }

    .unit-label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-rust);
      font-weight: 700;
      margin-bottom: 15px;
      display: block;
    }

    .header h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      margin: 0 0 20px 0;
      color: var(--ink);
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-family: var(--font-serif);
    }

    .header p {
      font-size: 1.15rem;
      color: var(--muted);
      max-width: 800px;
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
      box-shadow: 0 10px 30px rgba(31, 41, 51, 0.03);
      border: 1px solid var(--line);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .packet-section:hover {
      box-shadow: 0 20px 40px rgba(31, 41, 51, 0.08);
    }

    /* Top Bars for different theorists/themes */
    .theme-poulet { border-top: 4px solid var(--accent-slate); }
    .theme-genette { border-top: 4px solid var(--accent-rust); }
    .theme-deleuze { border-top: 4px solid var(--accent-ochre); }
    .theme-landy { border-top: 4px solid var(--accent-green); }
    .theme-synthesis { border-top: 4px solid var(--accent-purple); }

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

    .theme-poulet .theorist-tag { color: var(--accent-slate); border-color: rgba(63, 95, 138, 0.3); background: rgba(63, 95, 138, 0.05); }
    .theme-genette .theorist-tag { color: var(--accent-rust); border-color: rgba(124, 63, 44, 0.3); background: rgba(124, 63, 44, 0.05); }
    .theme-deleuze .theorist-tag { color: var(--accent-ochre); border-color: rgba(166, 101, 43, 0.3); background: rgba(166, 101, 43, 0.05); }
    .theme-landy .theorist-tag { color: var(--accent-green); border-color: rgba(71, 106, 87, 0.3); background: rgba(71, 106, 87, 0.05); }
    .theme-synthesis .theorist-tag { color: var(--accent-purple); border-color: rgba(107, 70, 193, 0.3); background: rgba(107, 70, 193, 0.05); }

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
      border-color: #d0d7de;
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
      background: #f4f5f7;
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

    .seed-header { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #9aa5b1; margin-bottom: 12px; }
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
      color: #d9e2ec;
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
      color: #bcc3cd;
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
    <span class="unit-label">Proustian 2.0 | Unit 2</span>
    <h1>TEXT, TIME, AND SIGNS</h1>
    <p>A decentralized, roaming digital paper. Scan the 10 micro-packs below. Click the questions that generate heat. Use the scene anchors and bilingual seeds to extract the structural mechanics of Proust's prose.</p>
  </div>

  <div class="pack-grid">

    <!-- PACK 1 -->
    <div class="packet-section theme-poulet">
      <div class="pack-header">
        <span class="theorist-tag">01. Poulet / Spatial Topology</span>
        <h2>The Panic of Localization</h2>
      </div>
      <div class="core-pressure">
        "When waking in the dark, why is the narrator's primary terror spatial rather than temporal? How does the body attempt to construct a room before the mind can remember the year?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Observe the ribs and thighs reconstructing the geometry of old bedrooms. How does Proust show that space is not a given container, but something that must be painfully built by physical memory?</div>
          <div class="q-sub">身体记忆的建筑学：肉体如何先于意识醒来？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider the feeling of "drifting in space." Why is finding the "little gate" in the mind's eye equivalent to recovering lost time?</div>
          <div class="q-sub">漂浮的空间：为何“我在哪里”比“现在何时”更令人恐慌？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the concept of "wavering places" (Poulet). How does the room spin like a kaleidoscope and settle only after localization is achieved?</div>
          <div class="q-sub">摇曳的地点：意识锚定之前的空间万花筒。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">What does the narrator's ignorance of <em>where</em> he is tell us about Proust's view of human identity being anchored essentially in spatial dimensions?</div>
          <div class="q-sub">空间的本体论：没有地点的“我”是否存在？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does this visceral spatial panic disrupt the idea of a stable "Self" continuing seamlessly across time?</div>
          <div class="q-sub">自我的断裂：睡眠如何摧毁了连续的主体性幻觉？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 sleep_waking_rooms</div>
        <div class="anchor-tag">📍 habit_and_body_memory</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Using Poulet's concept of localization, I notice that in the Combray opening, the narrator does not just wake up in time; he must rescue himself from a spatial void by..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “在阅读贡布雷开篇的失眠段落时，普莱的‘空间定位’概念提供了一个绝佳的视角。我发现主人公在黑暗中醒来时，面临的不是时间的流逝，而是空间的解体。他的身体（大腿、肋骨）变成了<span class="blank"></span>，试图在虚无中重新支撑起一个房间的几何结构……”
        </div>
      </div>
    </div>

    <!-- PACK 2 -->
    <div class="packet-section theme-genette">
      <div class="pack-header">
        <span class="theorist-tag">02. Genette / Narrative Frequency</span>
        <h2>The Iterative Prison</h2>
      </div>
      <div class="core-pressure">
        "What I call <em>narrative frequency</em>, that is, the relations of frequency (or, more simply, of repetition) between the narrative and the diegesis..." — Gérard Genette.<br><br>
        How does Proust manipulate this exact relation (using the imperfect tense) to swallow singular events into a generalized loop of habit?
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Find the transition in Combray where a specific Sunday morning dissolves into 'all Sundays'. What does this grammatical blurring do to our sense of safety and narrative progression?</div>
          <div class="q-sub">时间的模糊：一个具体的周日是如何不知不觉吞噬了所有周日的？这种语法上的“晕染”如何让读者丧失了时间前进的方向感？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Aunt Léonie's 'jog-trot' represent the absolute victory of the Iterative over the Singulative?</div>
          <div class="q-sub">莱奥妮姑妈的钟摆：她那不变的日常“小步快跑”如何构成了一种拒绝例外的防御机制？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze the phrase "For a long time I used to go to bed early." How does this set a trap of endless repetition before any singular story even begins?</div>
          <div class="q-sub">开篇的陷阱：“长久以来”这个短语如何在故事真正开始前，就抽空了时间前进的动力，将叙事锁进了一个无限循环？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">What happens structurally when a "Singulative" event (a sudden exception, like Swann's unexpected visit) breaks into the "Iterative" routine? Does the prose suddenly dilate or contract?</div>
          <div class="q-sub">破裂的日常：当一个偶然事件（比如斯万的突然造访）刺破“迭代叙事”的硬壳时，句法结构是突然膨胀了还是收缩了？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If habit forms a "crust" over time, how does the reader's experience of reading stagnate intentionally alongside the characters' lives?</div>
          <div class="q-sub">阅读的停滞：如果习惯在时间上结了一层“硬痂”，读者的阅读体验是如何被这种庞大的时间机器故意催眠和拖慢的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider the "Pseudo-Iterative." Are scenes like the long conversations in Combray actually too detailed to have happened repeatedly, yet presented as if they were habits?</div>
          <div class="q-sub">伪迭代的幻觉：贡布雷那些长篇大论的对话是否详细到根本不可能“每天如此发生”，但叙述者却偏要将它们伪装成一种习惯？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 sleep_waking_rooms</div>
        <div class="anchor-tag">📍 Genette-U2-04-Frequency</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Genette’s analysis of the Iterative reveals that the Combray we read about never actually existed on a specific day. Instead, Proust engineers a synthetic time loop where..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “通过热奈特的‘迭代叙事（Iterative）’，我们终于看清了贡布雷生活那种令人窒息的静态感是如何在句法层面上被制造出来的。姑妈莱奥妮的生活不是被叙述的，而是被归纳的。这种写法剥夺了事件的<span class="blank"></span>，把一切偶然都锁死在习惯的模具里……”
        </div>
      </div>
    </div>

    <!-- PACK 3 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">03. Deleuze / Sensuous Signs</span>
        <h2>The Violence of the Madeleine</h2>
      </div>
      <div class="core-pressure">
        "Deleuze claims the Madeleine is not about 'memory'. It is a sign-event that inflicts a violent, unexplainable joy. Why is memory actually secondary to this shock?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Track the precise moment the narrator tastes the tea. Why does the profound joy arrive *before* any image of Combray is remembered?</div>
          <div class="q-sub">先于画面的狂喜：感官冲击为何领先于理性认知？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Proust call the madeleine experience a "failure" of interpretation in its initial stages? What is postponed?</div>
          <div class="q-sub">解释的失败：为何找到“原因”反而意味着符号的降级？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Contrast voluntary memory (snapshots) with involuntary memory (the tea). Why does Deleuze argue involuntary memory still falls short of pure Art?</div>
          <div class="q-sub">快照与复活：无意记忆为何仍然不是最终的真理？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Trace the physical expansion: from a drop of tea to the unfolding of an entire town. How is this an act of deciphering a "hieroglyph"?</div>
          <div class="q-sub">空间的折叠与展开：一滴茶水如何吐出一座小镇？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If the sensuous sign "forces thought," what exactly forces the narrator to stop and analyze the taste rather than simply enjoying the cake?</div>
          <div class="q-sub">被强迫的思想：快乐如何转化为了不可遏制的破译冲动？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 madeleine_involuntary_memory</div>
        <div class="anchor-tag">📍 05-sensuous-signs</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Reading the Madeleine scene against Deleuze, the nostalgic reading collapses. The tea is a sensuous sign that forces thought through violence, proving that memory only serves to..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “德勒兹无情地戳破了关于玛德莱娜蛋糕的温情脉脉的幻觉。这绝不是一次田园诗般的往事重温，而是一次感官符号的暴力袭击。那种‘非凡的快乐’先于任何画面降临，这就证明了记忆在这里仅仅扮演了<span class="blank"></span>的角色，它被符号强迫着去解码……”
        </div>
      </div>
    </div>

    <!-- PACK 4 -->
    <div class="packet-section theme-poulet">
      <div class="pack-header">
        <span class="theorist-tag">04. Poulet / Spatial Discontinuity</span>
        <h2>The Law of Closed Vases</h2>
      </div>
      <div class="core-pressure">
        "Why does Proust separate the Guermantes Way and the Méséglise Way so absolutely? How does this spatial fragmentation act as a blueprint for the isolation of human souls?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the narrator's inability to imagine the two Ways connecting reflect a deeper epistemological limit about knowing the 'other'?</div>
          <div class="q-sub">不可通约的空间：两条小路为何永远无法在脑海中交汇？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the absolute spatial separation of the Guermantes Way and the Méséglise Way construct two entirely different aesthetic and social universes?</div>
          <div class="q-sub">空间的阶级性：不同的方向如何孕育出不同的人格？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the concept of "distance" or "negative space" in Poulet. What fills the gap between these isolated "monads"?</div>
          <div class="q-sub">负空间的张力：隔离不同地点的巨大虚无是什么？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If places are "closed vases," how does this map onto the impossibility of truly possessing another person (like Albertine)?</div>
          <div class="q-sub">地理的隐喻：封闭的地点与无法穿透的他者灵魂。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why must the two ways remain separated in childhood, only to be juxtaposed (not merged) much later by the final work of art?</div>
          <div class="q-sub">艺术的并置：最终的空间是如何在写作中被重新排列的？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 04-fragmentation-distance</div>
        <div class="anchor-tag">📍 names_and_imagination</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Poulet's 'closed vases' shows that Proustian space is a series of mutually exclusive islands. The absolute division between the two Ways maps perfectly onto..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特不仅折叠时间，更切割空间。盖尔芒特家那边和斯万家那边，在物理地图上或许相交，但在主人公的心理拓扑学中，它们是绝对绝缘的‘封闭瓶子’。这种空间的不可通约性，实际上隐喻了<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 5 -->
    <div class="packet-section theme-landy">
      <div class="pack-header">
        <span class="theorist-tag">05. Landy / Optical Illusion</span>
        <h2>Martinville and Perspective</h2>
      </div>
      <div class="core-pressure">
        "How does the optical illusion of the moving steeples turn perception into a demand for writing? Why does Marcel project his own mind onto the landscape?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze the carriage ride. How does physical displacement force the static 'closed vases' of space to overlap, causing the steeples to shift like a living organism?</div>
          <div class="q-sub">马车上的动理学：运动如何赋予死寂风景以生命？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does this specific optical illusion relieve Marcel of his despair about never becoming a writer?</div>
          <div class="q-sub">解除写作焦虑：错觉为何比“真实的风景”更具有文学价值？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the carriage's movement expose the falsity of a fixed, objective reality, introducing the "sinuosity" of subjective perception?</div>
          <div class="q-sub">客观现实的破产：蜿蜒的视角如何重组了世界的样貌？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "turning" of the steeples prefigure the "turning fires of jealousy" later experienced with Odette and Albertine?</div>
          <div class="q-sub">风景与嫉妒的同构：钟楼的位移如何预演了情感的猜疑？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If the landscape changes faces based on the spectator's movement, what does this imply about the "truth" of any given scene in Proust?</div>
          <div class="q-sub">视角的暴政：如果一切都在移动，真相栖身于何处？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 travel_movement_martinville</div>
        <div class="anchor-tag">📍 02-chapter-1-perspective</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"The Martinville steeples are not just a pretty landscape. Viewed through Landy and Poulet, they represent a moment where kinetic movement generates an optical illusion, which Marcel translates into..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “马丁维尔钟楼的移动完全是一种视差错觉，但正是这种由马车运动（Travel）带来的视角重叠，打破了空间的僵死状态。这不再是风景描写，而是一场认知训练：马塞尔发现，意义不存在于客体之中，而存在于他自己的<span class="blank"></span>之中……”
        </div>
      </div>
    </div>

    <!-- PACK 6 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">06. Deleuze / Imaginary Signs</span>
        <h2>The Topography of Names</h2>
      </div>
      <div class="core-pressure">
        "How does the mere Name of a place (Balbec, Florence) absorb and falsify reality? Why is the sign always more powerful than the physical referent?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the reveries over train timetables. How does a name like 'Parma' generate a sealed, stendhalian architecture that guarantees future disappointment?</div>
          <div class="q-sub">火车的时刻表：为什么未知的地名比真实的旅行更令人激动？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "Name" act as a sealed container that simplifies and beautifies reality before the journey even begins?</div>
          <div class="q-sub">名字的容器效应：它是如何剔除掉现实中的平庸细节的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Explore the inevitable disappointment. Why does the physical encounter with a town always fail to match the "sweetness" of its syllables?</div>
          <div class="q-sub">实体的幻灭：为何抵达威尼斯的那一刻，威尼斯就死去了？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How do names function differently than sensuous signs? (Names project forward into imagination; sensuous signs pull backward into memory).</div>
          <div class="q-sub">想象与记忆的对立：向前的投射与向后的拉扯。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze the mechanism of desire here: Why is the desire for a place fueled more by its linguistic inaccessibility than its actual geography?</div>
          <div class="q-sub">词语的诱惑：地理的不可及如何被转化为发音的快感？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 names_and_imagination</div>
        <div class="anchor-tag">📍 03-privileged-places-names</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Before he ever sees Venice or Balbec, Marcel is seduced by their Names. Deleuze helps us see that these words operate as imaginary signs, creating a vaporous expectation that..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “地名在普鲁斯特笔下具有了一种致幻的魔力。‘巴尔贝克’或‘佛罗伦萨’不是地理坐标，而是包裹着欲望和美学偏见的独立单子。这种先于经验存在的符号系统，注定了当现实降临时，主人公必将经历巨大的<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 7 -->
    <div class="packet-section theme-landy">
      <div class="pack-header">
        <span class="theorist-tag">07. Landy / Self-Deception</span>
        <h2>The Slipshod Detective</h2>
      </div>
      <div class="core-pressure">
        "Why does Swann investigate Odette with such precision, yet carefully stop just short of discovering the actual truth? What is the 'Will to Ignorance'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Find the moment Swann rationalizes away the anonymous letter. How does the text expose the intricate architecture of his self-deception?</div>
          <div class="q-sub">匿名信的防御战：斯万如何为显而易见的谎言寻找借口？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine Swann's "will to ignorance." How does he intentionally construct a flawed investigation to avoid a truth that would destroy his happiness?</div>
          <div class="q-sub">无知欲的力量：为何“不想知道”比“渴望知道”更具支配力？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When Swann says "I've heard that tale before," why do these simple words stab him like a knife? What do they reveal about Odette's hidden world?</div>
          <div class="q-sub">语言的刺刀：平淡的陈述句如何突然具备了致命的杀伤力？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Marcel's generalization (formulating 'objective laws' about love) serve to hide his subjective failures?</div>
          <div class="q-sub">普遍法则的遮羞布：哲理性的感慨如何掩盖了个人的无能？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Contrast Swann's aestheticization of Odette (seeing her as a Botticelli painting) with his jealousy. How is the former a defense mechanism?</div>
          <div class="q-sub">美学的逃避：将爱人看作名画，是否是为了逃避真实的血肉？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 swann_love_as_reading</div>
        <div class="anchor-tag">📍 jealousy_and_misreading</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Swann's jealousy is an investigative machine designed to fail. Through Landy's lens, we see Swann desperately employing a 'will to ignorance' in order to..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “斯万对奥黛特的所谓‘调查’，其实是一场精心策划的视而不见。Landy 的理论像解剖刀一样切开了这里的认知幻觉：斯万之所以像个蹩脚的侦探，是因为他需要这种‘必要的幻觉’来维持爱情的存续。他的求知欲，实际上建立在强大的<span class="blank"></span>之上……”
        </div>
      </div>
    </div>

    <!-- PACK 8 -->
    <div class="packet-section theme-deleuze">
      <div class="pack-header">
        <span class="theorist-tag">08. Deleuze / Love Signs</span>
        <h2>The Emitted Worlds of the Beloved</h2>
      </div>
      <div class="core-pressure">
        "The beloved emits deceptive signs indicating an unknown world she contains. How does the lover's attempt to capture this world inevitably lead to a proliferation of 'Albertines'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Review the 'Captive' passages. How does Marcel's attempt to immobilize Albertine fail because her face continually emits signs of other, inaccessible times?</div>
          <div class="q-sub">囚禁的失败：为何把她锁在房间里，她依然散发着外面的风景？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Deleuze argue that loving someone means loving the "unknown worlds" implicated within them?</div>
          <div class="q-sub">爱上一个世界：我们爱的究竟是肉体，还是她目光中未知的海滩？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Analyze the "discontinuous expression" of jealousy. Why can Marcel only possess a fragmented series of "Albertines" rather than a unified person?</div>
          <div class="q-sub">断裂的爱人：无数个平行的阿尔贝蒂娜如何让统一的主体破产？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the lie function as the primary "love sign"? Why does the jealous lover prefer the pain of deciphering a lie over the boredom of truth?</div>
          <div class="q-sub">谎言的引力：为何破译谎言的痛苦，反而构成了爱情的生命力？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If love signs are inherently deceptive, why does Deleuze claim they are a necessary stage in the apprenticeship to ultimate (artistic) truth?</div>
          <div class="q-sub">欺骗的价值：不经过被爱人愚弄的绝望，能否抵达艺术的澄明？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 albertine_captivity_signs</div>
        <div class="anchor-tag">📍 04-love-signs</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"According to Deleuze, loving Albertine means trying to annex the unknown worlds she expresses. But because these love signs are inherently deceptive, Marcel only ends up possessing..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “德勒兹指出，爱情符号本质上是欺骗性的。阿尔贝蒂娜从来不是一个单一的实体，而是一个散发着无数未知世界（海滩、少女、欲望）的发射源。马塞尔试图通过囚禁她来破译这些符号，但他得到的只是一个个断裂的、相互矛盾的<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 9 -->
    <div class="packet-section theme-genette">
      <div class="pack-header">
        <span class="theorist-tag">09. Genette / Narrative Order</span>
        <h2>Anachrony and the Knowing Voice</h2>
      </div>
      <div class="core-pressure">
        "How does the older, retrospective 'Narrating I' intrude upon the ignorant 'Experiencing I'? What happens to the tone when a prolepsis reveals a tragedy before it happens?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Locate a sentence where the narrator says 'I did not yet know that...' How does this gap between the hero's ignorance and the narrator's knowledge create an 'apprenticeship'?</div>
          <div class="q-sub">后见之明的悲剧：叙述者与体验者之间的信息差。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Locate an instance of "Analepsis" (flashback). How does jumping backward disrupt the illusion of a naturally unfolding chronological life?</div>
          <div class="q-sub">闪回的突袭：过去的片段如何像陨石一样砸进当前的叙事？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the older narrator's "polymodality" – shifting between intense subjective feeling and god-like omniscience – destabilize the text?</div>
          <div class="q-sub">多重视角的重影：一边深陷痛苦，一边如上帝般俯瞰全局。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the tragic irony of Prolepsis. When the narrator hints at Albertine's future death, how does it change our reading of her present actions?</div>
          <div class="q-sub">预叙的阴影：提前宣告死亡，如何改变了我们对日常对话的感受？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Proust make the "time of the narrating" (the act of writing the book) so visible, rather than hiding it behind the "time of the story"?</div>
          <div class="q-sub">写作现场的暴露：为什么作者刻意让我们看到他在“编织”时间？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 Genette-U2-02-Order</div>
        <div class="anchor-tag">📍 Genette-U2-06-Voice</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Genette’s separation of the 'Narrating I' from the 'Experiencing I' highlights the tragic irony of Proust's text. When the older voice uses prolepsis to foreshadow pain, it transforms the hero's naive experience into..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “文本中不断闪现的‘预叙（Prolepsis）’和延迟揭晓的真相，暴露了叙述者和体验者之间的巨大鸿沟。年轻的马塞尔在盲目地经历，而老年的叙述者则在进行冷酷的解剖。这种时间的错位（Anachrony）恰恰构成了德勒兹所说的<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 10 -->
    <div class="packet-section theme-synthesis">
      <div class="pack-header">
        <span class="theorist-tag">10. Synthesis / Landy</span>
        <h2>Style as Spiritual Exercise</h2>
      </div>
      <div class="core-pressure">
        "Ultimately, how do Proust's notoriously long, winding sentences function not merely as description, but as a cognitive training apparatus for the reader?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Look at any 10-line sentence. How does the suspension of the main clause, the nesting of metaphors, and the delayed resolution force the reader to experience the delayed 'truth of signs'?</div>
          <div class="q-sub">句法中的延迟：过长的从句如何让读者亲身体验“等待真相”的痛苦？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the extreme length and nested structure of a Proustian sentence force the reader to experience memory directly, rather than just reading about it?</div>
          <div class="q-sub">迷宫般的修辞：阅读的费力本身就是一种对记忆重组的模拟。</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Landy argues that Marcel's maxims are often subjective self-delusions. How does Proust's *style* signal to the reader when a maxim should be doubted?</div>
          <div class="q-sub">反讽的文体标记：我们如何从夸张的语气中听出叙述者的不真诚？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider the act of juxtaposition in the final artwork (Poulet). How does style weave together the disparate "closed vases" into a single text?</div>
          <div class="q-sub">缝合碎片的针线：风格是如何将互不相干的地点并置在一起的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Landy insist that a unified Self is an aesthetic creation? How does the very act of writing the *Recherche* become Marcel's "Self-Creation"?</div>
          <div class="q-sub">自我创造的终局：为什么只有通过写作，散落的主体才能合而为一？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 08-style-as-spiritual-exercise</div>
        <div class="anchor-tag">📍 05-coda-style-prousts-sentences</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Landy claims that Proust's syntax is a spiritual exercise. By delaying the resolution of a sentence, Proust forces the reader to mimic the hero's painful delay in deciphering a..."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “读完这些分析，我意识到普鲁斯特的冗长句法并非仅仅是修辞。正如主角必须经过漫长的‘学徒期’才能看清真相一样，读者在阅读一个嵌套着无数从句和隐喻的句子时，也经历了一次微型的延宕与顿悟。形式本身就是一种<span class="blank"></span>……”
        </div>
      </div>
    </div>

  </div> <!-- End pack-grid -->

</div>

<script>
  // Simple interaction for the digital paper feel
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Proustian U2 Traversal Pack loaded.");
    // Interactive questions toggle logic is handled inline via onclick="this.classList.toggle('heated')"
  });
</script>
