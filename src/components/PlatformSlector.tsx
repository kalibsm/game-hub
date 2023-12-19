import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platformService";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform_id?: number;
}

const PlatformSlector = ({ onSelectPlatform, selectedPlatform_id }: Props) => {
  const { data: platforms, error } = usePlatforms();

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === selectedPlatform_id
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSlector;
