import React from 'react';
import {useState} from 'react';
import env from '../env.json';


function Create() {
	const [url, setUrl] = useState();
	const [lineClass, setLineClass] = useState('hide');
	const [formClass, setFormClass] = useState('');


	let loadDataFromForm = (event) => {
		event.preventDefault();
		let note = event.target.elements.note.value;
		note = note.trim()
		if(note === ''){
			alert('заполните поля');
			return false;
		}
		sendData({"note": note});
	}

	let sendData = (obj) => {
		setFormClass('hide');
		setLineClass('');
		fetch(env.urlBackend, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(obj)
		})
			.then(response => response.json())
			.then(response => {
				if(response.result){
					setUrl(env.url+ '/' + response.url)
				}
			})
	}

    return (
        <div className="container create">
	        <div className="row">
	        	<form onSubmit={loadDataFromForm} className={formClass}>
		        	<div>
		        		<label htmlFor="note">Введите заметку:</label>
		        	</div>
		        	<div>
		        		<textarea className="form-control" placeholder="Leave a note here" name="note" id="note" defaultValue=""></textarea>
		        	</div>
		        	<div className="text-end">
		        		<button className="btn btn-primary" type="submit">Создать</button>
		        	</div>
	        	</form>
		        	<div className={lineClass}>
			        	<div className="alert alert-info" role="alert">{url}</div>
			        	<p>Скопируйте URL и передайте адресату.</p>
			        	<div className="text-end">
				        	<button className="btn btn-primary" onClick={function(){window.location.reload()}}>Создать новую заметку</button>
			        	</div>
		        	</div>
	        </div>
        </div>
    );
}

export default Create;