const Transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const FirstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const LastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const Letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...Transition },
    },
};

export { FirstName, LastName, Letter, Transition}