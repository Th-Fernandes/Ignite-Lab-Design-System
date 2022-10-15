import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  function handleSignIn(e:FormEvent) {
    e.preventDefault();
    setIsUserSignedIn(true);
  }
  return (
    <div className="w-screen h-screen bg-gray-900 items-center justify-center flex">
      <div className="w-full max-w-[400px]">
        <header className="flex flex-col items-center">
          <Logo />
          <Heading size="lg" className="mt-2">ignite lab</Heading>
          <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
        </header>

        <form 
          onSubmit={e => handleSignIn(e)}
          className="flex flex-col gap-4 mt-10"
        >
          {isUserSignedIn && <Text>User successfully signed in!</Text>}
          <div>
            <label htmlFor="email" >
              <Text className="text-sm font-semibold mb-4 block">Endereço de E-mail</Text>
            </label>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id="email" placeholder="exemplo@gmail.com" />
            </TextInput.Root>
          </div>

          <div>
            <label htmlFor="password" >
              <Text className="text-sm font-semibold mb-4 block">Sua senha</Text>
            </label>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id="password" type="password" placeholder="********" />
            </TextInput.Root>
          </div>

          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Text size="sm" className="text-gray-200">Lembrar-se de mim por 30 dias</Text>
          </label>

          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>

        <footer className="flex flex-col gap-4 items-center mt-8">
          <a className="text-gray-400 underline hover:text-gray-200 transition-colors text-xs" href="#">
            Esqueceu sua senha?
          </a>

          <a className="text-gray-400 underline hover:text-gray-200 transition-colors text-xs" href="#">
            Não possui conta? Crie uma agora!
          </a>

        </footer>
      </div>
    </div>
  )
}