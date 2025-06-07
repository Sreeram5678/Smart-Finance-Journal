"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, X, TrendingUp } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
        {/* Left Side - Branding & Features */}
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

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Join SmartFinance</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-white/30 pl-4">
                <h3 className="font-semibold text-lg mb-2">— What You'll Get</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Advanced Portfolio Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Real-time Market Data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Personalized Financial Insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Expert Financial Advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-white/80 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$2B+</div>
                  <div className="text-white/80 text-sm">Assets Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900">NEW MEMBER</h1>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Create Account
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="pl-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Create Password"
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

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-500 focus:ring-0"
                        placeholder="Confirm Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Create Account Button */}
                  <Button className="w-full h-12 bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 font-semibold text-lg rounded-full shadow-sm">
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                {/* Divider */}
                <div className="text-center">
                  <span className="text-gray-500 font-medium">OR</span>
                </div>

                {/* Social Signup */}
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

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="font-semibold text-amber-600 hover:text-amber-700">
                      Sign In
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
