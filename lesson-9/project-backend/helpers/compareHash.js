import bcrypt from "bcrypt";

const compareHash = (password, hashPassword) => bcrypt.compare(password, hashPassword);

export default compareHash;