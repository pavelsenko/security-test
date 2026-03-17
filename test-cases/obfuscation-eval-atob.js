// TEST: OBF-001 - eval() with atob() base64 decoding
// This triggers the obfuscation detector: /(?:eval|exec|Function)\s*\(\s*(?:atob|Buffer\.from)\s*\(/
// The string decodes to "console.log('hello')" — completely harmless.
// This code is never executed. It exists only as a scanner test signature.

const TEST_SIGNATURE = 'eval(atob("Y29uc29sZS5sb2coJ2hlbGxvJyk="))';

module.exports = { testId: 'OBF-001', signature: TEST_SIGNATURE };
