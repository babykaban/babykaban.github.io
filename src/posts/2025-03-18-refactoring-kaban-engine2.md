### Introduction  
Hey folks! It’s been about a week since my last post, and I’ve been neck-deep in figuring out GLFW, GLEW, and Nuklear for the Kaban Engine refactor. I also squeezed in some OpenGL tutorials because, let’s be real, my OpenGL knowledge was more “vague vibes” than actual expertise. Here’s how it’s been going—some wins, some headaches, and a clearer path forward.

### GLFW: Not My Cup of Tea  
I kicked things off with GLFW, excited to ditch the Windows API mess. Getting a window up was easy—honestly, I spent more time skimming the docs than coding. But then I hit a snag. Running in windowed fullscreen mode, the window insists on staying on top. If I’m on a single-monitor setup, stepping into the debugger is impossible because the window hogs the screen. On two monitors, it’s still a pain—clicking the debugger iconifies the window. There’s an auto-iconify disable option, but then I’m back to the “always on top” problem.  

After fighting that for a bit, I decided GLFW’s not for me. It’s slick for some use cases, but I need more control over window behavior, especially for debugging. So, I’m shelving it for now and rethinking the platform layer.

### GLEW: Smooth Sailing  
Next up was GLEW, and honestly, it’s been a breeze. No drama here—it’s basically just a pile of defines and helper functions that make OpenGL extensions less of a nightmare. I hooked it into the build system, and it’s quietly doing its job. Probably helps that I’m not asking much of it yet—just laying the groundwork for the rendering pipeline. So far, so good.

### Nuklear: UI Progress, Rendering Puzzles  
Then I turned to Nuklear, the immediate-mode UI library I’ve been hyped about. It’s simple in concept, but getting it running efficiently took some elbow grease. My goal was just to slap something on the screen, so I spent a few days setting up the Nuklear context and figuring out how to render its commands. My rendering pipeline isn’t ready for all the fancy shapes Nuklear throws at me, so I leaned on its vertex draw commands instead.  

I grabbed some sample code from `nuklear_glfw_gl2.h` — yeah, it’s GLFW-based, but I just used the OpenGL bits. It had everything I needed: context setup, command buffering, and rendering hooks. After tweaking it to fit my engine, I’ve got a window with buttons on-screen as I write this. It’s not pretty yet, but it’s working, and that’s a win.

### OpenGL Crash Course  
Since my rendering pipeline’s still a work in progress, I’ve been watching OpenGL tutorials to level up. I’m finally wrapping my head around shaders, vertex buffers, and the whole “modern OpenGL” deal. It’s clicking now, and I’m itching to apply it to the engine once the UI’s more stable.

### Next Steps: Input and Beyond  
For the next chunk of work, I’m tackling input handling. Since I’m ditching GLFW, I dug into its source code to see how it fetches inputs—keyboard, mouse, the works. I’m planning to roll my own version, inspired by their approach but tailored to my needs. After that, it’s back to the rendering pipeline—time to make it handle Nuklear’s demands properly and start testing some real game logic.

### Wrap-Up  
That’s the scoop for now! GLFW didn’t stick, GLEW’s a champ, and Nuklear’s coming together. The Kaban Engine’s still a bit of a mess, but it’s my mess, and I’m making progress. Thanks for reading—drop a comment if you’ve got tips on input handling or dealing with stubborn windows. See you in the next update!  

Take care,  
Paul  