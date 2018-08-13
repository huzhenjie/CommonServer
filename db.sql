create database if not exists common default character set utf8;
create user 'scrat'@'localhost' identified by 'scrat';
grant select,insert,update on common.* to scrat@'localhost';
flush privileges;
use common;

create table app (
app_id int unsigned not null auto_increment comment '自增主键',
app_key char(16) not null default '',
app_secret char(32) not null default '',
app_name varchar(32) not null default '',
description varchar(512) not null default '',
create_ts bigint unsigned not null default 0,
update_ts bigint unsigned not null default 0,
delete_ts bigint unsigned not null default 0,
primary key (app_id)
) engine=MyISAM default charset=utf8;

insert ignore into app set app_key='5651745861380', app_secret='zI7dzZXKQDbz3Q0Tz78ciQ==',app_name='壕租',description='壕租小程序服务端',create_ts=1534057375000;

create table app_auth (
app_auth_id int unsigned not null auto_increment comment '自增主键',
app_id int unsigned not null default 0,
app_permission enum('api','sms','upload','feedback') not null default 'api',
create_ts bigint unsigned not null default 0,
unique key (app_auth_id, app_permission),
primary key (app_auth_id)
) engine=MyISAM default charset=utf8;

insert ignore into app_auth set app_id=1,app_permission='sms',create_ts=1534057375000;

create table feedback (
feedback_id int unsigned not null auto_increment comment '自增主键',
app_id int unsigned not null default 0,
uid char(16) not null default '',
title varchar(64) not null default '',
pt varchar(16) not null default '' comment '平台',
ch varchar(16) not null default '' comment '渠道',
vc varchar(16) not null default '' comment '版本号',
vn varchar(16) not null default '' comment '版本名',
contract varchar(128) not null default '' comment '联系方式',
create_ts bigint unsigned not null default 0,
content text not null,
primary key (feedback_id)
) engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

create table feedback_img (
feedback_img_id int unsigned not null auto_increment comment '自增主键',
feedback_id int unsigned not null default 0,
url varchar(522) not null default '',
primary key(feedback_img_id)
) engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;