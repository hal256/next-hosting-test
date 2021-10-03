import { GetStaticProps } from "next";
import React from "react";

interface Props {
  timestamp: number;
}

const isr = (props: Props) => {
  const now = new Date(props.timestamp);
  return (
    <>
      <div>isr !</div>
      <div>{now.toLocaleString()}</div>
    </>
  );
};

export default isr;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      timestamp: new Date().getTime(),
    },
    revalidate: 5,
  };
};
