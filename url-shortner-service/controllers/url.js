import URL from "../models/url.models.js";
import { nanoid } from "nanoid";

export const handleGenerateNewShortURL = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    const shortId = nanoid(8);
    await URL.create({
      shortId,
      redirectUrl: url,
      visitHistory: [],
    });

    return res.status(201).json({ id: shortId });
  } catch (error) {
    console.error("Error generating short URL:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
