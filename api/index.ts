import 'reflect-metadata';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from '../src/app.module.js';

let cachedApp: INestApplication | null = null;
let cachedHandler: ((req: unknown, res: unknown) => void) | null = null;

async function getHandler() {
  if (cachedHandler) {
    return cachedHandler;
  }

  const server = express();
  cachedApp = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await cachedApp.init();

  cachedHandler = server as unknown as (req: unknown, res: unknown) => void;
  return cachedHandler;
}

export default async function handler(req: unknown, res: any) {
  try {
    const appHandler = await getHandler();
    return appHandler(req, res);
  } catch (error) {
    console.error('Vercel bootstrap error:', error);
    res.status(500).json({ error: 'bootstrap_failed' });
  }
}
