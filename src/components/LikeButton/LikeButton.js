import React, { useState } from "react";
import { StyledLikeButton } from "./style";

const LikeButton = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledLikeButton
      className="cursor-pointer"
      active={active.toString()}
      onClick={() => setActive((active) => !active)}
    />
  );
};

export default LikeButton;
