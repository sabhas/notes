import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import AppContextProvider from "./context/appContext"
import { NewNote } from "./components/newNote"

function App() {
  return (
    <AppContextProvider>
      <Container className="my-4">
        <HashRouter>
          <Routes>
            <Route path="/" element={<h1>Note List</h1>} />
            <Route path="/new" element={<NewNote />} />
            <Route path="/:id" element={<h1>Note Layout</h1>}>
              <Route index element={<h2>Note</h2>} />
              <Route path="edit" element={<h2>Edit Note</h2>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </Container>
    </AppContextProvider>
  )
}

export default App
