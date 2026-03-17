// TEST: CMD-005 - Keylogger indicator
// This triggers: /(?:keylog|keystroke.?log|keyboard.?hook)/i
// String constant describing the pattern. No actual keylogging.

const DETECTION_RULE = 'Detect processes matching: keylogger, keystroke_log, keyboard_hook';

module.exports = { testId: 'CMD-005', rule: DETECTION_RULE };
