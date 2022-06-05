var cr = document.getElementById('create');
var cr2 = document.getElementById('create2');
var cr3 = document.getElementById('create3');
var gen = document.getElementById('generate');
var del = document.getElementById('delete');
var del2 = document.getElementById('delete2');
var del3 = document.getElementById('delete3');

var itemlist = document.getElementById('skills');
var itemlist2 = document.getElementById('afilliations');
var itemlist3 = document.getElementById('job_list');

cr.addEventListener('click', addrow);
cr2.addEventListener('click', addrow2);
cr3.addEventListener('click', addrow3);
gen.addEventListener('click', template);
del.addEventListener('click', delrow);
del2.addEventListener('click', delrow2);
del3.addEventListener('click', delrow3);

function addrow(e) {
    e.preventDefault();
    var li = document.createElement('li')
    var input = document.createElement('input')
    input.className = 'ski';
    input.placeholder = 'Enter Text';
    li.appendChild(input);
    itemlist.appendChild(li);
}

function addrow2(e) {
    e.preventDefault();
    var li = document.createElement('li')
    var input = document.createElement('input')
    input.placeholder = 'Enter Text';
    li.appendChild(input);
    itemlist2.appendChild(li);
}

var c = 4;

function addrow3(e) {
    e.preventDefault();
    var li = document.createElement('li');
    itemlist3.append(li);
    var div = document.createElement('div');
    div.className = 'work';
    li.append(div);
    var h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode('JOB-' + c));
    
    var text1 = document.createTextNode("Role: ");
    var input = document.createElement('input');
    input.placeholder = 'Enter Text';
    var br0 = document.createElement('br');
    
    var text2 = document.createTextNode("Timeline: ");
    var br = document.createElement('br');
    
    var text3 = document.createTextNode("From: ");
    var input2 = document.createElement('input');
    input2.type = 'date';
    
    var text4 = document.createTextNode("To: ");
    var input3 = document.createElement('input')
    input3.type = 'date';
    var br2 = document.createElement('br');

    var text5 = document.createTextNode("Location :");
    var input4 = document.createElement('input');
    input4.placeholder = 'Enter Text';
    div.append(h3,text1,input,br0,text2,br,text3,input2,text4,input3,br2,text5,input4);
    var div2 = document.createElement('div');
    div.append(div2);
    var header = document.createElement('h3');
    header.appendChild(document.createTextNode("Description"));
    div2.append(header);
    var ul = document.createElement('ul');
    var i = 0;
    for (i = 0; i < 3; i++) {
        var li = document.createElement('li');
        var input = document.createElement('input')
        input.placeholder = 'Enter Text';
        li.appendChild(input);
        ul.append(li);
    }
    div2.append(ul);
    c++;
}

function delrow(e) {
    e.preventDefault();
    var remove = itemlist.lastChild;
    console.log(remove);
    itemlist.removeChild(remove);
}

function delrow2(e) {
    e.preventDefault();
    var remove = itemlist2.lastChild;
    console.log(remove);
    itemlist2.removeChild(remove);
}

function delrow3(e) {
    e.preventDefault();
    var remove = itemlist3.lastChild;
    console.log(remove);
    itemlist3.removeChild(remove);
    c--;
}


