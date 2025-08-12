# Custom-Tokenization-Visualizer

A clean, lightweight, and real-time web tool to visualize how text is tokenized by Large Language Models. Inspired by the TikTokenizer, this application provides immediate feedback on token counts, string representations, and numerical IDs.

<!-- --- -->

## [Live Demo](https://tokenization-visualizer.vercel.app/)

<!-- --- -->

## Screenshot

![A screenshot of the Custom Tokenizer application showing text being tokenized in real-time.](public\screenshotTokenizer.png)

<!-- --- -->

## Features

- **Real-Time Tokenization:** Input text is tokenized instantly as you type.
- **Comprehensive Visualization:** Displays the total token count, color-coded token strings, and their corresponding numerical IDs.
- **Whitespace Toggle:** An option to visualize whitespace characters (represented by `·`) for more granular analysis.
- **Clean & Responsive UI:** A modern, light-themed interface built for clarity and ease of use on any device.
- **Lightweight & Fast:** Built with Next.js for a fast, optimized user experience.

<!-- --- -->

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

<!-- --- -->

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js (version 18.x or later) and a package manager (npm, yarn, or pnpm) installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/custom-tokenizer.git](https://github.com/your-username/custom-tokenizer.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd custom-tokenizer
    ```

3.  **Install dependencies:**

    ```bash
    # Using npm
    npm install

    # Or using yarn
    yarn install

    # Or using pnpm
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser** and navigate to `http://localhost:3000` to see the application running.

<!-- --- -->

## How to Use

1.  Simply start typing or paste text into the main text area on the left.
2.  The three panels on the right will update in real-time:
    - **Token count:** Shows the total number of tokens generated from your input.
    - **Colored Tokens:** Displays each token as a distinctly colored block.
    - **Token IDs:** Lists the numerical ID for each token, separated by commas.
3.  Check the **"Show whitespace"** box at the bottom of the right column to make space characters visible within the colored token blocks.

<!-- --- -->

## Acknowledgements

Inspired by the [tiktokenizer](https://tiktokenizer.vercel.app/).
