import { toast } from "react-toastify";

/**
 * Router check
 * @param {*} path
 * @param {*} route
 * @returns
 */
export const checkRoute = (path, route) => {
  const pathArr = path.split("/");
  return pathArr.includes(route);
};

/**
 *  Create toast msg
 * @param {*} msg
 * @param {*} type
 * @returns
 */
export const creatToast = (msg, type = "error") => {
  return toast[type](msg);
};

/**
 *   Mobile number validation
 * @param {*} mobile
 * @returns Parsing error: Unterminated regular expressioneslint
 */
// Unterminated regular expression
export const isMobile = (mobile) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 *  Email valitdation
 * @param {*} email
 * @returns
 */
export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};
