// TEST: HARM-003 - File system attack outside project directory
// This triggers: /fs\.(?:readFile|writeFile|unlink|rmdir).*(?:\/etc\/|\/root\/|\/home\/|C:\\Windows)/
// String literal only. No filesystem operations performed.

const DETECTION_PATTERN = 'fs.readFile("/etc/passwd") or fs.writeFile("/root/.ssh/authorized_keys")';

module.exports = { testId: 'HARM-003', pattern: DETECTION_PATTERN };
