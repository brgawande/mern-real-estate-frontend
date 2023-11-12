import { server } from "../store.js";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `${server}/signin`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`${server}/delete/${id}`);
    dispatch({ type: "deleteUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const signout = () => async (dispatch) => {
  try {
    dispatch({ type: "signoutRequest" });
    const { data } = await axios.get(`${server}/signout`);

    dispatch({ type: "signoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "signoutFail", payload: error.response.data.message });
  }
};
