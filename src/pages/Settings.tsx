
import { useState } from "react";
import { Settings as SettingsIcon, Bell, Shield, HelpCircle, Info, ChevronRight, Moon, Sun, Monitor, ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "react-router-dom";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    newTrips: true,
    discounts: true,
    promotions: false,
    email: true,
  });

  const [showFAQ, setShowFAQ] = useState(false);

  const faqs = [
    {
      question: "How do I book a trip?",
      answer: "Simply browse our packages, add your preferred trips to cart, and proceed to checkout. You can pay online or choose other payment options."
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking up to 48 hours before the departure date. Cancellation charges may apply as per our policy."
    },
    {
      question: "What documents do I need for travel?",
      answer: "For domestic travel, a valid government ID is required. For international trips, you'll need a passport and visa (if applicable)."
    },
    {
      question: "Are meals included in the packages?",
      answer: "Most of our packages include breakfast and dinner. Specific meal inclusions are mentioned in each package description."
    },
    {
      question: "What if there's bad weather during my trip?",
      answer: "We monitor weather conditions closely. In case of severe weather, we may reschedule activities or provide alternative arrangements for your safety."
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user_authenticated');
    window.location.href = '/auth';
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <Link to="/home" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Theme Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Monitor className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Appearance
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Theme</h3>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    onClick={() => setTheme("light")}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <Sun className="h-5 w-5" />
                    <span className="text-sm">Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    onClick={() => setTheme("dark")}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <Moon className="h-5 w-5" />
                    <span className="text-sm">Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    onClick={() => setTheme("system")}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <Monitor className="h-5 w-5" />
                    <span className="text-sm">System</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Notifications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your notification preferences</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">New trip launches</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when we launch new travel packages</p>
                </div>
                <Switch
                  checked={notifications.newTrips}
                  onCheckedChange={(checked) => handleNotificationChange('newTrips', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Trip discounts and offers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Special deals and discounts on travel packages</p>
                </div>
                <Switch
                  checked={notifications.discounts}
                  onCheckedChange={(checked) => handleNotificationChange('discounts', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Promotions and offers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">General promotional content and seasonal offers</p>
                </div>
                <Switch
                  checked={notifications.promotions}
                  onCheckedChange={(checked) => handleNotificationChange('promotions', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email notifications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates via email</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                />
              </div>
            </div>
          </div>

          {/* About & Support */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              About & Support
            </h2>
            
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">About Happy Holidays</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
              
              <div 
                onClick={() => setShowFAQ(!showFAQ)}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Frequently Asked Questions</span>
                </div>
                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${showFAQ ? 'rotate-90' : ''}`} />
              </div>

              {showFAQ && (
                <div className="ml-8 space-y-4 border-l-2 border-purple-200 dark:border-purple-700 pl-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Contact Support</span>
                </div>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">support@happyholidays.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Account Security
            </h2>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-center py-3 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <Shield className="h-4 w-4 mr-2" />
                Change Password
              </Button>
              
              <Button 
                onClick={handleLogout}
                variant="destructive" 
                className="w-full justify-center py-3"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
