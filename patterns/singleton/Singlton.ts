export class ConfigurationManager {
  private static instance: ConfigurationManager;
  private config: Record<string, any> = {};

  private constructor() {
    this.config = {
      apiUrl: "hello.com",
      retryAttempts: 3,
    };
  }
  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }
  public getConfig(key: string) {
    return this.config[key];
  }
}
