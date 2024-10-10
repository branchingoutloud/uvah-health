"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

export default function BookAppointment() {
  const [mobileNo, setMobileNo] = useState("+91");
  const [altMobileNo, setAltMobileNo] = useState("+91");

  return (
    <Card className="mx-auto w-full max-w-3xl border-none shadow-none">
      <CardHeader>
        <CardTitle>Patient's Basic Details</CardTitle>
        <CardDescription className="flex items-start rounded-md bg-blue-50 p-4">
          <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
          <span>
            Before You Begin with process: Please ensure all submitted documents
            are clear, well-organized, and ready for upload when needed. This
            will assist our doctors in quickly and easily understanding the
            patient's medical history and background, ensuring the best possible
            care.
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="Enter Patient's name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Enter Patient's last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="birthday">Birthday *</Label>
              <Input id="birthday" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <Input id="gender" placeholder="Enter Gender" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Select required>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select required>
              <SelectTrigger id="city">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="city1">City 1</SelectItem>
                <SelectItem value="city2">City 2</SelectItem>
                {/* Add more cities as needed */}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="mobileNo">Mobile no. *</Label>
              <div className="flex">
                <Select value={mobileNo} onValueChange={setMobileNo}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>
                </Select>
                <Input
                  className="ml-2 flex-1"
                  placeholder="Mobile number"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="altMobileNo">Mobile no. *</Label>
              <div className="flex">
                <Select value={altMobileNo} onValueChange={setAltMobileNo}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>
                </Select>
                <Input
                  className="ml-2 flex-1"
                  placeholder="Mobile number"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services *</Label>
            <Select required>
              <SelectTrigger id="services">
                <SelectValue placeholder="Select from here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service1">Service 1</SelectItem>
                <SelectItem value="service2">Service 2</SelectItem>
                {/* Add more services as needed */}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
