#!/bin/bash
docker build --build-arg "BUN_VERSION=$(tr -d '\r\n' < .bun-version)" -t name-selector-tool:latest .
