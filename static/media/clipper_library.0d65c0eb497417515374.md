### Clipper Library Project

## What is the Clipper Library?

The Clipper library is a custom implementation of polygon clipping operations, such as intersection, union, difference, and XOR. It allows precise manipulation of 2D polygons, enabling operations like subtracting one shape from another. The library is designed to handle complex cases, including holes and self-intersecting polygons, with robustness and efficiency.

## Why am I Developing It?

I needed a clipping solution for my game, Spellweaver Saga, particularly for navigation meshes and obstacle handling. While existing libraries are available, I wanted a custom implementation tailored to my engine’s needs. This also serves as an opportunity to deepen my understanding of polygon clipping algorithms and create a highly optimized solution that integrates seamlessly with my workflow.

## How am I Developing It?

The library is written in C/C++ and is based on the popular [Clipper2 library](https://github.com/AngusJohnson/Clipper2), which is also used in the Godot Engine. However, I decided to rewrite it because I found the original implementation lacking in terms of structure and efficiency. I was confident that the performance could be improved by at least 30%.

## Optimizations and Improvements:

- Wide Register Utilization: Reimplemented certain functions to take advantage of SIMD instructions for better performance.

- Memory Allocation Optimization: Allocates memory in blocks instead of dynamically when needed, reducing system calls and improving efficiency.

- Feature Reduction: Removed less relevant features like PolyTrees and USINGZ to streamline the implementation.

I initially considered integrating this library into the Godot Engine, but after reviewing the original repository, I found that Clipper2 is actively maintained and updated. Nevertheless, my rewritten version is available on my [GitHub](https://github.com/babykaban/Clipper-2d) repository for anyone interested. Feel free to check it out!

More updates will be posted as development continues. Stay tuned!

