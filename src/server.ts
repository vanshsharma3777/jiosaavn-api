import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'
import { serve } from 'bun'
import App from './app'
import process from 'node:process'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

const PORT = process.env.PORT || 3000

serve({
  fetch: app.fetch,
  port: Number(PORT)
})

console.info(`Server running on port ${PORT}`)

export default app
