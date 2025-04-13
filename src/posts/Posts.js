import engine_asset_editing from '../posts/2025-04-12-engine-asset-editing.md';
import refactoring_kaban_engine3 from '../posts/2025-04-01-refactoring-kaban-engine3.md';
import refactoring_kaban_engine2 from '../posts/2025-03-18-refactoring-kaban-engine2.md';
import refactoring_kaban_engine from '../posts/2025-03-09-refactoring-kaban-engine.md';
import sudden_decision_about_clipper from '../posts/2025-03-01-sudden-decision-about-clipper.md';
import welcome_to_new_blog from '../posts/2025-02-27-welcome-to-new-blog.md';
import clipper2_reimplementation from '../posts/2024-10-23-clipper2-reimplementation.md';
import editor_update_triangulation from '../posts/2024-09-02-editor-update-triangulation.md';
import editor_update_triangle_subtraction from '../posts/2024-08-18-editor-update-triangle-subtraction.md';
import editor_update_map_mode from '../posts/2024-08-04-editor-update-map-mode.md';
import editor_update_sswm_format from '../posts/2024-07-29-editor-update-sswm-format.md';

import engine_asset_editingImg from '../assets/img/engine_asset_editing.png';
import refactoring_kaban_engine3Img from '../assets/img/refactoring_kaban_engine3.png';
import refactoring_kaban_engine2Img from '../assets/img/refactoring_kaban_engine2.png';
import refactoring_kaban_engineImg from '../assets/img/refactoring_kaban_engine.png';
import sudden_decision_about_clipperImg from '../assets/img/clipper_logg.png';
import welcome_to_new_blogImg from '../assets/img/welcome_0.png';
import clipper2_reimplementationImg from '../assets/img/clipper2_0.png';
import editor_update_triangulationImg from '../assets/img/triangulation.png';
import editor_update_triangle_subtractionImg from '../assets/img/subtract_example_0.png';
import editor_update_map_modeImg from '../assets/img/editor_picture_1.png';
import editor_update_sswm_formatImg from '../assets/img/editor_picture_4.png';

