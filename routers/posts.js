const express = require('express')
const router = express.Router()

const { checkLogin } = require('../middlewares/check')

// GET /posts 所有用户或者特定用户的文章页

// GET /posts?author=xxx  主页
router.get('/', checkLogin, function(req, res, next) {
  // res.send('主页');
  res.render('posts')
})

// POST /posts/create  发表文章
router.post('/create', checkLogin, function(req, res, next) {
  res.send('发表文章')
})

// GET /posts/creaate  获取发表文章页
router.get('/create', checkLogin, function(req, res, next) {
  res.send('发表文章页')
})

// GET /posts/:postId  获取文章详情
router.get('/:postId', checkLogin, function(req, res, next) {
  res.send('文章详情')
})

// POST /posts/:postId/edit 编辑文章
router.post('/:postId/edit', checkLogin, function(req, res, next) {
  res.send('文章更新')
})

// GET /posts/:postId/remove  删除文章
router.get('/:postId/remove', function(req, res, next) {
  res.send('删除文章')
})

module.exports = router
