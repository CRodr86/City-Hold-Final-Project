export const save_img = (body) => {
  const url = process.env.BACKEND_URL+ "/api/user/img";
  console.log(url);
  return fetch(url, {
    method: "POST",
    body: body,
  });
};