function template() {
    var name = document.getElementById('head-1').value;
    name = name.toUpperCase();
    var repname = document.getElementById('name');
    repname.appendChild(document.createTextNode(name));

    var head1 = document.getElementById('professional_sum');
    head1.innerHTML = 'PROFESSIONAL SUMMARY'

    var head2 = document.getElementById('work_history');
    head2.innerHTML = 'WORK HISTORY'

    var summary = document.getElementById('summary');
    summary.innerHTML = document.getElementById('profsum').value;

    var country = document.getElementById('head-2').value;
    var repcountry = document.getElementById('country');
    repcountry.innerHTML = country;

    var number = document.getElementById('head-3').value;
    var repnumber = document.getElementById('number');
    repnumber.innerHTML = number;

    var email = document.getElementById('head-4').value;
    var repemail = document.getElementById('email');
    repemail.innerHTML = email;

    var skills = document.getElementById('row-2_head');
    skills.innerHTML = 'SKILLS';

    var items = document.getElementsByClassName('ski');
    Array.from(items).forEach(function (item) {
        var input = item.value;
        var li = document.createElement('li');
        var para = document.createElement('p');
        para.appendChild(document.createTextNode(input));
        li.append(para);
        var list = document.getElementById('skills_list');
        list.append(li);
    });

    var education = document.getElementById('row-3_head');
    education.innerHTML = 'EDUCATION';

    var edu_para = document.getElementById('row-3_para');
    var edu = document.getElementById('education')
    edu_para.innerHTML = edu.value;

    var affiliations = document.getElementById('row-4_head');
    affiliations.innerHTML = 'AFFILIATIONS';

    var items2 = document.getElementsByClassName('afi');
    Array.from(items2).forEach(function (item) {
        var input = item.value;
        var li = document.createElement('li');
        li.innerHTML = input;
        var list = document.getElementById('affiliations_list');
        list.appendChild(li);
    });

    var role1 = document.getElementsByClassName('job1');
    console.log(role1);
    var a = 0;
    Array.from(role1).forEach(function (item) {
        var input = item.value;
        if (a == 0) {
            input = input.toUpperCase();
            var span = document.createElement('span');
            span.innerHTML = input + ',';
            span.className = 'role';
            var job_1 = document.getElementById('job_1');
            job_1.appendChild(span);
        }
        if (a == 1) {
            var span = document.createElement('span');
            span.innerHTML = input + '-';
            var job_1 = document.getElementById('job_1');
            job_1.appendChild(span);
        }
        if (a == 2) {
            var span = document.createElement('span');
            span.innerHTML = input;
            var job_1 = document.getElementById('job_1');
            job_1.appendChild(span);
        }
        if (a == 3) {
            input = input.toUpperCase();
            var div = document.createElement('div');
            div.innerHTML = input;
            var job_1 = document.getElementById('job_1');
            job_1.appendChild(div);
            var ul = document.createElement('ul');
            ul.id = 'desc_1';
            job_1.appendChild(ul);
        }
        if (a > 3) {
            var li = document.createElement('li');
            li.innerHTML = input;
            var desc_1 = document.getElementById('desc_1');
            desc_1.appendChild(li);
        }
        a++;
    })

    var role2 = document.getElementsByClassName('job2');
    console.log(role2);
    var a = 0;
    Array.from(role2).forEach(function (item) {
        var input = item.value;
        if (a == 0) {
            input = input.toUpperCase();
            var span = document.createElement('span');
            span.innerHTML = input + ',';
            span.className = 'role';
            var job_2 = document.getElementById('job_2');
            job_2.appendChild(span);
        }
        if (a == 1) {
            var span = document.createElement('span');
            span.innerHTML = input + '-';
            var job_2 = document.getElementById('job_2');
            job_2.appendChild(span);
        }
        if (a == 2) {
            var span = document.createElement('span');
            span.innerHTML = input;
            var job_2 = document.getElementById('job_2');
            job_2.appendChild(span);
        }
        if (a == 3) {
            input = input.toUpperCase();
            var div = document.createElement('div');
            div.innerHTML = input;
            var job_2 = document.getElementById('job_2');
            job_2.appendChild(div);
            var ul = document.createElement('ul');
            ul.id = 'desc_2';
            job_2.appendChild(ul);
        }
        if (a > 3) {
            var li = document.createElement('li');
            li.innerHTML = input;
            var desc_2 = document.getElementById('desc_2');
            desc_2.appendChild(li);
        }
        a++;
    })

    var role3 = document.getElementsByClassName('job3');
    console.log(role3);
    var a = 0;
    Array.from(role3).forEach(function (item) {
        var input = item.value;
        if (a == 0) {
            input = input.toUpperCase();
            var span = document.createElement('span');
            span.innerHTML = input + ',';
            span.className = 'role';
            var job_3 = document.getElementById('job_3');
            job_3.appendChild(span);
        }
        if (a == 1) {
            var span = document.createElement('span');
            span.innerHTML = input + '-';
            var job_3 = document.getElementById('job_3');
            job_3.appendChild(span);
        }
        if (a == 2) {
            var span = document.createElement('span');
            span.innerHTML = input;
            var job_3 = document.getElementById('job_3');
            job_3.appendChild(span);
        }
        if (a == 3) {
            input = input.toUpperCase();
            var div = document.createElement('div');
            div.innerHTML = input;
            var job_3 = document.getElementById('job_3');
            job_3.appendChild(div);
            var ul = document.createElement('ul');
            ul.id = 'desc_3';
            job_3.appendChild(ul);
        }
        if (a > 3) {
            var li = document.createElement('li');
            li.innerHTML = input;
            var desc_3 = document.getElementById('desc_3');
            desc_3.appendChild(li);
        }
        a++;
    })

    var con = document.getElementById('container')
    var temp = document.getElementById('container2')
    con.style.display = 'none';
    temp.style.display = 'block';



}