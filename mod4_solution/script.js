var names=new Array();
names[0]="Anu";
names[1]="Jon";
names[2]="Jun";
names[3]="jenson";
names[4]="Hani";
names[5]="Chandu";
names[6]="Nandu";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}