import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function LoginForm({ setEmail, setPassword, handleSubmit }) {
  return (
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Sign in with your business email.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
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
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-center items-center w-full">
            <Button className="w-full" onClick={handleSubmit}>
            Sign in
            </Button>
            <p className="text-[0.8rem] mt-[1rem]">
              Set up your store 
              <Link className="ml-1 underline" to="/signup">
                Register here
              </Link>
            </p>
            
        </div>
      </CardFooter>
    </Card>
  );
}


