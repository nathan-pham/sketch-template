// require-like syntax for module aliases
writeImportMap(require("three", "0.143.0"));

// write modules into import map
function writeImportMap(...modules) {
    document.write(
        `<script type="importmap">
            ${JSON.stringify({
                imports: modules.reduce(
                    (acc, [package, url]) => ({
                        ...acc,
                        [package]: url,
                    }),
                    {
                        // "built-in" packages
                        utils: "/js/utils.js",
                        "nice-color-palettes":
                            "https://cdn.skypack.dev/-/nice-color-palettes@v3.0.0-aAGCHazM2PNpRTy4uAUr/dist=es2019,mode=raw/1000.json",
                    }
                ),
            })}
        </script>`
    );
}

// use skypack to resolve urls
function require(package, version) {
    return [package, `https://cdn.skypack.dev/${package}@${version}`];
}
