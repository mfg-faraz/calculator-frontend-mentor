import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

const Panel = ({ onNumberClick }) => {
  const [pressedKey, setPressedKey] = useState("");
  return (
    <div className="bg-background-keypad grid grid-cols-4 p-5 gap-5 rounded-lg w-full">
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("7");
        }}
      >
        7
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("8");
        }}
      >
        8
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("9");
        }}
      >
        9
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("del");
        }}
        className="text-xl !bg-secondary-key-background !text-text-white !shadow-secondary-key-shadow hover:!bg-secondary-key-background/90"
      >
        DEL
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("4");
        }}
      >
        4
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("5");
        }}
      >
        5
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("6");
        }}
      >
        6
      </Button>
      <Button
        onClick={() => {
          setPressedKey("+");
          onNumberClick("+");
        }}
        // className={`${pressedKey === "+" && "!bg-secondary-key-shadow/10"}`}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("1");
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("2");
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("3");
        }}
      >
        3
      </Button>
      <Button
        // className={`${pressedKey === "-" && "!bg-secondary-key-shadow/10"}`}
        onClick={() => {
          setPressedKey("-");
          onNumberClick("-");
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick(".");
        }}
      >
        .
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("0");
        }}
      >
        0
      </Button>
      <Button
        // className={`${pressedKey === "/" && "!bg-secondary-key-shadow/10"}`}
        onClick={() => {
          setPressedKey("/");
          onNumberClick("/");
        }}
      >
        /
      </Button>
      <Button
        // className={`${pressedKey === "*" && "!bg-secondary-key-shadow/10"}`}
        onClick={() => {
          setPressedKey("*");
          onNumberClick("*");
        }}
      >
        x
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("reset");
        }}
        className="text-xl !bg-secondary-key-background !text-text-white !shadow-secondary-key-shadow pt-5 pb-4 col-span-2 hover:!bg-secondary-key-background/90 "
      >
        RESET
      </Button>
      <Button
        onClick={() => {
          setPressedKey("");
          onNumberClick("=");
        }}
        className="text-xl !bg-primary-key-toggle !text-text-white !shadow-primary-key-shadow col-span-2  hover:!bg-primary-key-toggle/90 "
      >
        =
      </Button>
    </div>
  );
};

export default Panel;
