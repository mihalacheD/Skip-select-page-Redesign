import { HStack,Text} from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";


const NavBar = () => {
  return (
    <>
      <HStack justifyContent='space-between' p={4}>
        <Text>NavBar</Text>
        <ColorModeSwitch/>
      </HStack>
    </>
  )
}
export default NavBar