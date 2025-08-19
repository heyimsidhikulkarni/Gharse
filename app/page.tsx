"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, Star, ChefHat, Truck, Shield, Users, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

export default function HomePage() {
  const { getTotalItems, addItem } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-orange-600">Gharse</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              Menu
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              How it Works
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-orange-600 hover:bg-orange-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Taste of <span className="text-orange-600">Home</span>,
              <br />
              Delivered Fresh
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience authentic home-cooked meals made with love by local home chefs. Fresh, healthy, and delivered
              right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex w-full max-w-md">
                <Input
                  placeholder="Enter your location"
                  className="rounded-r-none border-r-0 focus:ring-orange-500 focus:border-orange-500"
                />
                <Button className="rounded-l-none bg-orange-600 hover:bg-orange-700">Find Food</Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/indian-food-spread.png"
                alt="Delicious home-cooked food"
                width={600}
                height={400}
                className="mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="h-6 w-6 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Gharse?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect you with passionate home chefs who prepare meals with the same care they'd make for their own
              family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Home Chefs</h3>
                <p className="text-gray-600">
                  Authentic recipes passed down through generations, prepared by skilled home cooks in their own
                  kitchens.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fresh Delivery</h3>
                <p className="text-gray-600">
                  Meals prepared fresh daily and delivered hot to your door within 30-45 minutes of cooking.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-gray-600">
                  All our home chefs are verified and follow strict hygiene standards to ensure safe, quality meals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Home-Cooked Dishes</h2>
            <p className="text-gray-600">Discover the most loved dishes from our home chefs</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Dal Chawal", chef: "Priya's Kitchen", rating: 4.8, time: "25 min", price: "₹120" },
              { name: "Rajma Rice", chef: "Mama's Recipe", rating: 4.9, time: "30 min", price: "₹150" },
              { name: "Chole Bhature", chef: "Delhi Delights", rating: 4.7, time: "35 min", price: "₹180" },
              { name: "Biryani", chef: "Hyderabadi Home", rating: 4.9, time: "40 min", price: "₹250" },
            ].map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${dish.name} indian food`}
                    alt={dish.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-gray-900">
                    <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                    {dish.rating}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{dish.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {dish.chef}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {dish.time}
                    </div>
                    <span className="font-semibold text-orange-600">{dish.price}</span>
                  </div>
                  <Button
                    className="w-full mt-3 bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      addItem({
                        id: `${dish.name}-${index}`,
                        name: dish.name,
                        chef: dish.chef,
                        price: dish.price
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Gharse Works</h2>
            <p className="text-gray-600">Simple steps to get homemade food delivered</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse & Order</h3>
              <p className="text-gray-600">
                Browse through our selection of home-cooked meals and place your order with just a few clicks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Fresh Cooking</h3>
              <p className="text-gray-600">
                Our verified home chefs prepare your meal fresh using traditional recipes and quality ingredients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Delivery</h3>
              <p className="text-gray-600">
                Your hot, fresh meal is delivered to your doorstep within 30-45 minutes of preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of food lovers who trust Gharse for authentic home-cooked meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Ordering Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Become a Home Chef
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-6 w-6 text-orange-600" />
                <span className="text-xl font-bold">Gharse</span>
              </div>
              <p className="text-gray-400">Bringing the taste of home to your doorstep, one meal at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Become a Chef
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">Follow us for daily food inspiration and updates</p>
              <div className="flex space-x-4">
                <Users className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Heart className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gharse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
