
import { useState } from "react";
import { User, Phone, MapPin, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileEditFormProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    memberSince: string;
    totalOrders: number;
    isActive: boolean;
  };
  onSave: (updatedInfo: any) => void;
  onCancel: () => void;
}

const ProfileEditForm = ({ userInfo, onSave, onCancel }: ProfileEditFormProps) => {
  const [formData, setFormData] = useState({
    name: userInfo.name,
    phone: userInfo.phone,
    address: userInfo.address,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...userInfo,
      ...formData,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        Edit Profile Information
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={userInfo.email}
            disabled
            className="mt-1 bg-gray-100 dark:bg-gray-700"
            placeholder="Email cannot be changed"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1"
            placeholder="Add your phone number"
          />
        </div>

        <div>
          <Label htmlFor="address" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Delivery Address
          </Label>
          <Input
            id="address"
            type="text"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="mt-1"
            placeholder="Add your delivery address"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-lavender-600 hover:from-purple-700 hover:to-lavender-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
