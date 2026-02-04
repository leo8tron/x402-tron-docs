#!/bin/sh

APP_ENV=test yarn build && \
APP_ENV=test yarn serve -h 0.0.0.0 -p 8018
