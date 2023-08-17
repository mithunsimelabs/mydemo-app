"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

const DetailPage = () => {
  const router = useRouter();
  const t = useTranslations();

  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async () => {
    localStorage.setItem("age", age);
    localStorage.setItem("phone", phone);
    // const res = await nextHandler(age, phone);
    router.push(`/en/language`);
  };
  return (
    <div className="h-96 w-96 bg-white p-2">
      <h1 className="font-bold">Step 1 : </h1>
      <h1 className="mb-4 font-bold">Tell Us More About You </h1>

      <div className="flex flex-col">
        <FormControl className="m-2" variant="standard">
          <InputLabel htmlFor="component-helper">{t("age")}</InputLabel>
          <Input
            id="age-iput"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormControl>
        <FormControl className="m-2" variant="standard">
          <InputLabel htmlFor="component-helper">{t("phone")}</InputLabel>
          <Input
            id="phone-iput"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>

        {error && <div className="text-red-600 m-2">{error}</div>}
        <Button onClick={submitHandler} variant="outlined">
          Next
        </Button>
      </div>
    </div>
  );
};

export default DetailPage;
