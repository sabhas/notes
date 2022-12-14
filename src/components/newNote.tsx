import { useContext } from "react"
import { NoteForm } from "./noteForm"
import { AppContext } from "../context/appContext"

export function NewNote() {
  const appContext = useContext(AppContext)
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={appContext.onCreateNote}
        onAddTag={appContext.addTag}
        availableTags={appContext.tags}
      />
    </>
  )
}
