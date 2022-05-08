import React from "react";
import { ReactComponent as ArrowIcon } from "static/icons/arrow.svg";
import { StyledCrumbs } from "./style";

const Breadcrumb = ({ data }) => {
  return (
    <StyledCrumbs className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 px-3 lg:px-0">
        {data?.map((item) => (
          <li
            className="inline-flex items-center text-gray-500 text-sm cursor-pointer"
            key={item}
          >
            {item} <ArrowIcon className="fill-gray-500 w-5 crumb" />
          </li>
        ))}
      </ol>
    </StyledCrumbs>
  );
};

export default Breadcrumb;
