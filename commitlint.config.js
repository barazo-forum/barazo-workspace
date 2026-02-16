export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      ["lexicons", "api", "web", "deploy", "workspace"],
    ],
  },
};
