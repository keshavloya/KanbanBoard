import React from "react";
import { Card, CardFooter, Box, Text, Badge } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const DashboardTile = ({ task }) => {
  return (
    <div>
      <Card m={2} p={3} borderRadius="0" lineHeight="1.2">
        <Text fontSize="16px" fontWeight="600">
          {task.title}
        </Text>
        <Box>
          <Text pt="2" fontSize="sm">
            {task.description}
          </Text>
        </Box>
        <CardFooter>
          {task.priority === "Low" && (
            <ChevronDownIcon boxSize={6} color="green.500" />
          )}
          {task.priority === "Medium" && (
            <ChevronDownIcon boxSize={6} color="blue.500" />
          )}
          {task.priority === "High" && (
            <ChevronUpIcon boxSize={6} color="red.500" />
          )}
          {task.priority}{" "}
          <Badge borderRadius={10} px={4} pt={1} ml={3}>
            {task.storyPoints}
          </Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardTile;
