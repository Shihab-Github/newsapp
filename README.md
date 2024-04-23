## This news application is an attempt to clone the news page that shows when you open a new tab on microsoft edge.

### Tech stack used
 - Nextjs 14
 - React Query for data fetching, caching and automatic data fetching
 - Shadcn UI for UI components
 - Tailwind CSS 

## Getting Started

First, build the docker image:

```bash
docker build -t newsapp-docker .
```

Next, run the container:

```bash
docker run -dp 3000:3000 newsapp-docker
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

There are a lot of grounds to cover to complete the full clone. However, I have just tried to demonstrate how I would approach the solution. For example, I've implemented the data layer by adhering to the SOLID principles. Other features can be implemented in the same way. Rather than building features, I have tried to demonstrate how I would architect an app, what tech stack I would choose, how I setup the data layer, and how I would compose my UIs.

Hope you like it 🤞



