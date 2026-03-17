#!/bin/bash
# TEST: CMD-001 - rm -rf / destructive filesystem command
# This triggers: /rm\s+-rf\s+\/(?!\s|$|tmp)/
# This script is never executed. The command is inside a false condition.

if false; then
  rm -rf /usr/share/doc/test-only
fi

echo "CMD-001: rm -rf pattern test — no files were harmed"
