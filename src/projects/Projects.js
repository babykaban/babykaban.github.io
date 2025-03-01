import SpellweaverSaga from '../pages/SpellweaverSaga.jsx';
import Clipper from '../pages/Clipper.jsx';

import project_1Img from '../assets/img/project_img0.png';
import project_2Img from '../assets/img/clipper_logg.png';

const Projects = [
    {
        title: "Spellweaver Saga",
        description: "Spellweaver Saga is a roguelike adventure where players explore islands created after a cataclysm, seeking to restore the world. Using a deep spell crafting system, everything from combat to puzzles revolves around elemental magic.",
        image: project_1Img,
        route: "/spellweaver-saga",
        page: <SpellweaverSaga />
    },

    {
        title: "Clipper Library",
        description: "The Clipper library is a custom implementation of polygon clipping operations, such as intersection, union, difference, and XOR. It allows precise manipulation of 2D polygons, enabling operations like subtracting one shape from another.",
        image: project_2Img,
        route: "/clipper-library",
        page: <Clipper />
    }
]

export default Projects;