const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useMewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      poolSize: 50,
      autoIndex: false,
      retryWrites: false,
    },
    url: `mongodb+srv://superuser:supersecretpassword@cluster0.menvh.mongodb.net/blog`,
  },
  server: {
    host: "localhost",
    port: 1337,
  },
};

export default config;
