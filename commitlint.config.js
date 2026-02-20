export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "a11y",
        "security",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      ["lexicons", "api", "web", "deploy", "workspace"],
    ],
    "subject-case": [0],
  },
};
