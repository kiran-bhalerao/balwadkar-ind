import { Box, BoxProps } from "@chakra-ui/layout";
import classNames from "classnames";
import React from "react";

type ContainerProps = BoxProps;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, className = "", ...rest } = props;

  return (
    <Box
      className={classNames("__container", { [className]: !!className })}
      {...rest}
    >
      {children}
    </Box>
  );
};
