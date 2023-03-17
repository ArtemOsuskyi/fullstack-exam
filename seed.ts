import { connection } from "./src/components/database/connection";
import * as crypto from "crypto";

const companies = [
  {
    id: crypto.randomUUID(),
    name: "Comp1",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp2",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp3",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp4",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp5",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp6",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp7",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp8",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp9",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp10",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp11",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp12",
    description: "description",
    goal_amount: 12500,
  },
  {
    id: crypto.randomUUID(),
    name: "Comp13",
    description: "description",
    goal_amount: 12500,
  },
];

const seed = () => {
  companies.forEach((entity) => {
    const { id, name, description, goal_amount } = entity;
    console.log("Start seeding...");
    console.log(`Inserting entity with id ${id}`);
    connection.query({
      sql: `INSERT INTO Campaigns VALUES (?, ?, ?, ?, DEFAULT)`,
      values: [id, name, description, goal_amount],
    });
    console.log(`Finished inserting entity\n`);
  });
  console.log("Seeding done!");
};

seed()
