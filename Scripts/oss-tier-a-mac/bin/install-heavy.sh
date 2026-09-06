#!/usr/bin/env bash
# Optional heavier stacks (Plane, Penpot). Run after install.sh.
# These pull multi-GB images and need more RAM — confirm Docker Desktop has ≥8 GB.
set -euo pipefail
echo "Plane and Penpot use upstream compose files (multi-service)."
echo "Recommended: install via their official docs into \$HOME/oss-stack/plane and \$HOME/oss-stack/penpot"
echo
echo "Plane:   https://docs.plane.so / https://github.com/makeplane/plane"
echo "Penpot:  https://help.penpot.app/technical-guide/getting-started/install/"
echo
echo "Not auto-started here to avoid surprising multi-GB pulls on a laptop."
exit 0
