import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
// eslint-disable-next-line
export default (groups = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return groups.map((group) => group._id === action.payload._id ? action.payload : group);
    case CREATE:
      return [...groups, action.payload];
    case DELETE:
      return groups.filter((group) => group._id !== action.payload);
    default:
      return groups;
  }
};
