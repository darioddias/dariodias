<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dario Dias - Personal Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 40px;
            padding: 20px;
            line-height: 1.6;
        }
        h1, h2 {
            color: #58a6ff;
        }
        a {
            color: #58a6ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: #161b22;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(88, 166, 255, 0.2);
        }
        .code {
            background: #21262d;
            padding: 10px;
            border-radius: 5px;
            font-family: "Courier New", monospace;
            overflow-x: auto;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>🌐 Dario Dias - Personal Website</h1>

        <p>
            Hey, this is my own little portfolio/website that I am messing around with.  
            I made this with <b>React.js</b> and <b>Vite.js</b>.  
            I'm hosting it through GitHub Pages with my own domain.  
        </p>

        <p>
            It's been pretty fun relearning and testing new UI and frontend mechanics,  
            and I hope to expand on this further.  
        </p>

        <p>
            I'm going to be updating it as I learn more cool things, but this is just the start!  
        </p>

        <p><b>Hope you enjoy! :p</b></p>

        <hr>

        <h2>📂 Project Structure</h2>
        <pre class="code">
/src
 ├── components
 │   ├── Header.tsx   # Navbar & site navigation
 │   ├── Footer.tsx   # Footer with contact info
 │   ├── App.tsx      # Main application layout
 │
 ├── styles
 │   ├── index.css    # Main styling file
 │
 ├── assets           # Static images & icons
 │
 ├── main.tsx         # React entry point
        </pre>

        <h2>🚀 Getting Started</h2>
        <p>To run this project locally, follow these steps:</p>

        <h3>1️⃣ Clone the Repository</h3>
        <pre class="code">git clone https://github.com/darioddias/dariodias
cd dariodias</pre>

        <h3>2️⃣ Install Dependencies</h3>
        <pre class="code">npm install</pre>

        <h3>3️⃣ Start the Development Server</h3>
        <pre class="code">npm run dev</pre>

        <h3>4️⃣ Build for Production</h3>
        <pre class="code">npm run build</pre>

        <hr>

        <h2>📬 Contact Me</h2>
        <p>
            💼 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/dario-dias" target="_blank">Dario Dias</a><br>
            📧 <b>Email:</b> <a href="mailto:dariokdias@gmail.com">dariokdias@gmail.com</a><br>
            🖥️ <b>Website:</b> <a href="https://dariodias.xyz" target="_blank">dariodias.xyz</a>
        </p>

    </div>

</body>
</html>
