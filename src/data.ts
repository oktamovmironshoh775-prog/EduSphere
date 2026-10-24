export type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  description: string;
  professor: string;
  accent: string;
  progress: number;
  rating: number;
  tags: string[];
  chapters: string[];
  resources: string[];
  features: string[];
};

export const categories = [
  {
    id: 'stem',
    title: 'STEM Academy',
    description: 'Build deep conceptual foundations in mathematics, physics, chemistry, biology and engineering.',
    icon: '⚙️',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Engineering', 'Robotics'],
  },
  {
    id: 'sat',
    title: 'SAT',
    description: 'Master reading, writing and math with timed drills, analytics and adaptive practice.',
    icon: '✍️',
    subjects: ['Reading & Writing', 'Math', 'Test Practice', 'Performance Analysis'],
  },
  {
    id: 'ielts',
    title: 'IELTS',
    description: 'Develop listening, reading, writing and speaking fluency with exam-focused modules.',
    icon: '🎧',
    subjects: ['Listening', 'Reading', 'Writing Task 1', 'Writing Task 2', 'Speaking Parts 1-3', 'Grammar & Vocabulary'],
  },
  {
    id: 'msat',
    title: 'MSAT',
    description: 'Prepare with aligned modules and custom study pathways based on the selected exam blueprint.',
    icon: '🧠',
    subjects: ['Custom Pathways', 'Official Syllabus Mapping', 'Timed Practice', 'Diagnostics'],
  },
  {
    id: 'igcse',
    title: 'Cambridge IGCSE',
    description: 'Cover key subject pillars, topic practice and exam-style review materials.',
    icon: '📘',
    subjects: ['Core Subjects', 'Past Papers', 'Topic Lessons', 'Mark Schemes'],
  },
  {
    id: 'alevel',
    title: 'AS Level & A Level',
    description: 'Advanced conceptual learning with structured questions and board-aligned exam preparation.',
    icon: '🏆',
    subjects: ['Subject-specific Courses', 'Structured Questions', 'Exam Practice', 'Assessment Reviews'],
  },
];

