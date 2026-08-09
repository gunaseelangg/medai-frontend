import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { NotificationProvider } from '@/context/NotificationContext'

import { PublicLayout } from '@/layouts/PublicLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

import { ProtectedRoute } from '@/routes/ProtectedRoute'
import { AdminRoute } from '@/routes/AdminRoute'

import { Landing } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { ForgotPassword } from '@/pages/ForgotPassword'
import { Dashboard } from '@/pages/Dashboard'
import { SymptomChecker } from '@/pages/SymptomChecker'
import { MedicineSearch } from '@/pages/MedicineSearch'
import { AIChat } from '@/pages/AIChat'
import { UploadPrescription } from '@/pages/UploadPrescription'
import { ReportAnalyzer } from '@/pages/ReportAnalyzer'
import { DiseasePrediction } from '@/pages/DiseasePrediction'
import { BMICalculator } from '@/pages/BMICalculator'
import { Profile } from '@/pages/Profile'
import { Settings } from '@/pages/Settings'
import { AdminDashboard } from '@/pages/admin/AdminDashboard'
import { NotFound } from '@/pages/NotFound'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <BrowserRouter>
              <Routes>
                {/* Public marketing pages */}
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<Landing />} />
                </Route>

                {/* Auth pages */}
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>

                {/* Protected app pages */}
                <Route element={<ProtectedRoute />}>
                  <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/symptom-checker" element={<SymptomChecker />} />
                    <Route path="/medicines" element={<MedicineSearch />} />
                    <Route path="/chat" element={<AIChat />} />
                    <Route path="/prescriptions" element={<UploadPrescription />} />
                    <Route path="/reports" element={<ReportAnalyzer />} />
                    <Route path="/prediction" element={<DiseasePrediction />} />
                    <Route path="/bmi" element={<BMICalculator />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />

                    {/* Admin-only */}
                    <Route element={<AdminRoute />}>
                      <Route path="/admin" element={<AdminDashboard />} />
                    </Route>
                  </Route>
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
