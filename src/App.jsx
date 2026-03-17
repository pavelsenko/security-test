import React from 'react';

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '0 20px' }}>
      <h1>LookingForward.AI Security Scanner Test Suite</h1>
      <p>
        This repository exists solely to validate the LookingForward.AI platform's GitHub import
        security scanner. It contains files with deliberately crafted signatures that
        should trigger each category of security detection.
      </p>
      <h2>Purpose</h2>
      <ul>
        <li>Verify that obfuscated code patterns are detected and blocked</li>
        <li>Verify that malicious command patterns (reverse shells, crypto miners, etc.) are detected and blocked</li>
        <li>Verify that harmful function patterns (env exfiltration, credential theft) are detected and blocked</li>
        <li>Verify that supply chain risks (suspicious install scripts, custom registries) are detected</li>
        <li>Verify that hardcoded secrets (AWS keys, API tokens, private keys) are flagged as warnings</li>
      </ul>
      <h2>Important</h2>
      <p>
        <strong>None of the test cases in this repository are functional or harmful.</strong> Each
        file contains a pattern that matches the scanner's regex signatures but is structured
        as dead code, string literals, or documentation examples. No network calls are made,
        no files are deleted, and no credentials are real.
      </p>
      <h2>Expected Result</h2>
      <p>
        When imported via the LookingForward.AI platform, this repository should be <strong>blocked</strong> by
        the security scanner with multiple critical findings. See <code>tests.json</code> for
        the complete list of test cases and expected outcomes.
      </p>
    </div>
  );
}
