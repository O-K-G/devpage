// Control configurations for environment variables.

const envConfig = () => {
  return {
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.SECURE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    from: process.env.FROM,
    to: process.env.TO,
  };
};

export default envConfig;
