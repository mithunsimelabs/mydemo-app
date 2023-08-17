"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

const LandingPage = () => {
  const router = useRouter();
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    router.push(`/en/details`);
  };
  return (
    <div className="h-96 w-96 bg-white p-2">
      <h1 className="font-bold">Step 1 : </h1>
      <h1 className="mb-4 font-bold">Tell Us More About You </h1>
      <div className="flex flex-col">
        <FormControl className="m-2" variant="standard">
          <InputLabel htmlFor="component-helper">{t("name")}</InputLabel>
          <Input
            id="name-iput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
          <FormHelperText id="component-helper-text">
            {10 - name.length} characters remaining
          </FormHelperText>
        </FormControl>
        <FormControl className="m-2" variant="standard">
          <InputLabel htmlFor="component-helper">{t("email")}</InputLabel>
          <Input
            id="email-iput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        {error && <div className="text-red-600">{error}</div>}
        <Button onClick={submitHandler} variant="outlined">
          Next
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
