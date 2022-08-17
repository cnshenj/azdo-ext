import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { copy, remove } from "fs-extra";
import path from "path";

await remove("dist");
await copy("src/views", "dist");

/** @type { import("esbuild").BuildOptions }  */
const buildOptions = {
  bundle: true,
  entryPoints: [
    "src/index.tsx"
  ],
  outdir: "dist",
  loader: {
    ".woff": "copy"
  },
  plugins: [
    {
      name: "Logger",
      setup(build) {
        build.onResolve({ filter: /(?:FabricIcons\.css|AzDevMDL2)/ }, async (args) => {
          console.log(args.path);
          return { path: path.resolve(args.resolveDir, args.path) };
        });
      }
    },
    sassPlugin({ type: "style" })
  ]
};

/** @type { import("esbuild").ServeOptions }  */
const serveOptions = {
  host: "localhost",
  servedir: "dist"
};

await esbuild.build(buildOptions);
