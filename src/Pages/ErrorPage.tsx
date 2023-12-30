import { GridItem, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "./Layout";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Layout />
      <GridItem padding={5}>
        <Heading>Oops!..</Heading>
        <Text fontSize="lg">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred"}
        </Text>
      </GridItem>
    </>
  );
};

export default ErrorPage;
