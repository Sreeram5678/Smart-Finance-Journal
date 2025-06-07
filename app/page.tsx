import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Zap, Users, BarChart3, Wallet } from "lucide-react"
import Link from "next/link"
import Header from "@/components/smart-finance/header"
import Footer from "@/components/smart-finance/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Smart Finance
                  <span className="block text-amber-200">Made Simple</span>
                </h1>
                <p className="text-xl text-amber-100 max-w-lg">
                  Take control of your financial future with our intelligent platform. Track, analyze, and optimize your
                  wealth with cutting-edge tools.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/20 border-white/30">
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-300" />
                      <div className="text-2xl font-bold">+24.5%</div>
                      <div className="text-sm text-amber-200">Portfolio Growth</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/20 border-white/30">
                    <CardContent className="p-4 text-center">
                      <Wallet className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                      <div className="text-2xl font-bold">$127K</div>
                      <div className="text-sm text-amber-200">Total Assets</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Smart Finance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines advanced analytics with intuitive design to give you complete control over your
              financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Deep insights into your spending patterns and investment performance",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your data is protected with enterprise-grade encryption",
              },
              {
                icon: Zap,
                title: "Real-Time Updates",
                description: "Get instant notifications and live market data",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Access to certified financial advisors and 24/7 support",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
