import bcrypt from "bcryptjs";

const users = [
    {
        name: "john doe",
        email: "johndoe@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    },
    {
        name: "john doe2",
        email: "johndoe2@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    },
    {
        name: "john doe3",
        email: "johndoe3@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    }
]

export default users