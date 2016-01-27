#!/bin/bash -e

## prevent runing script outside the repo root
if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/release.sh from the repo root"
  exit 1
fi

## run the build
npm run build

## get the current version from package
current_version=$(node -p "require('./package').version")
## read the version to update
printf "Update type (current version is $current_version)? "
read update_type

## update package version
version=$(npm version $update_type)

## process git
git commit --allow-empty -am "Version $version"
git tag $version
git push origin master
git push origin $version

## publish to npm
npm publish
