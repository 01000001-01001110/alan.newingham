# Alan Newingham Portfolio

A modern, responsive portfolio website showcasing my professional experience, skills, and projects using React and TypeScript.

![Portfolio Preview](public/transcriber.png)

## Features

- **Modern React Application**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Optimized for all device sizes using styled-components
- **Dark Mode**: Sleek dark-themed UI that's easy on the eyes
- **Interactive Timeline**: Visually appealing mountain-range timeline of career progression
- **Dynamic Content**: All portfolio content is data-driven for easy updates
- **Smooth Animations**: Page transitions and content reveals using Framer Motion
- **SEO Friendly**: Structured semantic HTML with metadata
- **Modular Architecture**: Component-based design following Atomic Design principles

## Tech Stack

- **Core**: React, TypeScript
- **Styling**: Styled Components, Theme Provider
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **PDF Generation**: html2pdf.js
- **Code Quality**: ESLint, Prettier
- **Build Tool**: Create React App

## Project Structure

```
react-portfolio/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components following Atomic Design
│   │   ├── atoms/      # Smallest components (buttons, inputs, etc.)
│   │   ├── molecules/  # Groups of atoms (form fields, etc.)
│   │   ├── organisms/  # Complex UI sections (headers, timelines, etc.)
│   │   └── templates/  # Page layouts
│   ├── context/        # React context for state management
│   ├── data/           # Data files for content (jobs, projects, skills)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── router/         # Routing configuration
│   ├── styles/         # Global styles and theme
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Application entry point
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/01000001-01001110/Resume-Site.git
   cd Resume-Site
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Adding or Updating Content

All content is stored in data files in the `src/data` directory:

- `jobs.ts` - Work experience details
- `projects.ts` - Project showcases
- `skills.ts` - Technical and soft skills
- `education.ts` - Educational background

To update your information, simply modify these files with your latest experience, projects, and skills.

### Customizing Styling

Theme settings are located in `src/styles/theme.ts`. You can modify colors, spacing, fonts, and other design tokens to match your personal brand.

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` directory.

## Deployment

This portfolio can be deployed to any static hosting service:

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### Vercel

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will automatically detect React and configure the build settings

### GitHub Pages

1. Modify the `homepage` field in `package.json` to match your GitHub Pages URL
2. Run the deploy script:
   ```bash
   npm run deploy
   ```

## Key Components

### Timeline Component

The mountain-range timeline visualizes career progression with varying heights and colors based on the significance of each role.

### Experience List

Dynamic list of professional experiences with expandable details, technologies used, and achievements.

### Skills Section

Visual representation of skills categorized by type (technical, tools, soft skills, methodologies) with proficiency indicators.

### Projects Showcase

Grid display of projects with filterable categories, previews, and technology tags.

## License

MIT License

## Contact

Alan Newingham - [alan.newingham@gmail.com](mailto:alan.newingham@gmail.com)

Portfolio: [https://01000001-01001110.github.io/Resume-Site/](https://01000001-01001110.github.io/Resume-Site/)  
LinkedIn: [https://www.linkedin.com/in/alan-newingham](https://www.linkedin.com/in/alan-newingham)  
GitHub: [https://github.com/01000001-01001110](https://github.com/01000001-01001110)
