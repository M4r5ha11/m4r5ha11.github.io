switch (errType) {
    case 'missingRootElem':
        fiple.render(
            pages.missingRootElem,
            { component: 'errPage' },
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
        fiple.render(pages.docsHome, { component: 'docsHome' });
        break;

    default:
        fiple.render(
            pages.notfound,
            { component: '404' },
            props = { err: errType }
        );
        break;
}

