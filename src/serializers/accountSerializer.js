
export const serializeAccount = (account) => {
    return {
        name: account.name,
        role: account.role,
        user_id: account.user_id,
        ownerable_id: account.ownerable_id,
        ownerable_type: account.ownerable_type,
        planned_lesson_id: account.planned_lesson_id,
    };
};