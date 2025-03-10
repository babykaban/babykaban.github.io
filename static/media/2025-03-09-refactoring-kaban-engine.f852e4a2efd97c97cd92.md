
## Introduction

Since I "finished" working on the Clipper library, I decided it was time to refactor my game engine. The last time I touched 
it was almost six months ago, and when I opened the source code, my first instinct was to throw everything in the garbage and start over.

One of the biggest issues I faced was the debug system. Originally, I had implemented a system inspired by Handmade Hero, and 
while I love how it was designed, it had dependencies on both rendering and asset management—something I wanted to eliminate.

## UI and Debugging Improvements
For the UI, I recently discovered [Nuklear](https://immediate-mode-ui.github.io/Nuklear/index.html#autotoc_md2), a lightweight, 
immediate-mode UI library. Unlike traditional retained-mode UI frameworks (where the UI state is stored and updated separately), 
immediate-mode UI redraws everything each frame, making it simpler and more responsive. Nuklear is a single-header, C-based library, 
which means it’s easy to integrate into my project without additional dependencies.

## Font Loading Fixes
The way I was handling font loading also needed a fix. Previously, I had two methods:

- Loading from an asset file – This worked fine.
- Loading via the platform layer (Windows API) – This was a nightmare.

To fix this, I decided to use [stb_truetype](https://github.com/nothings/stb/blob/master/stb_truetype.h), part of the popular 
[stb](https://github.com/nothings/stb) single-file library collection. stb_truetype is a public-domain font rasterizer that lets me 
load TrueType (.ttf) fonts efficiently.

## Rendering Pipeline
Another major pain point was my rendering pipeline. Right now, it somewhat works, but using OpenGL through the Windows API is a mess. 
Just initializing OpenGL requires writing a ton of boilerplate code, followed by checking for supported extensions manually.

After careful consideration, I decided to switch to GLFW and GLEW.

## GLFW (Graphics Library Framework)
[**GLFW**](https://www.glfw.org/) is a cross-platform library for managing OpenGL contexts, handling input 
(keyboard, mouse, controllers), and creating windows. Instead of dealing with messy platform-specific code, 
GLFW provides a clean API to manage all of this for me.

### Key points of GLFW
- Cross-platform – Works on Windows, Linux, and macOS.
- Simplifies Window & Input Handling – No need for platform-specific windowing code.
- Actively Maintained – Well-documented and widely used.

## GLEW (OpenGL Extension Wrangler)
[**GLEW**](https://www.opengl.org/sdk/libs/GLEW/) is a lightweight utility that loads OpenGL extensions. Since modern OpenGL requires 
querying and loading extensions dynamically, GLEW simplifies this process by automatically detecting and providing access to all supported 
OpenGL features on a given system.

## Progress and Next Steps
Today, I set up my build system to compile GLFW and GLEW, linking everything properly to my engine. The next steps are:

- Refactoring the platform layer to work with GLFW.
- Integrating Nuklear for UI.
- Implementing stb_truetype for better font handling.

## A Change in Philosophy
One interesting realization from this process: Handmade Hero was all about building an engine completely from scratch. 
I initially followed the same approach, and while I made a lot of things work, I’ve decided to rely on external libraries 
instead. The reason? Speed of development and simplicity, however I would not use libraries without source code :).

Using open-source libraries will dramatically accelerate development. Of course, I still need to study and integrate 
them properly, but since they’re open-source, I can step into the code and tweak things if needed—something I really appreciate.

That’s it for this post! I hope you enjoyed reading about my engine refactoring process. Stay tuned for the next update!

Take Care, Paul