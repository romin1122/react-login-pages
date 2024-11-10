export const validateEmail = (inp: string): boolean => {
  if (inp && inp.trim().length > 0)
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      inp
    );
  return false;
};

export const validatePhone = (inp: string): boolean => {
  if (inp && inp.trim().length > 0) return /^\d{11}$/.test(inp);
  return false;
};

export const validateEmailOrPhone = (inp: string): boolean => {
  if (inp && inp.trim().length > 0)
    return /^(?:\d{11}|(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/.test(
      inp
    );
  return false;
};

export const validatePassword = (password: string): boolean => {
  if (password && password.trim().length >= 8 && password.trim().length <= 32)
    return true;
  return false;
};
