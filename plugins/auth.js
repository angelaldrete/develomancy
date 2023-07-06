export default function({ $axios }, inject) {
  const auth = $axios.create();

  auth.setBaseURL("http://localhost:5000/api");

  inject("auth", auth);
}
