import { model, Schema } from "mongoose";

export const ROLES = ["user", "admin", "moderator"];

const roleSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false }
);

export default model("Role", roleSchema);
