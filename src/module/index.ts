import { configureStore } from "@reduxjs/toolkit";
import studies from "./studies";
import projects from "./projects";

const store = configureStore({
  reducer: { studies: studies.reducer, projects: projects.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
