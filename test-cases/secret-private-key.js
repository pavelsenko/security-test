// TEST: SECRET-003 - Private key in PEM format
// This triggers: /-----BEGIN (?:RSA |EC |DSA )?PRIVATE KEY-----/
// This is a truncated, non-functional key header. Not a real private key.

const EXAMPLE_PEM_HEADER = '-----BEGIN RSA PRIVATE KEY-----';
const EXAMPLE_PEM_FOOTER = '-----END RSA PRIVATE KEY-----';

module.exports = { testId: 'SECRET-003', header: EXAMPLE_PEM_HEADER, footer: EXAMPLE_PEM_FOOTER };
