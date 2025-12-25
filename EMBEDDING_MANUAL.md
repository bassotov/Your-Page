# Widget Embedding Manual

This guide explains how to embed widgets from various services into your bento grid.

## Table of Contents

- [YouTube](#youtube)
- [Spotify](#spotify)
- [GitHub](#github)
- [Twitter/X](#twitterx)
- [Other Services (Generic Embed)](#other-services)

---

## YouTube

The `YouTubeEmbed` component allows you to embed YouTube videos.

### Getting the Video ID

1. Go to the YouTube video
2. The video ID is in the URL:
   - `https://www.youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`

**Example:** For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`

### Usage

```tsx
import { YouTubeEmbed } from "@/components/embeds";

// Basic usage
<YouTubeEmbed videoId="dQw4w9WgXcQ" title="My Video" />

// With options
<YouTubeEmbed
  videoId="dQw4w9WgXcQ"
  title="My Video"
  aspectRatio="16/9"  // "16/9" | "4/3" | "1/1"
  autoplay={false}     // Autoplay (muted)
  start={30}           // Start at 30 seconds
  controls={true}      // Show player controls
  loop={false}         // Loop the video
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | required | YouTube video ID |
| `title` | `string` | "YouTube video" | Accessibility title |
| `aspectRatio` | `"16/9" \| "4/3" \| "1/1"` | "16/9" | Video aspect ratio |
| `autoplay` | `boolean` | false | Autoplay (muted required) |
| `start` | `number` | - | Start time in seconds |
| `controls` | `boolean` | true | Show player controls |
| `loop` | `boolean` | false | Loop the video |

---

## Spotify

The `SpotifyEmbed` component supports tracks, albums, playlists, artists, episodes, and shows.

### Getting the Spotify ID

1. Right-click on a track/album/playlist in Spotify
2. Select "Share" → "Copy link to..."
3. The ID is in the URL: `https://open.spotify.com/track/TRACK_ID`

**Example:** For `https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT`, the ID is `4cOdK2wGLETKBW3PvgPWqT`

### Usage

```tsx
import { SpotifyEmbed } from "@/components/embeds";

// Track
<SpotifyEmbed type="track" spotifyId="4cOdK2wGLETKBW3PvgPWqT" />

// Album
<SpotifyEmbed type="album" spotifyId="6PBZN8cbwkqm1ERj2BGXJ1" size="large" />

// Playlist
<SpotifyEmbed type="playlist" spotifyId="37i9dQZF1DXcBWIGoYBM5M" size="large" />

// Artist
<SpotifyEmbed type="artist" spotifyId="4dpARuHxo51G3z768sgnrY" />

// Podcast episode
<SpotifyEmbed type="episode" spotifyId="512ojhOuo1ktJprKbVcKyQ" />

// Podcast show
<SpotifyEmbed type="show" spotifyId="4rOoJ6Egrf8K2IrywzwOMk" size="large" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"track" \| "album" \| "playlist" \| "artist" \| "episode" \| "show"` | required | Content type |
| `spotifyId` | `string` | required | Spotify content ID |
| `size` | `"compact" \| "normal" \| "large"` | "normal" | Player height |
| `theme` | `"dark" \| "light" \| "auto"` | "auto" | Color theme |
| `title` | `string` | "Spotify embed" | Accessibility title |

### Size Guide

- **compact** (80px): Minimal track player (tracks only)
- **normal** (152px): Standard embedded player
- **large** (352px): Full-size player with artwork

---

## GitHub

The `GitHubEmbed` component displays repository cards and user profiles.

### Usage

```tsx
import { GitHubEmbed } from "@/components/embeds";

// Repository card
<GitHubEmbed
  type="repo"
  username="vercel"
  repo="next.js"
/>

// User profile stats
<GitHubEmbed
  type="user"
  username="torvalds"
/>

// Gist link
<GitHubEmbed
  type="gist"
  username="octocat"
  gistId="6cad326836d38bd3a7ae"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"repo" \| "user" \| "gist"` | required | Card type |
| `username` | `string` | required | GitHub username |
| `repo` | `string` | - | Repository name (required for "repo") |
| `gistId` | `string` | - | Gist ID (required for "gist") |
| `theme` | `"light" \| "dark" \| "auto"` | "auto" | Color theme |
| `showOwner` | `boolean` | true | Show owner avatar (repo only) |

---

## Twitter/X

The `TwitterEmbed` component embeds tweets using Twitter's official widget.

### Getting the Tweet ID

1. Open the tweet
2. The ID is in the URL: `https://twitter.com/username/status/TWEET_ID`

**Example:** For `https://twitter.com/elonmusk/status/1234567890`, the tweet ID is `1234567890`

### Usage

```tsx
import { TwitterEmbed } from "@/components/embeds";

// Basic usage
<TwitterEmbed tweetId="1234567890123456789" />

// With options
<TwitterEmbed
  tweetId="1234567890123456789"
  theme="dark"           // "light" | "dark" | "auto"
  hideConversation       // Hide thread
  hideMedia             // Hide images/videos
  align="center"        // "left" | "center" | "right"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tweetId` | `string` | required | Tweet ID |
| `theme` | `"light" \| "dark" \| "auto"` | "auto" | Color theme |
| `hideConversation` | `boolean` | false | Hide thread context |
| `hideMedia` | `boolean` | false | Hide images/videos |
| `align` | `"left" \| "center" \| "right"` | "center" | Tweet alignment |

---

## Other Services

Use the `GenericEmbed` component for services without dedicated components.

### Supported Services

- **CodePen**: `https://codepen.io/username/embed/pen-id`
- **CodeSandbox**: `https://codesandbox.io/embed/sandbox-id`
- **Figma**: `https://www.figma.com/embed?...`
- **Loom**: `https://www.loom.com/embed/video-id`
- **Vimeo**: `https://player.vimeo.com/video/video-id`
- **SoundCloud**: `https://w.soundcloud.com/player/?url=...`
- **Google Maps**: `https://www.google.com/maps/embed?...`

### Usage

```tsx
import { GenericEmbed } from "@/components/embeds";

// CodePen
<GenericEmbed
  src="https://codepen.io/username/embed/pen-id?default-tab=result"
  title="My CodePen"
  aspectRatio="16/9"
/>

// CodeSandbox
<GenericEmbed
  src="https://codesandbox.io/embed/sandbox-id"
  title="My Sandbox"
/>

// Figma
<GenericEmbed
  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/..."
  title="Figma Design"
  aspectRatio="4/3"
/>

// Loom Video
<GenericEmbed
  src="https://www.loom.com/embed/video-id"
  title="Loom Recording"
/>

// Vimeo
<GenericEmbed
  src="https://player.vimeo.com/video/123456789"
  title="Vimeo Video"
/>

// SoundCloud
<GenericEmbed
  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/artist/track"
  title="SoundCloud Track"
  aspectRatio="auto"
  height={166}
/>

// Google Maps
<GenericEmbed
  src="https://www.google.com/maps/embed?pb=..."
  title="Location Map"
  aspectRatio="16/9"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | required | Embed URL |
| `title` | `string` | required | Accessibility title |
| `aspectRatio` | `"16/9" \| "4/3" \| "1/1" \| "9/16" \| "auto"` | "16/9" | Aspect ratio |
| `height` | `number` | - | Fixed height (when aspectRatio is "auto") |
| `showLoading` | `boolean` | true | Show loading state |

---

## Using with BentoCard

All embed components work seamlessly inside `BentoCard`:

```tsx
import { BentoGrid, BentoCard } from "@/components/bento";
import { YouTubeEmbed, SpotifyEmbed } from "@/components/embeds";
import { Video, Music } from "lucide-react";

<BentoGrid columns={4} gap={4}>
  {/* YouTube in a large card */}
  <BentoCard
    title="Watch Video"
    icon={<Video className="h-5 w-5" />}
    colSpan={2}
    rowSpan={2}
  >
    <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Demo" />
  </BentoCard>

  {/* Spotify in a normal card */}
  <BentoCard
    title="Now Playing"
    icon={<Music className="h-5 w-5" />}
    colSpan={2}
  >
    <SpotifyEmbed type="track" spotifyId="..." size="compact" />
  </BentoCard>
</BentoGrid>
```

---

## Tips & Best Practices

1. **Responsive Layouts**: Use `colSpan` and `rowSpan` to create interesting layouts
2. **Loading Performance**: Embeds load lazily - place important content higher
3. **Mobile Optimization**: Cards stack vertically on mobile - wide embeds (colSpan={2}) still work
4. **Dark Mode**: Most embeds auto-detect system theme with `theme="auto"`
5. **Accessibility**: Always provide meaningful `title` props for screen readers
