export const save_img = (body) => {
  const url = process.env.BACKEND_URL + "/api/proposal/documents";
  console.log(url);
  return fetch(url, {
    method: "POST",
    body: body,
  });
};