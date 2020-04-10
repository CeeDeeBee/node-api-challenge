const express = require("express");

const db = require("../data/helpers/projectModel");
const actionsDB = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.get("/:id/actions", (req, res) => {});

router.post("/", (req, res) => {});

router.post("/:id/actions", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
