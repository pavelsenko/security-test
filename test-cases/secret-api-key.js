// TEST: SECRET-002 - Generic API key assignment
// This triggers: /(?:api_key|apikey|secret_key|access_token|auth_token)\s*[:=]\s*['"][A-Za-z0-9+/=_-]{20,}['"]/i
// The value is randomly generated and not a real key.

const api_key = 'tK9xR2mF4vLpQ7nW3jB8cY5hA6dZ1gSe';

module.exports = { testId: 'SECRET-002', key: api_key };
