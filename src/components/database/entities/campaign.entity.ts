import { connection } from "../connection";

export const createCampaignTable = connection.query({
  sql: `
    CREATE TABLE Campaigns (
        id VARCHAR (255) PRIMARY KEY, 
        name VARCHAR (30) NOT NULL,
        description VARCHAR (255) NULL,
        goal_amount INT NOT NULL,
        status ENUM ('active', 'successful', 'fraud') NOT NULL DEFAULT 'active'
    );
    `,
});
