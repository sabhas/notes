import { useContext } from "react"
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "../types"
import { AppContext } from "../context/appContext"

export function NoteLayout() {
  const appContext = useContext(AppContext)
  const { id } = useParams()
  const note = appContext.notes.find((n) => n.id === id)

  if (note == null) return <Navigate to="/" replace />

  return <Outlet context={note} />
}

export function useNote() {
  return useOutletContext<Note>()
}
