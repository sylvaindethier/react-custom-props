#!/bin/bash -e

# TODO: should be read from .travis.yml
declare -a node_js=('node' '5' '4' '0.12' '0.10');
peerDependencies='react'

# prevent runing script outside the repo root
if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/nvm-test.sh from the repo root"
  exit 1
fi

# for each version of Node we will:
#   1. use the corresponding Node version
#   2. remove node_modules
#   3. install the project
#   4. install the peerDependencies
#   5. run the test

test_node () {
  local version="$1"

  echo "test for node $version"
  nvm use "$version"
  rm -rf node_modules
  npm install
  npm install "$peerDependencies"
  npm test
}

# get the current node version
current="$(nvm current)"

# run the tests for each node versions
for node_version in "${node_js[@]}"; do
    test_node "$node_version"
done

# restore the node versions
nvm use "$current"
