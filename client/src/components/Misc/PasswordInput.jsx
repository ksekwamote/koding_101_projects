import React from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <form>
        <label
          htmlFor="password"
          className="flex self-center mx-8 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <div className="flex justify-between items-center shadow-sm bg-gray-50 border mx-8 border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
          <input
            value={password}
            type={visible ? "text" : "password"}
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 text-gray-900 text-sm w-[300px] border-none focus:border-none focus:outline-none"
          ></input>
          <div className="p-2" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      </form>
    </div>
  );
}
