
function bekuld()
{let pont = 0;

    const a = document.getElementById("porto").checked;
    const b = document.getElementById("coimbra").checked;
    const c = document.getElementById("lisszabon").checked;
    const d = document.getElementById("faro").checked;

    if (c==1){pont=pont+1; 
        document.getElementById("lisszabon1").style.color = "green";};
    if (a==1){document.getElementById("porto1").style.color = "red";};
    if (b==1){document.getElementById("coimbra1").style.color = "red";};
    if (d==1){document.getElementById("faro1").style.color = "red";};

    const e = document.getElementById("pastel").checked;
    const f = document.getElementById("paella").checked;
    const g = document.getElementById("lasagne").checked;
    const h = document.getElementById("bacalhau").checked;

    if (e==1 && f==0 && g==0 && h==1){pont=pont+1;};
    if (h==1) {document.getElementById("bacalhau1").style.color = "green";};
    if (e==1) {document.getElementById("pastel1").style.color = "green";};
    if (f==1){document.getElementById("paella1").style.color = "red";};
    if (g==1){document.getElementById("lasagne1").style.color = "red";};

    const i = document.getElementById("alentejo").checked;
    const j = document.getElementById("azori").checked;
    const k = document.getElementById("duoro").checked;
    const l = document.getElementById("algarve").checked;

    if (k==1){pont=pont+1;
        document.getElementById("duoro1").style.color = "green";};
    if (i==1){document.getElementById("alentejo1").style.color = "red";};
    if (j==1){document.getElementById("azori1").style.color = "red";};
    if (l==1){document.getElementById("algarve1").style.color = "red";};

    const m = document.getElementById("magellan").checked;
    const n = document.getElementById("gama").checked;
    const o = document.getElementById("columbus").checked;
    const p = document.getElementById("marco").checked;

    if (n==1){pont=pont+1;
        document.getElementById("vasco1").style.color = "green";};
    if (m==1){document.getElementById("magellan1").style.color = "red";};
    if (o==1){document.getElementById("columbus1").style.color = "red";};
    if (p==1){document.getElementById("marco1").style.color = "red";};

    const q = document.getElementById("madeira").checked;
    const r = document.getElementById("jeronimos").checked;
    const s = document.getElementById("bazilika").checked;
    const t = document.getElementById("pena").checked;
    const u = document.getElementById("machu").checked;

    if (q==0 && r==0 && s==1 && t==0 && u==1){pont=pont+1;}
    if (s==1){document.getElementById("bazilika1").style.color = "green";};
    if (u==1){document.getElementById("machu1").style.color = "green";};
    if (q==1){document.getElementById("madeira1").style.color = "red";};
    if (r==1){document.getElementById("jeronimos1").style.color = "red";};
    if (t==1){document.getElementById("pena1").style.color = "red";};

    if (pont == 5) {document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el! \nGratulálok, te aztán képben vagy Portugáliával!";} 
    else if (pont == 4 || pont == 3) {document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el. \nLehet, egy kirándulás Portugáliába segítene tökéletesíteni a tudásod!";} 
    else {document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el. \nIdeje nyakadba venni Portugáliát és megismerni minden apró titkát!";}
    }

