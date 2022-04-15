import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("contacts/add");

export const deleteTodo = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");
