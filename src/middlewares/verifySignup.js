import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkDuplicatedUsernameOrEmail = async (req, res, next) => {
  const { username, email } = req.body;
  const user = await User.findOne({ username });

  if (user) return res.status(400).json({ message: "The user already exists" });

  const userByEmail = await User.findOne({ email });

  if (userByEmail)
    return res.status(400).json({ message: "The email is already registered" });

  next();
};

export const checkExistingRoles = (req, res, next) => {
  const { roles } = req.body;
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        return res.status(400, { message: `Role ${roles[i]} does not exists` });
      }
    }
  }

  next();
};
