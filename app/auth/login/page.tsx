"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, ArrowRight, X, TrendingUp } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("jamesthomas@mail.com")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative">
        {/* Left Side - Branding & Navigation */}
        <div className="text-white space-y-8 lg:pr-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SmartFinance</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 border border-white/30">
                <X className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Financial Hub</h2>
            <nav className="space-y-4">
              <div className="border-l-2 border-white/30 pl-4">
                <h3 className="font-semibold text-lg mb-2">— Quick Access</h3>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <Link href="/dashboard" className="hover:text-white transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/analytics" className="hover:text-white transition-colors">
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports" className="hover:text-white transition-colors">
                      Reports
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Decorative Image Area */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-white/60" />
                  <p className="text-white/80 text-sm">Smart Financial Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900">EXISTING MEMBER</h1>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Welcome Back!
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Enter Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Button className="w-full h-12 bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 font-semibold text-lg rounded-full shadow-sm">
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                {/* Divider */}
                <div className="text-center">
                  <span className="text-gray-500 font-medium">OR</span>
                </div>

                {/* Social Login */}
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 rounded-full border-2 border-amber-200 hover:bg-amber-50"
                  >
                    <span className="text-lg font-bold text-amber-600">G</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 rounded-full border-2 border-amber-200 hover:bg-amber-50"
                  >
                    <span className="text-lg font-bold text-blue-600">f</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 rounded-full border-2 border-amber-200 hover:bg-amber-50"
                  >
                    <span className="text-lg font-bold text-gray-800">🍎</span>
                  </Button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    {"Don't have account? "}
                    <Link href="/auth/signup" className="font-semibold text-amber-600 hover:text-amber-700">
                      Register Now
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
