

export const serializeRegisteredUser = (user) => {
    return {
        id: user.id,
        username: user.username,

    };
};