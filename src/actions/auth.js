import { AUTH } from "../constants/actionTypes";
import * as api from "../api";
import { DELETE } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id, history) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    console.log("actions delete");
    dispatch({ type: DELETE, payload: id });

    //   DELETE ALL USERS ENTRIES IN GROUPS DB
    await api.deleteUserGroups(id);
    console.log("start deleting groups");

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
