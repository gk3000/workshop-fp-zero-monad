import { Maybe, Either, IO } from "monio";
import { runTests } from "./test.js";


runTests(defineApp);


// *****************************************

function defineApp() {
	return IO.doEither(function *myapp(env){
		try {
			// TODO: implement per requirements
		}
		catch (err) {
			return displayError(err);
		}

		return env;
	});
}

function validateInput() {
	return IO.doEither(function *validator(){
		var email = yield getElementValueById("email");

		// validate email
		email = yield (yield email.fold(
			() => Either.Left("Email missing."),
			email => (
				!/^[^@]+@[^@.]+(\.[^@.]+)+/.test(email) ?
					Either.Left("Email invalid.") :
					Either.Right(email)
			)
		));

		// TODO: implement per requirements

		return Either.Right({ email });
	});
}

function displayError(err) {
	return IO(env => {
		env["error-msg"] = err;
		return env;
	});
}

function displaySuccess(email) {
	return IO(env => {
		env["success-msg"] = `Email '${email}' registered!`;
		return env;
	});
}

function submitRegistration(email,password) {
	// mock/fake delay
	return IO(() => new Promise(res => setTimeout(res,250)));
}

function getElementValueById(id) {
	return IO(env => Maybe.from(env[id]));
}
