:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #eaf6ff;
  --panel-soft: #eef2ff;
  --surface: #0f172a;
  --text: #10213c;
  --text-soft: #4a5d7a;
  --line: rgba(16, 33, 60, 0.08);
  --primary: #1f5df6;
  --primary-strong: #0d2b68;
  --secondary: #67e8f9;
  --success: #10b981;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  --radius: 24px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #eaf4ff 0%, #f5f8ff 30%, #eef8ff 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.app-shell {
  min-height: 100vh;
  transition: background 0.2s ease, color 0.2s ease;
}

.app-shell.dark {
  --bg: #06111d;
  --panel: #0d1b2a;
  --panel-alt: #112235;
  --panel-soft: #12243d;
  --surface: #071827;
  --text: #edf6ff;
  --text-soft: #b8c4d7;
  --line: rgba(179, 207, 238, 0.12);
  --primary: #6ab6ff;
  --primary-strong: #dcecff;
  --secondary: #67e8f9;
  --success: #34d399;
  --shadow: 0 18px 50px rgba(2, 7, 18, 0.35);
  background: linear-gradient(180deg, #06111d 0%, #091b2c 100%);
  color: var(--text);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 18px 50px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.app-shell.dark .topbar {
  background: rgba(7, 17, 28, 0.78);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
}

.brand-subtitle {
  color: var(--text-soft);
  font-size: 0.73rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--text-soft);
  font-weight: 600;
}

.main-nav a {
  position: relative;
  padding: 8px 4px;
}

.main-nav a.active::after,
.main-nav a:hover::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 300px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: var(--panel);
}

.search-inline input {
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  width: 100%;
}

.primary-btn, .secondary-btn, .ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 14px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #315dff);
  color: white;
  box-shadow: 0 16px 34px rgba(49, 93, 255, 0.22);
}

.secondary-btn {
  background: rgba(103, 232, 249, 0.12);
  color: var(--text);
  border: 1px solid rgba(103, 232, 249, 0.3);
}

.ghost-btn {
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-btn.small, .secondary-btn.small {
  min-height: 40px;
  padding: 0 14px;
  font-size: 0.9rem;
}

.primary-btn:hover, .secondary-btn:hover, .ghost-btn:hover {
  transform: translateY(-1px);
}

.page-shell {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 24px 0 60px;
}

.hero-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 42px 0 18px;
}

.hero-copy {
  padding: 16px 0;
}

.eyebrow {
  display: inline-block;
  background: rgba(31, 93, 246, 0.08);
  color: var(--primary);
  border: 1px solid rgba(31, 93, 246, 0.12);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 18px 0 18px;
  font-size: clamp(2.8rem, 5vw, 4.4rem);
  line-height: 1.06;
  letter-spacing: -0.05em;
}

.hero-copy p {
  max-width: 670px;
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--text-soft);
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 28px 0 20px;
}

.hero-search {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 560px;
  padding: 10px 12px 10px 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.hero-search input {
  flex: 1;
  border: none;
  outline: none;
  min-height: 48px;
  background: transparent;
  color: var(--text);
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.mini-card {
  width: min(100%, 440px);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(31, 93, 246, 0.88));
  color: white;
  border-radius: 32px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.pill {
  border-radius: 999px;
  padding: 6px 9px;
  font-size: 0.72rem;
  font-weight: 700;
}

.pill.success {
  background: rgba(16, 185, 129, 0.15);
  color: #92f3c9;
}

.score-ring {
  width: 190px;
  height: 190px;
  margin: 28px auto 18px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(#67e8f9 0 89%, rgba(255,255,255,0.14) 89% 100%);
  position: relative;
}

.ring-inner {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.88);
  display: grid;
  place-items: center;
  text-align: center;
}

.ring-inner strong {
  display: block;
  font-size: 2rem;
}

.ring-inner span {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.7);
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.stat-grid div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 18px;
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
}

.stat-grid strong {
  font-size: 1.5rem;
}

.section-block {
  padding-top: 36px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 12px 0 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.04em;
}

.text-link {
  color: var(--primary);
  font-weight: 700;
}

.feature-grid, .course-grid, .testimonial-grid, .stats-grid, .dashboard-grid, .admin-grid {
  display: grid;
  gap: 22px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px 20px;
  box-shadow: var(--shadow);
}

.icon-badge {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  background: linear-gradient(135deg, rgba(31,93,246,0.12), rgba(103,232,249,0.2));
}

.feature-card h3 {
  margin: 18px 0 10px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0 0 12px;
  color: var(--text-soft);
  line-height: 1.6;
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-card li,
.list-inline li {
  padding: 7px 10px;
  font-size: 0.8rem;
  border-radius: 999px;
  background: rgba(31, 93, 246, 0.07);
  color: var(--primary);
}

.course-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.large-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.course-card {
  display: block;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px 20px 18px;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.course-card:hover {
  transform: translateY(-3px);
  border-color: rgba(31, 93, 246, 0.18);
}

.course-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 700;
  font-size: 0.72rem;
}

.course-card h3 {
  margin: 0 0 12px;
  font-size: 1.4rem;
}

.course-card p {
  margin: 0 0 14px;
  color: var(--text-soft);
  line-height: 1.6;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--text-soft);
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.progress-block {
  margin-top: 16px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-soft);
  margin-bottom: 8px;
}

.progress-bar {
  height: 10px;
  width: 100%;
  border-radius: 999px;
  background: rgba(31, 93, 246, 0.08);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
}

.stats-band {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.stat-pane {
  background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.72));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 18px;
  text-align: center;
  display: grid;
  gap: 8px;
}

.app-shell.dark .stat-pane {
  background: linear-gradient(180deg, rgba(13,27,42,0.9), rgba(13,27,42,0.7));
}

