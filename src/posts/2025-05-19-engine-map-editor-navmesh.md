As I mentioned in my previous post, this entry is about my recent work on the map editing mode. I’ve been focusing on navigation meshes for the past few weeks and have made significant progress. I’m now close to completing this feature and testing it in the simulation. Let’s go through what I had before and what I’ve added recently.

The main goal of the map editing mode is to create "levels." By levels, I mean the environment and its components, including entity placements, ground tiles, and navigation meshes — my current focus. The ground design feature is already in place: I can easily select and edit tile textures and set their rendering level or height to ensure the correct rendering order. However, entity placement and navigation mesh generation depend on each other. Entities need the mesh to simulate movement, while navigation meshes require an entity’s collision polygon (if it’s static) to define walkable areas. Because of this, I decided to tackle navigation meshes first.

#### What Are Navigation Meshes?

Navigation meshes are a set of polygons that represent walkable space in a level. These polygons are convex, meaning any two points within a polygon (including its edges) can be connected by a straight line. This property makes pathfinding much simpler and more efficient.

**🖼️ [Image Placeholder 1: Diagram of a navigation mesh]**  
*Description: A simple diagram showing a few convex polygons representing walkable areas in a game level. Include labels for key elements like polygons, edges, and perhaps a sample path.*

To make navigation meshes work, several steps are required:
- **Define or generate polygons** that represent the walkable space.
- **Partition these polygons into convex parts.** Larger convex parts result in faster and more efficient pathfinding.
- **Build a connectivity graph** to show which polygons are adjacent to each other.
- **Find a path** between two points, A (start) and B (end), using the A* algorithm or a similar method.
- **Straighten the path** using the funnel algorithm.

The result is an array of points that an entity can follow to reach its destination.

#### My Progress So Far

I already have a feature to draw and save polygons. The next step is to partition them into convex parts. The simplest approach is to triangulate the polygons, but this creates a connectivity graph with many nodes, slowing down the algorithm more than necessary. Instead, I merge triangles into larger convex shapes to optimize performance, resulting in a set of convex polygons.

For the A* algorithm, I need a graph of these polygons. My current method is straightforward: I check all edges of each polygon and mark two polygons as neighbors if they share an edge.

I’ve previously written an A* algorithm for my first demo, where nodes were the center points of tiles. Now, I’m adapting it so each node represents a polygon. A* relies on a heuristic — typically the distance between points — to guide the search. To support this, I calculate the center point of each polygon during graph creation and store it in the node. This lets me compute the heuristic as the distance between polygon centers. With a few tweaks to the existing algorithm, it runs smoothly.

I also found a funnel algorithm implementation in C, added it to my codebase, and got it working. However, it needs some adjustments to make it easier to use.

#### Checking Points in Polygons

One gap remains: I don’t yet have a way to check if a point is inside a polygon or identify which polygon contains it. This is critical for determining start and end points for pathfinding. I’m considering two options:

1. **Ray Casting**: Cast a ray from the point (usually along the positive x-axis) and count how many polygon edges it intersects. An odd number of intersections means the point is inside; an even number means it’s outside. I’ll need to handle edge cases like vertex intersections. The time complexity is O(n), where n is the number of edges.
2. **Triangulation Method**: Since my polygons are convex, I can quickly triangulate them. Then, for each triangle, I’ll use a mathematical test to check if the point is inside. This also has O(n) complexity.

The decision comes down to which method requires fewer operations. I haven’t settled on one yet, so my next step is to implement both and measure their performance.

### Wrap-up
I am sorry for vague explanation, the reson is that I want to finish this thing and then make a post with visual explanations and demo of how each step works.

That’s all for this update!