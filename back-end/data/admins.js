import bcrypt from "bcryptjs";

const admins = [
    {
        name: "carl doe",
        email: "carldoe@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    },
    {
        name: "carl doe2",
        email: "carldoe2@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    },
    {
        name: "carl doe3",
        email: "carldoe3@gmail.com",
        password: bcrypt.hashSync("12345", 10)
    }
]

export default admins