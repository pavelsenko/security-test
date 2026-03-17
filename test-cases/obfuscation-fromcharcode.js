// TEST: OBF-002 - String.fromCharCode with 20+ arguments
// This triggers: /String\.fromCharCode\s*\(\s*(?:\d+\s*,\s*){20,}/
// These char codes spell "this is a test string" — completely harmless.

const TEST_SIGNATURE = 'String.fromCharCode(116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 115, 116, 114, 105, 110, 103, 33)';

module.exports = { testId: 'OBF-002', signature: TEST_SIGNATURE };