const Posts = [
    {
        title: "Assets Edit Mode",
        date: "April 12, 2025",
        description: "After completing my initial demo for my school capstone project, I set out to transform my work into a proper game engine, prioritizing ease of use and flexibility.",
        image: engine_asset_editingImg,
        content: engine_asset_editing,
        categories: ["Editor", "Engine"],
        route: "/2025-04-18-engine-asset-editing"
    },

    {
        title: "Refactoring Kaban Engine: UI",
        date: "April 1, 2025",
        description: " It’s been a little while since my last update on the Kaban Engine refactor, and I’ve been ...",
        image: refactoring_kaban_engine3Img,
        content_images: [
            "refactoring_kaban_engine3_5.png", "refactoring_kaban_engine3_4.png",
            "refactoring_kaban_engine3_0.png", "refactoring_kaban_engine3_1.png",
            "refactoring_kaban_engine3_2.png", "refactoring_kaban_engine3_3.png",
        ],
        content: refactoring_kaban_engine3,
        categories: ["Editor", "Engine"],
        route: "/2025-04-01-refactoring-kaban-engine-3"
    },

    {
        title: "Refactoring Kaban Engine: Wrestling with Libraries",
        date: "March 18, 2025",
        description: "It’s been about a week since my last post, and I’ve been neck-deep in figuring out GLFW, GLEW, and Nuklear for the Kaban Engine refactor.",
        image: refactoring_kaban_engine2Img,
        content: refactoring_kaban_engine2,
        categories: ["Editor", "Engine"],
        route: "/2025-03-18-refactoring-kaban-engine-2"
    },

    {
        title: "Refactoring Kaban Engine: Debug Systems, UI, and Rendering",
        date: "March 9, 2025",
        description: "Since I finished working on the Clipper library, I decided it was time to refactor my game engine. The last time I touched it was almost six months ago, and when I opened the source code, my first instinct was to throw everything in the garbage and start over.",
        image: refactoring_kaban_engineImg,
        content: refactoring_kaban_engine,
        categories: ["Editor", "Engine"],
        route: "/2025-03-09-refactoring-kaban-engine"
    },

    {
        title: "Sudden Decision about Clipper",
        date: "March 1, 2025",
        description: "",
        image: sudden_decision_about_clipperImg,
        content: sudden_decision_about_clipper,
        categories: ["Clipper2", "Editor"],
        route: "/2025-03-01-sudden-decision-about-clipper"
    },

    {
        title: "Welcome to New Blog",
        date: "February 27, 2025",
        description: "I'm excited to finally launch my personal website, a place where I can share my projects, thoughts, and experiences all in one spot. If you're new here, let me give you a quick rundown of what you can explore.",
        image: welcome_to_new_blogImg,
        content: welcome_to_new_blog,
        categories: ["Editor", "Spellweaver Saga"],
        route: "/2025-02-27-welcome-to-new-blog"
    },

    {
        title: "Clipper2 Reimplementation",
        date: "October 23, 2024",
        description: "While developing the navigation meshes for my game, I ran into a persistent issue: 'clipping polygons'. I initially implemented a polygon subtraction algorithm that worked well for most cases, but it quickly became apparent that there might be a 'better approach' to polygon clipping.",
        image: clipper2_reimplementationImg,
        content: clipper2_reimplementation,
        categories: ["Clipper2"],
        route: "/2024-10-23-clipper2-reimplementation"
    },

    {
        title: "Triangulation",
        date: "September 2, 2024",
        description: "Over the past few weeks, I’ve been focused on continuing my work with navigation meshes. After implementing features in the editor to create polygons, the next major step was triangulating those polygons. This is important to placing obstacles and later merging them into convex polygons.",
        image: editor_update_triangulationImg,
        content: editor_update_triangulation,
        categories: ["Editor"],
        route: "/2024-09-02-editor-update-triangulation"
    },

    {
        title: "Triangle Boolean Subtraction",
        date: "August 18, 2024",
        description: "In game development, navigation meshes are useful for defining walkable areas where AI characters can move. These meshes are made up of interconnected polygons that represent navigable surfaces, allowing for efficient pathfinding. My game uses navigation meshes for AI and player movement control. The need to handle dynamic obstacles was the main reason I developed this algorithm.",
        image: editor_update_triangle_subtractionImg,
        content_images: [
                            "subtract_example_0.png", "subtract_example_1.png",
                            "subtract_0.png", "subtract_1.png", "subtract_2.png", "subtract_3.png"
                        ],
        content: editor_update_triangle_subtraction,
        categories: ["Editor"],
        route: "/2024-08-18-editor-update-triangle-subtraction"
    },

    {
        title: "Expanding the World Map Editor Mode",
        date: "August 4, 2024",
        description: "Over the past week, I’ve been focusing on enhancing the editor, particularly in creating and managing world maps. Let’s look at new features that have been added.",
        image: editor_update_map_modeImg,
        content: editor_update_map_mode,
        categories: ["Editor"],
        route: "/2024-08-04-editor-update-map-mode"
    },

    {
        title: "Introducing Spellweaver Saga World Map (SSWM)",
        date: "July 29, 2024",
        description: "As I delve deeper into refining the game's mechanics and world-building tools, I've decided to rebuild the editor's 'terrain' mode and introduce a fresh file format called 'Spellweaver Saga World Map (SSWM)'.",
        image: editor_update_sswm_formatImg,
        content_images: ["editor_picture_4.png"],
        content: editor_update_sswm_format,
        categories: ["Editor"],
        route: "/2024-07-29-editor-update-sswm-format"
    },
/*
    {
        title: "",
        date: "",
        description: "Editor update: World Map Editor Mode",
        image: testImg,
        content: SampleBlogPost,
        categoeies: ["SSWM", "Editor"],
        route: "/sample"
    }
*/
]

export default Posts;