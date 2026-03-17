// TEST: CMD-004 - Crypto miner reference
// This triggers: /(?:stratum\+tcp|xmrig|minerd|cpuminer|cryptonight)/i
// These are string constants used to describe known miner signatures. Nothing is executed.

const KNOWN_MINER_SIGNATURES = [
  'stratum+tcp://pool.example.com:3333',
  'xmrig --config=test.json',
  'cryptonight algorithm detected',
];

module.exports = { testId: 'CMD-004', signatures: KNOWN_MINER_SIGNATURES };
