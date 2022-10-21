<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background-color: #eee;
	font-family: 'helvetica neue', helvetica, arial, sans-serif;
	color: #222;
}

form {
	max-width: 700px;
	padding: 2rem;
	box-sizing: border-box;
	margin: 2rem auto;
}

.form-field {
	display: flex;
	margin: 0 0 1rem 0;
}

label, input {
	width: 30%;
	padding: 0.5rem;
	box-sizing: border-box;
	justify-content: space-between;
	font-size: 1.1rem;
}

label {
	text-align: right;
	width: 30%;
}

input {
	border: 2px solid #aaa;
	border-radius: 10px;
}

#submit {
	width: 150px;
	border-radius: 15px;
}

#submit:hover {
	background-color: #e4dedd;
	cursor: pointer;
}
</style>
</head>
<body>

	<form action="checkLogin" method="post">
		<div class="form-field">
			<label for="username">Email</label> <input type="email"
				placeholder="Email" name="username" />
		</div>
		<div class="form-field">
			<label for="password">password</label> <input type="password"
				placeholder="Password" name="password" />
		</div>
		<div class="form-field">
			<label for=""></label> <input id="submit" type="submit" value="login" />
		</div>

	</form>
</body>
</html>