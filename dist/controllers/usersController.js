import prisma from '../prisma.js';
const getMany = async (req, res) => {
    const users = await prisma.user.findMany();
    console.log(users);
    res.json({ users });
};
const create = async (req, res, next) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email, username: req.body.username
            }
        });
        res.status(201).json({ user });
    }
    catch (err) {
        // console.log('error creating... I am broken')
        next(err);
    }
};
const get = async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const user = await prisma.user.findFirst({
        where: { id: id },
        include: {
            posts: true,
        },
    });
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.json({ user });
};
export default {
    getMany,
    get,
    create
};
