import { useEffect, useRef, useState, type ReactNode } from "react"
import initialEdits from "@/data/co-connect-editor.json"
import "./CoConnectLocalEditor.css"

const assets = [
  "/co-connect/landing-page.svg",
  "/co-connect/matching-quiz.svg",
  "/co-connect/match-results.svg",
  "/co-connect/referral-page.svg",
  "/co-connect/flow.svg",
  "/competition/co-connect-workshop.jpg",
  "/competition/co-connect-team.jpg",
  "/competition/co-connect-event.jpg",
]

type EditData = { text: Record<string, string>; images: Record<string, string>; sectionGap: number }
const source = initialEdits as EditData

export function CoConnectLocalEditor({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [baseline, setBaseline] = useState<EditData>(source)
  const [draft, setDraft] = useState<EditData>(source)
  const [selectedText, setSelectedText] = useState<HTMLElement | null>(null)
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  const apply = (data: EditData) => {
    const container = root.current
    if (!container) return
    const textNodes = container.querySelectorAll<HTMLElement>("[data-local-edit-key]")
    textNodes.forEach((node) => {
      const value = data.text[node.dataset.localEditKey ?? ""]
      if (value !== undefined) node.innerText = value
    })
    const images = container.querySelectorAll<HTMLImageElement>("[data-local-image-key]")
    images.forEach((image) => {
      const value = data.images[image.dataset.localImageKey ?? ""]
      if (value) image.src = value
    })
    container.style.setProperty("--cc-editor-section-gap", `${data.sectionGap}px`)
  }

  useEffect(() => {
    const container = root.current
    if (!container) return
    let textIndex = 0
    container.querySelectorAll<HTMLElement>(".co-connect-page h1, .co-connect-page h2, .co-connect-page h3, .co-connect-page h4, .co-connect-page p, .co-connect-page figcaption, .co-connect-page dd, .co-connect-page li, .co-connect-page a, .co-connect-page span, .co-connect-page button").forEach((node) => {
      if (node.querySelector("svg") || !node.innerText.trim()) return
      const key = `${node.tagName.toLowerCase()}-${textIndex++}`
      node.dataset.localEditKey = key
    })
    container.querySelectorAll<HTMLImageElement>(".co-connect-page img").forEach((node, index) => {
      node.dataset.localImageKey = `image-${index}`
    })
    apply(source)
  }, [])

  useEffect(() => {
    const container = root.current
    if (!container || !active) return
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const image = target.closest<HTMLImageElement>("img[data-local-image-key]")
      if (image) {
        event.preventDefault()
        setSelectedImage(image)
        setSelectedText(null)
        return
      }
      const text = target.closest<HTMLElement>("[data-local-edit-key]")
      if (text) {
        event.preventDefault()
        container.querySelectorAll<HTMLElement>("[contenteditable='true']").forEach((node) => { node.contentEditable = "false" })
        setSelectedText(text)
        setSelectedImage(null)
        text.contentEditable = "true"
        text.focus()
      }
    }
    const onInput = (event: Event) => {
      const node = event.target as HTMLElement
      const key = node.dataset.localEditKey
      if (!key) return
      setDraft((current) => ({ ...current, text: { ...current.text, [key]: node.innerText } }))
    }
    const onBlur = (event: FocusEvent) => {
      const node = event.target as HTMLElement
      if (node.dataset.localEditKey) node.contentEditable = "false"
    }
    container.addEventListener("click", onClick, true)
    container.addEventListener("input", onInput)
    container.addEventListener("blur", onBlur, true)
    return () => {
      container.removeEventListener("click", onClick, true)
      container.removeEventListener("input", onInput)
      container.removeEventListener("blur", onBlur, true)
    }
  }, [active])

  useEffect(() => {
    root.current?.style.setProperty("--cc-editor-section-gap", `${draft.sectionGap}px`)
  }, [draft.sectionGap])

  if (!import.meta.env.DEV) return <>{children}</>

  const dirty = JSON.stringify(draft) !== JSON.stringify(baseline)
  const replaceImage = (asset: string) => {
    if (!selectedImage) return
    const key = selectedImage.dataset.localImageKey
    if (!key) return
    selectedImage.src = asset
    setDraft((current) => ({ ...current, images: { ...current.images, [key]: asset } }))
  }

  const cancel = () => {
    root.current?.querySelectorAll<HTMLElement>("[contenteditable='true']").forEach((node) => { node.contentEditable = "false" })
    setDraft(baseline)
    apply(baseline)
    setSelectedText(null)
    setSelectedImage(null)
    setMessage("Changes discarded")
  }

  const save = async () => {
    setSaving(true)
    setMessage("")
    try {
      const response = await fetch("/__local-editor/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      })
      if (!response.ok) throw new Error(await response.text())
      setBaseline(draft)
      setMessage("Saved to src/data/co-connect-editor.json")
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not save edits")
    } finally {
      setSaving(false)
    }
  }

  const toggleEditor = () => {
    if (active) root.current?.querySelectorAll<HTMLElement>("[contenteditable='true']").forEach((node) => { node.contentEditable = "false" })
    setActive((value) => !value)
    setMessage("")
  }

  return <>
    <div ref={root} className={active ? "local-editor-root is-editing" : "local-editor-root"}>{children}</div>
    <button className="local-editor-launch" type="button" onClick={toggleEditor}>
      {active ? "Exit Edit mode" : "Edit page"}
    </button>
    {active && <aside className="local-editor-panel" aria-label="Local page editor">
      <header><strong>Co-Connect editor</strong><span>{dirty ? "Unsaved changes" : "All changes saved"}</span></header>
      <p className="local-editor-hint">Click text on the page to edit it. Click an image to replace it.</p>
      {selectedText && <label className="local-editor-selection">Selected: {selectedText.tagName.toLowerCase()}<small>Type directly on the page.</small></label>}
      {selectedImage && <label className="local-editor-selection">Replace selected image
        <select value={selectedImage.getAttribute("src") ?? ""} onChange={(event) => replaceImage(event.target.value)}>
          {assets.map((asset) => <option key={asset} value={asset}>{asset.replace(/^\//, "")}</option>)}
        </select>
      </label>}
      <label className="local-editor-selection">Section spacing: {draft.sectionGap}px
        <input type="range" min="24" max="120" step="4" value={draft.sectionGap} onChange={(event) => setDraft((value) => ({ ...value, sectionGap: Number(event.target.value) }))} />
      </label>
      {message && <p className="local-editor-message" role="status">{message}</p>}
      <footer><button type="button" onClick={cancel} disabled={!dirty || saving}>Cancel</button><button type="button" onClick={save} disabled={!dirty || saving}>{saving ? "Saving…" : "Save"}</button></footer>
    </aside>}
  </>
}
