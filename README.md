<h1 align="center">
  TypeScript Monorepo Boilerplate
</h1>
<h4 align="center">
  A Modern TypeScript Monorepo with Shared Packages using Deno 2
</h4>
<p align="center">
Fed up with endless boilerplate hunting? Same here!
After spending way too much time searching for the "perfect" TypeScript setup,
I decided to create my own opinionated monorepo boilerplate with exactly what I need.
Now structured as a monorepo with shared packages for better code reusability!
No bloat, just pure developer happiness with my preferred configuration. Use it if you like it!
</p>

<br/>

## Features

This monorepo boilerplate comes pre-configured with:

- **Deno 2 Workspace**: Modern runtime with built-in TypeScript support and workspace management
- **Monorepo Structure**: Main backend application at root with organized packages
- **Config Package**: Centralized configuration and environment management
- **Shared Package**: Common utilities and math functions
- **Backend Application**: Main application at root using shared packages
- **Native TypeScript**: No compilation step needed, runs TypeScript natively
- **Deno Lint**: Built-in linting with Deno's linter
- **Deno Test**: Native testing framework with workspace support
- **Type-safe Environment**: Safe environment variable validation and typing
- **Secure by Default**: Explicit permissions model

## Monorepo Structure

```
ts-boilerplate/
├── backend/              # Backend application (main app)
│   ├── src/
│   │   ├── mod.ts        # Main application entry point
│   │   ├── calculator.ts
│   │   └── calculator.test.ts
│   └── deno.json         # Backend configuration
├── packages/
│   ├── config/           # Configuration package
│   │   ├── app_config.ts  # Application configuration
│   │   ├── env.ts         # Environment variables
│   │   ├── mod.ts         # Configuration exports
│   │   └── deno.json     # Config package configuration
│   └── shared/           # Shared utilities package
│       ├── helpers/      # Helper utilities
│       │   ├── logger.ts
│       │   ├── secret.ts
│       │   └── mod.ts
│       ├── math/         # Math calculation functions
│       │   ├── sum.ts
│       │   ├── sum.test.ts
│       │   └── mod.ts
│       ├── mod.ts        # Main exports
│       └── deno.json     # Shared package configuration
├── deno.json             # Workspace configuration
├── LICENSE
├── renovate.json
└── README.md             # This file
```

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

Create a `.env` file in the root directory and configure it:

```bash
# Application Configuration
APP_KEY=your-32-character-or-longer-base64-key-here-replace-this-value
NODE_ENV=development
```

Generate a secure APP_KEY (at least 32 characters) and update it in your `.env` file.

3. Run the development server:

```bash
deno task dev
```

## Available Tasks

### Root Level Tasks

- `dev`: Run the backend in development mode
- `start`: Run the backend in production mode
- `test`: Run all tests across packages
- `test:watch`: Run all tests in watch mode
- `lint`: Lint all packages
- `fmt`: Format all packages
- `check`: Type check all packages

### Package-Specific Tasks

- `dev:backend`: Run backend development server
- `start:backend`: Start backend in production
- `test:shared`: Run shared package tests
- `test:config`: Run config package tests
- `test:backend`: Run backend package tests
- `check:shared`: Type check shared package
- `check:config`: Type check config package
- `check:backend`: Type check backend package

## Package Overview

### @ts-boilerplate/config

The config package handles all configuration concerns:

- **Environment Variables**: Type-safe environment variable validation using safe-env
- **App Configuration**: Application-wide configuration settings
- **Validation**: Runtime validation of configuration values

```typescript
import { config, env } from "@config";

console.log(`Environment: ${env.NODE_ENV}`);
console.log(`Redacted keyword: ${config.logger.redactedKeyword}`);
```

### @ts-boilerplate/shared

The shared package contains common utilities used across the monorepo:

- **Math Functions**: `sum`, `multiply`, `subtract`, `divide`
- **Logger**: Configured logging utility
- **Secret**: Secure value wrapper for sensitive data
- **Bootstrap**: Application initialization utilities

```typescript
import { multiply, sum } from "@shared/math";
import { logger, Secret } from "@shared";

const result = sum(5, 3);
logger.info(`Result: ${result}`);
```

### Backend Application

The main backend application demonstrates how to use the shared packages:

- Uses shared math functions for calculations
- Implements a Calculator service
- Uses configuration from the config package
- Shows logger usage with secrets from shared utilities
- Located at the root for easy development and deployment

## Testing

Run all tests:

```bash
deno task test
```

Run tests for specific packages:

```bash
deno task test:shared
deno task test:backend
```

Run tests in watch mode:

```bash
deno task test:watch
```

## Linting and Formatting

Lint all packages:

```bash
deno task lint
```

Format all packages:

```bash
deno task fmt
```

Type check all packages:

```bash
deno task check
```

## Development

### Adding a New Package

1. Create a new directory under `packages/` for shared utilities
2. Add a `deno.json` configuration
3. Update the root `deno.json` workspace array
4. Configure imports in backend to use the new package

For additional applications, create them at the root level alongside `backend/`

### Using Packages

The imports are configured at the workspace root to access all packages:

```json
{
  "imports": {
    "@shared": "./packages/shared/mod.ts",
    "@config": "./packages/config/mod.ts"
  }
}
```

Then import in your TypeScript files:

```typescript
// Math functions from shared package
import { sum } from "@shared/math";
import { logger } from "@shared/helpers";

// Configuration from config package
import { config, env } from "@config";

// Or use specific imports from sub-modules
import { env } from "@config/env";
import { config } from "@config/app";
```

## Configuration Details

### Workspace Configuration

The root `deno.json` defines the workspace structure and provides unified task management across all packages.

### Type Safety

Enhanced type safety with:

- Strict TypeScript configuration across all packages
- Runtime environment validation
- No implicit any
- Unchecked indexed access protection

### Environment Configuration

The environment configuration is handled in the shared package with type-safe validation:

- **Runtime Validation**: Environment variables are validated at startup
- **Type Safety**: Full TypeScript support for environment variables
- **Schema Definition**: Clear schema definition in shared package
- **Development Safety**: Automatic .env file loading
- **IDE Support**: Full autocomplete support for environment variables

Required environment variables:

- `APP_KEY`: A base64 string of at least 32 characters
- `NODE_ENV`: Either 'development' or 'production' (defaults to 'development')

### Why Monorepo with Deno 2?

This boilerplate uses a monorepo structure with Deno 2 for several advantages:

- **Code Reusability**: Shared utilities across multiple packages
- **Type Safety**: Full TypeScript support across package boundaries
- **Unified Tooling**: Single configuration for linting, formatting, and testing
- **Native TypeScript**: No build step required, TypeScript runs directly
- **Secure by Default**: Explicit permissions for file system, network, and environment access
- **Standard Library**: Comprehensive standard library with consistent APIs
- **Modern JavaScript**: Built-in support for modern JavaScript features
- **Simplified Dependency Management**: Clear package dependencies within the workspace

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
