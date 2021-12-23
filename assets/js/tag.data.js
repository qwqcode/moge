;(function() {
    const tagName = getQueryParam('name')
    const search = getQueryParam('search')
    const isSearchMode = !!search
    if (!tagName && !search) return

    // 标题
    const $title = document.querySelector('.tag-header .title')
    const title = !isSearchMode ? `图书标签: ${tagName}` : `搜索：${search}`
    $title.innerText = title
    document.title = `${title} | 墨鸽读书`
    if (isSearchMode) document.querySelector('.search input').value = search

    // 图书列表
    const $tagBooks = document.querySelector('.tag-books')
    const $tpl = $tagBooks.querySelector('.book-item').cloneNode(true)

    // 数据获取
    let data = rangeArray(derangedArray(BOOKS), 10)
    if (isSearchMode) {
        data = BOOKS.filter(b => (
            b.name.includes(search) || b.desc.includes(search) ||
            b.press.includes(search) || b.author.includes(search)
        ))
    }

    $tagBooks.innerHTML = ''
    data.forEach((book) => {
        const $booItem = $tpl.cloneNode(true)
        const $coverImg = $booItem.querySelector('.cover img')
        const $coverLink = $booItem.querySelector('.cover')
        const $name = $booItem.querySelector('.name')
        const $meta = $booItem.querySelector('.meta')
        const $score = $booItem.querySelector('.score')
        const $iconStars = $booItem.querySelector('.icon-stars')
        const $desc = $booItem.querySelector('.desc')

        // 图片
        $coverImg.src = './assets/img/books/'+encodeURIComponent(book.name)+'.jpg'
        
        // 书名
        $name.innerText = book.name

        // 信息
        $meta.innerText = `${book.author} / ${book.press} / ${book.pressYear} / ${book.price}`
        
        // 评分
        $score.innerText = book.score
        $iconStars.classList.add(`stars-${book.star}`)
        
        // 简介
        $desc.innerText = book.desc.replaceAll('\n', '').substring(0, 100) + '...'

        // 链接
        $name.href = './book.html?name='+encodeURIComponent(book.name)
        $coverLink.href = './book.html?name='+encodeURIComponent(book.name)
        
        $tagBooks.append($booItem)
    })
    
    // 数据为空提示
    if (!data.length) {
        $tagBooks.innerHTML = '(未找到任何相关书籍)'
        document.querySelector('.pagination-bar').remove()
    }
})()
