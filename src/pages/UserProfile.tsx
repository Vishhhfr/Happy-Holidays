import { useState, useEffect } from "react";
import { User, Edit, Calendar, MapPin, Phone, Mail, ShoppingBag, ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Guest User",
    email: "guest@example.com", 
    phone: "",
    address: "",
    memberSince: "7/4/2025",
    totalOrders: 0,
    isActive: true
  });

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  useEffect(() => {
    // Get user type and email from localStorage
    const userType = localStorage.getItem('user_type') || 'guest';
    const storedUserEmail = localStorage.getItem('user_email');
    
    let userEmail = 'guest@example.com';
    let userName = 'Guest User';
    
    if (userType === 'registered' && storedUserEmail) {
      // For registered users, use the stored email
      userEmail = storedUserEmail;
      userName = storedUserEmail.split('@')[0];
    } else if (userType === 'guest') {
      // For guest users, keep default values
      userEmail = 'guest@example.com';
      userName = 'Guest User';
    }
    
    // Try to get additional user data from localStorage if available
    const storedUserData = localStorage.getItem('user_profile_data');
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserInfo(prev => ({
          ...prev,
          ...userData,
          name: userData.name || userName,
          email: userData.email || userEmail
        }));
      } catch (error) {
        console.log('Error parsing stored user data:', error);
        setUserInfo(prev => ({
          ...prev,
          name: userName,
          email: userEmail
        }));
      }
    } else {
      setUserInfo(prev => ({
        ...prev,
        name: userName,
        email: userEmail
      }));
    }

    // Load cart items
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart.slice(0, 3)); // Show only first 3 items

    // Mock recently viewed trips (in a real app, this would come from user's browsing history)
    const recentTrips = [
      {
        id: 1,
        title: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "₹15,000"
      },
      {
        id: 2,
        title: "Rajasthan Royal Tour",
        image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "₹35,000"
      },
      {
        id: 3,
        title: "Manali Adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "₹25,000"
      }
    ];
    setRecentlyViewed(recentTrips);
  }, []);

  const saveUserData = (updatedInfo: any) => {
    localStorage.setItem('user_profile_data', JSON.stringify(updatedInfo));
    setUserInfo(updatedInfo);
  };

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

            {/* Recent Cart Items */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Recent Cart Items
              </h2>
              
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</p>
                        <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{item.price}</p>
                      </div>
                    </div>
                  ))}
                  <Link to="/cart">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700">
                      View Full Cart
                   </Button>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">No items in cart yet</p>
                </div>
              )}
            </div>

            {/* Recently Viewed */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Recently Viewed Trips
              </h2>
              
              <div className="space-y-4">
                {recentlyViewed.map((trip) => (
                  <div key={trip.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <img src={trip.image} alt={trip.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{trip.title}</h4>
                      <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{trip.price}</p>
                    </div>
                  </div>
                ))}
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Items in Cart</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{cartItems.length} Items</p>
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

                <Link to="/packages">
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Browse More Trips
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
