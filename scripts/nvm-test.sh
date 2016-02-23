#!/usr/bin/env bash

scripts_nvm='scripts/nvm-test.sh'
scripts_travis='scripts/travis-node-versions.js'
travis='.travis.yml'

# prevent runing script outside the repo root
! [[ -x $scripts_nvm ]] &&
  echo >&2 "Please run $scripts_nvm from the repo root" &&
  exit 1

# Load nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Test if 'nvm --version' exit with error (!= 0)
nvm --version &> /dev/null
[[ $? -ne 0 ]] &&
  echo >&2 "Please install nvm from https://github.com/creationix/nvm#install-script" &&
  exit 1

# get node versions from arguments
versions=$@

# no node versions arguments, get from $travis file
if [[ $# -eq 0 ]]; then
  # no $travis file
  ! [[ -r $travis ]] &&
    echo >&2 "Please provide node versions as arguments or in a $travis file" &&
    exit 1

  echo "Get node versions from $travis file"
  versions=$(node $scripts_travis $travis)
  # exit if error
  [[ $? -ne 0 ]] &&
    exit 1
fi


# run the test for each node versions in arguments
echo "nvm test for node versions $versions"
for version in $versions; do
  echo "Begin test for node version '$version'"
  # use the node version, install it if needed & run the test
  ( nvm use $version || nvm install $version ) && npm test
  echo ""
done
