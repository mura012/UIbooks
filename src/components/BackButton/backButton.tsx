import { IconArrowBack } from "@tabler/icons";
import Link from "next/link";

type Prop = {
  href: string;
};

export const BackButton = ({ href }: Prop) => {
  return (
    <Link className="flex" href={href}>
      <IconArrowBack />
      <p>戻る</p>
    </Link>
  );
};
