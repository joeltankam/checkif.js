const isFuture = (date) => {
    const now = new Date();

    return now < date;
};

const isPast = (date) => {
    const now = new Date();

    return now > date;
};

export default {
    isFuture,
    isPast,
};
