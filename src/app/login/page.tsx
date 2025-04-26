import type { Login } from "@/types/user";
import Dialogue from "@/components/ui/dialogue";
import LoginForm from "@/forms/inputs/auth/login";

const Login = () => {
  return (
    <Dialogue size="middle">
      <LoginForm />
    </Dialogue>
  );
};

export default Login;
