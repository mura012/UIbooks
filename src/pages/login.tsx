import Link from "next/link";
import React, { useState } from "react";
import { Center } from "src/Layouts/Center/center";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { Button, Input } from "@mantine/core";
import Head from "next/head";

const Login = () => {
  const [password, setPassword] = useState<boolean>(true);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault();
    setPassword(!password);
  };

  return (
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <Center>
        <h1>実際にはログインできません</h1>
        <form>
          <div className="w-80 bg-gray-50 p-5 shadow-md">
            <p>メールアドレス</p>
            <Input type="text" autoComplete="off" />
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
            <Button style={{ marginTop: "20px" }}>ログイン</Button>
          </div>
          <Link href="/">戻る</Link>
        </form>
      </Center>
    </>
  );
};

export default Login;
