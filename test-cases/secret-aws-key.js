// TEST: SECRET-001 - AWS access key pattern
// This triggers: /(?:AKIA|ASIA)[A-Z0-9]{16}/
// This is a well-known AWS example key from their documentation. It is not valid.

const AWS_EXAMPLE_KEY = 'AKIAIOSFODNN7EXAMPLE';

module.exports = { testId: 'SECRET-001', key: AWS_EXAMPLE_KEY };
