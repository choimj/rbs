/**
 * 인증관련 API
 */

export const checkUser = (email, password) => {
  // console.log(email, password);
  if (email === "admin@douzone.com" && password === "1111") {
    return { message: "로그인 되었습니다.", isAuth: true };
  } else {
    return {
      message: "이메일 또는 비밀번호가 일치하지 않습니다. 다시 확인 해주세요.",
      isAuth: false
    };
  }
};
export const setUser = email => {
  return {
    email: email,
    userName: "홍길동"
  };
};
export const logout = () => {
  localStorage.clear();
  return { message: "로그아웃 되었습니다.", isAuth: false };
};
