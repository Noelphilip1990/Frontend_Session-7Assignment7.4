function outer(argfunction)
{
	argfunction();
}
outer(function inner(){
	console.log("Hello World");
});
