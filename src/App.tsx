import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Note List</h1>} />
        <Route path="/new" element={<h1>New Note</h1>} />
        <Route path="/:id" element={<h1>Note Layout</h1>}>
          <Route index element={<h2>Note</h2>} />
          <Route path="edit" element={<h2>Edit Note</h2>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
