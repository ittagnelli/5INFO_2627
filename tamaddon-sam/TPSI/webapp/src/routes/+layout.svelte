<main>
	<header>
	<hi>Web App</hi>
	</header>
	<section>
		<nav>
			<ul>
				<li><a href="/chi_sono">Chi sono</a></li>
				<li><a href="#">Counter</a></li>
				<li><a href="#">About</a></li>
	
			</ul>
		</nav>
	<article>
	<p>argomenti principali qui</p>
	<slot></slot>
	</article>
	
	</section>
	<footer>
	<h4>Copyright &copy; Sam Tamaddon</h4>
	
	</footer>

</main>

<style>
:global(body){
	margin: 1;
}

main {
	display: flex;
	flex-direction: column;
	height: 100vh;
	box-sizing: border-box;
	color: beige;
}
header{
	background-color: yellowgreen;
	text-align: center;
}
section{
	display: flex;
	flex-direction: row;
	flex: 10;
}
nav{
	background-color: yellowgreen;
	flex: 1;
}
nav ul {
	list-style: none;
}
nav ul li {
	padding: 10px;
}
nav ul li a{
	color: beige;
	text-decoration: none;
	font-size: 30px;
	font-weight: bolder;
}
article{
	color: rgb(3, 94, 30);
	padding: 20px;
	font-size: 30px;
	flex:  8;
}
footer{
	background-color: rgb(23, 218, 33);
	text-align: center;
	font-size: 20px;
	flex: 1;
}

</style>