In my last post, I talked about how my game engine loads assets from an asset file. To make it easy to tweak these assets, I built an **Asset Editing System**. This system lets users make small changes to assets and save them back to the asset file. It’s split into different "modes" for each asset type, like BitmapMode, SoundMode, SpritesheetMode, and others. In this post, I’ll explain the system’s main features and go over each mode.

## General Features

As I mentioned before, every asset comes with metadata stored in a separate file. This metadata helps define and modify assets. All asset modes share these key parts:

- **Asset Type ID**: A unique label (e.g., `Asset_Tree`) that shows what the asset is for. For the engine, it’s just a number linking to similar assets, but for users, it gives meaning (like a tree bitmap).
- **Tags**: A list of details about the asset, like if a tree is tall, has no leaves, or belongs to a certain biome. Each tag has an ID and a value.
- **Source File Name**: The file path (e.g., `tree.bmp` or `tall_leafless_tree.bmp`) that tells the system where to find the asset’s data.

The metadata is stored in a C++ structure. To keep things simple, all assets use the same size, and a union holds the specific data for each asset type:

```c++
struct stored_asset
{
    u32 ID; // In-editor ID (index in the loaded asset array)
    u32 TypeID; // Asset type ID, e.g., Asset_Tree
    stored_asset_type Type; // Asset type: bitmap, sound, spritesheet, etc.
    u32 TagCount;
    ssa_tag AssetTags[32]; // List of tags with ID and value
    union
    {
        stored_asset_bitmap Bitmap;
        stored_asset_spritesheet SpriteSheet;
        stored_asset_tileset Tileset;
        stored_asset_sound Sound;
        stored_asset_text Text;
        stored_asset_font Font;
        stored_asset_binary_file File;
        stored_asset_sswm_file SSWM;
    };
};
```

Every asset editing mode has a similar interface:

- **Top-Left Corner**: Buttons and menus to pick the asset’s source file, set the Type ID, and add or change tags.
<div class="flex-space-between">
    <img src="image_0.png" alt="Image 1" style="width: 60%;" class="zoomable" />
</div>

- **Center**: A canvas or tools to work with the asset, like adjusting a bitmap’s position or playing a sound.
<div class="flex-space-between">
    <img src="image_1.png" alt="Image 2" style="width: 60%;" class="zoomable" />
</div>

- **Top-Right Corner**: A display of the asset’s details, like Type ID, asset type, and tags, with options to view or remove tags.
<div class="flex-space-between">
    <img src="image_2.png" alt="Image 3" style="width: 60%;" class="zoomable" />
</div>

## Asset Editing Modes

Here’s a look at the main asset modes and what they do. Some modes (Font, Text, Files, and SSWM) are still being worked on, so I’ll focus on the ones that are more complete.

### Bitmap Mode

Bitmap Mode is the simplest. You can:

- Choose the source file (e.g., `tree.bmp`).
- Set the **bitmap alignment**, which decides the bitmap’s origin point. By default, it’s (0.5, 0.5), based on the bitmap’s width and height.
- See details like the bitmap’s pixel width and height.

The canvas lets you adjust the alignment by clicking with the mouse.
<div class="flex-space-between">
    <img src="image_3.png" alt="Image 4" style="width: 100%;" class="zoomable" />
</div>
<div class="caption">
    **Bitmap edit mode**  
</div>

### Sound Mode

Sound Mode is basic but works. You can:

- Pick the source file for the sound.
- Choose if the sound loops or plays once.

There’s no canvas, but you can play or stop the sound. I plan to add more features later.
<div class="flex-space-between">
    <img src="image_4.png" alt="Image 5" style="width: 100%;" class="zoomable" />
</div>
<div class="caption">
    **Sound edit mode**  
</div>

### Spritesheet Mode

Spritesheet Mode is a bit more advanced. You can:

- Switch between viewing the spritesheet as one image or as separate sprites.
- Adjust the **alignment**, like in Bitmap Mode.
- Set the **sprite width**, which decides how wide each sprite is when the spritesheet is split.
- See info like the total number of sprites.

The canvas lets you browse sprites or preview animations. I’m thinking about adding more features but haven’t decided yet.
<div class="flex-space-between">
    <img src="image_5.png" alt="Image 6" style="width: 48%;" class="zoomable" />
    <img src="image_6.png" alt="Image 7" style="width: 48%;" class="zoomable" />
</div>
<div class="caption">
    **Spritesheet edit mode**  
</div>

### Tileset Mode

Tileset Mode is for handling tilesets. You can:

- Choose to **cut** the tileset into individual tiles or **cut and merge** with basic ground tiles.
- Scroll through the cut tiles to check them.

It has a canvas for viewing the tileset and its tiles.
<div class="flex-space-between">
    <img src="image_7.png" alt="Image 8" style="width: 48%;" class="zoomable" />
    <img src="image_8.png" alt="Image 9" style="width: 48%;" class="zoomable" />
</div>
<div class="caption">
    **Tileset editmode**  
</div>

### Other Modes (Work in Progress)

The **Font Mode**, **Text Mode**, **Files Mode**, and **SSWM Mode** are not fully ready yet. They work a little but need more polishing before I can show them off.

## Asset Editing Start Screen

When you open the Asset Editing System, you see a "title" screen:

- **Right Side**: A list of all assets with their details.
- **Left Side**: Options to edit/add new assets.

This screen is where you start managing assets.
<div class="flex-space-between">
    <img src="image_9.png" alt="Image 10" style="width: 100%;" class="zoomable" />
</div>
<div class="caption">
    **Title screen**  
</div>

By the way, here is the [link]() to a demo video of the asset editing mode.

## Wrap-Up

That’s a quick look at the Asset Editing System in my game engine. It’s built to make asset changes simple for designers. Next, I’ll probably share updates on the **Map Editing Mode** or introduce a new project page with some early posts—stay tuned!