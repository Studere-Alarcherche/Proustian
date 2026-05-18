---
title: "U4: Visuality, Attention, and the Mottled Screen"
description: "Visual perception, attention, gaze, and image."
tags:
  - Proustian
  - Course
  - Reading-Garden
---

<style>
    :root {
      /* U4 Inspired Color Palette - Visual, Optical, and Photographic */
      --bg: #f8f9fa;
      --paper: #ffffff;
      --ink: #1a202c;
      --muted: #718096;
      --line: #e2e8f0;
      
      --accent-vermeer: #d4af37;   /* Vermeer Yellow */
      --accent-elstir: #2b6cb0;    /* Balbec Marine Blue */
      --accent-crary: #4a5568;     /* Modernity/Industrial Grey */
      --accent-bal: #9c4221;       /* Photographic Sepia/Rust */
      --accent-gaze: #b83280;      /* Desire/Albertine Rose */

      --heat-glow: rgba(212, 175, 55, 0.15);
      --heat-border: #d4af37;

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
      box-shadow: 0 16px 44px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--line);
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, var(--accent-vermeer), var(--accent-elstir), var(--accent-bal), var(--accent-gaze));
    }

    .unit-label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-bal);
      font-weight: 700;
      margin-bottom: 15px;
      display: block;
    }

    .header h1 {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      margin: 0 0 20px 0;
      color: var(--ink);
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-family: var(--font-serif);
    }

    .header p {
      font-size: 1.15rem;
      color: var(--muted);
      max-width: 850px;
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
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      border: 1px solid var(--line);
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .packet-section:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    }

    /* Top Bars for different theorists/themes */
    .theme-vermeer { border-top: 4px solid var(--accent-vermeer); }
    .theme-elstir { border-top: 4px solid var(--accent-elstir); }
    .theme-crary { border-top: 4px solid var(--accent-crary); }
    .theme-bal { border-top: 4px solid var(--accent-bal); }
    .theme-gaze { border-top: 4px solid var(--accent-gaze); }

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

    .theme-vermeer .theorist-tag { color: #977a26; border-color: rgba(212, 175, 55, 0.4); background: rgba(212, 175, 55, 0.05); }
    .theme-elstir .theorist-tag { color: var(--accent-elstir); border-color: rgba(43, 108, 176, 0.3); background: rgba(43, 108, 176, 0.05); }
    .theme-crary .theorist-tag { color: var(--accent-crary); border-color: rgba(74, 85, 104, 0.3); background: rgba(74, 85, 104, 0.05); }
    .theme-bal .theorist-tag { color: var(--accent-bal); border-color: rgba(156, 66, 33, 0.3); background: rgba(156, 66, 33, 0.05); }
    .theme-gaze .theorist-tag { color: var(--accent-gaze); border-color: rgba(184, 50, 128, 0.3); background: rgba(184, 50, 128, 0.05); }

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
      border-color: #cbd5e0;
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
      background: #edf2f7;
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

    .seed-header { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #a0aec0; margin-bottom: 12px; }
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
      color: #cbd5e0;
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
    <span class="unit-label">Proustian 2.0 | Unit 4</span>
    <h1>VISUALITY, ATTENTION, AND THE MOTTLED SCREEN</h1>
    <p>Unit 4 dismantles the illusion that seeing is knowing. How does perception become a discipline of attention, misrecognition, and capture? This is a decentralized, roaming digital paper. Scan the 10 micro-packs below. Click the questions that generate heat. Use the scene anchors and bilingual seeds to extract the structural mechanics of Proust's visual epistemology.</p>
  </div>

  <div class="pack-grid">

    <!-- PACK 1 -->
    <div class="packet-section theme-crary">
      <div class="pack-header">
        <span class="theorist-tag">01. Crary / Modern Attention</span>
        <h2>The Trance of the Observer</h2>
      </div>
      <div class="core-pressure">
        "Modernity demands that individuals define themselves by a capacity for 'paying attention'—a disengagement from a broader field to isolate stimuli. Yet, how does this extreme concentration paradoxically lead to a trance-like suspension, an automatic state where perception breaks down?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the narrator's intense visual focus on the three trees or the steeples. How does this effort to "pay attention" exhaust the observer and create an optical mirage?</div>
          <div class="q-sub">凝视的疲劳：极度专注如何反噬了观看者，制造出视觉的盲区？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the modern requirement to filter out "distractions" transform the Proustian subject into an isolated, almost mechanical receptor of reality effects?</div>
          <div class="q-sub">屏蔽的代价：为了看清一点而屏蔽整个世界，如何让主体变得机械化？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Crary argue that attention is not just "inwardness" (romanticism), but an "externalization" and a depthless interface?</div>
          <div class="q-sub">深度的消失：为什么“专注”不再是向内反思，而变成了在平面上的游离？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 attention_and_misrecognition</div>
        <div class="anchor-tag">📍 Crary-U4-01-modernity</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Using Crary's framework, we see that Marcel's visual obsession is profoundly modern. His attempt to focus on <span class="blank"></span> does not lead to classical understanding, but rather produces a state of <span class="blank"></span>, proving that attention contains its own undoing."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “借助克拉里的理论，我们发现马塞尔那种近乎病态的‘凝视’正是现代性视觉的缩影。当他死死盯住<span class="blank"></span>（如那三棵树或少女的脸庞）时，他并没有获得古典意义上的真知，反而陷入了一种类似于催眠的感官悬置。这种极度的‘注意力’不可避免地走向了它的反面：<span class="blank"></span>，揭示了现代主体在视觉上的极度脆弱……”
        </div>
      </div>
    </div>

    <!-- PACK 2 -->
    <div class="packet-section theme-bal">
      <div class="pack-header">
        <span class="theorist-tag">02. Bal / Photography</span>
        <h2>The Flatness of Capture</h2>
      </div>
      <div class="core-pressure">
        "Photography in Proust is not a tool of deep memory. Bal argues it is an art of 'spacing-out' and 'flatness'. How does the camera's framing violently cut the subject out of time and flatten them onto a mottled screen?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When Elstir's old photograph reveals Odette as "Miss Sacripant," how does the photographic surface "dislocate" her meticulously crafted social type?</div>
          <div class="q-sub">类型的解体：一张老照片如何像化学反应一样，拆解了奥黛特精心维持的脸部伪装？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does the narrator constantly describe Albertine as a "series of snapshots"? How does this serialization replace her psychic unity with sheer surface?</div>
          <div class="q-sub">连拍的暴力：为何马塞尔只能拥有无数个“断裂的快照”，而永远无法获得一个完整的阿尔贝蒂娜？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Bal's concept of the "dis-figure" operate here? How does the text use photographic flatness to produce an avant-garde visual rhetoric?</div>
          <div class="q-sub">平面的修辞：剥夺了时间深度的照片，如何创造出一种新的“去形（dis-figure）”美学？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_12_photography_and_image</div>
        <div class="anchor-tag">📍 Bal-U4-04-photography</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Bal teaches us that Proustian photography does not remember; it captures and flattens. By reducing Odette or Albertine to a <span class="blank"></span>, the visual image violently strips away their interiority, leaving only a <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “Mieke Bal 敏锐地指出，在普鲁斯特笔下，摄影绝非承载温情的记忆工具，而是一种扁平化的捕获机制。当文本将奥黛特（或阿尔贝蒂娜）降格为一张<span class="blank"></span>时，它实际上剥夺了人物的内在深度。视觉的取景框像是一把切断时间的刀，留给叙述者的只是一具失去心理连贯性的<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 3 -->
    <div class="packet-section theme-elstir">
      <div class="pack-header">
        <span class="theorist-tag">03. Proust / Elstir's Optics</span>
        <h2>The Metamorphosis of the Eye</h2>
      </div>
      <div class="core-pressure">
        "Elstir’s paintings destroy intellectual habits. He paints 'what he sees, not what he knows.' How does his technique of blending land and sea serve as an optical training ground for Marcel's own literary aesthetics?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Look at the description of Elstir's Carquethuit harbour. How does the prose mimic the painting by confusing urban terms with maritime ones?</div>
          <div class="q-sub">词汇的越界：文本如何通过“让陆地使用海洋的词汇”来重现画作的视觉错乱？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why must Elstir actively "strip himself of his intelligence" to paint a true impression? How is knowledge the enemy of perception?</div>
          <div class="q-sub">理性的缴械：为什么在真正的艺术感知中，“知道它是什么”反而成了最大的障碍？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Elstir’s art transform a transient, material object into an "abstract truth" via the discipline of perspective?</div>
          <div class="q-sub">透视的魔法：偶然的光影切片，是如何被画家的视角提炼为永恒法则的？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_04_elstir_painting_perception</div>
        <div class="anchor-tag">📍 U4_05_elstir_painting_perception</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Elstir does not copy the world; he forces the viewer into an optical crisis. By deliberately confusing <span class="blank"></span> with <span class="blank"></span>, he teaches Marcel that artistic truth begins only when intellectual recognition fails."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “埃尔斯蒂尔的画室是马塞尔真正的视觉学校。他的海景画之所以震撼，是因为他拒绝画出事物‘应有’的样子。通过在画布上故意混淆<span class="blank"></span>与<span class="blank"></span>的界限，他强迫观者经历了一次‘理智的短路’。普鲁斯特借此宣告：只有当概念和常识失效的瞬间，原初的视觉真理才得以显现……”
        </div>
      </div>
    </div>

    <!-- PACK 4 -->
    <div class="packet-section theme-bal">
      <div class="pack-header">
        <span class="theorist-tag">04. Bal / Optical Instruments</span>
        <h2>Microscope or Telescope?</h2>
      </div>
      <div class="core-pressure">
        "Proust violently rejected the accusation that he used a 'microscope' to obsess over petty details. He claimed his instrument was a telescope focused on distant worlds. How does distance generate the very scale of Proustian vision?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does Bal argue that the optical instrument determines the specific relation between subject and object? What happens to a detail when viewed through a telescope?</div>
          <div class="q-sub">尺度的诗学：用望远镜看微小事物，如何将“细节”放大成了一个自足的“世界”？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the distance of time (memory) function exactly like the lenses of a telescope, creating a "fake depth" out of flat surfaces?</div>
          <div class="q-sub">时间作为镜片：遥远的距离是如何在原本扁平的记忆上，伪造出立体感的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider Marcel voyeuristically watching through the window. How does framing operate as an optical instrument of desire?</div>
          <div class="q-sub">取景框与欲望：从窗外偷窥，如何将现实切割成了一部供人消费的视觉电影？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 Bal-U4-03-optical-instruments</div>
        <div class="anchor-tag">📍 U4_14_attention_and_misrecognition</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Bal points out that Proust's defense of the 'telescope' over the 'microscope' is crucial. It reveals that the text's obsessive detailing is not petty psychology, but a matter of <span class="blank"></span>, where distance transforms a tiny detail into <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “Mieke Bal 提醒我们注意普鲁斯特对‘显微镜’比喻的愤怒反驳。叙述者坚持他使用的是‘望远镜’，这绝非文字游戏。它暗示了文本中那些极其繁琐的视觉细节（比如衣服的褶皱、光影的变幻），不是出于琐碎的恋物癖，而是因为它们隔着巨大的时间距离。这种遥远的尺度，将每一个微小的斑点都膨胀成了<span class="blank"></span>……”
        </div>
      </div>
    </div>

    <!-- PACK 5 -->
    <div class="packet-section theme-crary">
      <div class="pack-header">
        <span class="theorist-tag">05. Crary / Unbinding Vision</span>
        <h2>The Dissolution of the Object</h2>
      </div>
      <div class="core-pressure">
        "As the 19th century advanced, vision was unbound from classical perspective and relocated into the contingent, physical body of the observer. How does Proust stage this crisis, where looking too closely dissolves the object into a chaotic 'magma'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Find the moment where Marcel stares at the three trees, struggling to pull a memory from them. How does the passage enact optical fatigue and the breakdown of cognitive synthesis?</div>
          <div class="q-sub">认知的瘫痪：当马塞尔死死盯住三棵树时，视觉的过载是如何导致大脑“死机”的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Crary links modern attention to automatic, absorbed states. How does Marcel's visual fixation resemble the trance of a "captured animal paralyzed by fear"?</div>
          <div class="q-sub">凝视的动物性：极度专注的状态为何不再属于高级理性，而退化成了被催眠的本能？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the failure to "see clearly" paradoxically become the necessary starting point for Proust's literary machine?</div>
          <div class="q-sub">盲目的必要性：为何“看不清”和“看错”，反而是普鲁斯特文学引擎启动的燃料？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_14_attention_and_misrecognition</div>
        <div class="anchor-tag">📍 Crary-U4-02-1879</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Aligned with Crary's history of modern vision, Proustian perception is fundamentally unstable. When Marcel strains to see the truth of <span class="blank"></span>, his very act of intense attention causes the image to <span class="blank"></span>, severing vision from certain knowledge."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “正如克拉里所描述的 19 世纪末视觉危机，普鲁斯特笔下的‘观看’充满了生理的脆弱性。当马塞尔试图用全副精力去解析<span class="blank"></span>时，他遭遇的不是意义的澄明，而是视神经的疲劳与重影。这种被剥夺了古典稳定性的视觉，证明了在现代性中，‘看’不再等同于‘知’，而是沦为了一场感官的崩溃……”
        </div>
      </div>
    </div>

    <!-- PACK 6 -->
    <div class="packet-section theme-gaze">
      <div class="pack-header">
        <span class="theorist-tag">06. Proust / The Social Gaze</span>
        <h2>Faces and Strangers</h2>
      </div>
      <div class="core-pressure">
        "Before a person is reduced to a name or a social category, they appear as an unreadable, purely optical phenomenon. How does Proust capture the raw, violent impact of the 'first glance'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Review Marcel's first sighting of the "little band" at Balbec. How does the text delay identifying them as individuals, treating them instead as a "luminous, moving mass"?</div>
          <div class="q-sub">移动的斑块：在知道她们是谁之前，少女们如何仅仅作为一团游移的色彩刺激着视网膜？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the gaze of a stranger induce "turning fires of jealousy" and paranoia, forcing the observer to wildly imagine the unknown worlds they possess?</div>
          <div class="q-sub">目光的侵略：陌生人的一个眼神，如何瞬间激活了观看者内心的恐惧与占有欲？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">When Albertine's face is finally seen up close, what happens to the mythological "aura" it had at a distance? How does familiarity blind us?</div>
          <div class="q-sub">接近的幻灭：当光环褪去、特写镜头推近，视觉的清晰度为何反而谋杀了美感？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_16_attention_and_misrecognition</div>
        <div class="anchor-tag">📍 U4_15_attention_and_misrecognition</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"In Proust, the initial gaze is an event of raw optical data, unmediated by intellect. Before the girls at Balbec become known identities, they are experienced as <span class="blank"></span>. This proves that perception is initially a form of <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “普鲁斯特精确地捕捉了‘初见’时的视觉延迟。在巴尔贝克的海滩上，马塞尔第一眼看到的不是几个具体的女孩，而是一片<span class="blank"></span>。这种剥离了社会身份的纯粹视觉现象，充满了野性的冲击力。文本暗示，所有的命名与熟识，其实都是对这种原初‘不可读性’的扼杀与掩盖……”
        </div>
      </div>
    </div>

    <!-- PACK 7 -->
    <div class="packet-section theme-vermeer">
      <div class="pack-header">
        <span class="theorist-tag">07. Proust / The Yellow Wall</span>
        <h2>Attention unto Death</h2>
      </div>
      <div class="core-pressure">
        "Bergotte literally dies looking at a tiny patch of yellow wall in Vermeer’s View of Delft. Why does absolute, pure visual attention to a painted surface become a fatal, absolute exchange for life itself?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Examine the 'celestial pair of scales'. How does Bergotte weigh the entirety of his own biological life against the aesthetic perfection of a yellow patch of paint?</div>
          <div class="q-sub">天平的倾斜：在死亡面前，一小块黄色油彩为何比一生的世俗成就更有分量？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">"That’s how I ought to have written." How does the visual materiality of the painting serve as the ultimate, albeit retroactive, lesson for literary style?</div>
          <div class="q-sub">迟到的顿悟：画面的“质感”如何反噬了作家的虚荣，成为他文体上的最高判决？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does Proust use Bergotte's death to argue that profound works of intellect obey "unknown laws" that have no sanction in our present, worldly life?</div>
          <div class="q-sub">未知的法则：艺术的真理为何总是指向一个不属于此世的、带有献身性质的维度？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Consider the books "arranged three by three, kept vigil like angels." How does the text visually construct the survival of the image post-mortem?</div>
          <div class="q-sub">守夜的天使：橱窗里成排的书本，如何完成了一场超越肉身朽坏的视觉复活？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_06_vermeer_yellow_wall_bergotte</div>
        <div class="anchor-tag">📍 U4_07_vermeer_yellow_wall_bergotte</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"The death of Bergotte marks the terrifying climax of visual attention. By fixating on the patch of yellow wall, he realizes his own prose lacked its <span class="blank"></span>. Proust sets up a fatal economy where the perfection of the image demands the <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “贝戈特之死，是普鲁斯特对‘专注（Attention）’最残酷的隐喻。当他在那小块黄色墙壁前感到目眩时，视觉的极致体验直接兑换了生命的终结。在那个超验的天平上，贝戈特意识到自己的文字缺乏那种<span class="blank"></span>。文本在这里确立了一个令人敬畏的法则：绝对的艺术真理，必须以肉身的献祭作为代价……”
        </div>
      </div>
    </div>

    <!-- PACK 8 -->
    <div class="packet-section theme-bal">
      <div class="pack-header">
        <span class="theorist-tag">08. Bal / The Dis-figure</span>
        <h2>The Rhetoric of the Flat Screen</h2>
      </div>
      <div class="core-pressure">
        "Proust’s text doesn’t just describe images; it writes them using rhetorical devices that flatten space. How does Bal’s concept of the 'dis-figure' explain how Proust manipulates visual negativity to create a 'mottled screen'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Bal suggests Proustian space operates through "spacing-out" and flattening. Where in the text does a supposedly deep memory (like Roussainville) reveal itself as a flat, unreadable surface?</div>
          <div class="q-sub">深度的剥夺：本该深邃的记忆风景，如何被文本降维成了一块斑驳、无法看穿的屏幕？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "dis-figure" multiply negativity? How does the text present something by describing what it is *not*, thereby keeping it visually suspended?</div>
          <div class="q-sub">否定的赋形：通过不断描写“它不是什么”，文本如何维持了视觉画面的悬浮与震颤？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Explore the primal scene of voyeurism (the magic lantern or Montjouvain). How is the window used explicitly as a photographic frame that flattens the subjects?</div>
          <div class="q-sub">取景框的暴力：偷窥的窗户如何像相机的快门一样，将活生生的人压扁成了感光底片？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 Bal-U4-04-photography</div>
        <div class="anchor-tag">📍 Bal-U4-05-snapshots-fake-depth</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Following Bal's analysis, we can see that Proust resists the illusion of classical perspective. Instead of offering a deep 3D world, the text deploys the 'dis-figure' to flatten the scene into a <span class="blank"></span>, forcing the reader to scan it like a <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “Mieke Bal 让我们看到，普鲁斯特并不是一个在文字里画 3D 风景画的写实主义者。相反，他经常运用‘去形（dis-figure）’的修辞，将三维的空间残忍地压平成一块<span class="blank"></span>。当马塞尔从窗外窥视时，他看到的不是生活的纵深，而是一张曝光过度的平面相片。这种视角的限制，恰恰是小说视觉美学的核心……”
        </div>
      </div>
    </div>

    <!-- PACK 9 -->
    <div class="packet-section theme-elstir">
      <div class="pack-header">
        <span class="theorist-tag">09. Proust / Perception & Error</span>
        <h2>The Fruitfulness of Misreading</h2>
      </div>
      <div class="core-pressure">
        "Elstir’s genius relies on depicting optical illusions—rendering things as they appear to the naïve eye, not as the brain knows them to be. How does Proust extend this principle to psychological and social 'misreadings'?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Elstir paints the sea where the land should be, how does Marcel similarly misplace the feelings of others, projecting his own "turning fires of jealousy" onto them?</div>
          <div class="q-sub">情感的错视画：马塞尔是如何像画家错置海陆一样，错置了自己和他人的动机的？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Why does the narrator argue that it is precisely our *errors* of perception that constitute the true poetry of our experience?</div>
          <div class="q-sub">谬误的诗意：如果从一开始就看清了真相，我们是否就彻底丧失了感受美的能力？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the "false image" of a person (Albertine in the distance) generate a massive psychological engine of desire that the "true image" (Albertine up close) could never sustain?</div>
          <div class="q-sub">虚假图像的动能：为何一个完全错误的视觉印象，却能驱动整整几大卷的疯狂迷恋？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_04_elstir_painting_perception</div>
        <div class="anchor-tag">📍 U4_16_attention_and_misrecognition</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Elstir’s marine paintings are not just about art; they are the epistemological key to the whole novel. Proust demonstrates that the initial <span class="blank"></span> of a visual field is vastly more generative than objective reality, because it is out of this error that <span class="blank"></span> is born."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “埃尔斯蒂尔的画作揭示了整部小说的认知逻辑：真理总是建立在必然的误读之上。画家刻意保留了视觉最初的<span class="blank"></span>，这正如马塞尔在面对社交界或阿尔贝蒂娜时所犯下的无数次判断错误。普鲁斯特告诉我们，剥除这些光学上的‘错觉’去追求客观事实是愚蠢的，因为正是这些错觉本身，构成了我们全部的欲望和生命的诗意……”
        </div>
      </div>
    </div>

    <!-- PACK 10 -->
    <div class="packet-section theme-synthesis">
      <div class="pack-header">
        <span class="theorist-tag">10. Synthesis / The Literary Eye</span>
        <h2>Writing as Optical Instrument</h2>
      </div>
      <div class="core-pressure">
        "Ultimately, Proust calls his entire novel an 'optical instrument' offered to the reader. By assembling Elstir's flatness, Vermeer's fatal attention, and photography's capture, how does the text train the reader to read themselves?"
      </div>
      <div class="question-list">
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">How does the narrator's meticulous dissection of visual failure (mirages, shadows, blind spots) paradoxically create the most lucid literary vision of the 20th century?</div>
          <div class="q-sub">清醒的盲视：对“视觉失效”的无情解剖，如何反倒成就了文学史上最锐利的眼睛？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">If Marcel fails to understand his own life until *Time Regained*, how does the reader use the "telescope" of the text to bring their own distant psychological truths into focus?</div>
          <div class="q-sub">读者的望远镜：这本巨著如何作为一台精密的光学仪器，让读者看清自己生命中那些遥远而模糊的星系？</div>
        </div>
        <div class="interactive-q" onclick="this.classList.toggle('heated')">
          <div class="q-text">Compare the "little patch of yellow wall" to a specific sentence in Proust. How does literary style function like Vermeer's paint—precious, terrifying, and sufficient in itself?</div>
          <div class="q-sub">作为油彩的文体：普鲁斯特那绵长、繁复的句法，是如何像维米尔的颜料一样，以其绝对的形式美抵御了时间的腐朽？</div>
        </div>
      </div>
      <div class="anchor-container">
        <div class="anchor-tag">📍 U4_06_vermeer_yellow_wall_bergotte</div>
        <div class="anchor-tag">📍 Bal-U4-03-optical-instruments</div>
      </div>
      <div class="seed-module">
        <div class="seed-header">Free Restatement Seed (EN/ZH)</div>
        <div class="seed-text">"Synthesizing U4, we realize the Search is an immense optical apparatus. It does not invite us to look at Marcel, but through him. The text's treatment of visuality—from Elstir's illusion to Vermeer's yellow wall—serves to train our own <span class="blank"></span>, proving that reading is fundamentally an act of <span class="blank"></span>."</div>
        <button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('active')">👁️ Expand Chinese Seed</button>
        <div class="chinese-seed">
          “综合整个 U4 的线索，我们终于明白普鲁斯特为何将自己的书称为‘光学仪器’。从埃尔斯蒂尔的海市蜃楼到维米尔那块致命的黄墙，小说中的视觉隐喻都在指向一个终极目的：训练读者的眼睛。文本并不要求我们去崇拜马塞尔的人生，而是要求我们通过这台精密的望远镜，去聚焦我们自己内心深处的<span class="blank"></span>。在这里，阅读本身变成了一场严苛的视觉实验……”
        </div>
      </div>
    </div>

  </div> <!-- End pack-grid -->

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Proustian U4 Traversal Pack loaded.");
    // Interactive questions toggle logic is handled inline via onclick="this.classList.toggle('heated')"
  });
</script>
