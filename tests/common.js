import mongoose from 'mongoose';
import { start, stop } from '../index.js';

before(async function () {
  this.server = await start(8080);
});

after(async function () {
  await stop();
})