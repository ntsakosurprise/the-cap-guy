import App from "kotii-scripts";
import { Layout, Root } from "Startup";

App(Root, Layout);
import.meta.webpackHot.accept((er) => {
    App(Root,Layout)
  });