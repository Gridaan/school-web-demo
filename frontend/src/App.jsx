import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { StudentsPage } from './pages/StudentsPage'
import { TasksPage } from './pages/TasksPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { useAuth } from './hooks/useAuth'
import './App.css'

function App() {
  const { isAuthenticated, loading, user } = useAuth()

  if (loading) {
    return <div className="container"><h1>Loading...</h1></div>
  }

  return (
    <Router>
      <Routes>
        {/* Root */}
        <Route 
          path="/" 
          element={
            isAuthenticated
              ? user?.role === 'student'
                ? <Navigate to={`/students/${user.student_id}/tasks`} />
                : <Navigate to="/students" />
              : <LoginPage />
          } 
        />

        {/* Register */}
        <Route 
          path="/register" 
          element={
            isAuthenticated
              ? user?.role === 'student'
                ? <Navigate to={`/students/${user.student_id}/tasks`} />
                : <Navigate to="/students" />
              : <RegisterPage />
          } 
        />

        {/* Students page (TEACHER ONLY) */}
        <Route 
          path="/students" 
          element={
            isAuthenticated
              ? user?.role === 'teacher'
                ? <StudentsPage />
                : <Navigate to={`/students/${user.student_id}/tasks`} />
              : <Navigate to="/" />
          } 
        />

        {/* Tasks page */}
        <Route 
          path="/students/:studentId/tasks" 
          element={
            isAuthenticated
              ? user?.role === 'student'
                ? <TasksPage />
                : <TasksPage />  // teachers can also view tasks
              : <Navigate to="/" />
          } 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
