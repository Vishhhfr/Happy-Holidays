
import { useState } from "react";
import { User, Edit, Calendar, MapPin, Phone, Mail, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userInfo] = useState({
    name: "Guest User",
    email: "guest@example.com",
    phone: "",
    address: "",
    memberSince: "7/4/2025",
    totalOrders: 0,
    isActive: true
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <Link to="/home" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-600 to-lavender-600 rounded-2xl p-8 mb-6 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white/20">
              <AvatarImage src="" alt={userInfo.name} />
              <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                {userInfo.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">{userInfo.name}</h1>
              <p className="text-purple-100 mb-4">{userInfo.email}</p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  userInfo.isActive 
                    ? 'bg-green-500/20 text-green-100' 
                    : 'bg-gray-500/20 text-gray-100'
                }`}>
                  {userInfo.isActive ? 'Active Member' : 'Inactive'}
                </span>
              </div>
            </div>
            
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Personal Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{userInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone Number</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {userInfo.phone || "Add phone number"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Delivery Address</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {userInfo.address || "Add delivery address"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Recent Bookings
              </h2>
              
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No bookings yet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Start exploring our amazing travel packages!</p>
                <Link to="/home">
                  <Button className="bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700">
                    Browse Trips
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{userInfo.memberSince}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-lavender-50 dark:bg-lavender-900/20 rounded-lg">
                  <ShoppingBag className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{userInfo.totalOrders} Orders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Add Phone Number
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
