"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";

const LanguagePage = () => {
  const router = useRouter();

  const [lang, setLang] = useState("en");

  const submitHandler = async () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("age");
    const phone = localStorage.getItem("phone");

    await axios.post("http://localhost:3000/api/data", {
      name,
      email,
      age,
      phone,
    });
    router.push(`/${lang}/final`);
  };
  return (
    <div className="h-96 w-96 bg-white p-2">
      <h1 className="font-bold">Step 2 : </h1>
      <h1 className="mb-4 font-bold">Select Language </h1>
      <FormControl className="my-2" fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          value={lang}
          label="Language"
          onChange={(e) => setLang(e.target.value)}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="bm">BM</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={submitHandler} variant="outlined">
        Submit
      </Button>
    </div>
  );
};

export default LanguagePage;
