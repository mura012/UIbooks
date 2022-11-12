import Link from "next/link";
import React, { useState } from "react";
import { Center } from "src/Layouts/Center";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { Button, Input } from "@mantine/core";
import Head from "next/head";
import { useRef } from "react";

const emailValidate = new RegExp(
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
);

const Login = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault();
    setPassword(!password);
  };
  const handleLogin = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault();
    if (!ref.current?.value) return;
    if (emailValidate.test(ref.current?.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <Center>
        <form className="w-80 bg-gray-50 p-5 shadow-md">
          <p>メールアドレス</p>
          <Input type="email" autoComplete="off" ref={ref} />
          <p className="text-red-500">
            {emailError ? "※メールアドレスが間違っています" : ""}
          </p>
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
