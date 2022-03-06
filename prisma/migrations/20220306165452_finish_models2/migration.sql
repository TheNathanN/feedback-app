-- RedefineIndex
DROP INDEX `User_username_key` ON `user`;
CREATE UNIQUE INDEX `user_username_key` ON `user`(`username`);
