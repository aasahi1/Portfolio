import path from "path"
import fs from "node:fs/promises"
import { isIP } from "node:net"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
const editableAssets = [
  "/co-connect/landing-page.svg",
  "/co-connect/matching-quiz.svg",
  "/co-connect/match-results.svg",
  "/co-connect/referral-page.svg",
  "/co-connect/flow.svg",
  "/competition/co-connect-workshop.jpg",
  "/competition/co-connect-team.jpg",
  "/competition/co-connect-event.jpg",
]

function localEditorPlugin() {
  return {
    name: "local-portfolio-editor",
    configureServer(server: import("vite").ViteDevServer) {
      const dataFile = path.resolve(__dirname, "src/data/co-connect-editor.json")
      server.middlewares.use("/__local-editor/save", async (req, res) => {
        const address = req.socket.remoteAddress?.replace(/^::ffff:/, "") ?? ""
        if (!isIP(address) || !["127.0.0.1", "::1"].includes(address)) {
          res.statusCode = 403; res.end("Local access only"); return
        }
        if (req.method !== "POST") { res.statusCode = 405; res.end("POST only"); return }
        if (!req.headers["content-type"]?.includes("application/json")) {
          res.statusCode = 415; res.end("JSON required"); return
        }
        try {
          let body = ""
          for await (const chunk of req) {
            body += chunk.toString()
            if (body.length > 100_000) throw new Error("Payload too large")
          }
          const value: unknown = JSON.parse(body)
          if (!isEditorData(value, editableAssets)) throw new Error("Invalid editor data")
          const temporary = `${dataFile}.tmp`
          await fs.writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8")
          await fs.rename(temporary, dataFile)
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ ok: true }))
        } catch (error) {
          res.statusCode = 400
          res.end(error instanceof Error ? error.message : "Invalid request")
        }
      })
    },
  }
}

function isEditorData(value: unknown, assets: string[]): value is { text: Record<string, string>; images: Record<string, string>; sectionGap: number } {
  if (!value || typeof value !== "object") return false
  const data = value as Record<string, unknown>
  const validText = (entries: unknown): boolean => Boolean(entries && typeof entries === "object" && !Array.isArray(entries) &&
    Object.entries(entries).length <= 500 && Object.entries(entries).every(([key, text]) => /^[a-z]+-\d+$/.test(key) && typeof text === "string" && text.length <= 2000)
  )
  const validImages = (entries: unknown): boolean => Boolean(entries && typeof entries === "object" && !Array.isArray(entries) &&
    Object.entries(entries).length <= 100 && Object.entries(entries).every(([key, asset]) => /^image-\d+$/.test(key) && typeof asset === "string" && assets.includes(asset))
  )
  return Object.keys(data).length === 3 && validText(data.text) && validImages(data.images) &&
    typeof data.sectionGap === "number" && Number.isInteger(data.sectionGap) && data.sectionGap >= 24 && data.sectionGap <= 120
}

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), localEditorPlugin()],
  server: { host: "127.0.0.1" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This splits every library in node_modules into its own 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
