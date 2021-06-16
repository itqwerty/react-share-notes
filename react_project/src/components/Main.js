function Main() {
    return (
    	<div className="home">
	    	<div className="container">
	    		<div className="row">
		    		<div className="col-xxl-12 d-flex justify-content-evenly">
				        <div>
					        <a className="btn btn-primary" role="button" href="/create">Создать note</a>
				        </div>
				        <div>
				        	<a className="btn btn-primary" role="button" href="/note">Просмотреть note</a>
				        </div>
		    		</div>
	    		</div>

	    	</div>
	    	<div className="container acrticle">
	    		<div className="row">
	    			<div className="col-xxl-12">
	    				<p><b>ShareNotes</b> - сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее посмотреть.</p>
	    				<p>Как сделать заметку?</p>
	    				<ul>
	    					<li>Пройдите по ссылке</li>
	    					<li>Вставьте текст и нажмите Create</li>
	    					<li>Отправьте сгенерированный адрес другу!</li>
	    				</ul>
	    				<p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
	    			</div>
	    		</div>
	    	</div>	
        </div>
    );
}

export default Main;