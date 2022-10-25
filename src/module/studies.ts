import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

export interface StudyProps {
  filter: string;
  id: string;
  title: string;
  img?: string;
  describtion?: string[];
  date?: string;
  tool?: string[];
  features?: string[] | undefined;
  git?: string | undefined;
  url?: string;
  ect?: string | undefined;
  imgs?: string[];
}



const studiesArr:StudyProps[] = data.studies;

const studies = createSlice({
  name: "studies",
  initialState: studiesArr,
  reducers: {},
});

export default studies;
