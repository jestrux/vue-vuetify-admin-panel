import { mock, post, get } from "./setup";
import { getToken } from "../auth";

export const login = async (data) => {
  return await post('/users/login', data);
};

export const fetchUsers = async () => {
  const token = await getToken();
  return get('/users', token);
};

export const fetchRoles = async () => {
  // const token = await getToken();
  // return get('/roles', token);
  await mock();
  return [{
    name: "Create Admin Users",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dignissimos quam nobis doloribus."
  }];
};
