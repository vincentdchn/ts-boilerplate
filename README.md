<h1 align="center">
  TypeScript Boilerplate
</h1>
<h4 align="center">
  A Modern TypeScript Development Environment with Deno 2
</h4>
<p align="center">
Fed up with endless boilerplate hunting? Same here!
After spending way too much time searching for the "perfect" TypeScript setup,
I decided to create my own opinionated boilerplate with exactly what I need.
Now migrated to Deno 2 for an even better developer experience!
No bloat, just pure developer happiness with my preferred configuration. Use it if you like it!
</p>

<br/>

## Features

This boilerplate comes pre-configured with:

- **Deno 2**: Modern runtime with built-in TypeScript support
- **Native TypeScript**: No compilation step needed, runs TypeScript natively
- **Deno Lint**: Built-in linting with Deno's linter
- **Deno Test**: Native testing framework
- **Type-safe Environment**: Zod-powered environment variable validation and typing
- **Secure by Default**: Explicit permissions model

## Setup

### Prerequisites

- [Deno 2](https://deno.com/) (latest version)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/vincentdchn/typescript-boilerplate.git
cd typescript-boilerplate
```

2. Configure environment:

Create a `.env` file in the project root:

```bash
# Application Configuration
APP_KEY=your-32-character-base64-app-key-here
NODE_ENV=development
```

Generate a secure APP_KEY (at least 32 characters) and update it in your `.env` file.

3. Run the development server:

```bash
deno task dev
```

## Configuration Details

### Deno Configuration

The `deno.json` includes:

- Modern ECMAScript features
- Strict type checking
- Path aliases for clean imports
- Native TypeScript support
- Built-in formatter and linter configuration

### Type Safety

Enhanced type safety with:

- Strict TypeScript configuration
- Runtime environment validation with Zod
- No implicit any
- Unchecked indexed access protection

## Testing

Run tests in watch mode:

```bash
deno task test:watch
```

Run tests once:

```bash
deno task test
```

Tests with coverage:

```bash
deno task test:coverage
```

## Linting and Formatting

Lint your code:

```bash
deno task lint
```

Format your code:

```bash
deno task fmt
```

Type check your code:

```bash
deno task check
```

## Project Structure

```
typescript-boilerplate/
├── src/               # Source files
│   ├── config/        # Configuration files
│   ├── exceptions/    # Custom exception classes
│   ├── helpers/       # Utility functions
│   └── sum/           # Example module with tests
├── deno.json          # Deno configuration
└── README.md          # This file
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Available Tasks

- `dev`: Run development server with watch mode and file permissions
- `start`: Run the application in production mode
- `test`: Run tests with necessary permissions
- `test:watch`: Run tests in watch mode
- `test:coverage`: Run tests with coverage
- `lint`: Run Deno's built-in linter
- `fmt`: Format code with Deno's built-in formatter
- `check`: Type check the project

### Environment Configuration

The environment configuration is handled in a type-safe manner using Zod for validation and typing. Key features include:

- **Runtime Validation**: Environment variables are validated at startup
- **Type Safety**: Full TypeScript support for environment variables
- **Schema Definition**: Clear schema definition for required environment variables
- **Development Safety**: Automatic .env file loading in Deno
- **IDE Support**: Full autocomplete support for environment variables

Required environment variables:

- `APP_KEY`: A base64 string of at least 32 characters
- `NODE_ENV`: Either 'development' or 'production' (defaults to 'development')

### Why Deno 2?

This boilerplate migrated to Deno 2 for several advantages:

- **Native TypeScript**: No build step required, TypeScript runs directly
- **Secure by Default**: Explicit permissions for file system, network, and environment access
- **Standard Library**: Comprehensive standard library with consistent APIs
- **Modern JavaScript**: Built-in support for modern JavaScript features
- **Simplified Toolchain**: Integrated linter, formatter, test runner, and bundler
- **NPM Compatibility**: Can use existing NPM packages when needed
