"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, TrendingUp } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              SmartFinance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Dashboard
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/analytics" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Analytics
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Profile
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard" className="text-gray-700 hover:text-amber-600 font-medium">
                Dashboard
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 font-medium">
                Portfolio
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-amber-600 font-medium">
                Analytics
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-amber-600 font-medium">
                Profile
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/auth/login">
                  <Button variant="ghost" className="w-full text-amber-700 hover:bg-amber-50">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
