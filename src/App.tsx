import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface Activity {
  id: string
  name: string
  action: string
  initials: string
  status?: string
}

function App() {
  const activities: Activity[] = [
    { id: '1', name: 'John Doe', action: 'Completed a purchase', initials: 'JD', status: 'New' },
    { id: '2', name: 'Sarah Miller', action: 'Left a review', initials: 'SM' },
    { id: '3', name: 'Tom Wilson', action: 'Subscribed to newsletter', initials: 'TW' }
  ]

  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
          <div className="flex items-center gap-4">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-64"
            />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>


      <main className="container mx-auto px-4 py-8">
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>Active users this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,543</p>
              <Badge className="mt-2" variant="default">+12% from last month</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Total earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$45,231</p>
              <Badge className="mt-2" variant="secondary">+8% from last month</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>Completed this week</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">156</p>
              <Badge className="mt-2" variant="outline">+23% from last week</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{activity.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                  </div>
                  {activity.status ? (
                    <Badge>{activity.status}</Badge>
                  ) : (
                    <Button variant="outline" size="sm">View</Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default App