export const courses: Course[] = [
  {
    id: 'algebra-essentials',
    title: 'Algebra Essentials',
    category: 'STEM Academy',
    level: 'Foundation',
    duration: '6 weeks',
    lessons: 22,
    description: 'Master equations, functions and algebraic reasoning with visual explanations and practice sets.',
    professor: 'Aisha Rahman',
    accent: '#1f7ae0',
    progress: 68,
    rating: 4.9,
    tags: ['Math', 'Problem Solving', 'SAT Prep'],
    chapters: ['Expressions and Variables', 'Linear Equations', 'Quadratics', 'Functions', 'Word Problems'],
    resources: ['Lesson Slides', 'Formula Sheet', 'Practice Workbook', 'Short Video Lessons'],
    features: ['Progress tracking', 'Interactive quizzes', 'Bookmarks', 'Practice review'],
  },
  {
    id: 'physics-lab',
    title: 'Physics Lab Fundamentals',
    category: 'STEM Academy',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 18,
    description: 'Understand motion, forces and energy through lab-based inquiry and guided concept mastery.',
    professor: 'Marcus Lee',
    accent: '#0ea5e9',
    progress: 44,
    rating: 4.8,
    tags: ['Physics', 'Labs', 'Concepts'],
    chapters: ['Kinematics', 'Forces', 'Energy', 'Waves', 'Laboratory Skills'],
    resources: ['Lab Notes', 'Investigation Templates', 'Physics Glossary', 'Sample Data Sets'],
    features: ['Live practice mode', 'Lab simulations', 'Printable notes', 'Instant feedback'],
  },
  {
    id: 'sat-reading',
    title: 'SAT Reading & Writing',
    category: 'SAT',
    level: 'Exam Prep',
    duration: '5 weeks',
    lessons: 14,
    description: 'Improve comprehension, grammar precision and rhetorical analysis with timed SAT-style drills.',
    professor: 'Nadia Flores',
    accent: '#14b8a6',
    progress: 72,
    rating: 4.9,
    tags: ['Reading', 'Writing', 'Timed Practice'],
    chapters: ['Main Ideas', 'Evidence', 'Grammar', 'Transitions', 'Essay Thinking'],
    resources: ['Answer Explanations', 'Reading Passages', 'Grammar Review', 'Practice Tests'],
    features: ['Adaptive practice', 'Test analytics', 'Skill gaps', 'Retry review'],
  },
  {
    id: 'ielts-speaking',
    title: 'IELTS Speaking Mastery',
    category: 'IELTS',
    level: 'Exam Prep',
    duration: '4 weeks',
    lessons: 16,
    description: 'Build confidence across Parts 1–3 with structured speaking tasks, vocabulary sets and mock interviews.',
    professor: 'Elena Clarke',
    accent: '#6366f1',
    progress: 58,
    rating: 4.8,
    tags: ['Speaking', 'Fluency', 'Vocabulary'],
    chapters: ['Part 1 Warm-up', 'Part 2 Long Turn', 'Part 3 Discussion', 'Vocabulary Booster', 'Mock Interviews'],
    resources: ['Cue Cards', 'Vocabulary Lists', 'Feedback Prompts', 'Mock Interviews'],
    features: ['Speaking practice', 'Feedback notes', 'Timed drills', 'Progress tracking'],
  },
  {
    id: 'msat-biology',
    title: 'MSAT Biology Blueprint',
    category: 'MSAT',
    level: 'Adaptive',
    duration: '7 weeks',
    lessons: 20,
    description: 'Follow a custom study track mapped to official exam syllabi with diagnostic-based lesson planning.',
    professor: 'Hassan Ali',
    accent: '#0f766e',
    progress: 39,
    rating: 4.7,
    tags: ['MSAT', 'Diagnostics', 'Biology'],
    chapters: ['Foundation Review', 'Topic Priorities', 'Data Interpretation', 'Exam Simulation', 'Weak Area Fixes'],
    resources: ['Study Plan', 'Module Matrix', 'Question Banks', 'Performance Reports'],
    features: ['Custom planning', 'Syllabus mapping', 'Weak-topic emphasis', 'Mock simulations'],
  },
  {
    id: 'igcse-chemistry',
    title: 'IGCSE Chemistry Core',
    category: 'Cambridge IGCSE',
    level: 'Upper Secondary',
    duration: '8 weeks',
    lessons: 19,
    description: 'Learn key chemical principles, practical reasoning and exam-ready revision supported by past paper patterns.',
    professor: 'Sara Khan',
    accent: '#f59e0b',
    progress: 51,
    rating: 4.9,
    tags: ['Chemistry', 'IGCSE', 'Past Papers'],
    chapters: ['Atomic Structure', 'Bonding', 'Rates', 'Acids & Bases', 'Practical Chemistry'],
    resources: ['Mark Scheme Notes', 'Past Paper Sets', 'Exam Tips', 'Flashcards'],
    features: ['Topic notes', 'Practice tests', 'Exam patterns', 'Revision tracker'],
  },
  {
    id: 'a-level-math',
    title: 'A Level Mathematics',
    category: 'AS Level & A Level',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 24,
    description: 'Develop advanced analytical methods, problem-solving rigor and exam technique across major syllabus topics.',
    professor: 'Oliver Grant',
    accent: '#dc2626',
    progress: 74,
    rating: 5.0,
    tags: ['Math', 'Advanced', 'AS/A Level'],
    chapters: ['Functions', 'Differentiation', 'Integration', 'Statistics', 'Proof and Reasoning'],
    resources: ['Worked Examples', 'Exam Strategy Sheets', 'Question Sets', 'Revision Checklists'],
    features: ['Structured practice', 'Advanced explanations', 'Topic tests', 'Board-aligned prep'],
  },
  {
    id: 'computer-science',
    title: 'Computer Science Foundations',
    category: 'STEM Academy',
    level: 'Intermediate',
    duration: '6 weeks',
    lessons: 17,
    description: 'Build logic, algorithms and programming fluency with beginner-friendly project-based study sessions.',
    professor: 'Priya Nair',
    accent: '#8b5cf6',
    progress: 61,
    rating: 4.8,
    tags: ['Coding', 'Algorithms', 'Robotics'],
    chapters: ['Programming Basics', 'Algorithms', 'Data Structures', 'Logic Gates', 'Project Lab'],
    resources: ['Code Snippets', 'Challenge Tasks', 'Debugging Notes', 'Reference Guides'],
    features: ['Project-based tasks', 'Logic drills', 'Quizzes', 'Bookmarks'],
  },
];

