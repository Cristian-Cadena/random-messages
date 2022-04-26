const messages = [
    "Reineth",
    "Cristian",
    "Ana",
    "Yesica",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
