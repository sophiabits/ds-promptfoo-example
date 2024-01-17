module.exports = async function ({ vars }) {
  return [
    {
      role: "user",
      content: `Write a very concise, funny tweet about ${vars.topic}`,
    },
  ];
};
