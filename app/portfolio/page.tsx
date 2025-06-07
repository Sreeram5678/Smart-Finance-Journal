import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Plus, MoreHorizontal } from "lucide-react"
import Header from "@/components/smart-finance/header"
import Footer from "@/components/smart-finance/footer"

export default function PortfolioPage() {
  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, price: 175.43, change: 2.34, changePercent: 1.35 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 25, price: 2847.63, change: -15.42, changePercent: -0.54 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 75, price: 378.85, change: 4.12, changePercent: 1.1 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 30, price: 248.5, change: -8.75, changePercent: -3.4 },
    { symbol: "AMZN", name: "Amazon.com Inc.", shares: 40, price: 3342.88, change: 22.15, changePercent: 0.67 },
  ]

  const totalValue = holdings.reduce((sum, holding) => sum + holding.shares * holding.price, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h1>
            <p className="text-gray-600">Track and manage your investment portfolio.</p>
          </div>
          <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Investment
          </Button>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-2 border-amber-100 hover:border-amber-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">${totalValue.toLocaleString()}</div>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2% overall return
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100 hover:border-amber-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Today's Change</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+$1,247</div>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.89% today
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-100 hover:border-amber-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Total Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{holdings.length}</div>
              <p className="text-sm text-gray-600 mt-1">Active positions</p>
            </CardContent>
          </Card>
        </div>

        {/* Holdings Table */}
        <Card className="bg-white border-2 border-amber-100">
          <CardHeader>
            <CardTitle>Your Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-amber-100">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Symbol</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Company</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">Shares</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">Price</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">Change</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">Value</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((holding, index) => (
                    <tr key={index} className="border-b border-amber-50 hover:bg-amber-25">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">{holding.symbol}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-700">{holding.name}</div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="text-gray-900">{holding.shares}</div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="text-gray-900">${holding.price.toFixed(2)}</div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div
                          className={`flex items-center justify-end ${holding.change >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {holding.change >= 0 ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          <span>
                            ${Math.abs(holding.change).toFixed(2)} ({holding.changePercent.toFixed(2)}%)
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="font-semibold text-gray-900">
                          ${(holding.shares * holding.price).toLocaleString()}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
