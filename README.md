# Security Scanner Test Suite

Test repository for validating the LookingForward.AI platform's GitHub import security scanner.

## What this is

Each file in `test-cases/` contains a **harmless signature** that should trigger a specific detection category in the security scanner. No code in this repo is functional or dangerous.

## Test categories

| Category | Files | Severity | Blocks import? |
|----------|-------|----------|----------------|
| Obfuscation | 3 test cases | Critical | Yes |
| Malicious commands | 5 test cases | Critical | Yes |
| Harmful functions | 3 test cases | Critical | Yes |
| Supply chain risks | 3 test cases | Critical/Warning | Yes (critical) |
| Secrets | 4 test cases | Warning | No |
| Clean (control) | 1 file | None | No |

## Expected result

When imported via the LookingForward.AI platform, this repository should be **blocked** by the security scanner. See `tests.json` for the full list of test cases with expected outcomes.

## Safety

- All IP addresses use RFC 5737 documentation ranges (192.0.2.x) or example.com
- All credentials are fake/example values from vendor documentation
- All malicious patterns are inside string literals, comments, or dead code blocks
- No npm scripts are executed (main package.json has no postinstall)
