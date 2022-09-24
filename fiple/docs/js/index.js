const errType = new URLSearchParams(document.location.search).get('article');
fiple.root = document.getElementById('approot');

function fetchArticles() {
    fetch('articles.json')
        .then(res => res.json())
        .then(json =>
            Object.entries(json)
                .forEach(article =>
                    document.getElementById('articles')
                        .innerHTML += `<a href="${article[1].link}" class="article-link">${article[1].title}</a><br>`
                )
        );
}

fetchArticles();

const pages = {
    missingRootElem: [
        {
            elem: 'h1',
            content: `fiple.js docs: "{err}" error`,
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
        <code>
        fiple.root = document.getElementById('elem');
        </code>
        <br>
        or
        <br>
        <code>
        fiple.root = document.querySelector('.elem');
        </code>`,
            class: ['desc']
        }],
    RtreeEmpty: [
        {
            elem: 'h1',
            content: `fiple.js docs: "{err}" error`,
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
            we must define a "Render Tree" (objects to render).
            <br>
            If render tree is empty, fiple.js can't render anything and returns an error.
            <br>
            <b>Example of bad code:</b>
            <br>
            <code>
            <pre>
            fiple.render([], ...);
            // or
            fiple.render([{}], ...);
            </pre>
            </code>
            `,
            class: ['desc']
        }
    ],
    notfound: [
        {
            elem: 'h1',
            content: 'Page "{err}" not found.',
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
            content: '',
            class: ['desc']
        }
    ]
}
