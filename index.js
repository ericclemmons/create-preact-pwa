#!/usr/bin/env node
process.argv.splice(2, 0, "create");
require("preact-cli").default;
