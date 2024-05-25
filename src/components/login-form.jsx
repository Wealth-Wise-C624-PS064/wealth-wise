import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <Button className="w-full bg-primary-blue hover:bg-primary-blue/80">
          Login
        </Button>
      </div>
    </form>
  );
}
