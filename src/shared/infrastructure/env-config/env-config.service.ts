import { Injectable } from "@nestjs/common";
import { EnvConfig } from "./env-config.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    return Number(this.configService.get<number>("PORT") || 5656);
  }

  getNodeEnv(): string {
    return this.configService.get<string>("NODE_ENV") || "default_value";
  }
}
