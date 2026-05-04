import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../services/api'
import './RegisterPage.css'

export const RegisterPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'student',
    first_name: '',
    last_name: '',
    class_name: '',
    age: '',
    phone: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

    // 🔥 If switching to teacher → clear student-only fields
    if (name === 'role' && value === 'teacher') {
      setFormData(prev => ({
        ...prev,
        role: value,
        class_name: '',
        age: '',
        phone: ''
      }))
      return
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let payload = { ...formData }

      // 🔥 Remove student-only fields if teacher
      if (formData.role !== 'student') {
        delete payload.class_name
        delete payload.age
        delete payload.phone
      }

      // Convert age properly
      if (payload.age) {
        payload.age = parseInt(payload.age)
      }

      await registerUser(payload)

      // Redirect to login
      navigate('/')
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>School Management System</h1>
        <h2>Register</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* ✅ Student-only fields */}
          {formData.role === 'student' && (
            <>
              <div className="form-group">
                <label>Class</label>
                <input
                  name="class_name"
                  value={formData.class_name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <button className="register-button" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="login-link">
          <p>
            Already registered? <Link to="/">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}