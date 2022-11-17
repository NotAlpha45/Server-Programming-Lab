const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');

router.get('/', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.get('/login', homeController.getLogin);
router.get('/logout', connectEnsureLogin.ensureLoggedIn(),  homeController.logOut);
router.get("/book-list", connectEnsureLogin.ensureLoggedIn(), bookController.getBookList);
router.get("/add-book", connectEnsureLogin.ensureLoggedIn(), bookController.getBook);
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.get('/register', homeController.getRegister);
router.post('/register', homeController.postRegister);
router.post("/post-book", connectEnsureLogin.ensureLoggedIn(), bookController.postBook);
router.post(
	'/login',
	passport.authenticate('local', {
		failureRedirect: '/login',
		successRedirect: '/dashboard',
	}), homeController.postLogin);

module.exports = router;
