function addSidebarIcon(sidebar, image)
		{
			
			
			// Creates the image which is used as the sidebar icon (drag source)
			var img = document.createElement('img');
			img.setAttribute('src', 'assets/images/earth.png');	
			img.style.width = '48px';
			img.style.height = '48px';
			img.title = 'Drag this to the diagram to create a new vertex';
			sidebar.appendChild(img);
			
			var dragElt = document.createElement('div');
			dragElt.style.border = 'dashed black 1px';
			dragElt.style.width = '120px';
			dragElt.style.height = '120px';
			  					
			// // Creates the image which is used as the drag icon (preview)
			// var ds = mxUtils.makeDraggable(img, graph, funct, dragElt, 0, 0, true, true);
			// ds.setGuidesEnabled(true);
		};

function addIcon(image, width, height){
	
}