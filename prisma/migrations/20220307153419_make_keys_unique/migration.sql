/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `key` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `key_token_key` ON `key`(`token`);
