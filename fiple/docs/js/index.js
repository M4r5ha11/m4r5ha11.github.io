fiple.root = document.getElementById('approot');

const pages = {
    missingRootElem: [
        {
            elem: 'h1',
            content: `fiple.js docs: "<%err%>" error`,
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
        You need just provide an root element.
        <br>
        <code>fiple.root = document.getElementById('elem');</code>
        <br>
        or
        <br>
        <code>fiple.root = document.querySelector('.elem');</code>`,
            class: ['desc']
        }],
    RtreeEmpty: [
        {
            elem: 'h1',
            content: 'fiple.js docs: "<%err%>" error',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            When we use <code>fiple.render()</code> function,
            we must define a "Render Tree" (elements to render).
            <br>
            If render tree is empty, fiple.js can't render anything and returns an error.
            <br>
            <b>Example of bad code:</b>
            <br>
            <code>
            <pre>fiple.render([], ...);\n// or \nfiple.render([{}], ...);</pre>
            </code>`,
            class: ['desc']
        }
    ],
    inlineStyles: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Inline styling for elements',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            Inline styling in HTML looks like this: <code><pre>element style=""</pre></code>
            <br>
            <p>But how to inline styles in fiple.js? Here's example:</p>
            <br>
            <code>
            <pre>
fiple.render(
...
style: {
    color: '#333',
    paddingLeft: '6px'
  }
);
            </pre>
            </code>
            <p>Every CSS rule, that contain "-" in it's name<br>transforms just like this:
            <b>"margin-top" -> "marginTop"</b></p>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=addingClassesToElem">Adding classes to element</a>
            <br>
            <a href="?article=elemEvents">Element events</a>`,
            class: ['desc']
        }
    ],
    elemId: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Element ID',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            ID is unique identifier of element.
            <br>
            <p>Example adding an ID to element:</p>
            <br>
            <code>
            <pre>
fiple.render(
...
id: 'cards'
);
            </pre>
            </code>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=elemEvents">Element events</a>`,
            class: ['desc']
        }
    ],
    templating: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Templating',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            Example of templating in JavaScript: <code>\`hello, \$\{name\}\`</code>
            <br>
            <p>fiple.js using <b>props</b> (properties) like other frameworks (like React and Vue).</p>
            <br>
            <p>To set props, you need add "props" object key at the end of Render Tree:</p>
            <code>
            <pre>
fiple.render(
    [{
    elem: 'div',
    content: 'My name is: <&InvisibleTimes;%name%>'
    }], // render tree
    params = { // this isn't required, you can set it to null
        component: 'homepage'
    },
    props = {
        name: 'Alex'
    }
);
            </pre>  
            </code>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=elemEvents">Element events</a>`,
            class: ['desc']
        }
    ],
    elemEvents: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Element events',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            <s>So, what is element event?</s>
            <br>
            fiple.js support <b>all</b> JavaScript element events:<br>onclick, onmouseenter, onchange, etc.
            <br>
            <h4>Example adding onclick event:</h4>
            <br>
            <code>
            <pre>
fiple.render(
...
events: {
    click: (event) => {
        console.log('Clicked on ', e.target);
    }
  }
);
            </pre>
            </code>
            <small style="font-size: 10px;">you need just remove "on" from event name i think</small>
            <br>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=templating">Templating (variables in element content)</a>
            <br>
            <a href="?article=elemId">Element ID</a>`,
            class: ['desc']
        }
    ],
    elemEvents: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Element events',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            <s>So, what is element event?</s>
            <br>
            fiple.js support <b>all</b> JavaScript element events:<br>onclick, onmouseenter, onchange, etc.
            <br>
            <h4>Example adding onclick event:</h4>
            <br>
            <code>
            <pre>
fiple.render(
...
events: {
    click: (event) => {
        console.log('Clicked on ', e.target);
    }
  }
);
            </pre>
            </code>
            <small style="font-size: 10px;">you need just remove "on" from event name i think</small>
            <br>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=templating">Templating (variables in element content)</a>
            <br>
            <a href="?article=elemId">Element ID</a>`,
            class: ['desc']
        }
    ],
    addingClassesToElem: [
        {
            elem: 'h1',
            content: 'fiple.js docs: Adding classes to element',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Description:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `
            Want classes, huh?
            Just add "class" object key to your element when rendering:
            <br>
            <code>
            <pre>
fiple.render(
...
    {
        class: ['class1'] // multiple classes: ['class1', 'class2', 'class3']
    }
);
            </pre>
            </code>
            <br>
            <h4>Related articles:</h4>
            <a href="?article=inlineStyles">Inline styles for elements</a>
            <br>
            <a href="?article=elemId">Element ID</a>`,
            class: ['desc']
        }
    ],
    notfound: [
        {
            elem: 'h1',
            content: 'Article "<%err%>" not found.',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Check your link and try again.',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            content: `<a href="/fiple/docs/">To home</a>`,
            class: ['desc']
        }
    ],
    docsHome: [
        {
            elem: 'h1',
            content: 'Welcome to fiple.js documentation!',
            class: ['heading']
        },
        {
            elem: 'h3',
            content: 'Available articles:',
            class: ['errdesctitle']
        },
        {
            elem: 'div',
            id: 'articles',
            class: ['desc']
        }
    ]
}

async function fetchArticles() {
    const articleContainer = document.getElementById('articles') || {};

    fetch('articles.json')
        .then(res => res.json())
        .then(json =>
            Object.entries(json)
                .forEach(article =>
                    articleContainer
                        .innerHTML += `<div><a class="article-link" href="${article[1].link}">${article[1].title}</a></div><br>`
                )
        );
}