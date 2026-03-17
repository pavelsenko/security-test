// TEST: HARM-002 - Credential stealing pattern
// This triggers: /(?:password|secret|token|apikey|api_key).*(?:fs\.write|fetch|axios\.post|http\.request)/i
// String literal describing the pattern. Not executed.

const DETECTION_PATTERN = 'password exfiltration via fs.writeFile or fetch or axios.post or http.request';

module.exports = { testId: 'HARM-002', pattern: DETECTION_PATTERN };
