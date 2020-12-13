const ol = document.querySelector('ol');

const todos = [
	{
	  name: 'Registration Time Spring Classes',
	  complete: true
	},
	{
	  name: 'Pick Courses',
	  complete: true
	}
	{
	  name: 'Complete Transfer to University',
	  complete: false
	}
	{
	  name:'Finish Final Projects',
	  complete: true
	}
]
const template = todos.map(todo =>'<li>${todo} <button>x</button> <button>complete</button></li>');
ol.innerHTML = template.join('');
const add = 
<span onclick="newElement()" class=addBtn><button>Add</button>
	if (event.key == "Enter") {document.querySelector("#linkadd").click();}
	</span>

 
  form_el.addEventListener("submit", function (event) {
	      //prevent page refresh
    event.preventDefault()

    //get value from input element
    let item = input_el.value
    console.log(item)

    //push it into your item list
    item_list.push(item);

    //render the new list
    render_list()

    //clear out the form field
    form_el.reset()

  })
  }
  
  document.getElementById('addLinks').onkeypress=function(e)
  if(e.keycode===addEventListenerddd){ document.getElementById('linkadd').click();
  }
}

= todos.map(todo => 'li class="${todo} <button>x</button>template.join(");