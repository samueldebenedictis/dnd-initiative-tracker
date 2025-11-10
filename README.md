# D&D Initiative Tracker

A modern, responsive web application for tracking initiative in Dungeons & Dragons (D&D) sessions. Built with React, TypeScript, and Tailwind CSS. The interface is styled with a parchment-like theme inspired by classic D&D manuals.

**[Live Demo](https://samueldebenedictis.github.io/dnd-initiative-tracker/)**

## Features

- **Add Participants**: Easily add players, monsters, or NPCs with name, initiative roll, hit points (HP), and armor class (AC)
- **Initiative Rolling**: Built-in D20 initiative roller for quick rolls
- **Automatic Sorting**: Participants are automatically sorted by initiative in descending order
- **HP Management**: Increase or decrease hit points with simple buttons
- **Participant Removal**: Remove individual participants or clear the entire list
- **Data Persistence**: All data is saved to localStorage, so your initiative order persists between sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Styled Interface**: Fantasy-themed UI with a parchment-like background

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samueldebenedictis/dnd-initiative-tracker.git
   cd initiative-tracker-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/dnd-initiative-tracker/`

## Usage

1. **Adding a Participant**:
   - Enter the participant's name
   - Enter their initiative roll or use the "Roll D20" button
   - Optionally enter HP and AC
   - Click "Add Participant"

2. **Managing the Initiative Order**:
   - Participants are automatically sorted by initiative (highest first)
   - Use the + and - buttons to adjust HP during combat
   - Click the X button to remove a participant

3. **Clearing the Tracker**:
   - Use the "Remove All" button to clear the entire list

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### How it works

1. **Automatic Deployment**: The workflow triggers on every push to the `main` branch
2. **Build Process**: The action installs dependencies, builds the project, and uploads the `dist` folder as an artifact
3. **GitHub Pages**: The artifact is then deployed to GitHub Pages, making the site available at the live demo URL

### Manual Deployment

You can also trigger the deployment manually:
1. Go to the repository on GitHub
2. Navigate to **Actions** tab
3. Select the **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

### GitHub Pages Setup

To enable GitHub Pages for this repository:
1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will be available at `https://[username].github.io/[repository-name]/`

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally
- `npm run format` - Format code with Biome
- `npm run biome` - Run Biome checks and fixes

### Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Biome** - Fast linter and formatter
- **ESLint** - Additional linting rules

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
