"use client";

import * as React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";

type TProviders = {
  children: React.ReactNode;
}

const Providers = ({ children }: TProviders) => {
  return (<Provider store={store}>
    {children}
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      stacked
    // transition:Bounce
    />
  </Provider>);
};

export default Providers;
