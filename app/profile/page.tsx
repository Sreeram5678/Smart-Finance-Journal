"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Shield, Bell, CreditCard } from "lucide-react"
import Header from "@/components/smart-finance/header"
import Footer from "@/components/smart-finance/footer"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "James Thomas",
    email: "jamesthomas@mail.com",
    phone: "+1 (555) 123-4567",
    address: "123 Finance St, San Francisco, CA 94105",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Profile & Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-2 border-amber-100">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white text-2xl">
                    JT
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{profile.name}</h3>
                <p className="text-gray-600 mb-4">{profile.email}</p>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  Change Photo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white border-2 border-amber-100">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
                >
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700"
                >
                  Billing
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card className="bg-white border-2 border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-amber-600" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={profile.address}
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                          className="border-amber-200 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                      <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                        Cancel
                      </Button>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security">
                <Card className="bg-white border-2 border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-amber-600" />
                      <span>Security Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Change Password</h4>
                          <p className="text-sm text-gray-600">Update your account password</p>
                        </div>
                        <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                          Change
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Login History</h4>
                          <p className="text-sm text-gray-600">View recent account activity</p>
                        </div>
                        <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications">
                <Card className="bg-white border-2 border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-amber-600" />
                      <span>Notification Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { title: "Portfolio Updates", description: "Get notified about portfolio performance changes" },
                        { title: "Market Alerts", description: "Receive alerts about market movements" },
                        { title: "Transaction Notifications", description: "Get notified about account transactions" },
                        { title: "Weekly Reports", description: "Receive weekly financial summaries" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                            Configure
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing">
                <Card className="bg-white border-2 border-amber-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-amber-600" />
                      <span>Billing & Subscription</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-amber-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Current Plan: Premium</h4>
                        <p className="text-sm text-gray-600 mb-4">$29.99/month - Next billing date: Jan 15, 2024</p>
                        <div className="flex space-x-2">
                          <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                            Change Plan
                          </Button>
                          <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                            View Invoice
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Payment Method</h4>
                        <p className="text-sm text-gray-600 mb-4">**** **** **** 4242 (Expires 12/25)</p>
                        <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100">
                          Update Payment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
