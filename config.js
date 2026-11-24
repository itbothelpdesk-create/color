// ============================================================
// EDIT THIS FILE to change questions, answers, and team colors.
// ============================================================

// Your 3 questions. Each has 3 answers (A, B, C).
window.QUESTIONS = [
  {
    text: "Question 1: Replace this with your first question",
    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
    },
  },
  {
    text: "Question 2: Replace this with your second question",
    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
    },
  },
  {
    text: "Question 3: Replace this with your third question",
    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
    },
  },
];

// The teams / colors. "hex" is the color shown on the result screen.
window.TEAMS = {
  Red:    { hex: "#e63946", message: "You are on the Red team!" },
  Orange: { hex: "#f77f00", message: "You are on the Orange team!" },
  Yellow: { hex: "#f4c20d", message: "You are on the Yellow team!" },
  Green:  { hex: "#2a9d5c", message: "You are on the Green team!" },
  Blue:   { hex: "#277da1", message: "You are on the Blue team!" },
  Purple: { hex: "#7b2cbf", message: "You are on the Purple team!" },
};

// All 27 combinations: Q1 + Q2 + Q3 answers -> team.
// Example: "ABC" means Q1 = A, Q2 = B, Q3 = C.
window.RESULTS = {
  AAA: "Red",    AAB: "Red",    AAC: "Orange",
  ABA: "Orange", ABB: "Yellow", ABC: "Yellow",
  ACA: "Green",  ACB: "Green",  ACC: "Blue",

  BAA: "Orange", BAB: "Yellow", BAC: "Yellow",
  BBA: "Green",  BBB: "Green",  BBC: "Blue",
  BCA: "Blue",   BCB: "Purple", BCC: "Purple",

  CAA: "Green",  CAB: "Blue",   CAC: "Blue",
  CBA: "Purple", CBB: "Purple", CBC: "Red",
  CCA: "Red",    CCB: "Orange", CCC: "Purple",
};
