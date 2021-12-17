// 热们书籍
function renderNewBooks() {
    const $newBooks = document.querySelector('.new-books')
    const $tpl = $newBooks.querySelector('.book-item').cloneNode(true)
    
    $newBooks.innerHTML = ''

    derangedArray(BOOKS).forEach((book) => {
        const $booItem = $tpl.cloneNode(true)
        const $coverImg = $booItem.querySelector('.cover img')
        const $name = $booItem.querySelector('.name')
        const $author = $booItem.querySelector('.author')

        // 图片
        $coverImg.src = './assets/img/books/'+encodeURIComponent(book.name)+'.jpg'
        
        // 书名
        $name.innerText = book.name
        $name.title = book.name

        // 作者
        $author.innerText = book.author
        $author.title = book.author
        
        $newBooks.append($booItem)
    })
}

renderNewBooks()

;(function() {
    // 分页条
    const $pagination = document.querySelector('.new-books-pagination')
    const $prev = $pagination.querySelector('.prev')
    const $next = $pagination.querySelector('.next')
    const $dots = $pagination.querySelectorAll('.dot')
    const setActive = (pos) => {
        $dots.forEach((e, index) => {
            if (index === pos) e.classList.add('active')
            else e.classList.remove('active')
        })
    }

    let curtPage = 0
    $prev.onclick = () => {
        if (curtPage-1 < 0) curtPage = $dots.length-1
        else curtPage--

        setActive(curtPage)
        renderNewBooks()
    }
    $next.onclick = () => {
        if (curtPage+1 >= $dots.length) curtPage = 0
        else curtPage++
        
        setActive(curtPage)
        renderNewBooks()
    }
})()

// 最受关注的图书榜
;(function() {
    const $popularBooks = document.querySelector('.popular-books')
    const $tpl = $popularBooks.querySelector('.book-item').cloneNode(true)

    $popularBooks.innerHTML = ''
    
    rangeArray(BOOKS, 8).forEach((book) => {
        const $booItem = $tpl.cloneNode(true)
        const $coverImg = $booItem.querySelector('.cover img')
        const $name = $booItem.querySelector('.name')
        const $author = $booItem.querySelector('.author')

        // 图片
        $coverImg.src = './assets/img/books/'+encodeURIComponent(book.name)+'.jpg'
        
        // 书名
        $name.innerText = book.name

        // 作者
        $author.innerText = book.author
        
        $popularBooks.append($booItem)
    })
})()

// 热门标签
;(function() {
    const $bookTags = document.querySelector('.book-tags')
    const $tpl = $bookTags.querySelector('.tag-grp').cloneNode(true)

    $bookTags.innerHTML = ''

    Object.entries(TAGS).forEach(([grpName, tags]) => {
        const $tagGrp = $tpl.cloneNode(true)
        const $title = $tagGrp.querySelector('.title')
        const $tags = $tagGrp.querySelector('.tags')

        $title.innerText = grpName

        $tags.innerHTML = ''
        tags.forEach((t) => {
            const $a = document.createElement('a')
            $a.href = '#'
            $a.innerText = t
            $tags.append($a)
        })
        $tags.innerHTML += '<a href="#" class="more">更多»</a>'

        $bookTags.append($tagGrp)
    })
})()

// 畅销图书榜
;(function() {
    const $topBooks = document.querySelector('.top-books')
    const $tpl = $topBooks.querySelector('.book-item').cloneNode(true)
    
    $topBooks.innerHTML = ''

    rangeArray(BOOKS, 8).forEach((book, index) => {
        const $bookItem = $tpl.cloneNode(true)
        const $rank = $bookItem.querySelector('.rank')
        const $name = $bookItem.querySelector('.name')
        const $author = $bookItem.querySelector('.author')
        
        $rank.innerText = `${index+1}.`
        $name.innerText = book.name
        $author.innerText = book.author

        $topBooks.append($bookItem)
    })
})()
