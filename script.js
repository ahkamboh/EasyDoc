const editor = CodeMirror(document.getElementById("editor"), {
    mode: "markdown",
    theme: "3024-night", // Default theme
    lineNumbers: true,
    lineWrapping: true,
    autoCloseBrackets: true,
    matchBrackets: true,
  });
  const initialContent =
    "# Hello, Markdown World!\nThis is a default content.\n- Ali Hamza Kamboh \n# Markdown2PDF \n[https://EasyDoc.alihamzakamboh.com/](https://EasyDoc.alihamzakamboh.com/)\n> Awesome Markdown to PDF!\n```diff\n- Online? Upload resume.md to stranger server?\n+ Try Offline Web App!\n```\n\n## How to use md2pdf?\n1. Click button choose `.md` file.\n2. Edit in editor (left panel).\n3. Click **Transform**!\n4. Switch 'Destination' to **Save as PDF**.\n4. **Chrome recommended**\n\n## Tips\n- `Resize` the layout what you want.\n- After click `Transform` button, inverse the checkbox of **'Headers and Footers'**. \n- **反選頁首與頁尾**.\n\n## What's special?\n## Profile \n- Github: [@ahkamboh](https://github.com/ahkamboh)\n- Project: md2pdf (Markdown2PDF)\n- What about me: ☕ 、 👨🏻‍💻️、 🍕、 🎞️\n## Code Like this\n```javascript\n// index.js\n function Hello(){\nconsole.log('World!'}\nHello();\n```";
  editor.setValue(initialContent);

  const converter = new showdown.Converter();

  // Function to update preview
  function updatePreview() {
    const markdownText = editor.getValue();
    const htmlText = converter.makeHtml(markdownText);
    document.getElementById("output").innerHTML = htmlText;
    Prism.highlightAll();
  }

  // Listen for 'change' event in CodeMirror and call updatePreview
  editor.on("change", updatePreview);
  window.addEventListener("load", () => {
    updatePreview();
  });

  // Function to change CodeMirror theme dynamically
  function changeTheme() {
    const theme = document.getElementById("themeSelector").value;
    editor.setOption("theme", theme);
    preview.classList.remove(...preview.classList);
    preview.classList.add(theme);
  }

  function downloadPDF() {
    updatePreview();
    const element = document.getElementById("output");
    // Create PDF using html2pdf
    html2pdf(element, {
      margin: 10,
      filename: "output.pdf",
      image: { type: "png", quality: 10 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  }
  let profileCard = document.querySelector(".profile-card");
  document.querySelector(".circle-1").addEventListener("click", () => {
    profileCard.style.display = "grid";
    document.body.style.overflow = "hidden";
  });
  profileCard.addEventListener("click", () => {
    profileCard.style.display = "none";
    document.body.style.overflow = " visible";
  });

  let output = document.querySelector("#preview");
  let ide = document.querySelector("#editor");
  let previewBtnName = document.querySelector("#previewBtnName");
  document.querySelector(".previewBtn").addEventListener("click", () => {
    ide.classList.toggle("hiddenIde");
    if (output.style.display === "grid") {
      output.style.display = "none";
      previewBtnName.textContent = "Preview";
    } else {
      output.style.display = "grid";
      previewBtnName.textContent = "Go Back";
    }
  });

  lucide.createIcons();

  function hideLoader() {
    var loader = document.querySelector(".loader-container");
    if (loader) {
      loader.style.display='none';
    
  }
}


window.addEventListener("load", function() {
    setTimeout(hideLoader, 7000);
  } );
  