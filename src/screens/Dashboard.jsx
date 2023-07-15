import { useState } from "react";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  const [data, setData] = useState([
    {
      title: "Clean office space",
      description:
        "I want to clean my office table, mop the floor, and vaccuum, the chair.",
      priority: "Low",
      status: "To-do",
      storyPoints: 3,
    },
  ]);

  return (
    <div>
      <h1>Kanban Board</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2>Buzz Aldrin's Tasks</h2>
      <Button variant="solid" colorScheme="facebook">
        Create
      </Button>
    </div>
  );
}

export default Dashboard;
