---
title: "Course Gateway: Recursive Reading Practice"
description: "A circular, polycentric entrance to Proustian 2.0."
tags:
  - Proustian
  - Course
  - Reading-Garden
---

<style>
    :root {
      --bg: #fbfaf6;
      --bg-soft: #ffffff;
      --surface: #ffffff;
      --surface-soft: #f5f2ea;
      --ink: #1f1b17;
      --ink-soft: #4b4238;
      --muted: #7f7669;
      --line: rgb(31 27 23 / 0.10);
      --line-strong: rgb(31 27 23 / 0.18);
      --gold: #9a7538;
      --gold-soft: #c2a86d;
      --blue: #4f6f78;
      --blue-soft: #7d969c;
      --red: #7b443b;
      --wood: #6b5141;
      --shadow: rgb(31 27 23 / 0.035);
      --radius: 20px;
      --font-serif: "Times New Roman", Georgia, "Iowan Old Style", Charter, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
      color-scheme: light;
    }

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      background:
        radial-gradient(circle at 50% -12%, rgb(231 220 194 / 0.18), transparent 28rem),
        linear-gradient(180deg, var(--bg-soft), var(--bg) 46%, var(--bg));
      color: var(--ink);
      font-family: var(--font-serif);
      font-size: 18px;
      line-height: 1.66;
      text-rendering: optimizeLegibility;
    }

    a { color: inherit; }

    .shell {
      width: min(1120px, calc(100vw - 36px));
      margin: 0 auto;
      padding: 22px 0 68px;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 0 0 16px;
      border-bottom: 1px solid var(--line);
      font-family: var(--font-sans);
      font-size: 0.9rem;
      color: var(--muted);
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--ink);
      text-decoration: none;
    }

    .seal {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border: 1px solid var(--line-strong);
      border-radius: 50%;
      color: var(--red);
      font-family: var(--font-serif);
      font-size: 1rem;
      background: var(--surface);
    }

    .nav {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-end;
    }

    .nav a {
      color: var(--muted);
      text-decoration: none;
    }

    .nav a:hover { color: var(--blue); }

    .hero {
      max-width: 850px;
      margin: 62px auto 46px;
      text-align: center;
    }

    .eyebrow,
    .label,
    .micro {
      font-family: var(--font-sans);
      color: var(--muted);
    }

    .eyebrow {
      margin: 0 0 12px;
      font-size: 0.8rem;
      font-weight: 650;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3 {
      margin: 0;
      font-family: var(--font-serif);
      font-weight: 400;
      color: var(--ink);
      letter-spacing: 0;
    }

    h1 {
      font-size: clamp(3rem, 7vw, 6rem);
      line-height: 0.98;
    }

    h2 {
      font-size: clamp(1.8rem, 3vw, 2.55rem);
      line-height: 1.12;
    }

    h3 {
      font-size: clamp(1.26rem, 2vw, 1.62rem);
      line-height: 1.16;
    }

    p {
      margin: 0;
      color: var(--ink-soft);
    }

    .deck {
      max-width: 760px;
      margin: 22px auto 0;
      color: var(--ink-soft);
      font-size: clamp(1.16rem, 1.9vw, 1.42rem);
      line-height: 1.5;
    }

    .correction {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin: 34px auto 0;
      max-width: 860px;
    }

    .correction div {
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 15px 17px;
      background: rgb(255 255 255 / 0.72);
      text-align: left;
    }

    .correction strong {
      display: block;
      margin-bottom: 4px;
      color: var(--red);
      font-family: var(--font-sans);
      font-size: 0.83rem;
      font-weight: 650;
    }

    .section {
      margin-top: 46px;
      padding-top: 34px;
      border-top: 1px solid var(--line);
    }

    .section-head {
      display: grid;
      grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
      gap: 28px;
      align-items: start;
      margin-bottom: 22px;
    }

    .section-head p {
      max-width: 66ch;
      font-size: 1.06rem;
      line-height: 1.62;
    }

    .machine {
      display: grid;
      grid-template-columns: minmax(0, 0.86fr) minmax(340px, 1.14fr);
      gap: 22px;
      align-items: stretch;
    }

    .center-card,
    .paper-card,
    .loop-card,
    .field-card,
    .quote-card {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: rgb(255 255 255 / 0.82);
      box-shadow: 0 10px 28px var(--shadow);
    }

    .center-card {
      display: grid;
      align-content: center;
      min-height: 420px;
      padding: 30px;
      text-align: center;
      background:
        radial-gradient(circle at 50% 42%, rgb(194 168 109 / 0.12), transparent 36%),
        var(--surface);
    }

    .center-orb {
      width: min(290px, 74vw);
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      margin: 0 auto;
      border: 1px solid var(--line-strong);
      border-radius: 50%;
      background: var(--bg-soft);
    }

    .center-orb strong {
      display: block;
      max-width: 12ch;
      margin: 0 auto;
      font-size: clamp(1.8rem, 3.2vw, 2.55rem);
      line-height: 1.05;
      font-weight: 400;
    }

    .center-orb span {
      display: block;
      margin-top: 12px;
      color: var(--muted);
      font-family: var(--font-sans);
      font-size: 0.88rem;
    }

    .orbit-note {
      margin: 18px auto 0;
      max-width: 40ch;
      color: var(--muted);
      font-size: 0.98rem;
    }

    .loop {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .loop-card {
      min-height: 128px;
      padding: 15px;
      position: relative;
    }

    .loop-card::after {
      content: "return";
      position: absolute;
      right: 13px;
      bottom: 10px;
      color: var(--blue);
      font-family: var(--font-sans);
      font-size: 0.72rem;
      opacity: 0;
      transition: opacity 140ms ease;
    }

    .loop-card:hover {
      border-color: var(--line-strong);
      background: var(--surface);
    }

    .loop-card:hover::after { opacity: 0.72; }

    .number {
      display: inline-flex;
      margin-bottom: 8px;
      color: var(--gold);
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 650;
    }

    .loop-card h3 {
      font-size: 1.14rem;
      margin-bottom: 4px;
    }

    .loop-card p {
      color: var(--muted);
      font-size: 0.93rem;
      line-height: 1.45;
    }

    .grid-two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .paper-card {
      padding: 22px;
    }

    .paper-card h3 {
      margin-bottom: 9px;
    }

    .paper-card p + p {
      margin-top: 12px;
    }

    .quote-card {
      padding: 24px;
      border-left: 3px solid var(--wood);
      font-size: clamp(1.25rem, 2vw, 1.65rem);
      line-height: 1.32;
      color: var(--ink);
      background:
        linear-gradient(135deg, rgb(154 117 56 / 0.06), transparent 58%),
        var(--surface);
    }

    .chain {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
    }

    .chain .paper-card {
      padding: 17px;
      min-height: 128px;
    }

    .chain h3 {
      font-size: 1.08rem;
    }

    .chain p {
      font-size: 0.92rem;
      line-height: 1.46;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
    }

    .field-card {
      padding: 17px;
      min-height: 174px;
      background: rgb(255 255 255 / 0.74);
    }

    .field-card h3 {
      font-size: 1.17rem;
      margin-bottom: 8px;
    }

    .field-card p {
      font-size: 0.94rem;
      line-height: 1.5;
    }

    .field-card small {
      display: block;
      margin-bottom: 8px;
      color: var(--blue);
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 650;
    }

    .source-packs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .lens-card {
      padding: 18px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: rgb(255 255 255 / 0.72);
    }

    .lens-card h3 {
      margin-bottom: 6px;
      font-size: 1.18rem;
    }

    .lens-card p {
      font-size: 0.96rem;
      line-height: 1.5;
    }

    .lens-card .label {
      display: block;
      margin-bottom: 8px;
      color: var(--blue);
      font-size: 0.76rem;
      font-weight: 650;
    }

    .route-note {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(260px, 0.72fr);
      gap: 18px;
      align-items: stretch;
    }

    .micro {
      font-size: 0.84rem;
      line-height: 1.42;
    }

    .do-not {
      display: grid;
      gap: 8px;
      margin: 16px 0 0;
      padding: 0;
      list-style: none;
    }

    .do-not li {
      padding: 9px 0;
      border-bottom: 1px solid var(--line);
      color: var(--ink-soft);
    }

    @media (max-width: 960px) {
      .correction,
      .machine,
      .section-head,
      .grid-two,
      .source-packs,
      .route-note {
        grid-template-columns: 1fr;
      }

      .loop,
      .fields,
      .chain {
        grid-template-columns: repeat(2, 1fr);
      }

      .center-card {
        min-height: 340px;
      }
    }

    @media (max-width: 620px) {
      body { font-size: 17px; }

      .shell {
        width: min(100% - 24px, 1120px);
        padding-top: 14px;
      }

      .topbar {
        align-items: flex-start;
        flex-direction: column;
      }

      .hero {
        margin-top: 42px;
      }

      h1 {
        font-size: clamp(2.8rem, 16vw, 4.2rem);
      }

      .loop,
      .fields,
      .chain {
        grid-template-columns: 1fr;
      }
    }
  </style>

<div class="shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="Proustian 2.0">
        <span class="seal">P</span>
        <span>Proustian 2.0</span>
      </a>
      <nav class="nav" aria-label="Gateway sections">
        <a href="#machine">Reading machine</a>
        <a href="#u1">U1 method</a>
        <a href="#chain">Claim/problem chain</a>
        <a href="#fields">U2-U6 fields</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="title">
        <p class="eyebrow">Course Gateway / recursive reading practice</p>
        <h1 id="title">The passage remains the center.</h1>
        <p class="deck">Proustian 2.0 does not replace memory with signs. It uses the memory cliché as the first pressure point, then opens a polycentric reading practice in which each theoretical lens must become testable, confront its limits, and return to Proust's prose.</p>
        <div class="correction" aria-label="Conceptual corrections">
          <div><strong>Not a signs unit</strong><p>U1 is a general introduction and methodological overture.</p></div>
          <div><strong>Not a master key</strong><p>Deleuze is one training lens, not the center of the course.</p></div>
          <div><strong>Not a linear road</strong><p>U2-U6 are recurring fields that can be entered and re-entered.</p></div>
        </div>
      </section>

      <section class="section" id="machine">
        <div class="section-head">
          <div>
            <p class="eyebrow">Circular structure</p>
            <h2>A reading machine, not a roadmap</h2>
          </div>
          <p>The course begins with a Proust passage. Pressure appears. A lens opens. A claim forms. A problem appears. Another lens resists or answers. The reader returns to the sentence, rhythm, scene, object, gesture, sound, or image, then makes a judgment and returns again.</p>
        </div>

        <div class="machine">
          <article class="center-card" aria-label="Proustian text as center">
            <div class="center-orb">
              <div>
                <strong>Proustian Text / Passage / Prose</strong>
                <span>center, ground, return point</span>
              </div>
            </div>
            <p class="orbit-note">Theory is released from the text like a kite-line. The return is essential.</p>
          </article>

          <div class="loop" aria-label="Recursive reading loop">
            <article class="loop-card"><span class="number">01</span><h3>Start from passage</h3><p>Begin with a scene, sentence, object, rhythm, gesture, sound, or image.</p></article>
            <article class="loop-card"><span class="number">02</span><h3>Pressure appears</h3><p>Memory, error, delay, image, sound, social code, space, sensation, or art.</p></article>
            <article class="loop-card"><span class="number">03</span><h3>Open one lens</h3><p>A provisional lens enters. It must remain answerable to the prose.</p></article>
            <article class="loop-card"><span class="number">04</span><h3>Claim forms</h3><p>The lens produces an argument, but not yet a verdict.</p></article>
            <article class="loop-card"><span class="number">05</span><h3>Problem appears</h3><p>The claim exposes its own limit or blind spot.</p></article>
            <article class="loop-card"><span class="number">06</span><h3>Another lens resists</h3><p>A second approach complicates, answers, or interrupts the first.</p></article>
            <article class="loop-card"><span class="number">07</span><h3>Return to prose</h3><p>Back to sentence, rhythm, scene, object, gesture, sound, image.</p></article>
            <article class="loop-card"><span class="number">08</span><h3>Readerly judgment</h3><p>The reader decides what the passage can sustain.</p></article>
            <article class="loop-card"><span class="number">09</span><h3>Return again</h3><p>The loop reopens. The course advances by return, not replacement.</p></article>
          </div>
        </div>
      </section>

      <section class="section" id="u1">
        <div class="section-head">
          <div>
            <p class="eyebrow">U1 position</p>
            <h2>General Introduction / Methodological Overture</h2>
          </div>
          <p>U1 teaches how to move among competing lenses. It begins with the inherited memory cliché because "Proust as a novelist of memory" is the strongest entrance, but it treats memory as powerful and insufficient: a hinge, not a final center.</p>
        </div>

        <div class="grid-two">
          <article class="paper-card">
            <h3>Memory cliché as starting pressure</h3>
            <p>U1 does not reject memory. It uses memory's insufficiency to open the reader toward other pressures: error, delay, sensation, social code, visuality, sound, artistic form, and writing.</p>
          </article>
          <article class="paper-card">
            <h3>Deleuze as one training lens</h3>
            <p>Signs, forced thought, apprenticeship, error, and interpretation train another way of seeing. They do not become the new center, and Deleuze does not become the master key.</p>
          </article>
        </div>

        <blockquote class="quote-card">"Proust is the spine. Theory is the kite-line. Reading is the disciplined release and return. The center is not memory, not signs, not Deleuze, not Poulet. The center is the effort to understand and approach the novel itself."</blockquote>
      </section>

      <section class="section" id="chain">
        <div class="section-head">
          <div>
            <p class="eyebrow">Operating rule</p>
            <h2>Every lens must pass through the claim/problem chain</h2>
          </div>
          <p>Theories do not sit above the novel as a hierarchy. They are tested through a chain. If a lens cannot produce an anchored claim, meet a problem, face a counterclaim, identify its own limit, and return to the text, it has not yet become a Proustian reading method.</p>
        </div>

        <div class="chain" aria-label="Claim problem chain">
          <article class="paper-card"><h3>Claim</h3><p>What does this lens allow us to say?</p></article>
          <article class="paper-card"><h3>Passage anchor</h3><p>Where does the prose make this claim testable?</p></article>
          <article class="paper-card"><h3>Problem</h3><p>What does the claim fail to explain?</p></article>
          <article class="paper-card"><h3>Counterclaim</h3><p>Which other lens resists or complicates it?</p></article>
          <article class="paper-card"><h3>Limit</h3><p>Where must the theory stop?</p></article>
          <article class="paper-card"><h3>Return</h3><p>What does the passage now ask us to see?</p></article>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Provisional lenses</p>
            <h2>Polycentric reading</h2>
          </div>
          <p>No single theory owns Proust. Memory, signs, space, narrative discourse, music, visuality, sensory history, social space, and writing are all entrances. Each can clarify the passage; each can also overreach.</p>
        </div>

        <div class="source-packs">
          <article class="lens-card">
            <span class="label">Memory</span>
            <h3>Powerful, but insufficient</h3>
            <p>The first inherited entrance. It begins the pressure, but it cannot contain the course.</p>
          </article>
          <article class="lens-card">
            <span class="label">Signs / apprenticeship</span>
            <h3>A training lens</h3>
            <p>Useful for forced thought, error, interpretation, love, society, sensuous signs, and art signs. Not the master framework.</p>
          </article>
          <article class="lens-card">
            <span class="label">Fiction as training</span>
            <h3>Readerly apprenticeship</h3>
            <p>The novel trains the reader through error, delay, correction, and self-recognition.</p>
          </article>
          <article class="lens-card">
            <span class="label">Space / art / writing</span>
            <h3>Recurring fields</h3>
            <p>Other units open spatialization, music, visuality, social time, and writing as returning interpretive fields.</p>
          </article>
        </div>
      </section>

      <section class="section" id="fields">
        <div class="section-head">
          <div>
            <p class="eyebrow">U2-U6 relation</p>
            <h2>Recurring fields, not a straight road</h2>
          </div>
          <p>The six units should not look like a corporate roadmap. U1 opens the operating method; U2-U6 are fields where that method is repeatedly tested and returned to the Proustian text.</p>
        </div>

        <div class="fields">
          <article class="field-card"><small>U2</small><h3>Time / Text / Spatialization</h3><p>Narrative mechanics and textual pressure as a recurring field.</p></article>
          <article class="field-card"><small>U3</small><h3>Music / Ineffable / Structure</h3><p>Sound, artistic signs, and the problem of what cannot be simply stated.</p></article>
          <article class="field-card"><small>U4</small><h3>Visuality / Attention</h3><p>Gaze, image, attention, and perceptual training.</p></article>
          <article class="field-card"><small>U5</small><h3>Space / Sensory History</h3><p>Social time, room, atmosphere, and embodied history.</p></article>
          <article class="field-card"><small>U6</small><h3>Writing / Time Regained</h3><p>Reassembly, vocation, and the return to writing.</p></article>
        </div>
      </section>

      <section class="section">
        <div class="route-note">
          <article class="paper-card">
            <p class="eyebrow">File relation</p>
            <h2>Course-Gateway is not U1</h2>
            <p>Course-Gateway explains the whole circular reading machine. U1-General-Introduction teaches the method of that machine. U2-U6 provide recurring fields where the method is tested.</p>
          </article>
          <aside class="paper-card">
            <p class="eyebrow">Do not revert to</p>
            <ul class="do-not">
              <li>Deleuze as the course center</li>
              <li>Signs as the master framework</li>
              <li>Memory replaced by signs</li>
              <li>Six units as a linear road</li>
              <li>Bibliography dump or theory hierarchy</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  </div>
