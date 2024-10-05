#!/bin/bash -e

TMP=.tsconfig-lint.json
cat >$TMP <<EOF
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules"],
  "include": [
        "next-env.d.ts",
        "types/**/*.d.ts",
EOF
for file in "$@"; do
  echo "    \"$file\"," >> $TMP
done
cat >>$TMP <<EOF
    "unused"
  ]
}
EOF
tsc --project $TMP --skipLibCheck --noEmit