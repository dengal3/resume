#!/bin/bash

../node_modules/jade/bin/jade.js templates/index.jade
lessc less/index.less > templates/index.css
subl templates/index.html