#!/usr/bin/env bash

docker build --build-arg APP_ENV=prod -t x402-tron-docs .

# docker run --name x402-tron-docs-container -p 8080:80 x402-tron-docs
