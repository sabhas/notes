import { useContext } from "react"
import { NoteForm } from "./noteForm"
import { useNote } from "./noteLayout"
import { AppContext } from "../context/appContext"

export function EditNote() {
  const note = useNote()
  const appContext = useContext(AppContext)
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => appContext.onUpdateNote(note.id, data)}
        onAddTag={appContext.addTag}
        availableTags={appContext.tags}
      />
    </>
  )
}
