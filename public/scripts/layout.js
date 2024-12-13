//credit to petrapixel <3
document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains('no-layout')) return;

    document.body.insertAdjacentHTML('afterbegin', headerEl);
    document.body.insertAdjacentHTML('beforeend', footerEl);

    initActiveLinks();
});

function initActiveLinks() {

    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el.getAttribute('href').replace('.html','').replace('/public','');

        if (pathname =='/') {
            if (elHref == '/' || elHref == '/index.html') el.classList.add('active');
        } else {
            if (window.location.href.includes(elHref)) el.classList.add('active');
        }
    });
}

function getNestingString() {
    const currentUrl = window.location.href.replace('http://', '').replace('https://', '').replace('/public/', '/');
    const numberOfSlashes = currentUrl.split('/').length - 1;
    if (numberOfSlashes == 1) return '.';
    if (numberOfSlashes == 2) return '..';
    return '..' + '/..'.repeat(numberOfSlashes - 2);
}

const nesting = getNestingString();

const headerEl = `
<header>
<h1 id="site-title"><a href="${nesting}/index.html">t'svai's place</a></h1>
</header>
<nav id="navigation" class="navigation">
<ul>
    <li><a href="${nesting}/about.html">about</a></li>
    <li><a href="${nesting}/misc/index.html">misc</a></li>
    <li><a href="${nesting}/blog/index.html">blog</a></li>
    <li><a href="${nesting}/collections/index.html">collections</a></li>
    <li><a href="${nesting}/links.html">links</a></li>
</ul>
</nav>
`;

const footerEl = `
<footer><a href="https://www.neocities.org/site/tsvai">to my neocities profile</a></footer>
`;
