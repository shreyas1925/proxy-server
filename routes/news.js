const express = require("express");
const router = express.Router();

// Environment variables
const needle = require("needle");

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

// also can use node fetch

router.get("/", async (req, res) => {
  // res.json({ success: true });
  try {
    // const params = new URLSearchParams({
    //   [API_KEY_NAME] : API_KEY_VALUE,
    // })

    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
    });

    const apiRes = await needle("get", `${API_BASE_URL}?${params}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
