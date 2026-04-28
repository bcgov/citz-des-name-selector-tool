# Install dependencies and build the application with Bun.
FROM oven/bun:1.3.5 AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock bunfig.toml /temp/dev/
# Install dependencies and devDependencies into a temp directory to cache them
# and speed up future builds.
RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
# See .dockerignore for files not covered by this copy command.
COPY . .
ENV NODE_ENV=production
# Vite's build script places built application artifacts in `./dist`.
RUN bun run build

# Serve static application artifacts with nginx-unprivileged.
FROM nginxinc/nginx-unprivileged:alpine3.22 AS serve
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080
# Set `daemon off` so nginx process stays in the foreground.
ENTRYPOINT ["nginx", "-g", "daemon off;"]
