## This news application is an attempt to clone the news page that shows when you open a new tab on microsoft edge.

### Tech stack used
 - Nextjs 14
 - React Query for data fetching, caching and automatic data fetching
 - Shadcn UI for UI components
 - Tailwind CSS

## Prerequisites
In order to successfully run the app, we need api keys from The Guardian, The NewYork Times and OpenNews API. I'd suggest to use the .env.local file I have attached to the email to reduce efforts. The .env.local file must be present in the application directory root. The .env.local file should look like below,

```
NEXT_PUBLIC_OPEN_NEWS_API_KEY=<API_KEY>
NEXT_PUBLIC_NYT_API_KEY=<API_KEY>
NEXT_PUBLIC_GUARDIAN_API_KEY=<API_KEY>
```



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



