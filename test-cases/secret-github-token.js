// TEST: SECRET-004 - GitHub personal access token
// This triggers: /gh[pousr]_[A-Za-z0-9_]{36,}/
// This is a fabricated token format. It is not valid on GitHub.

const FAKE_GITHUB_TOKEN = 'ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij1234';

module.exports = { testId: 'SECRET-004', token: FAKE_GITHUB_TOKEN };
