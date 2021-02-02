document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#fullArticle > h2, #fullArticle > h3, #fullArticle > h4, #fullArticle > h5').forEach($heading => {

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

        if ($heading.tagName === 'H5') {
            $tocLink.className = 'h5';
        } else if ($heading.tagName === 'H4') {
            $tocLink.className = 'h4';
        } else if ($heading.tagName === 'H3') {
            $tocLink.className = 'h3';
        } else {
            $tocLink.className = 'h2';
        }

        $tocLink.href = '#' + id;
        $tocLink.innerText = $heading.innerText;
        document.getElementById('toc').appendChild($tocLink);

        // remove inner text from heading
        $heading.innerText = '';

        // append anchor after heading text
        $heading.appendChild($anchor);
    });

    if (document.getElementById('toc')) {
        if (document.getElementById('toc').hasChildNodes()) {
            $label = document.createElement('div');
            $label.className = 'label';
            $label.innerText = 'On this page';
            document.getElementById('toc').prepend($label);
        } else {
            document.getElementById('toc').remove();
        }
    }
}, false);