#!/bin/bash

files=$1
required="babel-runtime/helpers/defineProperty"

NODE_ENV=test mocha --compilers js:babel-core/register --require "$required" $files
