import styled from "@emotion/styled/macro";
import { ReactComponent as HeartIcon } from "static/icons/heart.svg";

export const StyledLikeButton = styled(HeartIcon)`
  fill: transparent;
  stroke: #3483fa;
  stroke-width: 10;
  transition: all 0.5s;
  width: 1.5rem;
  ${({ active }) =>
    active
      ? `animation: like 0.5s 1;
      fill: #3483fa;
      stroke: none;`
      : ""};

  @-webkit-keyframes like {
    0% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
