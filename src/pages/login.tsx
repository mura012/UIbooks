import Link from "next/link";
import React, { useState } from "react";
import { Center } from "src/Layouts/Center/center";
import { IconEye, IconEyeOff } from "@tabler/icons";

const Login = () => {
  const [password, setPassword] = useState<boolean>(true);

  return (
    <Center>
      <h1>実際にはログインできません</h1>
      <form>
        <p>メールアドレス</p>
        <input type="text" placeholder="sample@gmail.com" autoComplete="off" />
        <p>パスワード</p>
        <div className="flex">
          <input type={password ? "password" : "text"} autoComplete="off" />
          <button
            onClick={(e) => {
              e.preventDefault();
              setPassword(!password);
            }}
            className="flex h-6 items-center"
          >
            {password ? <IconEye /> : <IconEyeOff />}
          </button>
        </div>
        <button>ログイン</button>
        <Link href="/">戻る</Link>
      </form>
    </Center>
  );
};

export default Login;
