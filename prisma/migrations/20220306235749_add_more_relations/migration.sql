/*
  Warnings:

  - Added the required column `feedback_id` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment_id` to the `reply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `feedback_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reply` ADD COLUMN `comment_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_feedback_id_fkey` FOREIGN KEY (`feedback_id`) REFERENCES `feedback`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reply` ADD CONSTRAINT `reply_comment_id_fkey` FOREIGN KEY (`comment_id`) REFERENCES `comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
