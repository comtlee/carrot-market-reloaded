"use client";

import Button from "@/components/button";
import Input from "@/components/input";

import { useFormState } from "react-dom";
import { smsLogin } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            name="token"
            type="number"
            placeholder="Verification code"
            required
            minLength={PASSWORD_MIN_LENGTH}
            // errors={state?.error.formErrors}
            min={100000}
            max={999999}
          />
        ) : (
          <Input
            name="phone"
            type="text"
            placeholder="Pnone number"
            required
            errors={state?.error?.formErrors}
          />
        )}
        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
