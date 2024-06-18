# node18+ + ts-node + ESM bootstrap
- tsconfig-paths
- mocha & chai
- working coverage
- fixed source maps
- fixed inspect mode

ts-node has a problem with ESM, tsconfig paths and source maps. This is a workaround for that.

To fix tsconfig paths, you need to use `tsconfig-paths` package and custom loader `dev/loader.js`. 

Sadly using `--loader` flag in node generates warnings about experimental modules. To fix that, you need to use `--import="dev/import.js"` flag.

To fix source maps, you need to use `--enable-source-maps` flag.

To fix inspect mode while using `mocha` flag needs to be passed via `--node-option` flag.

To get coverage reports properly you need to use `c8` - not `nyc`.



All implemented in `dev/run` script.  
To have it all working in package scripts it would require 200+ characters :)
