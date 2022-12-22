import Image from "next/image"
import logoImg from "../../assets/logo.svg"

import { HeaderUi } from "./styles"

const Header = () => {
  return (
    <HeaderUi>
      <Image src={logoImg} alt="" />
    </HeaderUi>
  );
}

export default Header