import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, TrendingUp, Calendar, Download } from "lucide-react"
import Header from "@/components/smart-finance/header"
import Footer from "@/components/smart-finance/footer"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Deep insights into your financial performance.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white border-2 border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-amber-600" />
                <span>Performance Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-amber-400" />
                  <p className="text-gray-500">Performance chart visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-amber-600" />
                <span>Asset Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 mx-auto mb-4 text-amber-400" />
                  <p className="text-gray-500">Asset allocation chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">15.8%</div>
              <div className="text-sm text-gray-600 mb-2">Annual Return</div>
              <Badge className="bg-green-100 text-green-800">Above Average</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">0.85</div>
              <div className="text-sm text-gray-600 mb-2">Sharpe Ratio</div>
              <Badge className="bg-amber-100 text-amber-800">Good</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">12.4%</div>
              <div className="text-sm text-gray-600 mb-2">Volatility</div>
              <Badge className="bg-blue-100 text-blue-800">Moderate</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">0.92</div>
              <div className="text-sm text-gray-600 mb-2">Beta</div>
              <Badge className="bg-gray-100 text-gray-800">Market Aligned</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
