import clipper2_reimplementation from '../posts/2024-10-23-clipper2-reimplementation.md';
import editor_update_triangulation from '../posts/2024-09-02-editor-update-triangulation.md';
import editor_update_triangle_subtraction from '../posts/2024-08-18-editor-update-triangle-subtraction.md';
import editor_update_map_mode from '../posts/2024-08-04-editor-update-map-mode.md';
import editor_update_sswm_format from '../posts/2024-07-29-editor-update-sswm-format.md';

import editor_update_triangulationImg from '../assets/img/triangulation.png';
import editor_update_triangle_subtractionImg from '../assets/img/subtract_example_0.png';
import editor_update_map_modeImg from '../assets/img/editor_picture_1.png';
import editor_update_sswm_formatImg from '../assets/img/editor_picture_4.png';

const Posts = [
    {
        title: "Clipper2 Reimplementation",
        date: "October 23, 2024",
        description: "While developing the navigation meshes for my game, I ran into a persistent issue: 'clipping polygons'. I initially implemented a polygon subtraction algorithm that worked well for most cases, but it quickly became apparent that there might be a 'better approach' to polygon clipping.",
        image: editor_update_sswm_formatImg,
        content: clipper2_reimplementation,
        categories: ["Clipper2"],
        route: "/2024-10-23-clipper2-reimplementation"
    },

    {
        title: "Triangulation",
        date: "September 2, 2024",
        description: "Editor update: Triangulation",
        image: editor_update_triangulationImg,
        content: editor_update_triangulation,
        categories: ["Editor"],
        route: "/2024-09-02-editor-update-triangulation"
    },

    {
        title: "Triangle Boolean Subtraction",
        date: "August 18, 2024",
        description: "Editor update: Triangle Boolean Subtraction",
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
        description: "Editor update: World Map Editor Mode",
        image: editor_update_map_modeImg,
        content: editor_update_map_mode,
        categories: ["Editor"],
        route: "/2024-08-04-editor-update-map-mode"
    },

    {
        title: "Introducing Spellweaver Saga World Map (SSWM)",
        date: "July 29, 2024",
        description: "Editor update: SSWM format",
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