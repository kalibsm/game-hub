import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const limit = 300;
  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children.substring(0, limit) + "..." : children;
  return (
    <Text>
      {summary}
      <Button
        marginStart={1}
        size="xs"
        fontWeight="bold"
        colorScheme="orange"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
