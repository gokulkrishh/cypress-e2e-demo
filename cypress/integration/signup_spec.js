describe("Sign up page", () => {
	it("Go to app", () => {
		cy.visit("/");
		const name = "Gokul";
		const email = "krishnangokul9@gmail.com";
		const password = "123456";
		const number = "9999999999";
		cy
			.get("#name")
			.type(name)
			.should("have.value", name);
		cy
			.get("#email")
			.type(email)
			.should("have.value", email);
		cy
			.get("#password")
			.type(password)
			.should("have.value", password);
		cy
			.get("#number")
			.type(number)
			.should("have.value", number);
		cy.get("form").submit();
		cy.get(".success-msg").should("have.text", "Success");
	});
});
