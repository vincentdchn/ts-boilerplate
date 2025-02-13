<h1 align="center">
  TypeScript Boilerplate
</h1>
<h4 align="center">
  A Modern TypeScript Development Environment
</h4>
<p align="center">
Fed up with endless boilerplate hunting? Same here!
After spending way too much time searching for the "perfect" TypeScript setup,
I decided to create my own opinionated boilerplate with exactly what I need.
No bloat, just pure developer happiness with my preferred configuration. Use it if you like it!
</p>

<br/>

## Features

This boilerplate comes pre-configured with:

- **TypeScript**: Latest version with strict type checking
- **ESLint**: Advanced linting with multiple plugins
- **Vitest**: Modern testing framework
- **ts-reset**: Type safety improvements
- **Type-safe Environment**: Zod-powered environment variable validation and typing

## Setup

### Prerequisites

- Node.js (v20 or higher recommended)
- pnpm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/vincentdchn/typescript-boilerplate.git
cd typescript-boilerplate
```

2. Use correct Node version

```bash
nvm use
```

3. Install dependencies:

```bash
pnpm install
```

4. Configure environment:

```bash
cp .env.example .env
```

Generate a secure APP_KEY (at least 32 characters) and update it in your `.env` file.

5. Run the development server:

```bash
pnpm dev
```

## Configuration Details

### TypeScript Configuration

The `tsconfig.json` includes:

- Modern ECMAScript features (`target: "es2022"`)
- Strict type checking
- Node.js module resolution
- Source map generation
- Path aliases
- Enhanced type safety options

### ESLint Configuration

Comprehensive linting setup with:

- TypeScript-specific rules
- Code style enforcement
- Best practices
- Modern JavaScript conventions

## Testing

Run tests in watch mode using:

```bash
pnpm test
```

Tests in CI mode:

```bash
pnpm test:ci
```

Tests with coverage:

```bash
pnpm test:coverage
```

## Project Structure

```
typescript-boilerplate/
├── src/               # Source files
├── tsconfig.json     # TypeScript configuration
├── eslint.config.js  # ESLint configuration
├── vitest.config.ts  # Vitest configuration
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Available Scripts

- `dev`: Run development server with watch mode
- `test`: Run tests with Vitest
- `test:ci`: Run tests in CI mode
- `test:coverage`: Run tests with coverage
- `lint`: Run ESLint with auto-fix
- `format`: Format code with Prettier
- `build`: Build TypeScript project

### Environment Configuration

The environment configuration is handled in a type-safe manner using Zod for validation and typing. Key features include:

- **Runtime Validation**: Environment variables are validated at startup
- **Type Safety**: Full TypeScript support for environment variables
- **Schema Definition**: Clear schema definition for required environment variables
- **Development Safety**: Example environment file provided
- **IDE Support**: Full autocomplete support for process.env

Required environment variables:

- `APP_KEY`: A base64 string of at least 32 characters
- `NODE_ENV`: Either 'development' or 'production' (defaults to 'development')
