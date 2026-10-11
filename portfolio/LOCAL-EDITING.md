# Local visual editing

The Co-Connect case study has a local-only visual editor. It is available from the development server and is omitted from the normal published page.

## Start the website

From the `portfolio` folder in the VS Code terminal, run:

```sh
npm install
npm run dev
```

Open the `Local` URL printed by Vite (normally `http://127.0.0.1:5173`) and visit `/projects/co-connect`.

## Edit the page

1. Click **Edit page** in the lower right.
2. Click a text item and type directly on the page. Supported headings, paragraphs, captions, metadata and link labels receive a subtle hover outline while editing.
3. Click a project image and choose an existing Co-Connect project asset in the editor panel. This changes the image reference; it never overwrites the original asset.
4. Adjust section spacing with the slider.
5. Click **Save** to write the changes to `src/data/co-connect-editor.json`. A refresh keeps saved changes. Click **Cancel** to discard unsaved changes and restore the last saved content.

The server is explicitly bound to `127.0.0.1`. Its save endpoint accepts only validated Co-Connect editor data and only writes the editor JSON file. The endpoint is registered by Vite's development-server plugin and is not available in production builds.

The editor wrapper can be reused on other case-study routes later; each route should have a separate explicit data file and matching server-side validation before it is enabled there.
