import users from "./pengajuan.json";

export default (req, res) => {
  res.status(200).json(users);
};
