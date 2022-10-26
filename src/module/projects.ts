import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

export interface WorkProps {
  filter: string;
  id: string;
  title: string;
  describtion: string[];
  date: string;
  tools: string[];
  features: string[];
  git: string;
  url: string;
  imgs: string[];
  bgColor: string;
}

const myWorks: WorkProps[] = data.works;

const projects = createSlice({
  name: "projects",
  initialState: myWorks,
  reducers: {},
});

export default projects;
