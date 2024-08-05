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
import { Link, useLocation } from "react-router-dom";

export function SignupForm({ setBusinessName, setEmail, setSlug, setPassword, handleSubmit, initialEmail }) {
  return (
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up to Carrot</CardTitle>
        <CardDescription>
          Enter your business details to create your store
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input 
              id="business-name" 
              placeholder="Google" 
              required 
              onChange={(e) => setBusinessName(e.target.value)} 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug">Slug Handle</Label>
            <Input 
              className="flex justify-start items-start"
              id="slug" 
              placeholder="google" 
              required 
              childPosition="start"
              onChange={(e) => setSlug(e.target.value)} 
            >
              /
            </Input>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={initialEmail} // Set initial value to initialEmail
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <Button type="submit" className="w-full">
            Create!
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have a store setup in Carrot?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}