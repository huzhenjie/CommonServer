CommonServer

------

# Header

| param | type | require | description |
| :---: | :---: | :---: | --- |
| appid | int | true | app id |
| appkey | string | true | app string |


# 获取短信接口

[GET] `/api/core/sms`

| param | type | require | description |
| :---: | :---: | :---: | --- |
| tel | string | true | 电话号码 |

Sample

```
curl -X GET -H 'appid: 1234' -H 'appkey: 12345678' 'https://host/api/core/sms?tel=17199916191'
```

Response

```
{"code":200,"msg":"ok"}
```

# 验证短信接口

[POST] **application/json** `/api/core/sms`

| param | type | require | description |
| :---: | :---: | :---: | --- |
| tel | string | true | 电话号码 |
| code | int | true | 验证码 |

Sample

```
curl -X POST -H 'appid: 1234' -H 'appkey: 12345678' -H "Content-type: application/json" -d '{"tel":17199916191,"code":907826}' 'https://host/api/core/sms'
```

Response

```
{"code":200,"msg":"ok"}
```
