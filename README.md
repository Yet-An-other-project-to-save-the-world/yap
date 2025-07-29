![Directus Mailer](/docs/header.jpg)

# Nuxt 3 Supabase Template 🧱

A Nuxt 3 Supabase Starter Template! This template is designed to help you quickly get started with a Nuxt 3 project integrated with Supabase for backend services. It includes essential configurations and examples to streamline your development process.

## Installation

- Download or fork the repository
- Install the requirements\
  `npm install`
- Build the extension\
  `npm run build`
- Create a folder in your directus endpoints folder named `Mailer` or an alternate route name.
- Move the `index.js` build file to your new folder `directus/extensions/endpoints/Mailer/index.js`
- Configure your email client in your .env file [@email config](https://docs.directus.io/configuration/config-options/#email).
- Start your Directus instance `npx directus start`

## Project Structure

-   `pages/`: Directory for Nuxt pages and routes.
-   `components/`: Reusable Vue components.
-   `layouts/`: Application layouts.
-   `store/`: Pinia store modules for state management.
-   `plugins/`: Nuxt plugins.
-   `composables/`: Vue 3 composables.
-   `assets/`: Static assets like images and styles.
-   `public/`: Static files served at the root.
-   `nuxt.config.ts`: Nuxt configuration file.

## 
![Directus Mailer](/docs/nuxtuibanner.jpg)
### Nuxt UI Components
This project uses the Nuxt UI component library.

## Environment Variables

```
SUPABASE_URL=""
SUPABASE_KEY=""
```

## Usage

### Supabase Integration

This template includes a basic Supabase setup. You can find the Supabase client initialization in the `plugins/supabase.js` file.

### Authentication

A simple authentication example is provided in the `pages/auth/login.vue` file. Customize it according to your needs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
