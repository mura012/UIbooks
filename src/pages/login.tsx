import Link from "next/link";
import React, { useState } from "react";
import { Center } from "src/Layouts/Center";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { Button, Input } from "@mantine/core";
import Head from "next/head";
import { useRef } from "react";
import { clickEvent } from "src/types/event";

const emailValidate = new RegExp(
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
);

const Login = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<boolean>(true);
  const [errorText, setErrorText] = useState<string>("");

  const handleClick = (e: clickEvent): void => {
    e.preventDefault();
    setPassword(!password);
  };
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
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <Center>
        <form className="w-80 bg-gray-50 p-5 shadow-md">
          <label>
            <p>メールアドレス</p>
            <Input
              type="email"
              autoComplete="off"
              ref={ref}
              placeholder="sample@gmail.com"
            />
            <p className="text-red-500">{errorText}</p>
          </label>
          <label>
            <p className="mt-4">パスワード</p>
            <div className="flex justify-between">
              <Input
                type={password ? "password" : "text"}
                autoComplete="off"
                radius="xs"
                className="grow"
              />
              <Button
                onClick={handleClick}
                className="flex items-center border-0"
                variant="outline"
                color="dark"
                radius="xs"
              >
                {password ? <IconEye /> : <IconEyeOff />}
              </Button>
            </div>
          </label>
          <Button style={{ marginTop: "20px" }} onClick={handleLogin}>
            ログイン
          </Button>
        </form>
        <Link href="/">戻る</Link>
      </Center>
    </>
  );
};

export default Login;
