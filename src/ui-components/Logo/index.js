import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/LogoByway 4.png"} width={"100"} height={"80"} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
