#!/usr/bin/env bash

# TODO: should be read from .travis.yml & package.json
declare -a node_js=('node' '5' '4' '0.12' '0.10');
peerDependencies='react'


# prevent runing script outside the repo root
if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/nvm-test.sh from the repo root"
  exit 1
fi

# Load nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Test if 'nvm --version' exit with error (!= 0)
nvm --version &> /dev/null
if [ $? -ne 0 ]; then
  echo >&2 "Please install nvm from https://github.com/creationix/nvm#install-script"
  exit 1
fi

# for each version of Node we will:
test_node () {
  local version="$1"

  # use the node $version
  nvm use $version

  # run the test
  npm test
}

# run the tests for each node versions
for node_version in "${node_js[@]}"; do
  echo "Begin test for node version '$node_version'"
  test_node $node_version
  echo ""
done