.stat-pane strong {
  font-size: 2rem;
}

.stat-pane span {
  color: var(--text-soft);
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.testimonial-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 20px;
  box-shadow: var(--shadow);
}

.quote-mark {
  font-size: 3rem;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 8px;
}

.testimonial-card p {
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 18px;
}

.person-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.person-meta span {
  color: var(--text-soft);
}

.padded {
  padding: 10px 0 20px;
}

.course-detail-header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: end;
  margin-bottom: 28px;
}

.course-detail-header h1 {
  margin: 12px 0 12px;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  letter-spacing: -0.04em;
}

.course-detail-header p {
  max-width: 820px;
  color: var(--text-soft);
  line-height: 1.7;
}

.detail-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 22px;
}

.detail-column {
  display: grid;
  gap: 20px;
}

.info-panel, .panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 20px;
  box-shadow: var(--shadow);
}

.info-panel h3,
.panel h3 {
  margin: 0 0 16px;
  font-size: 1.2rem;
}

.info-panel p,
.panel p {
  color: var(--text-soft);
  line-height: 1.7;
}

.check-list, .resource-list, .task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.check-list li, .resource-list li, .task-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  color: var(--text-soft);
}

.check-list li::before {
  content: '✓';
  width: 22px;
  height: 22px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.12);
  color: var(--success);
  font-weight: 800;
}

.video-placeholder {
  height: 220px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: linear-gradient(135deg, rgba(31,93,246,0.14), rgba(103,232,249,0.12));
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--primary);
  font-weight: 700;
}

.play-button {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.85);
  font-size: 2rem;
  margin-bottom: 12px;
}

.instructor-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar-circle {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 700;
}

.instructor-row span {
  display: block;
  color: var(--text-soft);
  margin-top: 4px;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.metric-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 20px 18px;
  display: grid;
  gap: 8px;
  box-shadow: var(--shadow);
}

.metric-card span {
  color: var(--text-soft);
}

.metric-card strong {
  font-size: clamp(1.6rem, 2vw, 2.1rem);
}

.metric-card small {
  color: var(--success);
  font-weight: 700;
}

.dashboard-grid {
  grid-template-columns: 1.1fr 1fr 1fr;
  margin-top: 22px;
}

.streak-box {
  display: grid;
  gap: 8px;
  margin-bottom: 20px;
}

.streak-box strong {
  font-size: 2rem;
}

.streak-box span {
  color: var(--text-soft);
}

.mini-chart {
  display: flex;
  align-items: end;
  gap: 10px;
  height: 150px;
  padding-top: 12px;
}

.mini-chart span {
  flex: 1;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--secondary), var(--primary));
  opacity: 0.9;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.task-list em {
  color: var(--primary);
  font-style: normal;
  font-weight: 700;
}

.quiz-panel {
  display: grid;
  gap: 18px;
}

.question-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px 20px;
  box-shadow: var(--shadow);
}

.question-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  color: var(--text-soft);
}

.question-card h3 {
  margin: 0 0 18px;
  font-size: 1.2rem;
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.answer-btn {
  text-align: left;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(31, 93, 246, 0.02);
  color: var(--text);
  transition: all 0.2s ease;
}

.answer-btn.selected {
  border-color: var(--primary);
  background: rgba(31, 93, 246, 0.08);
}

.answer-btn.correct {
  background: rgba(16, 185, 129, 0.12);
  border-color: rgba(16, 185, 129, 0.5);
  color: var(--success);
}

.answer-btn.wrong {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.25);
  color: #ef4444;
}

.explanation-box {
  margin-top: 20px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(103, 232, 249, 0.08);
  border: 1px solid rgba(103, 232, 249, 0.25);
}

.explanation-box strong {
  display: block;
  margin-bottom: 8px;
}

.score-summary {
  margin-top: 18px;
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(31,93,246,0.08), rgba(103,232,249,0.12));
  border: 1px solid rgba(31,93,246,0.15);
  border-radius: 18px;
}

.score-summary strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.3rem;
}

.tutor-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.chat-window {
  display: grid;
  gap: 12px;
  min-height: 320px;
  margin-bottom: 16px;
}

.chat-bubble {
  max-width: 80%;
  border-radius: 18px;
  padding: 12px 14px;
  line-height: 1.6;
}

.chat-bubble.assistant {
  background: rgba(31, 93, 246, 0.08);
  color: var(--text);
  border: 1px solid rgba(31, 93, 246, 0.1);
}

.chat-bubble.student {
  margin-left: auto;
  background: linear-gradient(135deg, var(--primary), #71a7ff);
  color: white;
}

.chat-form {
  display: flex;
  gap: 12px;
}

.chat-form input,
.auth-form input {
  flex: 1;
  min-height: 48px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: transparent;
  padding: 0 14px;
  color: var(--text);
}

.auth-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.auth-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: var(--shadow);
}

.auth-panel.alt {
  background: linear-gradient(180deg, rgba(31,93,246,0.06), rgba(103,232,249,0.08));
}

.auth-form {
  display: grid;
  gap: 16px;
  margin-top: 20px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: var(--text-soft);
  font-weight: 600;
}

.admin-grid {
  grid-template-columns: 1fr 1fr;
  margin-top: 22px;
}

@media (max-width: 980px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 18px;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .header-actions {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .search-inline {
    min-width: 0;
    flex: 1 1 240px;
  }

  .hero-section,
  .detail-grid,
  .auth-layout,
  .dashboard-grid,
  .admin-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .course-grid,
  .testimonial-grid,
  .stats-band {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 20px, 1280px);
  }

  .feature-grid,
  .course-grid,
  .testimonial-grid,
  .stats-band,
  .answers-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.6rem;
  }

  .chat-form {
    flex-direction: column;
  }

  .section-heading,
  .course-detail-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
