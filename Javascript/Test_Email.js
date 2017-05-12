function testEmail(email) {
	email = email.toLowerCase();

	if (email.indexOf("@") < 0) {
		return false;
	}

	var beforeAt = email.split("@")[0];

	var afterAt = email.split("@")[1];

	if (beforeAt === "" || afterAt.indexOf(".") < 0 || beforeAt.indexOf(".") > 0) {
		return false;
	}

	afterAt = afterAt.split(".");

	if (afterAt.length > 2 || afterAt[1] === "" || afterAt[0] === "") {
		return false;
	}

	return true;

}
