export const headcountStats = { total: 24, male: 14, female: 10 };

export const headcountByDepartment = {
  labels: ['Frontend', 'Backend', 'PMs', 'UI/UX', 'Cybersecurity'],
  male:   [25, 10, 18, 24, 10],
  female: [12,  8,  2, 14, 28],
};

// ── GAD ────────────────────────────────────────────────────────
export const genderDistribution = {
  labels: ['Male', 'Female'],
  values: [14, 10],
};

export const genderByDepartment = {
  labels: ['Frontend Developer', 'Backend Developer', 'Project Manager', 'UI/UX Designer', 'Cybersecurity'],
  male:   [20, 10, 28, 18, 26],
  female: [12,  8, 14, 10, 12],
};

// ── Attrition ──────────────────────────────────────────────────
export const attritionStats = {
  currentRate: '3.8%',
  totalExits: 15,
  averageTenure: '2.5 years',
};

export const attritionTrend = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  values: [7, 5, 7, 6, 4.5, 6.5, 4, 3, 4.5, 4.5, 5.5, 2],
};

// ── Onboarding ─────────────────────────────────────────────────
export const onboardingStats = {
  active: 8,
  completed: 42,
  averageDays: 21,
};

export const onboardingByMonth = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  starts:    [4, 6, 3, 7, 5, 8],
  completed: [3, 5, 3, 6, 4, 7],
};

// ── Exit ───────────────────────────────────────────────────────
export const exitStats = {
  total: 15,
  voluntary: 11,
  involuntary: 4,
};

export const exitReasons = {
  labels: ['Career Growth', 'Compensation', 'Relocation', 'Work-Life', 'Other'],
  values: [6, 4, 2, 2, 1],
};

// ── Project Staffing ───────────────────────────────────────────
export const staffingStats = {
  activeProjects: 12,
  staffedRoles: 48,
  openRoles: 6,
};

export const staffingByProject = {
  labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
  staffed: [8, 6, 10, 5, 7],
  open:    [1, 2, 0, 2, 1],
};
