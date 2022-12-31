function getbooks(){
    document.getElementById("content").style.display="none";
    var loadingState = document.getElementsByClassName("ring")[0];
    console.log(loadingState);
    loadingState.style.display = "block";

    document.getElementById("output").innerHTML="";
    var bookName = document.getElementById("input").value;
    
    document.getElementById('book_details').style.display = "none";
    bookName = bookName.split(" ").join("+");
    console.log(bookName);
    fetch("https://openlibrary.org/search.json?q="+bookName)
    .then(a => a.json())
    .then(response =>{

        loadingState.style.display = "none";

        for ( var i=0 ; i<10; i++)
        {
            var firstdiv=document.createElement('div');
            firstdiv.className="maindiv";

            var inputElement = document.createElement('div');
            inputElement.className = 'style2';
            inputElement.id = i+"";
            inputElement.innerHTML = "<h2>"+response.docs[i].title+"</h2>"+"<p> Author Name : "+response.docs[i].author_name+"<br>First Edition : "+response.docs[i].publish_year[0]+"</p>"

            var buttonElement = document.createElement('button');
            buttonElement.id = response.docs[i].key;
            buttonElement.textContent = "Description";
            buttonElement.addEventListener('click', function(e){
                call(response.docs.find((ele) => ele.key == e.target.id));
            });
            inputElement.appendChild(buttonElement);

            var redirectElement = document.createElement('a');
            redirectElement.href = "https://openlibrary.org" + response.docs[i].key;
            redirectElement.textContent = "Read E-book";
            inputElement.appendChild(redirectElement);

            var url =  "https://covers.openlibrary.org/b/id/"+response.docs[i].cover_i+"-M.jpg"
            var imageElement = document.createElement('img');
            imageElement.className="coverimage";
            imageElement.src = url;
            console.log(url);
            
            firstdiv.append(imageElement);
            firstdiv.append(inputElement);            
            document.getElementById("output").appendChild(firstdiv);
        }
        document.getElementById('output').style.display = "block";
        console.log(response.docs);
    } )
}

function call(data){
    var loadingState = document.getElementsByClassName("ring")[0];
    document.getElementById('output').style.display = "none";
    var parent = document.getElementById('book_details');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    document.getElementById('book_details').style.display = "block";

    loadingState.style.display = "block";

    // description 
    var url = "https://openlibrary.org"+data.key+".json";
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        
        loadingState.style.display = "none";
        if('description' in res){
            if('value' in res.description){
                var data = document.createElement('div');
                data.className = "styling";
                data.innerHTML ="<h3>Book description</h3><br>"+ res.description.value;
                document.getElementById('book_details').appendChild(data);
            }
            else{
                var data = document.createElement('div');
                data.innerHTML = res.description;
                document.getElementById('book_details').appendChild(data);
            }
        }
        else{
            var data = document.createElement('div');
            data.textContent = "No details available";
            document.getElementById('book_details').appendChild(data);
        }
    })
    .catch(e => {
        var data = document.createElement('div');
        data.textContent = "No details available";
        document.getElementById('book_details').appendChild(data);
    })  

}
