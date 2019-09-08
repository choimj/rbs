/**
 * 구글 인증 관련 API
 */

export default {
  getGoogleOauth: () => {
    fetch("http://localhost:4000/auth/google")
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }
};
