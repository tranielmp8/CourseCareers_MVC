const validateUsername = (req, res, next) => {
    const username = req?.body?.username;
    if (!username || username.length < 5 || username.length > 30) {
        return res.status(400)
            .json({ error: 'username must be between 5 - 30 characters' });
    }
    next();
};
export default {
    validateUsername
};
