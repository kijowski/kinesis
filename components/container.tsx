import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto p-8 flex flex-col space-y-5">
      {children}
    </div>
  );
};

export default Container;
