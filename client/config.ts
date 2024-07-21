interface Config {
  baseUrl: string;
}
// eslint-disable-next-line @typescript-eslint/ban-types
const checkConfig = (server: string): Config | {} => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://supergear-git-main-adthunders-projects.vercel.app",
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:8000",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;
