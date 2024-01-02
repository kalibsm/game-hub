import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";
import { Link, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const refSearch = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        <Link to="/" />;
        if (refSearch.current) setSearchText(refSearch.current.value);
        navigate("/");
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
