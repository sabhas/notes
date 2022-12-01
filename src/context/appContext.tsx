import { createContext, useMemo, ReactNode } from "react"
import { v4 as uuidV4 } from "uuid"
import { useLocalStorage } from "../hooks"
import { NoteData, RawNote, Tag, NoteWithTags } from "../types"

interface AppContextProps {
  notes: RawNote[]
  tags: Tag[]
  notesWithTags: NoteWithTags[]
  onCreateNote: (noteData: NoteData) => void
  onUpdateNote: (id: string, noteData: NoteData) => void
  onDeleteNote: (id: string) => void
  addTag: (tag: Tag) => void
  updateTag: (id: string, label: string) => void
  deleteTag: (id: string) => void
}

export const AppContext = createContext<AppContextProps>(undefined!)

const AppContextProvider = (props: { children: ReactNode }) => {
  const { children } = props

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      }
    })
  }, [notes, tags])

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ]
    })
  }

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id)
    })
  }

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag])
  }

  const updateTag = (id: string, label: string) => {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  const deleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id)
    })
  }

  return (
    <AppContext.Provider
      value={{
        notes,
        tags,
        notesWithTags,
        onCreateNote,
        onUpdateNote,
        onDeleteNote,
        addTag,
        updateTag,
        deleteTag,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
