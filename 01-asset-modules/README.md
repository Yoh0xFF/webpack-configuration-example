# Manage Assets with Webpack

Asset Modules handles 4 module types:

- **asset/resource** emits a separate file and exports the URL.
- **asset/inline** exports a data URI of the asset.
- **asset** automatically chooses between exporting a data URI and emitting a separate file based on the asset size limit.
- **asset/source** exports the source code of the asset.
