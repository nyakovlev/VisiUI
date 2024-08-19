"use client";

import React from "react";
import Endpoint from "@/data-components/Endpoint";
import TextField from "@/ui-components/TextField";
import Label from "@/ui-components/Label";
import ProgressBar from "@/ui-components/ProgressBar";
import { Status } from "@/data-components/Status";
import RunButton from "@/ui-components/RunButton/RunButton";

const sampleValue = new Endpoint<string>({ value: "Edit me!" });
const status = new Endpoint<Status>({ value: Status.Pending });
const progress = new Endpoint<number>({ value: 0 });

export default function Home() {

  function mockOperation() {
    if (status.value == Status.Running) return;
    status.set(Status.Running);
    progress.set(0);
    let handle = setInterval(() => {
      progress.set(Math.min(1, (progress.value || 0) + 0.02));
      if (progress.value == 1) {
        clearInterval(handle);
        status.set(Status.Complete);
      }
    }, 100);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <Label value={sampleValue} />
      <TextField value={sampleValue} />
      <RunButton onStart={mockOperation} />
      <ProgressBar status={status} progress={progress} />
    </main>
  );
}
