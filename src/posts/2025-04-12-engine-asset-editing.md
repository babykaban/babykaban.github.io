## Introduction
After completing my initial demo for my school capstone project, I set out to transform my work into a proper game engine, prioritizing ease of use and flexibility. My first focus was enhancing asset management and map editing. During the demo’s development, I built a basic tilemap editor that allowed me to place tiles, define collision boxes, and add static entities like trees, stones, and houses—represented as textures with collision data. It worked, but it lacked a user interface, undo/redo functionality, and advanced features like object manipulation or in-editor simulation with a player character. The output was three binary files—`tile_map.bin`, `decorations.bin`, and `collisions.bin`—containing tile textures, entity placements, and collision data.

In this post, I’ll explain how the engine handles asset loading, the challenges I faced, and the improvements I’ve made to streamline asset management within the editor.

## How the Game Loads Assets
My asset-loading system draws heavily from Casey Muratori’s *Handmade Hero* series. Assets are stored in a single file, accessed via an ID and data offset for efficiency. The file begins with a header containing a `MagicValue`, `Version`, `TagCount`, `TypeCount`, and `AssetCount`, followed by offsets to three arrays: tags, types, and assets.

Each asset includes:
- An offset to its data.
- A range of tag indices (first and one-past-last) for continuous tag storage.
- A union of structs specific to the asset type, defining configurations like width and height for bitmaps to calculate data size.

Asset types are defined by a struct with a `TypeID`, first asset index, and one-past-last asset index, functioning similarly to tags. To load an asset, the engine uses a `GetBestMatch` function, which searches for assets by type (e.g., `Asset_Tree`) and tags (e.g., `Tree_Tall`, `Tree_WithLeaves`). This returns an asset ID, which the `LoadAsset` function uses to fetch the data—whether it’s a bitmap, sound, or other type.

For example, to load a tall tree bitmap:
- Specify `Asset_Type` as `Asset_Tree` with tags `Tag_TreeType = Tree_Leaves` and `Tag_Size = Tree_Tall`.
- Call `GetBestMatchBitmap` to get the asset ID.
- Use `LoadAsset` to load the bitmap, ready for rendering.

For a deeper dive, check out *Handmade Hero* Days 133–159.

## Challenges and Fixes
One issue I encountered was related to asset dependencies. If an asset, like a spritesheet, referenced indices of other assets (e.g., individual sprites), the system required assets of the same type to be stored contiguously. Adding assets out of order—like a spritesheet, then a bitmap, then another spritesheet—caused index mismatches, breaking the second spritesheet’s references.

To resolve this, I integrated asset building directly into the engine, moving away from an external program with hardcoded asset orders. Now, when adding a new asset:
- I check its type array’s position relative to others.
- If it’s the first of its type, I increment all subsequent asset IDs.
- If it’s between types, I adjust IDs for assets that follow.
- If it’s the last type, no changes are needed.

This ensures correct indexing and maintains order.

## New Asset File Format
To simplify asset management, I created a new file format for storing raw asset data, including type, tags, and source information (e.g., a bitmap’s filename and alignment). The file includes a header with:
- The size of the largest asset (all assets use a uniform size due to the union struct).
- Stored asset count.
- Version and magic value.

This format makes reading and writing assets more efficient and consistent.

## Asset Editor UI
I added a user-friendly UI for the asset editor using Nuklear, allowing seamless addition and removal of assets. The workflow is straightforward:
1. Enter **Assets Edit Mode** to add or modify assets in the stored asset file, which updates its version.
2. Choose to write the assets to a new asset file, consolidating all stored assets into one.

Unlike Casey’s approach of supporting multiple asset files, I opted for simplicity: a single, correctly built asset file. If new assets are needed, I rebuild the file with a single button press, leveraging the existing functionality.

## Wrap-up
This overhaul makes asset management more intuitive and integrated within the engine. The new file format, UI, and indexing fixes lay a solid foundation for future editor features. In my next post, I’ll dive into the user-facing features of the asset editing mode, showcasing how they streamline workflows.
