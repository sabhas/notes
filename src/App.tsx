import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import AppContextProvider from "./context/appContext"
import { NewNote } from "./components/newNote"
import { Note } from "./components/note"
import { EditNote } from "./components/editNote"
import { NoteLayout } from "./components/noteLayout"
import { NoteList } from "./components/noteList"

function App() {
  return (
    <AppContextProvider>
      <Container className="my-4">
        <HashRouter>
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/new" element={<NewNote />} />
            <Route path="/:id" element={<NoteLayout />}>
              <Route index element={<Note />} />
              <Route path="edit" element={<EditNote />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </Container>
    </AppContextProvider>
  )
}

export default App
