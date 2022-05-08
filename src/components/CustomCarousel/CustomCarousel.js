import styled from "@emotion/styled/macro";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = styled(Carousel)`
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default CustomCarousel;
