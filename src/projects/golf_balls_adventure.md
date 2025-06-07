## Introduction

When I started my new role as a Golf Balls Technician, my primary task was to sort golf balls by brand, sub-brand, and quality. While the job is straightforward, its repetitive nature often leads to errors due to lack of attention or engagement. In today's competitive landscape, automation is key to ensuring profitability and success for companies. Recognizing this, I envisioned automating the sorting process by designing a machine to streamline the work.

A few months into the job, I began developing my first prototype, leveraging my engineering and programming expertise to bring this idea to life.

## Machine Overview

The machine is designed to be multi-purpose, capable of grading, sorting, and counting golf balls. It consists of three essential sections:

1. **Supply Section**: This section includes a container and a mechanism that feeds golf balls into the machine one at a time.
2. **Imaging Platform**: Used for grading or sorting, this platform features rollers to rotate the ball, claws to center it, and a camera to capture images. This section is bypassed during simple counting tasks.
3. **Distribution Section**: After processing, balls are directed to specific openings based on the task. For counting, balls pass through a single exit. For grading, they are sorted into categories (A, B, C, or D). Sorting by brand and sub-brand follows a similar process, though the number of sub-brands varies, requiring adaptable configurations.

The workflow can be summarized as: **Supply → Decide → Distribute**.

## Decision-Making Process

The machine uses a neural network trained on images of golf balls to grade or sort them. The same machine can also collect training data, with a user interface allowing manual input for labeling. This flexibility enables the machine to use different models tailored to specific tasks. For example:

- To grade only Titleist Pro V1 balls, a dataset of various Pro V1 grades is collected using the machine. A model is then trained on this dataset, enabling the machine to grade these balls accurately.
- If a non-target ball enters, the machine will still assign a grade based on its trained model, ensuring robustness.
- For specific models like Titleist Pro V1 2023, the machine can expand the dataset by saving images of processed balls, improving accuracy over time.

The strategy involves deploying multiple machines, each trained on specific brands and sub-brands. As datasets grow, more accurate models can be developed, enabling scalability.

## Challenges and Next Steps

While the concept is simple, implementation presents challenges. For a detailed look at the first issue encountered, refer to the [initial blog post](#) for this project.