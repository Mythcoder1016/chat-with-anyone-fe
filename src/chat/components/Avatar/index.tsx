import React from "react";
import { Avatar as ArcoAvatar } from "@arco-design/mobile-react";

const Avatar: React.FC<AvatarType> = (props) => {
    const { src } = props
    return <ArcoAvatar src={src} />
}

export default Avatar