export interface Tag {
  id: string
  label: string
}

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export interface Note extends NoteData {
  id: string
}

export interface RawNote extends RawNoteData {
  id: string
}
