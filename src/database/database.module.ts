import { Module } from "@nestjs/common";
import { DataBaseService } from "./database.service.js";

@Module({
  providers: [DataBaseService],
  exports: [DataBaseService],
})
export class DataBaseModule {}
