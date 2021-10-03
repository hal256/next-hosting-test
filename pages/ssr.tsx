import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  timestamp: number;
}

const ssr = (props: Props) => {
  const now = new Date(props.timestamp);
  return (
    <>
      <div>ssr !</div>
      <div>{now.toLocaleString()}</div>
    </>
  );
};

export default ssr;
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      timestamp: new Date().getTime(),
    },
  };
};
