const myprofile ={
	"name": "john",
	"age": 30,
	"city":"madurai",
	"isMarried":false,
	"children":[
		{
			"name":"jeya",
			"age": 5
		},
	
{
	"name":"bob",
	"age":6
},
{
	"name":"bob0",
	"age":9
},
{
	"name":"bobob",
	"age":8
},
{
	"name":"bobbb",
	"age":7
}
]
}
for (let i in myprofile.children)
	{
		console.log(myprofile.children[i])
	}
delete myprofile.children[2]
for (let i in myprofile.children)
	{
		console.log(myprofile.children[i])
	}