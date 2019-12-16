const express = require('express')
const router = express.Router()
const User = require('../database/modal/userModal')

router.post('/reg', (req, res) => {
  let {
    us,
    ps
  } = req.body;

  if (us && ps) {
    User.find({
        us
      }).then((data) => {
        if (data.length >= 1) {
          res.send({
            err: -1,
            msg: "注册失败，已存在该账号"
          });
        } else {
          User.insertMany({
              us,
              ps
            }).then(() => {
              res.send({
                err: 1,
                msg: "注册成功"
              });
            })
            .catch((err) => {
              res.send({
                err: -1,
                msg: "注册失败"
              });
            })

        }


      })
      .catch((err) => {
        res.send({
          err: -1,
          msg: '注册失败'
        })
      })
  } else {
    res.send({
      err: -1,
      msg: '注册失败，缺少帐号密码'
    })
  }

})

router.post("/login", (req, res) => {
  let {
    us,
    ps
  } = req.body;
  if (us && ps) {
    User.find({
        us,
        ps
      })
      .then((data) => {
        if (data.length >= 1) {
          res.send({
            err: 1,
            msg: "登录成功"
          });
        } else {
          res.send({
            err: -1,
            msg: "登录失败"
          });
        }
      })
      .catch((err) => {
        res.send({
          err: -1,
          msg: "登录失败"
        });
      })
  } else {
    res.send({
      err: -1,
      msg: '缺少账号或密码'
    })
  }
});

module.exports = router