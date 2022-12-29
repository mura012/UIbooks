import { useState } from "react";
import { Center } from "src/Layouts/Center";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { Button, Input } from "@mantine/core";
import { useRef } from "react";
import { BackButton } from "src/components/BackButton";
import { SpeechBubble } from "src/Layouts/SpeechBubble";
import { useToggle } from "src/Fooks/useToggle";

const emailValidate = new RegExp(
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
);

const Login = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState<string>("");
  const { toggle, handleToggle } = useToggle();

  const handleLogin = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!ref.current?.value) {
      setErrorText("※メールアドレスを入力してください");
      return;
    }
    if (emailValidate.test(ref.current?.value)) {
      setErrorText("");
    } else {
      setErrorText("※メールアドレスが正しくありません");
    }
  };

  return (
    <Center title="ログインページ">
      <form className="relative w-80 bg-gray-50 p-5 pb-20 shadow-md">
        <label>
          <SpeechBubble
            title="プレースホルダー"
            text="実際の内容を後から挿入するために、とりあえず仮に確保した場所のこと。また、そのことを示す標識などのこと。"
            position="bottom"
          >
            <p>メールアドレス</p>
            <Input
              type="email"
              autoComplete="off"
              ref={ref}
              placeholder="sample@gmail.com"
            />
          </SpeechBubble>
          <p className="text-red-500">{errorText}</p>
        </label>
        <label>
          <p className="mt-4">パスワード</p>
          <div className="flex justify-between">
            <Input
              type={toggle ? "password" : "text"}
              autoComplete="off"
              radius="xs"
              className="grow"
            />
            <Button
              onClick={handleToggle}
              className="flex items-center border-0"
              variant="outline"
              color="dark"
              radius="xs"
            >
              {toggle ? <IconEye /> : <IconEyeOff />}
            </Button>
          </div>
        </label>

        <Button
          style={{ marginTop: "20px" }}
          onClick={handleLogin}
          className="absolute right-6"
        >
          ログイン
        </Button>
      </form>
      <BackButton href="/" />
    </Center>
  );
};

export default Login;
