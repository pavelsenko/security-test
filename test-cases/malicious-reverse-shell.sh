#!/bin/bash
# TEST: CMD-002 - Reverse shell pattern
# This triggers: /(?:bash|sh|nc|ncat)\s+-[ie]\s+.*(?:\d{1,3}\.){3}\d{1,3}/
# The IP 192.0.2.1 is a documentation-only IP (RFC 5737). No connection is made.

DESCRIPTION="Simulated reverse shell signature: bash -i 192.0.2.1"
echo "CMD-002: reverse shell pattern test — $DESCRIPTION"
