import { connection } from "../../connection";

export const getCampaignByIdProcedure = connection.query({
  sql: `
    CREATE PROCEDURE get_campaign_by_id ( IN campaignId VARCHAR (255) )
    BEGIN
        SELECT *
        FROM Campaigns
        WHERE id = campaignId;
    END

    `,
});
