import { loginStart, loginSuccess, loginFailure } from "../features/userSlice";
import { publicRequest, userRequest } from "../constants/requests";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(loginFailure());
  }
};
