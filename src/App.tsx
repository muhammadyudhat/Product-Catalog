import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import ProductManagement from './components/ProductManagement'
import UserManagement from './components/UserManagement'
import FeatureManagement from './components/FeatureManagement'
import Footer from './components/Footer'
import AddCategory from './components/AddCategory'
import FavoriteProducts from './components/FavoriteProducts'

// ... (previous imports and initial products)

type User = {
  id: number
  username: string
  email: string
  role: 'admin' | 'manager' | 'user'
}

type Feature = {
  id: number
  name: string
  description: string
  permissions: {
    admin: boolean
    manager: boolean
    user: boolean
  }
}

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [categories, setCategories] = useState(['Pendant', 'Wedding Ring', 'Bangle', 'Mens Ring', 'Bracelet', 'Earring', 'Necklace', 'Ring'])
  const [favorites, setFavorites] = useState<number[]>([])
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'manager', email: 'manager@example.com', role: 'manager' },
    { id: 3, username: 'user', email: 'user@example.com', role: 'user' },
  ])
  const [features, setFeatures] = useState<Feature[]>([
    { id: 1, name: 'Product Management', description: 'Manage products', permissions: { admin: true, manager: true, user: false } },
    { id: 2, name: 'User Management', description: 'Manage users', permissions: { admin: true, manager: false, user: false } },
    { id: 3, name: 'Feature Management', description: 'Manage features', permissions: { admin: true, manager: false, user: false } },
  ])

  // ... (previous state management functions)

  const handleAddUser = (newUser: Omit<User, 'id'>) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }])
  }

  const handleEditUser = (editedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editedUser.id ? editedUser : user))
    )
  }

  const handleDeleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }

  const handleUpdateFeature = (updatedFeature: Feature) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === updatedFeature.id ? updatedFeature : feature
      )
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="pt-16">
          <Routes>
            {/* ... (previous routes) */}
            <Route path="/user-management" element={
              <UserManagement
                users={users}
                onAddUser={handleAddUser}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
              />
            } />
            <Route path="/feature-management" element={
              <FeatureManagement
                features={features}
                onUpdateFeature={handleUpdateFeature}
              />
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App