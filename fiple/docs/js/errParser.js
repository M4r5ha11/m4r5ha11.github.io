const errType = new URLSearchParams(window.location.search).get('article');

switch (errType) {
    case 'missingRootElem':
        fiple.render(
            pages.missingRootElem,
            { component: 'errPage' },
            props = { err: errType }
        );
        break;

    case 'inlineStyles':
        fiple.render(
            pages.inlineStyles,
            { component: 'article' },
            props = { err: errType }
        );
        break;

    case 'elemEvents':
        fiple.render(
            pages.elemEvents,
            { component: 'article' },
            props = { err: errType }
        );
        break;

    case 'addingClassesToElem':
        fiple.render(
            pages.addingClassesToElem,
            { component: 'article' },
            props = { err: errType }
        );
        break;

    case 'templating':
        fiple.render(
            pages.templating,
            { component: 'article' },
            props = { err: errType }
        );
        break;

    case 'elemId':
        fiple.render(
            pages.elemId,
            { component: 'article' },
            props = { err: errType }
        );
        break;

    case 'RtreeEmpty':
        fiple.render(
            pages.RtreeEmpty,
            { component: 'errPage' },
            props = { err: errType }
        );
        break;


    case null:
        fiple.render(
            pages.docsHome,
            { component: 'docsHome' },
            props = false
        ).then(fetchArticles());
        break;

    default:
        fiple.render(
            pages.notfound,
            { component: '404' },
            props = { err: errType }
        );
        break;
}

