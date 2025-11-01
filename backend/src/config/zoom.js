import axios from "axios";

export const getZoomAccessToken = async () => {
  const tokenResponse = await axios.post("https://zoom.us/oauth/token", null, {
    params: {
      grant_type: "account_credentials",
      account_id: process.env.ZOOM_ACCOUNT_ID,
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  });

  return tokenResponse.data.access_token;
};

