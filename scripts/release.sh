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

## read the version update type
echo "Current version is '$current_version'"
echo "Update type: <version> | (pre)major | (pre)minor | (pre)patch | prerelease | from-git"
printf "Which update type is ? "
read update_type

## update package version (disable git-tag-version, will be done after)
version=$(npm --no-git-tag-version version $update_type)
echo "New version is '$version'"

## add and commit unstaged changes
git add --all
git commit --allow-empty -am "release $update_type (from $current_version)"

## create tag version
git tag -a "$version" -m "version $version"

## push to origin with tag
git push --follow-tag origin master

## publish to npm
npm publish
