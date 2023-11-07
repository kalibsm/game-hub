import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (value: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const refSearch = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refSearch.current) onSubmit(refSearch.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} pointerEvents="none" />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={refSearch}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
