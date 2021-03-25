# 设计mysql

其实用一个表 也可以解决问题

但是为了练习多表查询等，还是使用多个数据表来进行构建吧。

| 字段     | 说明                                   |
| -------- | -------------------------------------- |
| username | 用户名，主键。用户名不可重复。         |
| password | 密码。加密保存。                       |
| email    | 邮箱。需进行验证。验证成功则注册成功。 |

## 用户权限

| 字段       | 功能   | 备注           |
| ---------- | ------ | -------------- |
| username   | 用户名 | 主键           |
| permission | 权限   | 个人版，会员版 |

## 可上传的资源

| 字段     | 功能             | 备注                       |
| -------- | ---------------- | -------------------------- |
| username | 用户名           | 主键                       |
| canPush  | 可以上传的资源   | 如图片，文件，音乐，视频等 |
| maxSize  | 可上传文件的大小 | 不同的资源对应不同的大小   |
