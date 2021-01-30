document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#fullArticle h2, #fullArticle h3, #fullArticle h4').forEach($heading => {

        // @link https://attacomsian.com/blog/deep-anchor-links-javascript

        // create id from heading text
        var id = $heading.getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');

        // add id to heading
        $heading.setAttribute('id', id);

        // append parent class to heading
        $heading.classList.add('anchor-heading');

        // create anchor for heading
        $anchor = document.createElement('a');
        $anchor.className = 'anchor-link';
        $anchor.href = '#' + id;
        $anchor.innerText = $heading.innerText;

        // create anchor for toc and append to #toc
        $tocLink = document.createElement('a');

        if ($heading.tagName === 'H4') {
            $tocLink.className = 'ml-8';
        } else if ($heading.tagName === 'H3') {
            $tocLink.className = 'ml-4';
        } else {
            $tocLink.className = 'ml-0 ';
        }

        $tocLink.href = '#' + id;
        $tocLink.innerText = $heading.innerText;
        document.getElementById('toc').appendChild($tocLink);

        // remove inner text from heading
        $heading.innerText = '';

        // append anchor after heading text
        $heading.appendChild($anchor);
    });

    if (document.getElementById('toc').childNodes.length === 0) {
        document.getElementById('tocWrapper').classList.add('hidden');
    }
}, false);