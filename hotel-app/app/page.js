"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MongoClient } from "mongodb";
import { ModalComponent } from "./components";

const navItems = ["Home", "About", "Contact"];

export default function Home() {
  async function createRoom(data) {
    try {
      const client = await MongoClient.connect("localhost:27017");
      const db = IngSoft.db();
      const collection = db.collection("rooms");
      const result = await collection.insertOne(data);
      console.log("🚀 ~ file: index.js:8 ~ handler ~ result:", result);
      client.close();
    } catch (error) {
      console.log("Error db connection ", error.message);
    }
  }

  const createTestData = async () => {
    try {
      const save = await createRoom({
        type: "home",
        reserved: false,
        description: "test room description",
      });
      console.log("🚀 ~ file: page.js:31 ~ createTestData ~ save:", save);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <Typography variant="h1" className="text-[#fff3db]">
        UniHotel
      </Typography>
    </main>
  );
}
