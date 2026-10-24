import { useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { categories, courses, dashboardStats, quizQuestions, weakTopics, tasks, testimonials, adminStats } from './data';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [search, setSearch] = useState('');

  const filteredCourses = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((course) => {
      return [
        course.title,
        course.category,
        course.level,
        course.description,
        course.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [search]);

  return (
    <div className={`app-shell ${theme}`}>
      <Header theme={theme} setTheme={setTheme} search={search} setSearch={setSearch} />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage filteredCourses={filteredCourses} search={search} setSearch={setSearch} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/courses" element={<CatalogPage filteredCourses={filteredCourses} />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/ai-tutor" element={<TutorPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}

function Header({ theme, setTheme, search, setSearch }: { theme: 'light' | 'dark'; setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>; search: string; setSearch: (value: string) => void; }) {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">E</div>
        <div>
          <div className="brand-name">EduSphere</div>
          <div className="brand-subtitle">Future-ready learning</div>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/quiz">Practice Test</NavLink>
        <NavLink to="/ai-tutor">AI Tutor</NavLink>
      </nav>

      <div className="header-actions">
        <label className="search-inline" aria-label="Course search">
          <span>⌕</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search courses, exams or subjects" />
        </label>
        <button className="ghost-btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <Link to="/auth" className="primary-btn small">Log in</Link>
        <Link to="/auth" className="secondary-btn small">Sign up</Link>
      </div>
    </header>
  );
}

function HomePage({ filteredCourses, search, setSearch }: { filteredCourses: typeof courses; search: string; setSearch: (value: string) => void; }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Your all-in-one academic growth platform</span>
          <h1>Learn Smarter. Achieve More.</h1>
          <p>
            Build confidence across STEM, SAT, IELTS, MSAT, IGCSE and A Level pathways with structured courses,
            practice tests, study dashboards and expert guidance in one place.
          </p>
          <div className="cta-row">
            <Link to="/courses" className="primary-btn">Explore Courses</Link>
            <Link to="/auth" className="secondary-btn">Get Started</Link>
          </div>
          <div className="hero-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by course, subject or exam"
            />
            <button className="primary-btn">Search</button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="mini-card large">
            <div className="label-row">
              <span>Live progress</span>
              <span className="pill success">+18% this month</span>
            </div>
            <div className="score-ring">
              <div className="ring-inner">
                <strong>89%</strong>
                <span>Overall</span>
              </div>
            </div>
            <div className="stat-grid compact">
              <div>
                <strong>42</strong>
                <span>Lessons</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Quizzes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured exam prep</span>
            <h2>Prepare for every major pathway</h2>
          </div>
          <Link to="/courses" className="text-link">View all courses</Link>
        </div>

        <div className="feature-grid">
          {categories.map((category) => (
            <div key={category.id} className="feature-card">
              <div className="icon-badge">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>
                {category.subjects.slice(0, 3).map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Popular subjects</span>
            <h2>Courses designed for measurable growth</h2>
          </div>
        </div>

        <div className="course-grid">
          {filteredCourses.slice(0, 6).map((course) => (
            <Link key={course.id} to={`/course/${course.id}`} className="course-card">
              <div className="course-topline">
                <span className="badge soft" style={{ background: `${course.accent}1A`, color: course.accent }}>{course.category}</span>
                <span className="course-rating">★ {course.rating}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="meta-row">
                <span>{course.level}</span>
                <span>{course.duration}</span>
                <span>{course.lessons} lessons</span>
              </div>
              <div className="progress-block">
                <div className="progress-label">
                  <span>Progress</span>
                  <strong>{course.progress}%</strong>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${course.progress}%`, background: course.accent }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block stats-band">
        <div className="stat-pane">
          <strong>14k+</strong>
          <span>Active learners</span>
        </div>
        <div className="stat-pane">
          <strong>96%</strong>
          <span>Course completion</span>
        </div>
        <div className="stat-pane">
          <strong>2.4M</strong>
          <span>Practice questions</span>
        </div>
        <div className="stat-pane">
          <strong>4.9/5</strong>
          <span>Average rating</span>
        </div>
      </section>

      <section className="section-block testimonials-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Student stories</span>
            <h2>Trusted by students preparing for the next big step</h2>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="quote-mark">“</div>
              <p>{item.quote}</p>
              <div className="person-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function CatalogPage({ filteredCourses }: { filteredCourses: typeof courses }) {
  return (
    <section className="section-block padded">
      <div className="section-heading">
        <div>
          <span className="eyebrow">All pathways</span>
          <h2>Explore the learning catalog</h2>
        </div>
      </div>
      <div className="course-grid large-grid">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`} className="course-card">
            <div className="course-topline">
              <span className="badge soft" style={{ background: `${course.accent}1A`, color: course.accent }}>{course.category}</span>
              <span className="course-rating">★ {course.rating}</span>
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="meta-row">
              <span>{course.level}</span>
              <span>{course.lessons} lessons</span>
            </div>
            <ul className="list-inline">
              {course.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId) ?? courses[0];

  return (
    <section className="section-block padded">
      <div className="course-detail-header">
        <div>
          <span className="eyebrow">{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
        <div className="detail-actions">
          <button className="primary-btn">Bookmark</button>
          <button className="secondary-btn">Continue</button>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-column">
          <div className="info-panel">
            <h3>Course overview</h3>
            <p>
              Designed for structured learning, this course combines concept explanations, guided examples and exam-style practice to help students build mastery over time.
            </p>
            <div className="meta-row">
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <span>{course.lessons} lessons</span>
            </div>
          </div>

          <div className="info-panel">
            <h3>Syllabus</h3>
            <ul className="check-list">
              {course.chapters.map((chapter) => (
                <li key={chapter}>{chapter}</li>
              ))}
            </ul>
          </div>

          <div className="info-panel">
            <h3>Video lesson</h3>
            <div className="video-placeholder">
              <div className="play-button">▶</div>
              <span>Lesson preview: {course.chapters[0]}</span>
            </div>
          </div>
        </div>

        <aside className="detail-column">
          <div className="info-panel">
            <h3>Learning resources</h3>
            <ul className="resource-list">
              {course.resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </div>

          <div className="info-panel">
            <h3>Included features</h3>
            <ul className="check-list">
              {course.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="info-panel">
            <h3>Instructor</h3>
            <div className="instructor-row">
              <div className="avatar-circle">{course.professor[0]}</div>
              <div>
                <strong>{course.professor}</strong>
                <span>Subject expert</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="section-block padded">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Student dashboard</span>
          <h2>Your learning snapshot</h2>
        </div>
        <Link to="/courses" className="text-link">Continue learning</Link>
      </div>

      <div className="stats-grid">
        {dashboardStats.map((item) => (
          <div key={item.label} className="metric-card">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.trend}</small>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <h3>Study streak</h3>
          <div className="streak-box">
            <strong>12 days</strong>
            <span>Keep the momentum going today.</span>
          </div>
          <div className="mini-chart" aria-label="Progress chart">
            {[45, 62, 58, 73, 81, 90, 96].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>Weak topics</h3>
          <ul className="task-list">
            {weakTopics.map((topic) => (
              <li key={topic.name}>
                <span>{topic.name}</span>
                <em>{topic.priority}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3>Upcoming tasks</h3>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = quizQuestions.reduce((total, question) => {
    const chosen = selectedAnswers[question.id];
    if (chosen === question.correctAnswer) return total + 1;
    return total;
  }, 0);

  const handleAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: answer }));
  };

  return (
    <section className="section-block padded">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Timed practice</span>
          <h2>Mock assessment center</h2>
        </div>
        <button className="primary-btn" onClick={() => setSubmitted(true)}>Submit answers</button>
      </div>

      <div className="quiz-panel">
        {quizQuestions.map((question, index) => {
          const selected = selectedAnswers[question.id];
          return (
            <article key={question.id} className="question-card">
              <div className="question-header">
                <span>Question {index + 1}</span>
                <strong>{selected === question.correctAnswer && submitted ? 'Correct' : selected && submitted ? 'Incorrect' : 'In progress'}</strong>
              </div>
              <h3>{question.question}</h3>
              <div className="answers-grid">
                {question.options.map((option) => {
                  const isSelected = selected === option;
                  const isCorrect = submitted && option === question.correctAnswer;
                  const isWrong = submitted && isSelected && option !== question.correctAnswer;

                  return (
                    <button
                      key={option}
                      className={`answer-btn ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                      onClick={() => handleAnswer(question.id, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="explanation-box">
                  <strong>Explanation</strong>
                  <p>{question.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {submitted && (
        <div className="score-summary">
          <strong>Score: {score} / {quizQuestions.length}</strong>
          <p>Detailed review is available for every incorrect answer. Retry incorrect questions to improve accuracy.</p>
        </div>
      )}
    </section>
  );
}

function TutorPage() {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'I can help explain concepts, walk through problems, and suggest revision strategies. I can also prepare an API integration point when a model backend is connected.' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((current) => [
      ...current,
      { sender: 'student', text: input },
      {
        sender: 'assistant',
        text: 'This AI tutor UI is ready for backend integration. When a real AI API is configured, responses can be connected here without changing the interface.',
      },
    ]);
    setInput('');
  };

  return (
    <section className="section-block padded">
      <div className="section-heading">
        <div>
          <span className="eyebrow">AI study assistant</span>
          <h2>Ask for hints, explanations or a step-by-step breakdown</h2>
        </div>
      </div>

      <div className="tutor-panel">
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={`${message.sender}-${index}`} className={`chat-bubble ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a topic, question, or a step-by-step process..."
          />
          <button className="primary-btn" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

function AuthPage() {
  return (
    <section className="section-block auth-layout">
      <div className="auth-panel">
        <span className="eyebrow">Welcome back</span>
        <h2>Log in to continue your study journey</h2>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="student@edusphere.io" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="primary-btn" type="button">Log in</button>
        </form>
      </div>
      <div className="auth-panel alt">
        <span className="eyebrow">Create account</span>
        <h2>Start preparing for your next milestone</h2>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>
          <label>
            Goal
            <input type="text" placeholder="SAT, IELTS, IGCSE, STEM..." />
          </label>
          <button className="secondary-btn" type="button">Create account</button>
        </form>
      </div>
    </section>
  );
}

function AdminPage() {
  return (
    <section className="section-block padded">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Admin dashboard</span>
          <h2>Manage courses, learners and learning resources</h2>
        </div>
      </div>

      <div className="stats-grid">
        {adminStats.map((item) => (
          <div key={item.label} className="metric-card">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="admin-grid">
        <div className="panel">
          <h3>Recent updates</h3>
          <ul className="task-list">
            <li><span>New SAT Writing module published</span><em>Today</em></li>
            <li><span>3 new IELTS speaking prompts added</span><em>Yesterday</em></li>
            <li><span>Physics lab resources updated</span><em>2 days ago</em></li>
          </ul>
        </div>

        <div className="panel">
          <h3>Popular resources</h3>
          <ul className="task-list">
            <li><span>Algebra Practice Workbook</span><em>1.8k views</em></li>
            <li><span>Chemistry Past Paper Archive</span><em>1.2k views</em></li>
            <li><span>Writing Task 2 sample bank</span><em>965 views</em></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
