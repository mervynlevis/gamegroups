import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

// ACTION CREATORS

export const getGroups = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGroups();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createGroup = (group) => async (dispatch) => {
  try {
    const { data } = await api.createGroup(group);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateGroup = (id, group) => async (dispatch) => {
  try {
    const { data } = await api.updateGroup(id, group);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGroup = (id) => async (dispatch) => {
  try {
    await api.deleteGroup(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserGroups = (id) => async (dispatch) => {
  try {
    await api.deleteUserGroups(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeGroup = (id, group) => async (dispatch) => {
  try {
    const { data } = await api.likeGroup(id, group);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// JOIN GROUP

export const joinGroup = (id, group) => async (dispatch) => {
  try {
    const { data } = await api.joinGroup(id, group);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// LEAVE GROUP

export const leaveGroup = (id, group) => async (dispatch) => {
  try {
    const { data } = await api.leaveGroup(id, group);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
