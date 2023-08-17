"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslations } from "next-intl";

const FinalComponent = ({ data, locale }) => {
  const router = useRouter();
  const t = useTranslations();
  const [lang, setLang] = useState(locale);

  useEffect(() => {
    router.push(`/${lang}/final`);
  }, [lang]);

  return (
    <div className="h-96 w-96 bg-white p-2">
      <h1 className="m-4 font-bold">Final Page</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          value={lang}
          label="Language"
          onChange={(e) => setLang(e.target.value)}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="bm">BM</MenuItem>
        </Select>
      </FormControl>
      <div className="m-4">
        <div className="flex">
          <p className="font-bold basis-1/2">{t("name")} : </p> {data.name}
        </div>
        <div className="flex">
          <p className="font-bold basis-1/2">{t("email")}: </p> {data.email}
        </div>
        <div className="flex">
          <p className="font-bold basis-1/2">{t("age")} : </p> {data.age}
        </div>
        <div className="flex">
          <p className="font-bold basis-1/2">{t("phone")} : </p> {data.phone}
        </div>
      </div>
      <Button onClick={() => router.push("/")} variant="outlined">
        RE-START
      </Button>
    </div>
  );
};

export default FinalComponent;
