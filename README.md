
## Project info


## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Backend Integration (Render)

Set your backend base URL in a Vite environment file.

1. Create `.env.local` in the project root.
2. Add:

```env
VITE_API_BASE_URL=https://your-render-service.onrender.com
```

3. Restart the Vite dev server.

When `VITE_API_BASE_URL` is set, frontend API requests are sent to that host (for example, `/api/events` becomes `https://your-render-service.onrender.com/api/events`).

If `VITE_API_BASE_URL` is not set, requests stay relative (for local proxy/dev setups).


