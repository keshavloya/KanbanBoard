import { useState } from "react";
import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import DashboardTile from "../components/DashboardTile";

function Dashboard() {
  const [data, setData] = useState([
    {
      title: "Clean office space",
      description:
        "I want to clean my office table, mop the floor, and vaccuum, the chair.",
      priority: "Low",
      status: "Not Started",
      storyPoints: 3,
    },
  ]);

  return (
    <div>
      <Heading size={"xl"} mt={50} ml={20}>
        Kanban Board
      </Heading>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Heading size={"md"} ml={20}>
        Buzz Aldrin's Tasks
      </Heading>
      <Button ml={20} mt={67} mb={5} variant="solid" colorScheme="facebook">
        Create
      </Button>
      <HStack justifyContent="left" m={10} mt={0}>
        <VStack w={220} m={10} mt={0}>
          <Text style={{ textAlign: "left" }}>Not Started {} </Text>
          <div style={{ background: "#EEEEEE", minHeight: "90vh" }}>
            {data
              .filter((task) => task.status === "Not Started")
              .map((filteredtask, index) => {
                return <DashboardTile key={index} task={filteredtask} />;
              })}
          </div>
        </VStack>
        <VStack w={220} m={10} mt={0}>
          <Text justifyContent="left" textAlign={"left"}>
            Not Started {}{" "}
          </Text>
          <div style={{ background: "#EEEEEE", minHeight: "90vh" }}>
            {data
              .filter((task) => task.status === "Not Started")
              .map((filteredtask, index) => {
                return <DashboardTile key={index} task={filteredtask} />;
              })}
          </div>
        </VStack>
        <VStack w={220} m={10} mt={0}>
          <Text justifyContent="left" textAlign={"left"}>
            Not Started {}{" "}
          </Text>
          <div style={{ background: "#EEEEEE", minHeight: "90vh" }}>
            {data
              .filter((task) => task.status === "Not Started")
              .map((filteredtask, index) => {
                return <DashboardTile key={index} task={filteredtask} />;
              })}
          </div>
        </VStack>
      </HStack>
    </div>
  );
}

export default Dashboard;
