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