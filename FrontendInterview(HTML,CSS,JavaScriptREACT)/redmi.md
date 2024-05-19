Q-1 What is HTML?

Answer: HTML (HyperText Markup Language) is the standard language for creating and designing web pages and web applications. It uses a series of elements or tags to structure content on the web.
Example:-
<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML page.</p>
</body>
</html>

<------------------------------------------->
Q-2 What are HTML elements and tags?

Answer: HTML elements are the building blocks of HTML. They consist of a start tag, content, and an end tag. Tags are the code within angle brackets that define elements.
Example:-
<p>This is a paragraph.</p>

<------------------------------------------->

Q-3 What is the difference between HTML and XHTML?

Answer: HTML is more lenient and flexible in its syntax, while XHTML is stricter and must follow XML rules. XHTML documents must be well-formed.
Example: In XHTML, all tags must be closed.
<br />

<------------------------------------------->

Q4-What is a semantic HTML element?

Answer: Semantic HTML elements clearly describe their meaning in a human- and machine-readable way.
Examples:- <nav> ,<main> ,<article>, <section>, <header>, and <footer>.
<article>
  <h2>Article Title</h2>
  <p>This is an article.</p>
</article>

<------------------------------------------->

Q5-What are void elements in HTML?

Answer: Void elements are HTML elements that do not have closing tags and cannot contain any content.
Example:-<img src="image.jpg" alt="Sample Image">

<------------------------------------------->

Q6-What is the purpose of the <DOCTYPE> declaration?

Answer: The <!DOCTYPE> declaration informs the browser about the version of HTML the page is written in, ensuring proper rendering.
<!DOCTYPE html>
<------------------------------------------->

Q7-How do you create a hyperlink in HTML?

Answer: Use the <a> tag with the href attribute to create a hyperlink.
Example:-<a href="https://www.example.com">Visit Example</a>

<------------------------------------------->

Q-8 What is the difference between <div> and <span>?

Answer: <div> is a block-level element used to group larger sections of content, whereas <span> is an inline element used to group smaller pieces of content.
Example: <div>
  <h1>Title</h1>
  <p>Paragraph</p>
</div>
<p>This is <span>inline text</span> within a paragraph.</p>

<------------------------------------------->

Q-9 How do you include comments in HTML?

Answer: Comments are included in HTML using the <!-- and --> tags.
Example:
<!-- This is a comment -->
<------------------------------------------->

Q-10 What are data- attributes in HTML5?*
Answer: data-* attributes are used to store custom data private to the page or application. They are intended for use with JavaScript.
Example:
<div data-id="12345">Some content</div>
<------------------------------------------->
Q-11 What is the purpose of the <meta> tag in HTML?

Answer: The <meta> tag provides metadata about the HTML document, such as character set, author, description, keywords, and viewport settings.
Example:-
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<------------------------------------------->

Q-12 What are the new form elements introduced in HTML5?

Answer: HTML5 introduced new form elements like <input type="email">, <input type="url">, <input type="number">, <input type="range">, <input type="date">, <input type="color">, etc.
Example:
<input type="email" placeholder="Enter your email">
<input type="number" placeholder="Enter your mobile">

<------------------------------------------->

Q-13 How do you create a table in HTML?
Answer: Use the <table> tag along with <tr> (table row), <th> (table header), and <td> (table data) tags.
Example:
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>25</td>
  </tr>
</table>
<------------------------------------------->

Q-14 What is the use of the <iframe> tag?

Answer: The <iframe> tag is used to embed another HTML document within the current document.
Example:
<iframe src="https://www.example.com" width="600" height="400"></iframe>

<------------------------------------------->

Q-15 How do you embed audio and video in HTML5?

Answer: Use the <audio> and <video> tags to embed audio and video files.
Example:
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
<video controls width="600">
  <source src="videofile.mp4" type="video/mp4">
</video>

<------------------------------------------->

Q-16 What is the <canvas> element used for in HTML5?
Answer: The <canvas> element is used to draw graphics on the web page using JavaScript.
Example:
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.fillStyle = 'blue';
  context.fillRect(10, 10, 150, 75);
</script>
<------------------------------------------->

Q-17 What is the purpose of the <link> tag?
Answer: The <link> tag is used to link external resources like stylesheets to the HTML document.
Example:
<link rel="stylesheet" href="styles.css">

<------------------------------------------->

Q-18 How do you create a dropdown list in HTML?
Answer: Use the <select> tag along with <option> tags to create a dropdown list.
Example:
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<------------------------------------------->

Q-19 What are the different types of lists in HTML?

Answer: There are three types of lists in HTML: ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>).
Example:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
<dl>
  <dt>Term 1</dt>
  <dd>Description 1</dd>
  <dt>Term 2</dt>
  <dd>Description 2</dd>
</dl>
<------------------------------------------->

Q-20 How do you use the <form> element in HTML?

Answer: The <form> element is used to create an HTML form for user input. It can contain various form elements like input fields, buttons, checkboxes, and radio buttons.
Example:
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <input type="submit" value="Submit">
</form>