import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}