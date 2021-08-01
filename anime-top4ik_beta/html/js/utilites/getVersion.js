function getComponentVer(Component) {
    if (Component == null || undefined) return console.error('In function argument enter component name (component name must have String type).');
    // if (!allComponents[0]) return console.error('Not found this component.');
    switch (Component) {
        case 'website':
           console.log(`Website version: ${allComponents.website.ver}`);
        break;
        case 'bootstrap':
            console.log(`Bootstrap version: ${allComponents.bootstrap.ver}`);
        break;
        case 'angularjs':
            console.log(`Angular.JS version: ${allComponents.angularjs.ver}`)
        break;
    }
}