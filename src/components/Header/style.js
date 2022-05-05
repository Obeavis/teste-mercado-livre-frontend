import styled from "@emotion/styled/macro";

export const SearchButton = styled.button`
  &:active {
    transform: translateY(2px);
  }
  &:after {
    content: "";
    display: block;
    height: 82%;
    border-left: 1px solid #e6e6e6;
    position: absolute;
    left: 0;
  }
`;
