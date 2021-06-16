import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import env from '../env.json';

function Note() {
	let { noteURL } = useParams();

	const [noteText, setNoteText] = useState('');
	const [lineClass, setLineClass] = useState('hide');
	const [formClass, setFormClass] = useState('hide');
	const [errorClass, setErrorClass] = useState('hide');

	useEffect(()=> {
		if(noteURL !== undefined){
			fetch(env.urlBackend, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({"url": noteURL})
		})
			.then(response => response.json())
			.then(response => {

				if(response.result){
					setNoteText(response.note);
					setLineClass('');
					setFormClass('hide');
					setErrorClass('hide');
				}
				else if (!response.result){
					setLineClass('hide');
					setFormClass('hide');
					setErrorClass('');
				}
			})
		}
		else {
			setLineClass('hide');
			setFormClass('');
			setErrorClass('hide');
		}
	}, []);

	function getNote(event){
		event.preventDefault();
		let url = event.target.elements.url.value;
		url = url.trim();
		if(url === ''){
			alert('заполните поля');
			return false;
		}
		noteURL = url;
		window.location.href = env.url + "/" + url;
	}

	function searhNote(){
		window.location.href = env.url;
	}

    return (
    	<div className="container note">
    		<div className="row">
    			<div className="col-xxl-12">
			        <div>
			        	<div className={lineClass}>
				        	<div className="alert alert-success">
				        		<h4>Note: {noteURL}</h4>
				        		<div>{noteText}</div>
				        		<hr/>
				        		<p>Внимание! Скопируйте заметку!</p>
				        	</div>
			        		<div className="text-end">
				        		<button className="btn btn-primary" onClick={searhNote}>Искать другой Note</button>
			        		</div>
			        		
			        	</div>
			        	<div className={errorClass}>
			        		<div className="alert alert-danger">
				        		<p>Произошла ошибка. Такой note не найден.</p>
			        		</div>
			        		<div className="text-end">
				        		<button className="btn btn-primary" onClick={searhNote}>Искать другой Note</button>
			        		</div>
			        	</div>
			        	<div className={formClass}>
				        	<form onSubmit={getNote}>
					        	<label htmlFor="url">Введите hash заметки:</label>
				        		<input type="text" name="url" className="form-control"/>
				        		<div className="text-end">
				        			
					        		<button className="btn btn-primary">Искать Note</button>
				        		</div>
				        	</form>
			        	</div>
			        </div>
    			</div>
    		</div>
    	</div>
    );
}

export default Note;