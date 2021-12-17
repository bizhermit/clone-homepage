import { FC, useMemo } from "react";

type Props = {
  href: string
  self?: boolean;
};

const Anchor: FC<Props> = ({ children, href, self }) => {
  const props = useMemo(() => {
    if (self === true) return {};
    return {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }, []);
  return <a href={href} {...props}>{children}</a>;
};

export default Anchor;