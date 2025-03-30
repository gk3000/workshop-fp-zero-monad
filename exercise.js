import { users, runTests } from "./test.js";


runTests(selectUsers);


// *****************************************

function selectUsers(users) {
	var result = [];

	for (let i = 0; i < users.length; i++) {
		let user = users[i];
		if (user.verified == true) {
			let newUser = { name: user.name, email: user.email };
			result.push(newUser);
		}
	}

	result.sort((a,b) => (
		(a.name < b.name) ? -1 :
		(a.name > b.name) ? 1 :
		0
	));

	return result;
}