export const dashboardStats = [
  { label: 'Enrolled courses', value: '07', trend: '+2 this month' },
  { label: 'Daily goal', value: '85%', trend: 'On track' },
  { label: 'Study streak', value: '12 days', trend: 'Strong consistency' },
  { label: 'Completed lessons', value: '64', trend: '+9 this week' },
];

export const weakTopics = [
  { name: 'Quadratic functions', priority: 'High' },
  { name: 'Chemical bonding', priority: 'Medium' },
  { name: 'IELTS task response', priority: 'High' },
  { name: 'Reading inference', priority: 'Medium' },
];

export const tasks = [
  'Complete SAT Reading mini-test',
  'Review Chemistry chapter summary',
  'Practice 10 algebra MCQs',
  'Upload IELTS speaking reflection',
];

export const quizQuestions = [
  {
    id: 1,
    question: 'Which equation represents a line with slope 3 and y-intercept -2?',
    options: ['y = 3x - 2', 'y = -2x + 3', 'y = 3x + 2', 'y = -3x - 2'],
    correctAnswer: 'y = 3x - 2',
    explanation: 'A slope-intercept equation follows y = mx + b, where m is the slope and b is the y-intercept.',
  },
  {
    id: 2,
    question: 'A sound wave increases in frequency. What happens to its wavelength if the speed remains constant?',
    options: ['It increases', 'It decreases', 'It stays the same', 'It becomes zero'],
    correctAnswer: 'It decreases',
    explanation: 'The wave speed relation v = fλ means frequency and wavelength are inversely related at constant speed.',
  },
  {
    id: 3,
    question: 'Which sentence is grammatically correct?',
    options: [
      'Because it was raining, we stayed inside.',
      'Because it was raining we stayed inside.',
      'Because it was raining; we stayed inside.',
      'Because it raining, we stayed inside.',
    ],
    correctAnswer: 'Because it was raining, we stayed inside.',
    explanation: 'A comma after introductory clauses helps signal the dependent clause before the main clause.',
  },
  {
    id: 4,
    question: 'Which of the following is the best definition of a catalyst?',
    options: [
      'A substance that is used up in a reaction',
      'A substance that increases reaction rate without being consumed',
      'A product of a chemical reaction',
      'A gas that speeds up diffusion',
    ],
    correctAnswer: 'A substance that increases reaction rate without being consumed',
    explanation: 'Catalysts participate in the mechanism but are regenerated, so they are not permanently used up.',
  },
];

export const testimonials = [
  { name: 'Maya R.', role: 'IB Student', quote: 'EduSphere helped me create a realistic weekly plan and improve my SAT writing score in under 8 weeks.' },
  { name: 'Noah K.', role: 'IGCSE Science Student', quote: 'The subject breakdown and exam simulations gave me clarity on what to practice before every test.' },
  { name: 'Amina T.', role: 'IELTS Candidate', quote: 'The speaking coach modules and vocabulary practice made my prep much more structured and confident.' },
];

export const adminStats = [
  { label: 'Courses', value: '124' },
  { label: 'Question bank', value: '8,420' },
  { label: 'Students', value: '2,870' },
  { label: 'Resources', value: '316' },
];
