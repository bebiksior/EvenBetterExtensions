class Logger {
  private serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toString();
    return `${timestamp} [${this.serviceName}] [${level}] ${message}`;
  }

  public info(message: string): void {
    console.log(this.formatMessage("INFO", message));
  }

  public warn(message: string): void {
    console.warn(this.formatMessage("WARN", message));
  }

  public error(message: string): void {
    console.error(this.formatMessage("ERROR", message));
  }
}

export const logger = new Logger("EvenBetterExtensions");