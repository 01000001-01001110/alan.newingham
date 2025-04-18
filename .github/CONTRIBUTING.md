# Contributing to Alan's Portfolio Site

Thank you for considering contributing to this portfolio site! This document outlines the process for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Set up the development environment**:
   ```bash
   cd react-portfolio
   npm install
   npm start
   ```

## Development Workflow

1. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
2. **Make your changes**
   - Follow the existing code style
   - Write clear, commented code
   - Keep commits focused and atomic

3. **Test your changes**:
   ```bash
   npm run build  # Make sure the build succeeds
   npm start      # Test locally
   ```

4. **Commit your changes** with clear messages:
   ```bash
   git commit -m "Your clear commit message"
   ```

5. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** from your branch to the main repository's `main` branch

## Pull Request Process

1. Fill out the pull request template completely
2. Ensure all checks pass (linting, tests, build)
3. Request a review from the repository maintainer
4. Address any feedback provided during review
5. Once approved, your PR will be merged

## Code Standards

- Use TypeScript for all new components
- Follow the established project structure
- Use styled-components for styling
- Include descriptive comments for complex logic
- Ensure responsive design for all screen sizes

## Adding Content

### Portfolio Projects

When adding new projects to `src/data/projects.ts`:
- Include all required fields (id, name, description, etc.)
- Optimize images and place them in the `public` directory
- Use descriptive IDs that match the project name

### Experience/Skills

When updating experience or skills:
- Maintain the existing data structure
- Test your changes to ensure they display correctly
- Keep descriptions concise but informative

## Questions?

If you have any questions about contributing, please open an issue or contact the repository owner.

Thank you for your contribution!
